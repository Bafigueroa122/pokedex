import react from "react";
import { HeaderTitle, createStackNavigator } from "@react-navigation/stack";
import Favoritos from "../screens/Favoritos";

const stack = createStackNavigator();

export default function FavoritosNavigation() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Favorite"
        component={Favoritos}
        options={{ title: "Favoritos" }}
      />
    </stack.Navigator>
  );
}
