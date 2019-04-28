import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

class HomeScreen extends React.Component {
  /*
    constructor(props) {
    super(props);
    this.state = {
      toppings: ['peperoni','sausage','ham','chicken','meatballs']
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        toppings: ['peperoni','sausage','ham','chicken','meatballs']
      });
    }, 5000);
  }
  */

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text style={styles.titletext}>Pizza Maker</Text>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('Details')}>
          <Text style={styles.buttonText}>Let's Make a Pizza!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle2} onPress={() => this.props.navigation.navigate('Favorites')}>
          <Text style={styles.buttonText2}>Your Faviortes</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class FavoritesScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.titletext2}>Favorites Screen</Text>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.titletext2}>Toppings Screen</Text>

          {/*
         <CheckboxGroup name="toppings" value={this.state.toppings} onChange={this.toppingsChanged}>
            <Checkbox value="pepperoni"/>
            <Checkbox value="sausage"/>
            <Checkbox value="ham"/>
            <Checkbox value="chicken"/>
           <Checkbox value="meatballs"/>
          </CheckboxGroup>
          */}

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.buttonStyle2} onPress={() => this.props.navigation.navigate('Submit')}>
              <Text style={styles.buttonText3}>Submit Pizza</Text>
            </TouchableOpacity>
          </View>

          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }

class SubmitScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Results will go here</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

const styles = StyleSheet.create({
  buttonText:
  {
    color:'white',
    fontSize:35,
    margin:5,
  },
  buttonText2:
  {
    color:'white',
    fontSize:25,
    margin:10,
  },
  buttonText3:
  {
    color:'white',
    fontSize:20,
    margin:15,
  },
  buttonStyle:
  {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'red',
    height:75,
    margin:30,
  },
  buttonStyle2:
  {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'green',
    height:55,
    margin:30,
  },
  titletext:
  {
    color:'black',
    fontSize:25,
  },
  titletext2:
  {
    color:'black',
    fontSize:25,
    margin:15,
  },
  button_main:
  {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'green',
    height:65,
    margin:30,
  },
  textInput:
  {
    margin:30,
    height:75,
    fontSize:20
  },
  defaultText:
  {
    fontSize:20,
    color:'green',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop:50,
  },
  defaultText2:
  {
    fontSize:20,
    color:'red',
    alignItems:'stretch',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
