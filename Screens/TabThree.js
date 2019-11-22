import React from "react";
import { StyleSheet, View, Button, Alert, Text, ScrollView, ImageBackground } from "react-native";
import axios from "axios";
import Coruscant from '../img/Coruscant.jpg' 
import Tatooine from  '../img/tatooine.jpg'
import Bespin from  '../img/bespin.png'
import Dagobah from  '../img/dagobah.jpg'
import Endor from  '../img/Endor.jpg'
import Kashyyyk from  '../img/Kashyyyk.jpg'

export default class TabTwo extends React.Component {
  state = {
    characters: null,
    background: Coruscant
  };

  static navigationOptions = {
    tabBarLabel: "All Planets"
  };

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
    axios.get((url = "https://swapi.co/api/planets/")).then(res =>
      this.setState({
        characters: res.data.results
      })
    );
  };
  
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
        <ScrollView style={styles.scroll}>
          <Text style={[styles.textCenter, styles.text]}>Star-Wars planets</Text>
          <Text> </Text>

          {this.state.characters !== null ? (
            this.state.characters.map((chara, key) => (
              <View style={styles.characterSheet} key={key}>
                <Text style={styles.text}>Name : {chara.name}</Text>
                <Text style={styles.text}>Climate : {chara.climate}</Text>
              </View>
            ))
          ) : (
            <Text style={[styles.textCenter, styles.text]}>Loading…</Text>
          )}
        </ScrollView>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingTop: 50,
    minHeight: '100%'
  },
  scroll: {
    width: "100%",
    margin: "auto",
    marginTop: 5,
  },
  textCenter: {
    textAlign: "center",
  },
  text: {
    color: '#fff',
  },
  characterSheet: {
    flex: 1,
    backgroundColor:"#000",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10%"
  }
});
