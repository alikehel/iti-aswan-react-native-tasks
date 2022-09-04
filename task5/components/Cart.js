import { StyleSheet, Text, View, Button, TouchableOpacity, SectionList, FlatList, ScrollView } from "react-native";
import Card from "./Card";
import AddCard from "./AddCard";

export default function App({ products, setCart }) {
    const changeQuantity = (product, sign) => {
        // console.log(products);
        if (product.quantity == 1 && sign == -1) {
            deleteCartProduct(product);
            console.log("deleted");
        } else {
            const newCart = products.map((item) => {
                if (product == item) {
                    product.quantity += sign;
                    return product;
                } else {
                    return item;
                }
            });
            setCart(newCart);
        }
    };

    const deleteCartProduct = (deletedProduct) => {
        const newproducts = products.filter((product) => {
            return deletedProduct != product;
        });
        setCart(newproducts);
        // console.log(newproducts);
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {products.map((product) => {
                    return (
                        <Card
                            key={product.id}
                            product={product}
                            isCart={true}
                            deleteCartProduct={deleteCartProduct}
                            changeQuantity={changeQuantity}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignContent: "center",
        alignSelf: "stretch",
        marginTop: 20,
    },
    gradient: {},
    text: {},
    done: { backgroundColor: "red" },
});
