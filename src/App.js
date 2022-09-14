import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import TableForm from "./components/TableForm/TableForm";
import Actions from "./components/Actions/Actions";
import EditAlert from "./components/EditAlert/EditAlert";

const App = () => {
  const [pim, setPim] = useState("");
  // const [header, setHeader] = useState("Size Guide");
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

  const header = french ? "Guide des tailles" : "Size Guide";

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          width: "100%",
          backgroundColor: "lightgrey",
          zIndex: 1,
          padding: "15px 0",
          paddingLeft: "60px",
        }}
      >
        <Box
          component="img"
          src="https://www.thebay.com/on/demandware.static/Sites-TheBay-Site/-/default/dwcb7dc210/images/favicons/Bay-favicon-96x96.png"
        />
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          Size Guide Generator
        </Typography>
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
      </Box>
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
          marginTop: "140px",
        }}
      >
        Use this form to generate your brand specific size guides by following
        the prompts below. You may use the toggles below based on your specific
        requirements.
      </Typography>
      <TableForm
        pim={pim}
        subHeader={subHeader}
        toggle={toggle}
        convert={convert}
        french={french}
        tabs={tabs}
        general={general}
        tableGuide={tableGuide}
        setPim={setPim}
        setSubHeader={setSubHeader}
        setToggle={setToggle}
        setConvert={setConvert}
        setFrench={setFrench}
        setTabs={setTabs}
        setGeneral={setGeneral}
        setTableGuide={setTableGuide}
        setGeneralGuide={setGeneralGuide}
      />

      <EditAlert toggle={french} />
    </Box>
  );
};

export default App;
