import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import {
    Button,
    Alert,
} from 'react-native';

class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'MainScreenM',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile',{name:'Jane'})
        }
      />
    );
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
          navigate('Main',{name:'Jack'})
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


