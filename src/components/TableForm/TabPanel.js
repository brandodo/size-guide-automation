import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const TabPanel = ({
  value,
  index,
  data,
  convert,
  updateTableName,
  addTable,
  removeTable,
  updateInches,
  updateCenti,
}) => {
  // map tables to header and input field
  const tableInput = data.tables.map((table, tableIndex) => {
    const inches = table.rowsInches.map((row) => row.join("\t")).join("\n");
    const centi = table.rowsCenti.map((row) => row.join("\t")).join("\n");

    return (
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
          value={table.header}
          sx={{ width: "50%", alignSelf: "center" }}
          onChange={(e) => updateTableName(e.target.value, index, tableIndex)}
        />
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <TextField
            multiline
            value={inches}
            onChange={(e) => updateInches(e.target.value, index, tableIndex)}
            placeholder="Copy/paste your table here..."
            sx={{ width: "50%" }}
          />
          {convert && (
            <TextField
              multiline
              value={centi}
              onChange={(e) => updateCenti(e.target.value, index, tableIndex)}
              placeholder="Copy/paste your table here..."
              sx={{ width: "50%" }}
            />
          )}
        </Box>
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
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button variant="contained" onClick={() => addTable(index)}>
          Add Table
        </Button>
        <Button variant="outlined" onClick={() => removeTable(index)}>
          Remove Table
        </Button>
      </Box>
      {tableInput}
    </div>
  );
};

export default TabPanel;
