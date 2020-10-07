import * as React from 'react';
import { Text, View } from 'react-native';
import Home from '../screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}
function MeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Me!</Text>
        </View>
    );
}

function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
            }} />
            <Tab.Screen name="Settings" options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="ios-settings" color={color} />,
            }} component={SettingsScreen} />
            <Tab.Screen name="me" options={{
                tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color="black" />,
            }} component={MeScreen} />
        </Tab.Navigator>
    );
}

export default function Homes() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
