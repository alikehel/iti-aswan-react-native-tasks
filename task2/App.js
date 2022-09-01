import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Cards from './components/Cards';
import { useState } from 'react';

export default function App() {
    const [users, setUsers] = useState([
        { name: 'Ali', age: 21 },
        { name: 'Ahmed', age: 25 },
        { name: 'Mahmoud', age: 25 },
        { name: 'Hassan', age: 25 },
    ]);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Cards users={users} setUsers={setUsers} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    gradient: {},
    text: {},
});
