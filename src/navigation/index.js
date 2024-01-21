import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen"
import WelcomeScreen from "../Screens/WelcomeScreen";



const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
              headerShown: false,
            }}
            >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />


            </Stack.Navigator>
        </NavigationContainer>
        
    );
}
