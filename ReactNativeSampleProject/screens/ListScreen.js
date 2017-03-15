import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight, ListView, StyleSheet} from 'react-native';
import Screen from './Screen'

export default class ListScreen extends Screen {

    constructor(props) {
        super(props);
        this.prepareRows();
    }

    prepareRows() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.title !== r2.title});
        const images = [
            require('../img/list.png'),
            require('../img/rss.png'),
            require('../img/settings.png')];
        let rows = [];
        for (let i = 0; i < 100; i++) {
            let image = images[i % images.length];
            rows.push({image: image, title: 'Row item number : ' + i});
        }
        this.state = {
            dataSource: ds.cloneWithRows(rows),
        };
    }

    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <View style={styles.row}>
                            <Image style={styles.image} source={rowData.image}/>
                            <Text>{rowData.title}</Text>
                        </View>}
                    renderFooter={() =>                 <View style={styles.back}>
                            <TouchableHighlight onPress={this.back.bind(this)}>
                                <Text>Wróć</Text>
                            </TouchableHighlight>
                        </View>}
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#3399ff'
    },
    image: {
        width: 64,
        height: 64
    },
    text: {
        flex: 1
    },
    back : {
        backgroundColor: '#0066ff',
        padding: 5,
        marginTop: 20,
        alignItems: 'center',
        flex: 1
    }
});
