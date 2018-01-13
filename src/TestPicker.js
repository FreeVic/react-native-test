/**
 * Created by zhangshengli on 2018/1/11.
 */
import React,{Component} from 'react';
import {
   View,
    Alert,
    StyleSheet,
    Text,
    Picker,
} from 'react-native';

export default class TestPicker extends Component{
    state = {
        language:'haha',
    }


    render(){

        return(
            <View style={styles.container}>
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        top:20,
    }
});