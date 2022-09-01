import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://picsum.photos/200', width: 50, height: 50 }} style={styles.img}></Image>
            <Text style={styles.text}>Ali Kehel</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: '#ffffff',
    },
    img: {
        borderRadius: 50,
        width: 80,
        height: 80,
    },
});
