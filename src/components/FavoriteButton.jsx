import React, { useState } from "react";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

function FavoriteButton({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <Button
      size="small"
      color="inherit"
      startIcon={<FavoriteIcon />}
      onClick={() => setCount(count + 1)}
    >
      {count}
    </Button>
  );
}

export default FavoriteButton;
