import React from "react";
import { Snackbar, Alert } from "@mui/material";

const EditAlert = ({ toggle }) => {
  const colors = toggle
    ? { backgroundColor: "#F3C969" }
    : { backgroundColor: "" };

  return (
    <>
      <Snackbar
        open={true}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert severity="info" sx={{ ...colors, fontWeight: 700 }}>
          {toggle ? "FRENCH" : "ENGLISH"}
        </Alert>
      </Snackbar>
    </>
  );
};

export default EditAlert;
