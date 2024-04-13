import { useContext } from "react";
import { StyleSheet } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList/MealList";

const FavoritesScreen = () => {
  const favoriteMealContext = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealContext.ids.includes(meal.id)
  );

  return <MealList meals={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
