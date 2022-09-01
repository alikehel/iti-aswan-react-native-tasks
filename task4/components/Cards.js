import { StyleSheet, Text, View, Button, TouchableOpacity, SectionList, FlatList, ScrollView } from "react-native";
import Card from "./Card";
import AddCard from "./AddCard";

export default function App({ products, setProducts }) {
    const deleteCard = (deletedUser) => {
        const newproducts = products.filter((user) => {
            return deletedUser != user;
        });
        setProducts(newproducts);
        // console.log(newproducts);
    };

    const markDone = async (item) => {
        const newproducts = products.filter((user) => {
            return item != user;
        }); // const newproducts = products.map((user) => {
        //     if (user == item) {
        //         user.done = !user.done;
        //         return user;
        //     } else {
        //         return user;
        //     }
        // });
        item.done = !item.done;
        newproducts.push(item);
        setProducts(newproducts);
        // console.log(newproducts);
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
                    return (
                        <Card
                            key={product.id}
                            product={product}
                            deleteCard={deleteCard}
                            markDone={markDone}
                            style={product.done && styles.done}
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
