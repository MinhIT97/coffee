import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View, ImageBackground, Image, Dimensions } from "react-native";

import BanerBacground from "../assets/coffee-cup.png";
import image from "../assets/home.png";

const Splash = () => {
    var width = Dimensions.get("window").width;
    return (
        <View style={{ flex: 1, flexDirection: "column" }}>
            <StatusBar style="auto" />
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.baner}>
                    <Image style={styles.banerImage} source={BanerBacground} />
                    <Text style={styles.title}>Coffee House</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    banerImage: {
        opacity: 0.8,
        width: 80,
        height: 80,
        resizeMode: "contain",
    },
    title: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: "bold",
    },
    baner: {
        backgroundColor: "#f7e8d5",
        alignSelf: "stretch",
        textAlign: "center",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        opacity: 0.96,
    },
    categoryImage: {},
});

export default Splash;
