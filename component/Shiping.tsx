import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export interface Props {
    isShiping: any;
}

const Shiping: React.FC<Props> = (props) => {

    const { isShiping } = props;
    if (!isShiping) {
        return (
            <Text>Miễn phí ship</Text>
        );
    }
    return (
        <Text>{isShiping}</Text>
    );

};
const styles = StyleSheet.create({
    slides: {
        width: 40,
        height: 40,
        backgroundColor: "black"
    },
    title: {
        textTransform: "uppercase",
        color: "#006400"

    }
});

export default Shiping;
