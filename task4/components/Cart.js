import { StyleSheet, Text, View, Button, TouchableOpacity, SectionList, FlatList, ScrollView } from "react-native";
import Card from "./Card";
import AddCard from "./AddCard";

export default function App({ products }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                {products.map((product) => {
                    return <Card key={product.id} product={product} isCart={true} />;
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
