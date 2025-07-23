import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Category from "./Category";
import FooterCard from "./FooterCard";

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
          Опубликовано: 1.01.2001
        </Typography>
      </CardContent>

      <FooterCard likes={likes} favorites={favorites} />
    </Card>
  );
}

export default RecipeCard;
