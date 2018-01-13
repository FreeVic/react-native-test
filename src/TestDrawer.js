/**
 * Created by zhangshengli on 2018/1/11.
 */
import React, {Component} from 'react';
import {
    View,
    Alert,
    StyleSheet,
    Text,
    DrawerLayoutAndroid,
} from 'react-native';
import TestPicker from './TestPicker';

export default class TestDrawer extends Component {

    render() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
                <TestPicker/>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={100}
                drawerPosition={DrawerLayoutAndroid.positions.Right}
                renderNavigationView={() => navigationView}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        top: 20,
    }
});