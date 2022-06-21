import React from "react";
import { Box } from "@mui/material";
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
          flexDirection: "column",
          alignSelf: "center",
          width: "50%",
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
      <CategoryTabs tabs={tabs} setTabs={setTabs} />
    </Box>
  );
};

export default TableForm;
