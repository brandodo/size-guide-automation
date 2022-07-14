import React from "react";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const HeaderInput = ({
  pim,
  header,
  subHeader,
  setPim,
  setHeader,
  setSubHeader,
}) => {
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
        padding: "45px 0",
      }}
    >
      <Typography variant="h4">Header Text</Typography>
      <TextField
        required
        id="filled-basic"
        label="PIM Attribute Name"
        variant="filled"
        value={pim}
        sx={textStyle}
        onChange={(e) => setPim(e.target.value)}
      />
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
