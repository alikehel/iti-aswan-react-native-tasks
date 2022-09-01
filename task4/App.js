import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaViewBase } from "react-native";
import Cards from "./components/Cards";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// https://fakestoreapi.com/products

export default function App() {
    const [products, setProducts] = useState([]);

    const setProductsStorage = async () => {
        await AsyncStorage.setItem("products", JSON.stringify(products));
    };
    const getproductsStorage = async () => {
        const data = JSON.parse(await AsyncStorage.getItem("products"));
        setProducts(data);
    };

    useEffect(async () => {
        const response = (await axios.get("https://fakestoreapi.com/products")).data;
        const data = response.map((item) => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
                image: item.image,
            };
        });
        setProducts(data);
    }, []);

    useEffect(() => {
        getproductsStorage();
    }, []);

    useEffect(() => {
        setProductsStorage();
    }, [products]);

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Cards" children={() => <Cards products={products} setProducts={setProducts} />} />
                <Tab.Screen name="Text" children={() => <Text>Hello</Text>} options={{ tabBarBadge: 3 }} />
            </Tab.Navigator>
        </NavigationContainer>
        // <View style={styles.container}>
        //     {/* <StatusBar style="auto" /> */}
        //     <Cards products={products} setProducts={setProducts} />
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "90%",
        alignSelf: "center",
    },
    gradient: {},
    text: {},
});
