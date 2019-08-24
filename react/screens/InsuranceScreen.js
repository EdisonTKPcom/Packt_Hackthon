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

export default class InsuranceScreen extends Component<{}> {
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
            <Image source={require('../assets/images/tune.png')} style={styles.backgroundImage}/>
            <View style={styles.center}>
              <TouchableOpacity onPress={() => navigate('Emergency')} style={styles.button}>
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigate('Emergency')} style={styles.button}>
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

InsuranceScreen.navigationOptions = {
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
  insuranceBackgroundImage: {
    width,
    height: height / 2 - 80,
    resizeMode: 'contain'
  },
  insuranceButton: {
    width: width - 150,
    height: 50,
    backgroundColor: '#FF0000',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  insuranceButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  insuranceCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
