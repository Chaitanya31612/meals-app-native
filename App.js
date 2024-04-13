import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoryScreens, MealsOverviewScreen } from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#020203",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#1e0848",
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
