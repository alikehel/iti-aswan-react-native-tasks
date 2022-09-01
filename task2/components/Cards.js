import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Card from './Card';

export default function App({ users, setUsers }) {
    const deleteCard = (deletedUser) => {
        const newUsers = users.filter((user) => {
            return deletedUser != user;
        });
        setUsers(newUsers);
        console.log(newUsers);
    };

    return (
        <View style={styles.container}>
            {users.map((user) => {
                return <Card key={user.name} user={user} deleteCard={deleteCard} />;
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignSelf: 'stretch' },
    gradient: {},
    text: {},
});
