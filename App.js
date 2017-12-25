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


export default class App extends Component<{}> {
  render() {

    let pic = {
      uri:"http://www.staticec.com/www/images/new/index/1.png"
    };


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
    alignItems:'center'
    },
});
