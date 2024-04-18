import { useCallback, useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList/MealList";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  // const favoriteMealContext = useContext(FavoritesContext);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    // favoriteMealContext.ids.includes(meal.id)
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.favoritesContainer}>
        <Text style={styles.text}>
          No favorite meals found. Start adding some!
        </Text>
      </View>
    );
  }

  return <MealList meals={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  favoritesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#1d1b58",
  },
});
