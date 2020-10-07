import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Products from './Products';
import Product from './Product';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const AppNavigator = createStackNavigator();

export default function Home() {
    return (

        <AppNavigator.Navigator>
            <AppNavigator.Screen name="Products" component={Products}
                options={{ title: 'Home' }} />
            <AppNavigator.Screen name="Product" component={Product}
                options={({ route }) => ({ title: route.params.name })}
            />
        </AppNavigator.Navigator>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
