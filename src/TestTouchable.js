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
    TextInput,
} from 'react-native';

export default class TestTouchable extends Component{
    constructor(props){
        super(props)
        this.state = {
            value:this.props.value,
            showBtn:true,
        }
    }

    static defaultProps = {
        value:12,
    }


    mTouch(){
        console.log('touch')
    }


    render(){
        let buttonPress = ()=>{
            Alert.alert("按钮点击事件")
        }

        let mOnSlideComplete=(value)=>{

        }

        let mOnSliding = (value)=>{
            this.setState({value:value,showBtn:value>16?false:true})
            console.log('mOnSliding')
        }

        let getButton = ()=>{
            return this.state.showBtn && <Button
                title={'修改'}
                onPress={buttonPress}
            ></Button>
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
                {getButton()}
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