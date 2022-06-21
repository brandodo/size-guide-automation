import React from "react";
import { Box, Typography, TextField } from "@mui/material";

const TabPanel = ({
  children,
  value,
  index,
  rows,
  header,
  changeHandler,
  updateTableName,
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
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {inputRows}
          </Box>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
