import React, { useState } from "react";
import { Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

function LikeButton({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <Button
      size="small"
      color="inherit"
      startIcon={<ThumbUpIcon />}
      onClick={() => setCount(count + 1)}
    >
      {count}
    </Button>
  );
}

export default LikeButton;
