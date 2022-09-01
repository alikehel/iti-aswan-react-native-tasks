import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Card from './Card';
import AddCard from './AddCard';

export default function App({ users, setUsers }) {
    const deleteCard = (deletedUser) => {
        const newUsers = users.filter((user) => {
            return deletedUser != user;
        });
        setUsers(newUsers);
        // console.log(newUsers);
    };

    const markDone = async (item) => {
        const newUsers = users.filter((user) => {
            return item != user;
        }); // const newUsers = users.map((user) => {
        //     if (user == item) {
        //         user.done = !user.done;
        //         return user;
        //     } else {
        //         return user;
        //     }
        // });
        item.done = !item.done;
        newUsers.push(item);
        setUsers(newUsers);
        // console.log(newUsers);
    };

    return (
        <View style={styles.container}>
            <AddCard users={users} setUsers={setUsers} />
            <Text>Users:</Text>
            {users.map((user) => {
                return <Card key={user.name} user={user} deleteCard={deleteCard} markDone={markDone} style={user.done && styles.done} />;
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'flex-start', alignContent: 'center', alignSelf: 'stretch', marginTop: 20 },
    gradient: {},
    text: {},
    done: { backgroundColor: 'red' },
});
