import React from "react";
import { Container, Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";
import recipes from "./Utils";

function RecipeList() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        {recipes.map((recipe) => (
          <Grid key={recipe.id} size={{ xs: 12 }}>
            <RecipeCard
              title={recipe.title}
              category={recipe.category}
              image={recipe.image}
              description={recipe.description}
              likes={recipe.likes}
              favorites={recipe.favorites}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default RecipeList;
