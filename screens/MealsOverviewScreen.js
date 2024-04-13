import { FlatList, StyleSheet, Text, View } from "react-native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const categoryName = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryName,
    });
  }, [categoryId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
});
