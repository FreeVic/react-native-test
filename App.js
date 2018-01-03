
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

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Greeting extends Component{
    render(){
        return(
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

class Blink extends Component{
    constructor(props){
        super(props);
        this.state = {showText:true};

        setInterval(()=>{
            this.setState(previousState=>{
                return {showText:!previousState.showText};
            })
        },1000);
    }
    render(){
        let disPlay = this.state.showText?this.props.text:' ';
        return (
            <Text style={styles.bigText}>{disPlay}</Text>
        );
    }
}

class MyInput extends Component{
    constructor(props) {
        super(props);
        this.state = {text:''}
    }

    render(){
        return (
            <View style={{padding:10,width:200}}>
              <TextInput
                  style={{height:40}}
                  placeholder = "type here to translate!"
                  onChangeText = {(text)=>this.setState({text})}
              />
              <Text style={{padding:10,fontSize:42}}>
                  {this.state.text.split(' ').map((word)=>word && 'A').join(' ')}
              </Text>
            </View>
        )
    }
}

class MyList extends Component{
    constructor(props) {
        super(props);
        this.state = {dataList:[]}
    }

    render(){
      defaultPic = "http://www.staticec.com/www/images/new/index/1.png"

      // get data
        fetch('http://m.zhcw.com/clienth5.do',
            // 方式一
            //     {
            //   method:'POST',
            //   headers:{
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json',
            //   },
            //     body:JSON.stringify({
            //         "transactionType":'8021',
            //         "pageNo":'1',
            //         "pageSize":'20',
            //         "busiCode":'300203',
            //     })
            // }
            // 方式二
            {
                method:'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'transactionType=8021&pageNo=1&pageSize=20&busiCode=300203',
            }
        ).then((response)=>response.json())
            .then((responseJson)=>this.setState({dataList:responseJson.dataList}))
            .catch((error)=>{console.error(error);})




        return (
            <FlatList
                data={
                    // [
                    //     {key: '这是个 FlatList'},
                    //     {key: 'Devin'},
                    //     {key: 'Jackson'},
                    //     {key: 'James'},
                    // ]
                    this.state.dataList
                }
                renderItem={({item})=>
                    <View style={listItemStyle.container}>
                      <Image source={{uri:item.logoFile==""?defaultPic:item.logoFile}} style={listItemStyle.image}/>
                      <View style={{flexDirection:'column'}}>
                          <Text style={listItemStyle.itemText}>{item.title}</Text>
                          <Text style={listItemStyle.subText}>{item.summary}</Text>
                      </View>
                    </View>
                }
            />
        );
    }
}

class MySection extends Component{
    render(){
        return (
            <SectionList
                sections={
                    [
                        {title: '这是个 SectionList',data:['SectionList']},
                        {title: '第二个分组', data:['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                    ]
                }
                renderItem={({item})=><Text style={styles.itemStyle}>{item}</Text>}
                renderSectionHeader={({section})=><Text style={styles.groupStyle}>{section.title}</Text>}
            />
        );
    }
}

export default class App extends React.Component {

    render() {

        let pic = {
            uri:"http://www.staticec.com/www/images/new/index/1.png"
            // uri:"http://m.zhcw.com/upload/resources/image/2017/12/26/722978.png"
        };

        return (
            <View style={styles.container}>
              <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.welcome}>
                  Welcome to React Native，helloworld!
                </Text>
                {/*<Text style={styles.instructions}>*/}
                  {/*To get started, edit App.js*/}
                {/*</Text>*/}
                {/*<Text style={styles.instructions}>*/}
                    {/*{instructions}*/}
                {/*</Text>*/}
                {/*<Greeting name='jack'/>*/}
                {/*<Greeting name='mary'/>*/}
                {/*<Blink text='this is a blink'/>*/}
                {/*<MyInput/>*/}
                <Image source={pic} style={{width:200,height:200}}/>
                {/*<Image source={pic} style={{width:200,height:200}}/>*/}
                {/*<Image source={pic} style={{width:200,height:200}}/>*/}
                {/*<Image source={pic} style={{width:200,height:200}}/>*/}
                {/*<Image source={pic} style={{width:200,height:200}}/>*/}
                {/*<Image source={require('./img/1.png')} style={{width:200,height:200}}/>*/}
                <MyList style={styles.listStyle}/>

                {/*<MySection/>*/}
              </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
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
    listStyle:{
        width:300,
        height:500,
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
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    image: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 8,
        marginBottom: 8,
        width: 100,
        height: 100,
    },
    itemText: {
        fontSize: 18,
        color: '#000000'
    },
    subText: {
        fontSize: 15,
        color: '#999999',
    },
    sectionView: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 2,
        paddingBottom: 2,
        color: '#999999'
    }
});
