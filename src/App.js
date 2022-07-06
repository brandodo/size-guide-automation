import React, { useEffect, useState } from "react";
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
  const [general, setGeneral] = useState(false);
  const [tableGuide, setTableGuide] = useState(false);
  const [generalGuide, setGeneralGuide] = useState([[]]);
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
      measureGuide: [[]],
    },
  ]);

  useEffect(() => {
    if (general === true && tableGuide === true) {
      const temp = [...tabs];
      temp.forEach((tab) => (tab.measureGuide = [[]]));

      setTabs(temp);
      setTableGuide(false);
    }
  }, [general]);

  useEffect(() => {
    if (general === true && tableGuide === true) {
      setGeneralGuide([[]]);
      setGeneral(false);
    }
  }, [tableGuide]);

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
          backgroundColor: "#FAF2A1",
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
        general={general}
        tableGuide={tableGuide}
        setPim={setPim}
        setHeader={setHeader}
        setSubHeader={setSubHeader}
        setToggle={setToggle}
        setConvert={setConvert}
        setFrench={setFrench}
        setTabs={setTabs}
        setGeneral={setGeneral}
        setTableGuide={setTableGuide}
        setGeneralGuide={setGeneralGuide}
      />
      <Actions
        pim={pim}
        toggle={toggle}
        header={header}
        subHeader={subHeader}
        french={french}
        tabs={tabs}
        convert={convert}
        general={general}
        tableGuide={tableGuide}
        generalGuide={generalGuide}
      />
      <EditAlert toggle={french} />
    </Box>
  );
};

export default App;
