import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const TabPanel = ({
  value,
  index,
  rows,
  inches,
  header,
  convert,
  changeHandler,
  updateTableName,
  addRow,
  removeRow,
}) => {
  const [text, setText] = useState("");

  const updateText = (e) => {
    const input = e.target.value;
    const rows = input.split("\n");
    const cells = rows.map((row) => row.split("\t"));
    console.log(cells);
    setText(e.target.value);
  };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      style={{ width: "100%" }}
    >
      {value === index && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 3,
          }}
        >
          <TextField
            label="Table Header (optional)"
            variant="filled"
            value={header}
            sx={{ width: "50%", alignSelf: "center" }}
            onChange={(e) => updateTableName(e.target.value, index)}
          />

          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            <TextField
              multiline
              onChange={updateText}
              value={text}
              placeholder="Copy/paste your table here..."
              sx={{ width: "50%" }}
            />
            {/* <TextField
              multiline
              onChange={updateText}
              value={text}
              placeholder="Copy/paste your table here..."
              sx={{ width: "50%" }}
            /> */}
          </Box>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
