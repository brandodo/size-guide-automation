import React, { useState } from "react";
import { Box, TextField, Button, Tab, Tabs } from "@mui/material";
import TabPanel from "./TabPanel";

const CategoryTabs = ({ tabs, convert, setTabs, french }) => {
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
          value={french ? tab.tabnameFR : tab.tabnameEN}
          sx={{ width: "70%", margin: 2 }}
          onChange={(e) => {
            const temp = [...tabs];
            french
              ? (temp[index].tabnameFR = e.target.value)
              : (temp[index].tabnameEN = e.target.value);

            setTabs(temp);
          }}
        />
        <Tab
          label={french ? tab.tabnameFR : tab.tabnameEN}
          value={index}
          onClick={() => setCurrentTab(index)}
        />
      </Box>
    );
  });

  const updateTableName = (input, index, tableIndex) => {
    const temp = [...tabs];

    temp[index].tables[tableIndex].header = input;
    setTabs(temp);
  };

  const addTable = (tabIndex) => {
    const temp = [...tabs];

    temp[tabIndex].tables.push({
      header: "",
      rowsInches: [[]],
      rowsCenti: [[]],
    });

    setTabs(temp);
  };

  const removeTable = (tabIndex) => {
    const temp = [...tabs];

    temp[tabIndex].tables.pop();

    setTabs(temp);
  };

  const updateInches = (input, tabIndex, tableIndex) => {
    const temp = [...tabs];
    const cells = input.split("\n").map((row) => row.split("\t"));
    console.log(cells);

    temp[tabIndex].tables[tableIndex].rowsInches = cells;

    setTabs(temp);
  };

  const updateCenti = (input, tabIndex, tableIndex) => {
    const temp = [...tabs];
    const cells = input.split("\n").map((row) => row.split("\t"));
    console.log(cells);

    temp[tabIndex].tables[tableIndex].rowsCenti = cells;

    setTabs(temp);
  };

  const tabPanel = tabs.map((tab, index) => {
    return (
      <TabPanel
        key={`tabpanel-${index}`}
        value={currentTab}
        index={index}
        convert={convert}
        data={tab}
        addTable={addTable}
        removeTable={removeTable}
        updateInches={updateInches}
        updateCenti={updateCenti}
        updateTableName={updateTableName}
      >
        {french ? tab.tabnameFR : tab.tabnameEN}
      </TabPanel>
    );
  });

  const addTab = () => {
    const temp = [...tabs];
    const tempLen = temp.length;

    temp.push({
      tabnameFR: `TAB ${tempLen + 1}`,
      tabnameEN: `TAB ${tempLen + 1}`,
      tables: [{ header: "", rowsInches: [[]], rowsCenti: [[]] }],
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
