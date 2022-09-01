import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaViewBase } from 'react-native';
import Cards from './components/Cards';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
    const [users, setUsers] = useState([
        // { name: 'Ali', age: 21, done: false },
        // { name: 'Ahmed', age: 25, done: false },
        // { name: 'Mahmoud', age: 25, done: false },
        // { name: 'Hassan', age: 25, done: false },
    ]);

    const setUsersStorage = async () => {
        await AsyncStorage.setItem('users', JSON.stringify(users));
    };
    const getUsersStorage = async () => {
        const data = JSON.parse(await AsyncStorage.getItem('users'));
        setUsers(data);
    };

    useEffect(() => {
        getUsersStorage();
    }, []);

    useEffect(() => {
        setUsersStorage();
    }, [users]);

    return (
        <View style={styles.container}>
            {/* <StatusBar style="auto" /> */}
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
        width: '90%',
        alignSelf: 'center',
    },
    gradient: {},
    text: {},
});
