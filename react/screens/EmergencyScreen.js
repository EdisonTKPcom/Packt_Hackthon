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

const { width, height } = Dimensions.get('window')
let outerNavigate = null

export default class EmergencyScreen extends Component<{}> {
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
            <Image source={require('../assets/images/sos.png')} style={styles.backgroundImage}/>
            <Image source={require('../assets/images/sosMap.png')} style={styles.backgroundImage}/>
          </View>
        </ScrollView>
      </View>
    )
  }
}

EmergencyScreen.navigationOptions = {
  title: 'Emergency',
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
    height: height / 2 - 80,
    resizeMode: 'contain'
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
  }
});
