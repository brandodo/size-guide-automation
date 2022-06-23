import React from "react";
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
  const inputRows = rows.map((row, ind) => {
    return (
      <TextField
        value={row.join(",")}
        sx={{ width: "60%" }}
        label={`Row ${ind + 1}`}
        onChange={(e) => changeHandler(e.target.value, false, index, ind)}
      />
    );
  });

  const inchRows = inches.map((inch, ind) => {
    return (
      <TextField
        value={inch.join(",")}
        sx={{ width: "60%" }}
        label={`Row ${ind + 1}`}
        onChange={(e) => changeHandler(false, e.target.value, index, ind)}
      />
    );
  });

  const rowWidth = convert ? "50%" : "100%";

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
            sx={{
              textAlign: "left",
              alignSelf: "center",
              width: "50%",
              p: 2,
              backgroundColor: "lightgrey",
              borderRadius: "10px",
              boxShadow: "3px 3px 5px black",
            }}
          >
            You may use the buttons below to add/remove rows, new columns are
            added by including new values in each row and separating them with a
            comma (,). For example, to add a 5th column to Row 1, you would
            input "Alpha,US,UK,EU,CH". If you are adding inch measurements, the
            same rules will apply, and these columns will always appear after
            the other sizes.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" onClick={() => addRow(index)}>
              Add Row
            </Button>
            <Button variant="outlined" onClick={() => removeRow(index)}>
              Remove Row
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: convert ? "flex-end" : "center",
                flexDirection: "column",
                gap: 2,
                width: rowWidth,
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "center", width: "50%" }}
              >
                <Typography variant="h4">Sizes</Typography>
              </Box>
              {inputRows}
            </Box>
            {convert && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  gap: 2,
                  width: "50%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "50%",
                  }}
                >
                  <Typography variant="h4">Inches</Typography>
                </Box>
                {inchRows}
              </Box>
            )}
          </Box>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
