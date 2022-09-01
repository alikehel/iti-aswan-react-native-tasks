import { StyleSheet, Text, View, Button, TouchableOpacity, useColorScheme } from 'react-native';

// const deleteCard = () => {
//     setUsers([{}]);
//     console.log('Deleted');
// };

export default function App({ user, deleteCard }) {
    return (
        <View style={styles.container}>
            <View>
                <Text>Name: {user.name}</Text>
                <Text>Age: {user.age}</Text>
            </View>
            <View>
                <Button title="Delete" onPress={() => deleteCard(user)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderRadius: 15,
        paddingHorizontal: 25,
        paddingVertical: 10,
        marginBottom: 5,
        // margin: 5,
        // width: '100%',
    },
    gradient: {},
    text: {},
});
