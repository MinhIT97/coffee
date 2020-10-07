import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export interface Props {
    slide: any;
}

const Slides: React.FC<Props> = (props) => {
    const { slide } = props;
    return (
        <View style={styles.slides}>
            <Text style={styles.title}>{slide.title}</Text>
            <Image source={slide.image} />
        </View>
    );
};
const styles = StyleSheet.create({
    slides: {
        width: 40,
        height: 40,
        backgroundColor:"black"
    },
    title:{
        textTransform:"uppercase",
        color:"#006400"

    }
});

export default Slides;
