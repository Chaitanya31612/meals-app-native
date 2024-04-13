import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CategoryScreens,
  MealDetailScreen,
  MealsOverviewScreen,
} from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#1d1b58",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#d3d8ef",
            },
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoryScreens}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const { categoryId } = route.params;
            //   return {
            //     title: categoryId,
            //   };
            // }}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
