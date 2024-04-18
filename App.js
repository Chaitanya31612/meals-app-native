import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import {
  CategoryScreens,
  FavoritesScreen,
  MealDetailScreen,
  MealsOverviewScreen,
} from "./screens";
import FavoritesContextProvider from "./store/context/favorites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1d1b58",
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#d3d8ef",
        },
        headerTitleAlign: "center",
        drawerContentStyle: {
          backgroundColor: "#d3d8ef",
        },
        drawerActiveBackgroundColor: "#998aed",
        drawerActiveTintColor: "white",
        drawerInactiveBackgroundColor: "#d3d8ef",
        drawerInactiveTintColor: "black",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryScreens}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="list" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="star" size={size} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    // <FavoritesContextProvider>
    <Provider store={store}>
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
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{
              title: "All Categories",
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    // </FavoritesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
