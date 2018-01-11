
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Platform,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    FlatList,
    SectionList,
    Alert,
} from 'react-native';

import data from './mock_data'

let ToastExample = require('./MyExample');

class MyList extends Component{
    constructor(props) {
        super(props);
        this.state = {dataList:[]}
    }

    // mock data
    componentDidMount(nextProps, nextState){
        console.log("componentDidMount");
        this.setState({dataList:data.dataList})
    }

    render(){
      defaultPic = "http://www.staticec.com/www/images/new/index/1.png"
        return (
            <FlatList
                data={
                    this.state.dataList
                }
                renderItem={({item})=>
                    <View style={listItemStyle.container}>
                      <Image source={{uri:item.logoFile==""?defaultPic:item.logoFile}} style={listItemStyle.image}/>
                      <View style={listItemStyle.subContainer}>
                          <Text style={listItemStyle.title} numberOfLines={2}>{item.title}</Text>
                          <Text style={listItemStyle.subText} numberOfLines={4}>{item.summary}</Text>
                      </View>
                    </View>
                }
            />
        );
    }
}

export default class App extends React.Component {

    onTextClick(){
        console.log('onclick');
    }

    // componentWillMount()，组件开始装载之前调用，在一次生命周期中只会执行一次。
    // componentDidMount()，组件完成装载之后调用，在一次生命周期中只会执行一次，从这里开始就可以对组件进行各种操作了，比如在组件装载完成后要显示的时候执行动画。
    // componentWillUpdate(object nextProps, object nextState)，组件属性更新之前调用，每一次属性更新都会调用
    // componentDidUpdate(object prevProps, object prevState)，组件属性更新之后调用，每次属性更新都会调用
    // componentWillUnmount()，组件卸载之前调用

    componentWillMount(){
        console.log("componentWillMount")
    }

    componentDidMount(nextProps, nextState){
        console.log("componentDidMount")
    }
    componentWillUpdate(prevProps, prevState){
        console.log("componentWillUpdate")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

    constructor(props){
        super(props)
    }

    render() {
    var str1 = this.props.first;
    var str2 = this.props.second;
        let pic = {
            uri:"http://www.staticec.com/www/images/new/index/1.png"
            // uri:"http://m.zhcw.com/upload/resources/image/2017/12/26/722978.png"
        };
        return (
            <View>
                <MyList/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        numberOfLines:3,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    bigText:{
        fontSize:30,
        fontWeight:'bold',
    },
    scrollContainer:{
        alignItems:'center',
    },
    itemStyle:{
        padding:10,
        fontSize:18,
    },
    groupStyle:{
        color:'#ff0000',
        padding:10,
        fontSize:25,
    },
});

const listItemStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        alignItems:'center',
        marginTop:10,
    },
    image: {
        width: 80,
        height: 80,
        left:10,
    },
    subContainer:{
        flex:1,
        flexDirection:'column',
        paddingHorizontal:10,
        marginLeft:10,
    },
    title: {
        fontSize: 18,
    },
    subText: {
        fontSize: 15,
        color: '#999999',
        numberOfLines:3,
    },
});
