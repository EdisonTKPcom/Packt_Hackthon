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
  Button
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import { Icon } from 'react-native-elements'
import { MonoText } from '../components/StyledText';

const { width, height } = Dimensions.get('window')
let outerNavigate = null
export default class UpdatedScreen extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    outerNavigate = navigate
    return (
      <View style={styles.container}>
        <ScrollView >
          <View style={styles.upperBackground}>
            <Image source={require('../assets/images/updated.png')} style={styles.backgroundImage}/>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.navigateButton} onPress={() => navigate('ScanQR')}>
          <Image source={require('../assets/images/navigate.png')} style={{width: 30, height: 30}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scanButton} onPress={() => navigate('ScanQR')}>
          <Image source={require('../assets/images/scan.png')} style={{width: 30, height: 30}}/>
        </TouchableOpacity>
      </View>
    )
  }
}

UpdatedScreen.navigationOptions = {
  title: 'Navigation',
  headerLeft: null,
  headerRight: (
    <TouchableOpacity style={{
      width: 50,
      height: 50,
      borderRadius: 50,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }} onPress={() => outerNavigate('Home')}>
      <Icon
        name='close'
        color={'#000'}
        size={30}
        type={'material'}
      />
    </TouchableOpacity>
  ),
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
  closeButton: {
    top: 25,
    left: 25,
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'absolute',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
