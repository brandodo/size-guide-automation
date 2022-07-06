import { Box, TextField, Typography } from "@mui/material";

const MeasureGuide = ({ children, changeHandler, index }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderTop: children.includes("General") ? "1px solid black" : "",
      }}
    >
      <Typography variant="h4" sx={{ m: 3 }}>
        {children}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          marginBottom: 3,
          backgroundColor: "#FAF2A1",
          borderRadius: "10px",
          boxShadow: "3px 3px 5px black",
        }}
      >
        <Typography variant="p">
          NOTE: If you are specifying measures for different body areas (i.e.
          Waist, Chest, etc...), please follow the format below, separating each
          measuring text with a new line.
        </Typography>
        <Typography variant="p">
          INSEAM: Measure from the top inside of your leg down to your ankle.
        </Typography>
      </Box>
      <TextField
        multiline
        placeholder="Copy/paste text here, leave empty if no measure guide provided"
        onChange={(e) => changeHandler(e.target.value, index)}
        sx={{ width: "100%" }}
      />
    </Box>
  );
};

export default MeasureGuide;
