import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const TabPanel = ({
  children,
  value,
  index,
  rows,
  header,
  changeHandler,
  updateTableName,
  addRow,
  removeRow,
}) => {
  const inputRows = rows.map((row, ind) => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: 2,
        }}
        key={`row-${ind}`}
      >
        <Typography>{`Row ${ind + 1}`}</Typography>
        <TextField
          value={row.join(",")}
          sx={{ width: "70%" }}
          onChange={(e) => changeHandler(e.target.value, index, ind)}
        />
      </Box>
    );
  });

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
          <Typography
            sx={{ textAlign: "left", alignSelf: "center", width: "50%" }}
          >
            You may use the buttons below to add/remove rows, new columns are
            added by including new values in each row and separating them with a
            comma (,). For example, to add a 5th column to Row 1, you would
            input "Alpha,US,UK,EU,CH". When adding a new column, please pay
            careful attention to the order of the values, as this will determine
            how/where they will appear in the resulting table.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" onClick={() => addRow(index)}>
              Add Row
            </Button>
            <Button variant="outlined" onClick={() => removeRow(index)}>
              Remove Row
            </Button>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {inputRows}
          </Box>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
