/**
 * Created by zhangshengli on 2018/1/11.
 */
import React,{Component} from 'react';
import {
    Text,
    ScrollView,
    StyleSheet,
    Image,
    Button,
    Alert,
} from 'react-native';

export default class TestTouchable extends Component{
    mTouch(){
        console.log('touch')
    }


    render(){
        let buttonPress = ()=>{
            Alert.alert("按钮点击事件")
        }

        return(
            <ScrollView
                contentContainerStyle={{flex: 1,justifyContent:'flex-start',top:20}}
                maximumZoomScale={3}
                minimumZoomScale={1}>
                {/*<Text style={styles.txt} onpress={()=>this.mTouch()}>这是个文本</Text>*/}
                <Image
                    source={require('../img/1.png')}
                    style={{width:200,height:200}}
                />
                <Button
                    title={'按钮'}
                    onPress={buttonPress}
                ></Button>
            </ScrollView>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    txt:{
        fontSize:30,
    }
});