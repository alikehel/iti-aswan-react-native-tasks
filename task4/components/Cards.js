import { StyleSheet, Text, View, Button, TouchableOpacity, SectionList, FlatList, ScrollView } from "react-native";
import Card from "./Card";
import AddCard from "./AddCard";

export default function App({ products, setProducts, cart, setCart }) {
    // const deleteCard = (deletedUser) => {
    //     const newproducts = products.filter((user) => {
    //         return deletedUser != user;
    //     });
    //     setProducts(newproducts);
    //     // console.log(newproducts);
    // };

    const addToCart = async (product) => {
        await setCart([...cart, product]);
        // console.log(cart);
    };

    return (
        <View style={styles.container}>
            <AddCard products={products} setProducts={setProducts} />
            <Text>products:</Text>
            {/* <FlatList
                data={products}
                renderItem={(product) => (
                    <Card
                        key={product.id}
                        product={product}
                        deleteCard={deleteCard}
                        markDone={markDone}
                        style={product.done && styles.done}
                    />
                )}
                keyExtractor={(product) => product.id}
            /> */}
            <ScrollView>
                {products.map((product) => {
                    return <Card key={product.id} product={product} addToCart={addToCart} />;
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
