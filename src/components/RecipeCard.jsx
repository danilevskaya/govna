import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import FavoriteButton from "./FavoriteButton";
import LikeButton from "./LikeButton";
import Category from "./Category";

function RecipeCard({
  title,
  description,
  image,
  category,
  published,
  likes,
  favorites,
}) {

  
  return (
    <Card sx={{ padding: 2 }}>
      <Typography
        variant="h5"
        sx={{ textDecoration: "underline", mb: 1, fontWeight: "bold" }}
      >
        {title}
      </Typography>

      <CardMedia
        component="img"
        height="300"
        image={image}
        alt={title}
        sx={{
          width: "100%",
          aspectRatio: "4/3",
          objectFit: "cover",
          borderRadius: 2,
        }}
      />

      <Category text={category || "не указано"} />

      <CardContent>
        <Typography sx={{ mt: 1 }}>{description}</Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mt: 2, display: "block" }}
        >
          Опубликовано: {new Date(published).toLocaleDateString("ru-RU")}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button size="small" color="inherit">
          <QuestionAnswerIcon />
        </Button>
        <FavoriteButton initialCount={favorites} />
        <LikeButton initialCount={likes} />
      </CardActions>
    </Card>
  );
}

export default RecipeCard;
