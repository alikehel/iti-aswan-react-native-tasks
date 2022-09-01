import { StyleSheet, Text, View, Button, TouchableOpacity, useColorScheme } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

// const deleteCard = () => {
//     setUsers([{}]);
//     console.log('Deleted');
// };

export default function App({ user, deleteCard, markDone, style }) {
    return (
        <View style={[styles.container, style]}>
            <View>
                <Text>Name: {user.name}</Text>
                <Text>Age: {user.age}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignContent: 'space-around' }}>
                {/* <Ionicons name="md-checkmark-circle" size={32} /> */}
                <Button title="Mark Red" onPress={() => markDone(user)} />
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
        marginBottom: 10,
        // margin: 5,
        // width: '100%',
    },
    done: { backgroundColor: 'red' },
    gradient: {},
    text: {},
});
