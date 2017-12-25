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


export default class App extends Component<{}> {
  render() {

    let pic = {
      uri:"http://www.staticec.com/www/images/new/index/1.png"
    };


    return (
      <View style={styles.container}>
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
        <Image source={pic} style={{width:200,height:200}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
      flex:1
  },
});
