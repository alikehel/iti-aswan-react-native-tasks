import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.div}>
                <Text style={styles.text}>Photos</Text>
                <Text style={{ color: 'green' }}>100</Text>
            </View>
            <View style={styles.div}>
                <Text style={styles.text}>Followers</Text>
                <Text style={{ color: 'green' }}>1000</Text>
            </View>
            <View style={styles.div}>
                <Text style={styles.text}>Following</Text>
                <Text style={{ color: 'green' }}>50</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: .2,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        // borderWidth: 4,
        // borderColor: '#fff',
        borderRadius: 15,
        width: 300,
        height: 100,
        top: -110,
        // overflow: 'hidden',
    },
    text: {
        fontSize: 15,
    },
    div: {
        alignItems: 'center',
        // justifyContent: 'space-around',
    },
});
