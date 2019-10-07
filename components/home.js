import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
 
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Fiscaliza',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button
          title="Orgãos Federais"
          onPress={() => navigate('orgaos_federais')}
        />
      </View>
    );
  }
}