import React from "react";
import { Box, Typography } from "@mui/material";
import HeaderInput from "./HeaderInput";
import ColumnToggle from "./ColumnToggle";
import CategoryTabs from "./CategoryTabs";
import TabToggle from "./TabToggle";

const TableForm = ({
  header,
  subHeader,
  toggle,
  convert,
  tabs,
  setHeader,
  setSubHeader,
  setToggle,
  setConvert,
  setTabs,
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
        <ColumnToggle toggle={toggle} setToggle={setToggle} />
        <TabToggle convert={convert} setConvert={setConvert} />
      </Box>
      <HeaderInput
        header={header}
        subHeader={subHeader}
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

      <CategoryTabs tabs={tabs} setTabs={setTabs} />
    </Box>
  );
};

export default TableForm;
