import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import TableForm from "./components/TableForm/TableForm";
import Actions from "./components/Actions/Actions";

const App = () => {
  const [header, setHeader] = useState("Size Guide");
  const [subHeader, setSubHeader] = useState("BRAND NAME");
  const [toggle, setToggle] = useState(false);
  const [convert, setConvert] = useState(false);
  const [french, setFrench] = useState(false);
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
      inches: [
        ["Chest (Inches)", "Waist (Inches)"],
        ["Chest (Inches)", "Waist (Inches)"],
        ["Chest (Inches)", "Waist (Inches)"],
        ["Chest (Inches)", "Waist (Inches)"],
        ["Chest (Inches)", "Waist (Inches)"],
      ],
    },
  ]);

  const [tabsFR, setTabsFR] = useState([
    {
      tabname: "TAB 1",
      rows: [
        ["Taille", "US", "UK", "EU"],
        ["S", "2", "4", "1"],
        ["M", "3", "6", "2"],
        ["L", "4", "8", "3"],
        ["XL", "5", "10", "4"],
      ],
      inches: [
        ["Poitrine (Pouces)", "Taille (Pouces)"],
        ["Poitrine (Pouces)", "Taille (Pouces)"],
        ["Poitrine (Pouces)", "Taille (Pouces)"],
        ["Poitrine (Pouces)", "Taille (Pouces)"],
        ["Poitrine (Pouces)", "Taille (Pouces)"],
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
        Use this form to generate your brand specific size guides by filling out
        the prompts below. Once you are satisfied with the data, you can preview
        the final table or download the HTML by clicking either buttons at the
        very end of this form.
      </Typography>
      <TableForm
        header={header}
        subHeader={subHeader}
        toggle={toggle}
        convert={convert}
        french={french}
        tabs={french ? tabsFR : tabs}
        setHeader={setHeader}
        setSubHeader={setSubHeader}
        setToggle={setToggle}
        setConvert={setConvert}
        setFrench={setFrench}
        setTabs={french ? setTabsFR : setTabs}
      />
      <Actions
        toggle={toggle}
        header={header}
        subHeader={subHeader}
        french={french}
        tabs={french ? tabsFR : tabs}
        convert={convert}
      />
    </Box>
  );
};

export default App;