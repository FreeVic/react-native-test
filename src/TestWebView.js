import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class TestWebView extends Component {
    render() {
        return (
            <WebView
                source={{uri: 'https://www.workec.com'}}
                style={{marginTop: 20}}
            />
        );
    }
}