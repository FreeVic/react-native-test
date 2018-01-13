/**
 * Created by zhangshengli on 2018/1/11.
 */
import React,{Component} from 'react';
import {
   View,
    Alert,
    StyleSheet,
    CheckBox,
    Text,
} from 'react-native';

export default class TestCheckBox extends Component{
    state = {
        check:false,
    }


    render(){

        return(
            <View style={styles.container}>
                <Text>当前状态：{this.state.check.toString()}</Text>
                <CheckBox
                    style={styles.checkBox}
                    value={this.state.check}
                    onValueChange={(value)=>{this.setState({check:value})}}
                    onchange={()=>{Alert.alert('哈哈')}}
                />
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        top:20,
    },
    checkBox:{
        width:50,
        height:50,
    }
});