import React from "react";
import { Box, Typography } from "@mui/material";
import HeaderInput from "./HeaderInput";
import CategoryTabs from "./CategoryTabs";
import SettingToggle from "./SettingToggle";
import MeasureGuide from "./MeasureGuide";

const TableForm = ({
  pim,
  header,
  subHeader,
  toggle,
  convert,
  french,
  tabs,
  general,
  tableGuide,
  setPim,
  setHeader,
  setSubHeader,
  setToggle,
  setConvert,
  setTabs,
  setFrench,
  setGeneral,
  setTableGuide,
  setGeneralGuide,
}) => {
  const updateGuide = (input, index) => {
    const text = input.split("\n").map((row) => {
      if (row.includes(":")) {
        return row.split(":");
      } else {
        return ["", row];
      }
    });

    if (index >= 0) {
      const temp = [...tabs];
      temp[index].measureGuide = [...text];

      setTabs(temp);
    } else {
      setGeneralGuide(text);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center", paddingTop: 4 }}>
        Settings
      </Typography>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignSelf: "center",
          width: "50%",
          padding: "10px 0",
          backgroundColor: "#CCDDE2",
          borderRadius: "8px",
          boxShadow: "3px 3px 5px black",
        }}
      >
        <SettingToggle toggle={french} setToggle={setFrench}>
          French?
        </SettingToggle>
        <SettingToggle toggle={toggle} setToggle={setToggle}>
          More than 6 columns?
        </SettingToggle>
        <SettingToggle toggle={convert} setToggle={setConvert}>
          {french ? "PO/CM Required?" : "IN/CM Required?"}
        </SettingToggle>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: "#CCDDE2",
          borderRadius: "8px",
          width: "50%",
          marginTop: 2,
          boxShadow: "3px 3px 5px black",
          padding: "15px 0",
        }}
      >
        <Typography variant="h5" sx={{ p: 1 }}>
          Measuring Guide
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <SettingToggle toggle={general} setToggle={setGeneral}>
            General
          </SettingToggle>
          <SettingToggle toggle={tableGuide} setToggle={setTableGuide}>
            Table Specific
          </SettingToggle>
        </Box>
      </Box>
      <HeaderInput
        pim={pim}
        header={header}
        subHeader={subHeader}
        setPim={setPim}
        setHeader={setHeader}
        setSubHeader={setSubHeader}
      />
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Tabs
      </Typography>
      <Typography
        variant="p"
        sx={{
          p: 2,
          width: "50%",
          textAlign: "left",
          alignSelf: "center",
          backgroundColor: "#FAF2A1",
          borderRadius: "10px",
          boxShadow: "3px 3px 5px black",
        }}
      >
        Use the below controls to add/remove, and rename your desired tabs. You
        can then navigate through each tab to give your tables a header
        (optional), and modify the table data.
      </Typography>

      <CategoryTabs
        tabs={tabs}
        setTabs={setTabs}
        convert={convert}
        french={french}
        tableGuide={tableGuide}
        updateGuide={updateGuide}
      />

      {general && (
        <Box sx={{ width: "50%", alignSelf: "center" }}>
          <MeasureGuide changeHandler={updateGuide}>
            Measuring Guide (General)
          </MeasureGuide>
        </Box>
      )}
    </Box>
  );
};

export default TableForm;
