import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.div}>
                <Text style={styles.text}>ICON: </Text>
                <Text style={{ color: 'green' }}>email@mail.com</Text>
            </View>
            <View style={styles.div}>
                <Text style={styles.text}>ICON: </Text>
                <Text style={{ color: 'green' }}>0123456789</Text>
            </View>
            <View style={styles.div}>
                <Text style={styles.text}>ICON: </Text>
                <Text style={{ color: 'green' }}>Add To Group</Text>
            </View>
            <View style={styles.div}>
                <Text style={styles.text}>ICON: </Text>
                <Text style={{ color: 'green' }}>Show All Coments</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: .2,
        flexDirection: 'column',
        // backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'space-between',
        // justifyItems: 'stretch',
        width: 200,
        height: 150,
        // overflow: 'hidden',
    },
    text: {
        fontSize: 15,
    },
    div: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-around',
    },
});
