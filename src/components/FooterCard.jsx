//Кнопки в каждой карточке
import React, { useState } from "react";
import { CardActions, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

function FooterCard({ likes, favorites }) {
  const [likeCount, setLikeCount] = useState(likes || 0);
  const [favoriteCount, setFavoriteCount] = useState(favorites || 0);

  return (
    <CardActions sx={{ justifyContent: "space-between" }}>
      {/* Комментарии */}
      <Button size="small" sx={{ color: "black" }}>
        <QuestionAnswerIcon />
      </Button>

      {/* Избранное */}
      <Button
        size="small"
        color="inherit"
        startIcon={<FavoriteIcon />}
        onClick={() => setFavoriteCount(favoriteCount + 1)}
      >
        {favoriteCount}
      </Button>

      {/* Лайк */}
      <Button
        size="small"
        color="inherit"
        startIcon={<ThumbUpIcon />}
        onClick={() => setLikeCount(likeCount + 1)}
      >
        {likeCount}
      </Button>
    </CardActions>
  );
}

export default FooterCard;
