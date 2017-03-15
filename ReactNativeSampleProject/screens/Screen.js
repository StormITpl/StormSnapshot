import React, {Component} from 'react';

export default class Screen extends Component {
    redirect(routeName) {
        this.props.navigator.push({
            name: routeName
        });
    }

    back() {
        this.props.navigator.pop();
    }
}