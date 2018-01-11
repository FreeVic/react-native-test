/**
 * Created by zhangshengli on 2018/1/11.
 */
import React,{Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    Alert,
    TouchableHighlight,
} from 'react-native';

export default class TestImage extends Component{
    constructor(props){
        super(props)

    }

    mOnLoad(){
        console.log('mOnLoad')
    }

    mOnLayout(){
        console.log('onLayout')
    }

    mOnLoadStart(){
        console.log('onLoadStart')
    }

    render(){
        return(
            <View style={styles.container}>
            <TouchableHighlight
                onPress={()=>this.mOnLoad()}
                activeOpacity={0.9}
            >
                <Image
                    style={styles.img}
                    // source={{uri:'../img/1.png'}}
                    source={require('../img/1.png')}
                />
            </TouchableHighlight>

            <Image
                style={styles.img}
                onload={()=>this.mOnLoad()}
                onLayout={()=>this.mOnLayout()}
                onLoadStart={()=>this.mOnLoadStart()}
                resizeMode={'contain'} // enum('cover', 'contain', 'stretch', 'repeat', 'center')
                source={{uri: 'https://reactnative.cn/static/docs/0.51/img/components/image.png'}}
            />
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    img:{
        width:200,
        height:200,
        borderColor:"#707070",
        borderRadius:14,
        borderWidth:2,
        borderBottomLeftRadius:2,
        borderBottomRightRadius:14,
        overlayColor:"#FFFFFF",
    }
});