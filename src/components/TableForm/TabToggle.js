import React from "react";
import { Box, Typography, ToggleButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const TabToggle = ({ convert, setConvert }) => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        gap: 2,
        padding: "10px 0",
      }}
    >
      <Typography>CM Conversion?</Typography>
      <ToggleButton
        value="check"
        selected={convert}
        onClick={() => setConvert(!convert)}
        sx={{ width: 10, height: 10, border: "2px solid black"}}
      >
        {convert && <CheckIcon />}
      </ToggleButton>
    </Box>
  );
};

export default TabToggle;
