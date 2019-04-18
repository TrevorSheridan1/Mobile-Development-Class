import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
  TouchableOpacity,
} from "react-native";
import { Slide } from 'react-slideshow-image';

class MySlideshow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: 'Picture 1',
          caption: 'Caption 1',
          url: 'http://placeimg.com/640/480/any',
        }, {
          title: 'Picture 2',
          caption: 'Caption 2',
          url: 'http://placeimg.com/640/480/any',
        }, {
          title: 'Picture 3',
          caption: 'Caption 3',
          url: 'http://placeimg.com/640/480/any',
        }, {
          title: "Picture 4",
          caption: 'Caption 4',
          url: 'http://placeimg.com/640/480/any',
        }, {
          title: "Picture 5",
          caption: 'Caption 5',
          url: 'http://placeimg.com/640/480/any',
        }
      ],
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 2000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
    <Slideshow
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })} />
    );
  }
}

  export default MySlideshow;
