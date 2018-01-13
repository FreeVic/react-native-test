/**
 * Created by zhangshengli on 2018/1/11.
 */
import React,{Component} from 'react';
import {
   View,
    Alert,
    TextInput,
    StyleSheet,
    Text,
} from 'react-native';

export default class TestInput extends Component{
    constructor(props){
        super(props)
        this.state = {
            value:'',
        }
    }
    render(){

        return(
            <View>
                <Text>输入的值：{this.state.value}</Text>
                <TextInput
                    onChangeText={(txt)=>this.setState({value:txt})}
                ></TextInput>
            </View>
        )
    }
}

const styles= StyleSheet.create({

});