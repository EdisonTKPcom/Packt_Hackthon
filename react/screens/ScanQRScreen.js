import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import { Icon } from 'react-native-elements'
import { MonoText } from '../components/StyledText';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

const { width, height } = Dimensions.get('window')
export default class RawScreen extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
    }
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  handleBarCodeScanned = ({ type, data }) => {
    const { navigate } = this.props.navigation
    navigate('Updated')
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.hasCameraPermission == true && <View style={{width: width, height: height, padding: 5, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <BarCodeScanner
            onBarCodeScanned={this.handleBarCodeScanned}
            style={styles.layerContainer}>
            <View style={styles.layerTop} />
            <View style={styles.layerCenter}>
              <View style={styles.layerLeft} />
              <View style={styles.focused} />
              <View style={styles.layerRight} />
            </View>
            <View style={styles.layerBottom} />
          </BarCodeScanner>
        </View>}
      </View>
    )
  }
}

RawScreen.navigationOptions = {
  title: 'Scan QR',
  headerBackTitle: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  upperBackground: {
    width,
    height,
  },
  backgroundImage: {
    width,
    height,
    position: 'absolute',
  },
  scanButton: {
    right: 25,
    bottom: 100,
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'absolute',
    backgroundColor: '#3300FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigateButton: {
    right: 25,
    bottom: 25,
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'absolute',
    backgroundColor: '#3300FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  layerContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  layerTop: {
    width,
    height: 100,
    backgroundColor: 'rgba(0, 0, 0, .6)',
  },
  layerCenter: {
    flex: 1,
    flexDirection: 'row'
  },
  layerLeft: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .6)',
  },
  focused: {
    flex: 10
  },
  layerRight: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .6)',
  },
  layerBottom: {
    width,
    height: 200,
    backgroundColor: 'rgba(0, 0, 0, .6)',
  },
});
