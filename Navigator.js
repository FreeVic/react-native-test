import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import {
    Button,
    Alert,
    Image,
    View,
    NativeModules,
    DeviceEventEmitter,
} from 'react-native';

var ToastExample = require('./MyExample')

class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'MainScreenM',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
    	<View>
		  <Button
		    title="Go to Jane's profile"
		    onPress={() =>
		      navigate('Profile',{name:'Jack'})
          // Alert.alert('哈哈')
		    }
		  />
		  <Image source={require('./img/1.png')} style={{width:200,height:200}}/>
    	</View>
    );
  }

  componentDidMount() {  
      DeviceEventEmitter.addListener('EVENT_TIME',(msg)=>{  
           title = "React Native界面,收到数据：" + msg;  
           ToastExample.show(title);  
      })  
  }  

}


class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'ProfileScreen',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jack's profile"
        onPress={() =>
          {ToastExample.show('原生Toast！')}
        }
      />
    );
  }
}


const App = StackNavigator({
  Main: {screen: MainScreen},
  Profile: {screen: ProfileScreen},
});

export default App


