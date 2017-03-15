import React, {Component} from 'react';
import {AppRegistry, Navigator} from 'react-native';

import StartScreen from './screens/StartScreen';
import ListScreen from './screens/ListScreen';
import RssScreen from './screens/RssScreen';
import SettingsScreen from './screens/SettingsScreen';

class StartApp extends Component {
    renderScene(route, navigator) {
        if (route.name == 'StartScreen') {
            return <StartScreen navigator={navigator}/>
        }
        if (route.name == 'SettingsScreen') {
            return <SettingsScreen navigator={navigator}/>
        }
        if (route.name == 'ListScreen') {
            return <ListScreen navigator={navigator}/>
        }
        if (route.name == 'RssScreen') {
            return <RssScreen navigator={navigator}/>
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{name: 'StartScreen'}}
                renderScene={this.renderScene.bind(this)}
            />
        );
    }
}

AppRegistry.registerComponent('ReactNativeSampleProject', () => StartApp);
