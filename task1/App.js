import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, TouchableHighlight } from 'react-native';
import Statistics from './components/statistics';
import Contact from './components/Contact.js';
import ProfPic from './components/ProfPic';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {/* <LinearGradient colors={['#00f', '#fff']} start={{ x: 0.5, y: 0.45 }} end={{ x: 0.5, y: 0.45001 }} style={styles.gradient}> */}
            {/* <TouchableOpacity> */}
            {/* <Text style={styles.buttonText}>I am a button</Text> */}
            {/* <ProfPic />
                <Statistics />
                <Contact />
                <Button title="Follow Me" style={{ borderRadius: 150, borderWidth: 55 }} /> */}
            {/* </TouchableOpacity> */}
            {/* </LinearGradient> */}
            <View style={styles.top}>
                <ProfPic />
            </View>
            <View style={styles.bottom}>
                <Statistics styles={{ top: -50 }} />
                <Contact />
                <TouchableHighlight style={styles.submit} onPress={() => this.submitSuggestion(this.props)} underlayColor="#fff">
                    <Text style={[styles.submitText]}>Follow Me</Text>
                </TouchableHighlight>
                {/* <Button title="Follow Me" style={{ borderRadius: 25, borderWidth: 10, width: 100, height: 100 }} /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // paddingTop: 50,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        // height: '110%',
        // width: 1000,
        backgroundColor: '#eee',
        alignSelf: 'stretch',
        flexShrink: 500,
    },
    text: {
        fontSize: 150,
    },
    top: {
        flex: 1,
        backgroundColor: '#0000ee',
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    bottom: {
        flex: 2,
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    submit: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        padding: 20,
        // paddingBottom: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
    },
});
