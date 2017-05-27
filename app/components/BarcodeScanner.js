import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text, Alert } from 'react-native';
import Camera from 'react-native-camera';
import axios from 'axios';

class BarcodeScanner extends Component {
  constructor() {
    super();
    this.state = {
      // showCamera: true,
      scannedItem: "loading..."
    }
    this.onBarCodeRead = _.throttle(this.onBarCodeRead, 500);
  }

  render() {
      if (this.state.showCamera) {
        return (
          <View style={styles.container}>
            <Camera
              ref={(cam) => {
                this.camera = cam;
              }}
              style={styles.preview}
              aspect={Camera.constants.Aspect.fill}
              onBarCodeRead={(data) => this.requestItemInformation(data)}
            >
            </Camera>
          </View>
        );
      } else {
        return (
          <View>
            <Text>{this.state.scannedItem}</Text>
          </View>
        );
      }
  }

  requestItemInformation(data) {
    // this.setState({showCamera: false});
    var barcodeNumber = data.data;
    axios.get('https://api.upcdatabase.org/json/128009a43963c119609bd223c9f249cf/' + barcodeNumber)
      .then(response => this.setState({ scannedItem: response.data.description }));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default BarcodeScanner;
