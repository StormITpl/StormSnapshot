import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Screen from './Screen'

export default class SettingScreen extends Screen {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Aplikacja <Text style={{fontWeight: 'bold'}}>ReactNativeSampleProject </Text>
                    powstała jako demonstracja podstawowych możliwości biblioteki <Text style={{fontWeight: 'bold'}}>React Native</Text>.
                        Więcej na temat projektu można przeczytać na stronie: {'\n'}{'\n'}https://stormit.pl/react-native-pierwsza-aplikacja/ </Text>
                    <TouchableHighlight onPress={this.back.bind(this)} style={styles.back}>
                        <Text>Wróc</Text>
                    </TouchableHighlight>
            </View>
        );
    }
    ;
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#3399ff',
        padding: 10
    },
    text: {
        flex: 1
    },
    back: {
        backgroundColor: '#0066ff',
        padding: 5,
        marginTop: 20,
        alignItems: 'center'
    }
};