import React from "react";
import { Container, Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";

function RecipeList() {
  const recipes = [
    {
      id: 1,
      title: "Паста Карбонара",
      image:
        "https://images.pexels.com/photos/3606799/pexels-photo-3606799.jpeg",
      category: "Горячие блюда",
      description: "Классическая итальянская паста с беконом и пармезаном.",
      likes: 0,
      favorites: 0,
    },
    {
      id: 2,
      title: "Салат Цезарь",
      image:
        "https://images.pexels.com/photos/9031798/pexels-photo-9031798.jpeg",
      description: "Салат с курицей, соусом Цезарь и хрустящими сухариками.",
      likes: 0,
      favorites: 0,
    },
    {
      id: 3,
      title: "Борщ",
      image:
        "https://images.pexels.com/photos/18955541/pexels-photo-18955541.jpeg",
      description: "Традиционный суп с красной свеклой и сметаной.",
      likes: 0,
      favorites: 0,
    },
    {
      id: 4,
      title: "Рамен",
      image: "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg",
      description: "Японский суп с лапшой, яйцом и ароматным бульоном.",
      likes: 0,
      favorites: 0,
    },
    {
      id: 5,
      title: "Суши",
      image:
        "https://images.pexels.com/photos/1052189/pexels-photo-1052189.jpeg",
      description: "Классические роллы с лососем и авокадо.",
      likes: 0,
      favorites: 0,
    },
    {
      id: 6,
      title: "Бургер",
      image:
        "https://images.pexels.com/photos/3864682/pexels-photo-3864682.jpeg",
      description: "Сочный говяжий бургер с сыром и соусом BBQ.",
      likes: 0,
      favorites: 0,
    },
    {
      id: 7,
      title: "Пицца Маргарита",
      image:
        "https://images.pexels.com/photos/10836977/pexels-photo-10836977.jpeg",
      description: "Тонкая пицца с томатами и моцареллой.",
      likes: 0,
      favorites: 0,
    },
  ];

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
