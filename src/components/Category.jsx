import React from "react";
import { Typography } from "@mui/material";

function Category({ text }) {
  return (
    <Typography
      variant="subtitle2"
      color="text.secondary"
      sx={{ mt: 2, display: "block" }}
    >
      Категории: {text}
    </Typography>
  );
}

export default Category;
