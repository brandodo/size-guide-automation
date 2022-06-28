import React from "react";
import { Box, Typography } from "@mui/material";
import HeaderInput from "./HeaderInput";
import CategoryTabs from "./CategoryTabs";
import SettingToggle from "./SettingToggle";

const TableForm = ({
  pim,
  header,
  subHeader,
  toggle,
  convert,
  french,
  tabs,
  setPim,
  setHeader,
  setSubHeader,
  setToggle,
  setConvert,
  setTabs,
  setFrench,
}) => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignSelf: "center",
          width: "50%",
          margin: "10px 0",
        }}
      >
        <SettingToggle toggle={french} setToggle={setFrench}>
          French?
        </SettingToggle>
        <SettingToggle toggle={toggle} setToggle={setToggle}>
          More than 6 columns?
        </SettingToggle>
      </Box>
      <HeaderInput
        pim={pim}
        header={header}
        subHeader={subHeader}
        setPim={setPim}
        setHeader={setHeader}
        setSubHeader={setSubHeader}
      />

      <Typography
        variant="p"
        sx={{
          p: 2,
          width: "50%",
          textAlign: "left",
          alignSelf: "center",
          backgroundColor: "lightgrey",
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
      />
    </Box>
  );
};

export default TableForm;
