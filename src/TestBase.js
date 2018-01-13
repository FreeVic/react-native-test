/**
 * Created by zhangshengli on 2018/1/11.
 */
import React,{Component} from 'react';
import {
   View,
    Alert,
    StyleSheet,
    Text,
} from 'react-native';

export default class TestBase extends Component{

    render(){

        return(
            <View style={styles.container}>

            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        top:20,
    }
});