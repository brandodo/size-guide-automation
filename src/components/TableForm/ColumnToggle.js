import React from "react";
import { Box, Typography, ToggleButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const ColumnToggle = ({ toggle, setToggle }) => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 5,
        padding: "10px 0"
      }}
    >
      <Typography>More than 6 columns?</Typography>
      <ToggleButton
        value="check"
        selected={toggle}
        onClick={() => setToggle(!toggle)}
        sx={{ width: 10, height: 10 }}
      >
        {toggle && <CheckIcon />}
      </ToggleButton>
    </Box>
  );
};

export default ColumnToggle;
