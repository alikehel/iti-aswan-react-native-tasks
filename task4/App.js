import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaViewBase } from "react-native";
import Cards from "./components/Cards";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "./components/Cart";
// https://fakestoreapi.com/products

export default function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const setProductsStorage = async () => {
        await AsyncStorage.setItem("products", JSON.stringify(products));
    };
    const getproductsStorage = async () => {
        const data = JSON.parse(await AsyncStorage.getItem("products"));
        setProducts(data);
    };

    const setCartStorage = async () => {
        await AsyncStorage.setItem("cart", JSON.stringify(cart));
    };
    const getCartStorage = async () => {
        const data = JSON.parse(await AsyncStorage.getItem("cart"));
        setCart(data);
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

    useEffect(() => {
        getCartStorage();
    }, []);

    useEffect(() => {
        setCartStorage();
    }, [cart]);

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Cards"
                    children={() => (
                        <Cards products={products} setProducts={setProducts} cart={cart} setCart={setCart} />
                    )}
                />
                <Tab.Screen
                    name="Cart"
                    children={() => <Cart products={cart} />}
                    options={{ tabBarBadge: cart.length }}
                />
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
