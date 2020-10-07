import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import HTMLView from 'react-native-htmlview';

export interface Props {
    slide: any;
    onPress: any;
}

export default function Item(props: Props) {
    const { slide, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: slide.images[0] }} />
                <View style={styles.content}>
                    <Text style={styles.title}>{slide.name}</Text>
                    <View style={styles.description}>
                        <HTMLView value={slide.shortDescription}></HTMLView>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 4,
        margin: 10,
        flexDirection: "row",
        overflow: "hidden",
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 3,
        shadowOffset: { width: 0, height: 0 },
    },
    content: {
        flex: 2,
        flexDirection: "column",
        paddingHorizontal: 10,
    },
    title: {
        textTransform: "capitalize",
        color: "#000000",
    },
    description: {
        color: "#000000",
        height: 50,
    },
    image: {
        width: 80,
        height: 122,
        flex: 1,
    },
});
