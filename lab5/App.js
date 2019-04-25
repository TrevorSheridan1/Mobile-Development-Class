import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { RadioGroup, RadioButton } from 'react-radio-buttons';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Pizza Maker</Text>
        <Button
          title="Let's Make A Pizza!"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Toppings Screen</Text>

        <RadioGroup>
          <RadioButton value="pepperoni">
            <Text>Pepperoni</Text>
          </RadioButton>

          <RadioButton value="sausage">
            <Text>Sausage</Text>
          </RadioButton>

          <RadioButton value="ham">
            <Text>Ham</Text>
          </RadioButton>

          <RadioButton value="chicken">
            <Text>Chicken</Text>
          </RadioButton>

          <RadioButton value="bacon">
            <Text>Bacon</Text>
          </RadioButton>

          <RadioButton value="white sauce">
            <Text>White Sauce</Text>
          </RadioButton>

          <RadioButton value="red sauce">
            <Text>Red Sauce</Text>
          </RadioButton>

          <RadioButton value="onions">
            <Text>Onions</Text>
          </RadioButton>

          <RadioButton value="spinach">
            <Text>Spinach</Text>
          </RadioButton>

          <RadioButton value="peppers">
            <Text>Peppers</Text>
          </RadioButton>

          <RadioButton value="jalapenos">
            <Text>Jalapenos</Text>
          </RadioButton>

          <RadioButton value="extra cheese">
            <Text>Extra Cheese</Text>
          </RadioButton>
        </RadioGroup>


        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="Submit Pizza"
            onPress={() => this.props.navigation.navigate('Submit')}
          />
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
    fontSize:40
  },
  buttonStyle:
  {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'red',
    height:75,
    margin:30,
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
