import { StyleSheet, Text, View, Button, TouchableOpacity, useColorScheme, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

// const deleteCard = () => {
//     setproductss([{}]);
//     console.log('Deleted');
// };

export default function App({ product, style, addToCart, isCart }) {
    return (
        <View style={[styles.container, style]}>
            <View>
                <Image source={{ uri: product.image, width: "100%", height: 200 }} />
            </View>
            <View style={[styles.smallContainer]}>
                <View style={{ width: "60%" }}>
                    <Text>Name: {product.title}</Text>
                    <Text>Price: {product.price} $</Text>
                </View>
                {!isCart && (
                    <View style={{ flexDirection: "row", alignContent: "space-around" }}>
                        {/* <Ionicons name="md-checkmark-circle" size={32} /> */}
                        <Button title="Add to Cart" onPress={() => addToCart(product)} />
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "space-between",
        borderWidth: 2,
        borderRadius: 15,
        paddingHorizontal: 25,
        paddingVertical: 10,
        marginBottom: 10,
        // margin: 5,
        // width: '100%',
    },
    smallContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        // borderWidth: 2,
        // borderRadius: 15,
        // paddingHorizontal: 25,
        // paddingVertical: 10,
        marginBottom: 10,
        marginTop: 10,
        // margin: 5,
        // width: '100%',
    },
    done: { backgroundColor: "red" },
    gradient: {},
    text: {},
});
