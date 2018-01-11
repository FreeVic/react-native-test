/**
 * Created by zhangshengli on 2018/1/11.
 */
import React,{Component} from 'react';
import {
    Text,
    StyleSheet,
    Alert,
} from 'react-native';

export default class TestText extends Component{
    constructor(props){
        super(props);

    }

    mClick(){
        Alert.alert('click')
    }

    mLongClick(){
        Alert.alert('long click')
    }
    mLayout(){
        Alert.alert('layout change')
    }
    render(){
        return (
            <Text
                style={styles.txt}
                onPress={()=> this.mClick()}
                onLongPress={()=>this.mLongClick()}
                allowFontScaling={true}
                adjustsFontSizeToFit={true}
                onLayout={()=>this.mLayout()}
                numberOfLines={3}
                selectable={true}
                disabled={false}
            >Hello nice{this.props.name}!
                <Text>{'\n'}inside</Text>
            </Text>
        )
    }
}

const styles= StyleSheet.create({
    txt:{
        fontSize:30,
        color:'#707070',
        fontFamily:'Georgia',
        fontStyle:'italic',
        fontWeight:'bold',
        lineHeight:50,
        textAlign:'right',
        textDecorationLine:'underline',
        textShadowColor:'#FF0000',
        textShadowOffset:{width:1,height:1},
        textShadowRadius:2,
        includeFontPadding:false,
    }
});