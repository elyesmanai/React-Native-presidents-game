/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,TouchableOpacity} from 'react-native';


class CounterButton extends Component {
  state = {
    counter1: 0,
    counter2: 0,
    total: 40,
  };
  render() {
   
    if (this.state.total == 0 && this.state.counter2<this.state.counter1) {
      return (
        <View>
          <Text style={styles.paragraph}>
            Vraiment mafchil 3ichitkom, intouma sbab 3lech Tounis haka
          </Text>
          <Text style={styles.paragraph}>
            7asilou, reba7 howa président 1
          </Text>
          
          <TouchableOpacity
            style={{ backgroundColor: '#d3d3d3' }}
            onPress={() =>
              this.setState({
               total : 30,
               counter1:0,
               counter2:0,
              })}>
            
            <Text style={[styles.paragraph]}>
               3awid
            </Text>
          </TouchableOpacity>
          
        </View>
      );

     }else if (this.state.total == 0 && this.state.counter1<this.state.counter2) {
      return (
        <View>
          <Text style={styles.paragraph}>
            Vraiment mafchil 3ichitkom, intouma sbab 3lech Tounis haka
          </Text>
          <Text style={styles.paragraph}>
            7asilou, reba7 howa président 2
          </Text>
          
          <TouchableOpacity
            style={{ backgroundColor: '#d3d3d3' }}
            onPress={() =>
              this.setState({
               total : 30,
               counter1:0,
               counter2:0,
               winner:1,
              })}>
            
            <Text style={[styles.paragraph]}>
               3awid
            </Text>
          </TouchableOpacity>
          
        </View>
      );  
    } else {
      return (
        <View>
          <TouchableOpacity
            style={{ backgroundColor: '#d3d3d3' }}
            onPress={() =>
              this.setState({
                counter1: this.state.counter1 + 1,
                total: this.state.total - 1,
              })}>

            <Text style={[styles.paragraph, styles.inversed]}>
              Président 1 {'\n'}{'\n'}
              {this.state.counter1}

            </Text>
          </TouchableOpacity>
          <Text style={styles.paragraph}> {'\n'}{'\n'} </Text>
          <TouchableOpacity
            style={{ backgroundColor: '#d3d3d3' }}
            onPress={() =>
              this.setState({
                counter2: this.state.counter2 + 1,
                total: this.state.total - 1,
              })}>

            <Text style={styles.paragraph}>
              Président 2 {'\n'}{'\n'}
              {this.state.counter2}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}




export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
         <CounterButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCFBE3',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
   inversed: {
    transform: [{ rotate: '180deg' }],
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
