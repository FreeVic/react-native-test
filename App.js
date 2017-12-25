/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
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
  render(){
    return (
        <FlatList
          data={
            [
                {key: '这是个 FlatList'},
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
            ]
          }
          renderItem={({item})=><Text style={styles.itemStyle}>{item.key}</Text>}
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

export default class App extends Component<{}> {
  render() {

    let pic = {
      uri:"http://www.staticec.com/www/images/new/index/1.png"
    };

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
        .then((responseJson)=>Alert.alert(responseJson.totalPage.toString()))
        .catch((error)=>{console.error(error);})

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.welcome}>
          Welcome to React Native，helloworld!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Greeting name='jack'/>
        <Greeting name='mary'/>
        <Blink text='this is a blink'/>
        <MyInput/>
        <Image source={pic} style={{width:200,height:200}}/>
          <Image source={pic} style={{width:200,height:200}}/>
          <Image source={pic} style={{width:200,height:200}}/>
          <Image source={pic} style={{width:200,height:200}}/>
          <Image source={pic} style={{width:200,height:200}}/>
          <Image source={require('./img/1.png')} style={{width:200,height:200}}/>
          <MyList style={styles.listStyle}/>

            <MySection/>
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
