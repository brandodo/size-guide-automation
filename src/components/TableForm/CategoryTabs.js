import React, { useState } from "react";
import { Box, TextField, Button, Tab, Tabs } from "@mui/material";
import TabPanel from "./TabPanel";

const CategoryTabs = ({ tabs, setTabs }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabInput = tabs.map((tab, index) => {
    return (
      <Box
        key={`tab-${index}`}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          required
          id="filled-basic"
          label={`tab-${index + 1} name`}
          variant="filled"
          value={tab.tabname}
          sx={{ width: "70%", margin: 2 }}
          onChange={(e) => {
            const temp = [...tabs];
            temp[index].tabname = e.target.value;

            setTabs(temp);
          }}
        />
        <Tab
          label={tab.tabname}
          value={index}
          onClick={() => setCurrentTab(index)}
        />
      </Box>
    );
  });

  const addRow = (tabIndex) => {
    const temp = [...tabs];
    temp[tabIndex].rows.push(["S", "1", "2", "3"]);

    setTabs(temp);
  };

  const removeRow = (tabIndex) => {
    const temp = [...tabs];
    temp[tabIndex].rows.pop();

    setTabs(temp);
  };

  const updateRows = (input, tabIndex, rowIndex) => {
    const temp = [...tabs];
    temp[tabIndex].rows[rowIndex] = input.split(",");

    setTabs(temp);
  };

  const updateTableName = (input, index) => {
    const temp = [...tabs];

    temp[index].header = input;
    setTabs(temp);
  };

  const tabPanel = tabs.map((tab, index) => {
    return (
      <TabPanel
        key={`tabpanel-${index}`}
        value={currentTab}
        index={index}
        rows={tab.rows}
        header={tab.header ? tab.header : ""}
        changeHandler={updateRows}
        updateTableName={updateTableName}
        addRow={addRow}
        removeRow={removeRow}
      >
        {tab.tabname}
      </TabPanel>
    );
  });

  const addTab = () => {
    const temp = [...tabs];
    const tempLen = temp.length;

    temp.push({
      tabname: `TAB ${tempLen + 1}`,
      rows: [
        ["Alpha", "US", "UK", "EU"],
        ["S", "2", "4", "1"],
        ["M", "3", "6", "2"],
        ["L", "4", "8", "3"],
        ["XL", "5", "10", "4"],
      ],
    });
    setTabs(temp);
  };

  const removeTab = () => {
    const temp = [...tabs];
    temp.pop();

    setCurrentTab(0);
    setTabs(temp);
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
        "& button": { m: 1, alignSelf: "center" },
      }}
    >
      <Box component="div" sx={{ marginTop: 2 }}>
        <Button
          variant="contained"
          size="small"
          sx={{ height: 30 }}
          onClick={() => addTab()}
        >
          Add tab
        </Button>
        <Button
          variant="outlined"
          size="small"
          sx={{ height: 30 }}
          onClick={() => removeTab()}
        >
          Remove tab
        </Button>
      </Box>
      <Box
        component="div"
        sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}
      >
        <Tabs value={currentTab}>{tabInput}</Tabs>
      </Box>
      {tabPanel}
    </Box>
  );
};

export default CategoryTabs;
