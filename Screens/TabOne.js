import React from 'react';
import { StyleSheet, View, Button, Alert, Text, TouchableOpacity, Header, ImageBackground} from 'react-native';
import axios from 'axios';
import Coruscant from '../img/Coruscant.jpg' 
import Tatooine from  '../img/tatooine.jpg'
import Bespin from  '../img/bespin.png'
import Dagobah from  '../img/dagobah.jpg'
import Endor from  '../img/Endor.jpg'
import Kashyyyk from  '../img/Kashyyyk.jpg'

export default class TabOne extends React.Component {
  state = {
      character: null,
      background: Coruscant
  }
  
    static navigationOptions = {
    tabBarLabel: 'Random Character',
  };

  handleClick = () => {
      let random = Math.floor(Math.random() * 10)
        axios.get(url = 'https://swapi.co/api/people/')
        .then(res => this.setState({
            character: res.data.results[random]
        }))
      }

      componentDidMount = () => {
        bgNumber = Math.ceil(Math.random() * 7)
        switch (bgNumber) {
          case 1 : this.setState({background: Coruscant}); break;
          case 2 : this.setState({background: Bespin}); break;
          case 3 : this.setState({background: Dagobah}); break;
          case 4 : this.setState({background: Kashyyyk}); break;
          case 5 : this.setState({background: Tatooine}); break;
          case 6 : this.setState({background: Endor}); break;
        }
       }
      
       componentDidUpdate = () => {
        bgNumber = Math.ceil(Math.random() * 7)
        switch (bgNumber) {
          case 1 : this.setState({background: Coruscant}); break;
          case 2 : this.setState({background: Bespin}); break;
          case 3 : this.setState({background: Dagobah}); break;
          case 4 : this.setState({background: Kashyyyk}); break;
          case 5 : this.setState({background: Tatooine}); break;
          case 6 : this.setState({background: Endor}); break;
        }
       }

  render() {
    return (
      <ImageBackground source={this.state.background} style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        
        <Text style={styles.text}>Star-Wars API for React-Native</Text>
        <Text> </Text>
        {this.state.character !== null ? <>
        <Text style={styles.text}>Name : {this.state.character.name}</Text>
        <Text style={styles.text}>Gender : {(this.state.character.gender === 'n/a') ? 'Droid' : this.state.character.gender}</Text>
        <Text> </Text>
        <TouchableOpacity style={styles.button} onPress={this.handleClick.bind(this)} title="Get another character" ><Text style={styles.text}>Get another character</Text></TouchableOpacity>
        </>
        :
        <TouchableOpacity style={styles.button} onPress={this.handleClick.bind(this)} title="Click to get a Random Star-Wars character" ><Text style={styles.text}>Click to get a Random Star-Wars character</Text></TouchableOpacity>
    }
        
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:50,
  },
  text: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#000',  
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#fff',
    padding: 10,
  }
});
