import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
    Text,
    StyleSheet,
    FlatList,
    View,
    Button,
    SafeAreaView,
} from "react-native";
import queryString from "query-string";
import Item from "./Item";
import Constants from "expo-constants";

export interface Props {
    slide: any;
}

const Products = ({ navigation }: { navigation: any }) => {
    const [slides, setSlides] = useState();

    useEffect(() => {
        async function fetchPostList() {
            try {
                //   const paramsString = queryString.stringify(filters);
                const requestUrl = `http://js-post-api.herokuapp.com/api/products?_page=1&_limit=7`;
                const reponse = await fetch(requestUrl);
                const reponseJSON = await reponse.json();
                const { data } = reponseJSON;
                setSlides(data);
            } catch (error) {
                console.log("failed to fetch post list: ", error.message);
            }
        }
        fetchPostList();
    }, []);

    return (
        <View>
            <FlatList
                data={slides}
                renderItem={({ item }) => (
                    <Item slide={item} onPress={() => navigation.navigate("Product", {
                        name: item.name,
                        item: item
                    })} />
                )}
                keyExtractor={(item) => `${item.id}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 8,
        marginBottom: 10,
        marginTop: Constants.statusBarHeight,
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default Products;
