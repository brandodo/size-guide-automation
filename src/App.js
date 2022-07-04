import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import TableForm from "./components/TableForm/TableForm";
import Actions from "./components/Actions/Actions";
import EditAlert from "./components/EditAlert/EditAlert";

const App = () => {
  const [pim, setPim] = useState("");
  const [header, setHeader] = useState("Size Guide");
  const [subHeader, setSubHeader] = useState("BRAND NAME");
  const [toggle, setToggle] = useState(false);
  const [convert, setConvert] = useState(false);
  const [french, setFrench] = useState(false);
  const [tabs, setTabs] = useState([
    {
      tabnameEN: "TAB 1",
      tabnameFR: "TAB 1",
      tables: [
        {
          header: "",
          rowsInches: [[]],
          rowsCenti: [[]],
        },
      ],
    },
  ]);

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Typography variant="h2" sx={{ p: 3, textAlign: "center" }}>
        Size Guide Generator
      </Typography>
      <Typography
        variant="p"
        sx={{
          p: 2,
          textAlign: "left",
          width: "50%",
          alignSelf: "center",
          backgroundColor: "lightgrey",
          borderRadius: "10px",
          boxShadow: "3px 3px 5px black",
        }}
      >
        Use this form to generate your brand specific size guides by following
        the prompts below. You may use the toggles below based on your specific
        requirements.
      </Typography>
      <TableForm
        pim={pim}
        header={header}
        subHeader={subHeader}
        toggle={toggle}
        convert={convert}
        french={french}
        tabs={tabs}
        setPim={setPim}
        setHeader={setHeader}
        setSubHeader={setSubHeader}
        setToggle={setToggle}
        setConvert={setConvert}
        setFrench={setFrench}
        setTabs={setTabs}
      />
      <Actions
        pim={pim}
        toggle={toggle}
        header={header}
        subHeader={subHeader}
        french={french}
        tabs={tabs}
        convert={convert}
      />
      <EditAlert toggle={french} />
    </Box>
  );
};

export default App;
