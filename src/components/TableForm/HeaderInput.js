import React from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

const HeaderInput = ({ header, subHeader, setHeader, setSubHeader }) => {
  const textStyle = {
    width: "50%",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gap: 2,
      }}
    >
      <TextField
        required
        id="filled-basic"
        label="Title"
        variant="filled"
        value={header}
        sx={textStyle}
        onChange={(e) => setHeader(e.target.value)}
      />
      <TextField
        required
        id="filled-basic"
        label="Brand Name"
        variant="filled"
        value={subHeader}
        sx={textStyle}
        onChange={(e) => setSubHeader(e.target.value)}
      />
    </Box>
  );
};

export default HeaderInput;
