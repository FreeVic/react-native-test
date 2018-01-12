/**
 * Created by zhangshengli on 2018/1/11.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    Button,
    Alert,
    Slider,
} from 'react-native';

export default class TestTouchable extends Component{
    constructor(props){
        super(props)

        this.props={
            value:12,
        }

        this.state = {
            value:this.props.value,
        }


    }


    mTouch(){
        console.log('touch')
    }


    render(){
        let buttonPress = ()=>{
            Alert.alert("按钮点击事件")
        }

        let mOnSlideComplete=(value)=>{

            Alert.alert('mOnSlideComplete')
        }

        let mOnSliding = (value)=>{
            this.setState({value:value})
            console.log('mOnSliding')
        }


        return(
            <ScrollView
                contentContainerStyle={styles.container}
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
                <Slider
                    maximumTrackTintColor='#FF0000'
                    minimumTrackTintColor='#00FF00'
                    maximumValue={20}
                    minimumValue={10}
                    onSlidingComplete={mOnSlideComplete}
                    onValueChange={mOnSliding}
                    step={2}
                    // thumbImage={require('../img/1.png')}
                    thumbTintColor={'#0000FF'}
                    value={this.state.value}
                >
                </Slider>
                <Text>当前值：{this.state.value}</Text>
            </ScrollView>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        top:20,
        flexDirection:'column',
        justifyContent:'flex-start',
        // alignItems:'flex-start',
    },
    txt:{
        fontSize:30,
    }
});