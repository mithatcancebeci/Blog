import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="IndexScreen"
        component={IndexScreen}
        options={({ navigation, route }) => ({
          headerRight: () => (
            <View style={{ paddingHorizontal: 10 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CreateScreen")}
              >
                <Feather name="plus" size={20} />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="Show Screen"
        component={ShowScreen}
        options={({ navigation, route }) => ({
          headerRight: () => (
            <View style={{ paddingHorizontal: 10 }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("EditScreen", { id: route.params.id })
                }
              >
                <AntDesign name="edit" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen name="CreateScreen" component={CreateScreen} />
      <Stack.Screen name="EditScreen" component={EditScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
