import React, {Component} from 'react';
import { View, Text, Image, TouchableHighlight, DOMParser, ListView, StyleSheet} from 'react-native';
import Screen from './Screen'

export default class RssScreen extends Screen {

    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: this.ds.cloneWithRows([{title: 'Loading...'}])
        };
        this.fetchData();
    }

    fetchData() {
        fetch('https://stormit.pl/feed')
            .then((response) => response.text())
            .then((responseText) => {
var DOMParser = require('react-native-html-parser').DOMParser;
const domParser = new DOMParser();
const doc = domParser.parseFromString(responseText, 'text/xml');

let items = doc.getElementsByTagName('item');

let objs = []
for (var i = 0; i < items.length; i++) {
    const parsedDescription = domParser.parseFromString(items[i].getElementsByTagName('description')[0].textContent, "text/xml");
    objs.push({
        title: items[i].getElementsByTagName('title')[0].textContent,
        uri: items[i].getElementsByTagName('link')[0].textContent,
        image: this.getSmallestSrc(parsedDescription.getElementsByTagName('img')[0].getAttribute('srcset'))
    })
}

                this.setState({
                    dataSource: this.ds.cloneWithRows(objs)
                });
            })
            .done();
    }

    render() {
        return (
            <ListView
                style={styles.listView}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <View style={styles.row}>
                            <Image style={styles.image} source={{ uri: rowData.image }} />
                            <Text style={styles.text}>{rowData.title}</Text>
                        </View>}
                enableEmptySections={true}
                renderFooter={() =>                 <View style={styles.row}>
                            <TouchableHighlight onPress={this.redirect.bind(this, 'StartScreen')} style={styles.back}>
                                <Text>Wróć</Text>
                            </TouchableHighlight>
                        </View>}
            />
        );
    }

    getSmallestSrc(srcSet) {
        let set = srcSet.split(',');
        let map = {};
        for (let i = 0; i < set.length; i++) {
            let item = set[i].trim().split(' ');
            map[parseInt(item[1].trim().replace('w', ''))] = item[0].trim();
        }

        map = this.sortObject(map);

        let keys = Object.keys(map);
        return map[keys[0]];
    }

    sortObject(obj) {
        return Object.keys(obj).sort().reduce(function (result, key) {
            result[key] = obj[key];
            return result;
        }, {});
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
