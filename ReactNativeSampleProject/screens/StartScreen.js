import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import Screen from './Screen'

export default class StartScreen extends Screen {
    render() {
        return (<View style={styles.container}>
            <Image style={styles.logo} source={require('../img/logo.png')}/>
            <Text style={styles.title}>ReactNativeSampleProject</Text>
            <View style={styles.images}>
                <TouchableHighlight onPress={this.redirect.bind(this, 'SettingsScreen')}>
                    <Image style={styles.image} source={require('../img/settings.png')}/>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.redirect.bind(this, 'ListScreen')}>
                    <Image style={styles.image} source={require('../img/list.png')}/>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.redirect.bind(this, 'RssScreen')}>
                    <Image style={styles.image} source={require('../img/rss.png')}/>
                </TouchableHighlight>
            </View>
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3399ff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        flex: 1,
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    images: {
        flexDirection: 'row'
    },
    image: {
        margin: 10,
        width: 50,
        height: 50,
    },
    title: {
        color: 'white'
    }
});