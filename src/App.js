import React, { useState } from "react";
import { Box } from "@mui/material";
import CodeText from "./components/CodeText/CodeText";
import TableForm from "./components/TableForm/TableForm";

const App = () => {
  const [header, setHeader] = useState("Size Guide");
  const [subHeader, setSubHeader] = useState("BRAND NAME");
  const [toggle, setToggle] = useState(false);
  const [convert, setConvert] = useState(false);
  const [tabs, setTabs] = useState([
    {
      tabname: "TAB 1",
      rows: [
        ["Alpha", "US", "UK", "EU"],
        ["S", "2", "4", "1"],
        ["M", "3", "6", "2"],
        ["L", "4", "8", "3"],
        ["XL", "5", "10", "4"],
      ],
    },
  ]);

  return (
    <Box
      component="div"
      sx={{ display: "flex", height: "100%", overflow: "hidden" }}
    >
      <TableForm
        header={header}
        subHeader={subHeader}
        toggle={toggle}
        convert={convert}
        tabs={tabs}
        setHeader={setHeader}
        setSubHeader={setSubHeader}
        setToggle={setToggle}
        setConvert={setConvert}
        setTabs={setTabs}
      />
      <CodeText
        toggle={toggle}
        header={header}
        subHeader={subHeader}
        tabs={tabs}
        convert={convert}
      />
    </Box>
  );
};

export default App;
