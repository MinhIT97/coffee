import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import AppIntroSlider from 'react-native-app-intro-slider';
import {
    Text, StyleSheet, FlatList, View, Button, SafeAreaView, Image
} from "react-native";
import Constants from "expo-constants";
import Shiping from "../component/Shiping";


export interface Props {
    name: string;
    route: any;
    item: any;

}


const Product = (props: Props) => {

    const slides = [
        {
            key: 1,
            title: 'Title 1',
            text: 'Description.\nSay something cool',
            image: 'https://media3.scdn.vn/img3/2019/10_6/pqXEB1.jpg',
            backgroundColor: '#59b2ab',
        },
        {
            key: 2,
            title: 'Title 2',
            text: 'Other cool stuff',
            image: 'https://media3.scdn.vn/img3/2019/10_6/pqXEB1.jpg',
            backgroundColor: '#febe29',
        },
        {
            key: 3,
            title: 'Rocket guy',
            text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
            image: 'https://media3.scdn.vn/img3/2019/10_6/pqXEB1.jpg',
            backgroundColor: '#22bcb5',
        }
    ];
    const { route } = props;
    const item = route.params.item;
    var itemImage = item.images;
    const [showRealApp, setsShowRealApp] = useState(false)
    const _renderItem = ({ item }: { item: any }) => {
        return (
            <Image style={styles.image} source={{ uri: item }} />
        );
    }
    const _onDone = () => {
        setsShowRealApp(true);
    }
    return (
        <View style={styles.slide}>
            <AppIntroSlider keyExtractor={(item, index) => `${index}`} renderItem={_renderItem} data={itemImage} onDone={_onDone} />
            <View style={styles.description}>
                <Text>
                    {item.name}
                </Text>
                <Text>
                    {item.originalPrice}
                </Text>
                <Shiping isShiping={item.isFreeShip}/>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    slide: {
        flex: 1
    },
    image: {
        flex: 1,
        backgroundColor: "#0000",
        resizeMode: "stretch"
    },
    description: {
        flex: 1,
        margin: 5,
    }
});

export default Product;
