import { StyleSheet, Text, View, Button, TouchableOpacity, useColorScheme, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

// const deleteCard = () => {
//     setProducts([{}]);
//     console.log('Deleted');
// };

export default function App({ products, setProducts }) {
    const [currentUser, setCurrentUser] = useState({});
    const onChangeName = (value) => {
        setCurrentUser({ ...currentUser, name: value });
    };
    const onChangeAge = (value) => {
        setCurrentUser({ ...currentUser, age: value });
    };
    const addCard = () => {
        // console.log(products);
        const newproducts = [...products, currentUser];
        setProducts(newproducts);
    };
    return (
        <View style={[styles.container]}>
            <View>
                <TextInput placeholder="Enter Name" onChangeText={(value) => onChangeName(value)} />
                <TextInput placeholder="Enter Price" onChangeText={(value) => onChangeAge(value)} />
            </View>
            <View style={{ flexDirection: "row", alignContent: "space-around" }}>
                <Button title="Add" onPress={addCard} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 2,
        borderRadius: 15,
        paddingHorizontal: 25,
        paddingVertical: 10,
        marginBottom: 30,
        // margin: 5,
        // width: '100%',
    },
    done: { backgroundColor: "red" },
    gradient: {},
    text: {},
});
