import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';




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

          <RadioForm
              radio_props={radio_props}
              initial={0}
              onPress={(value) => {this.setState({value:value})}}
          />

          <RadioForm
            radio_props={radio_props}
            initial={0}
            onPress={(value) => {this.setState({value:value})}}
          />

          <RadioForm
            radio_props={radio_props}
            initial={0}
            onPress={(value) => {this.setState({value:value})}}
          />

          <RadioForm
            radio_props={radio_props}
            initial={0}
            onPress={(value) => {this.setState({value:value})}}
          />

          <RadioForm
            radio_props={radio_props}
            initial={0}
            onPress={(value) => {this.setState({value:value})}}
          />

          <RadioForm
            radio_props={radio_props}
            initial={0}
            onPress={(value) => {this.setState({value:value})}}
          />

          <RadioForm
            radio_props={radio_props}
            initial={0}
            onPress={(value) => {this.setState({value:value})}}
          />


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
