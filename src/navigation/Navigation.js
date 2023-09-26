import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoritosScreen from "../screens/Favoritos";
import PokedexScreen from "../screens/Pokedex";
import AccountScreen from "../screens/Account";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Pokedex" component={PokedexScreen} />
      <Tab.Screen name="Favoritos" component={FavoritosScreen} />
    </Tab.Navigator>
  );
}
