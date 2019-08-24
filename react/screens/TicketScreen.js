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
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window')
export default class TicketScreen extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.upperBackground}>
          <LinearGradient
            colors={['#0089FF', '#3347F9']}
            style={styles.linearGradient}>
          </LinearGradient>
          <View style={styles.qrCodeBackground}>
            <Text style={styles.boldText}>ECONOMY CLASS</Text>
            <Text style={styles.boldText}>Boarding : GATE AF 01</Text>
            <Text style={styles.boldText}>Seat : A001</Text>
            <Image source={require('../assets/images/qrCode.png')} style={{width: 200, height: 200}}/>
            <View style={styles.qrCodeDownBackground}>
              <View style={styles.buttonIcon}></View>
              <View style={styles.marginLeft10}>
                <Text style={styles.boldText}>Flight Number : AK1543</Text>
                <Text style={styles.boldText}>Boarding Time : 14:25:45</Text>
              </View>
            </View>
            <View style={styles.bottomBackground}>
              <View style={styles.bottomTextBackground}>
                <Text style={styles.shortText}>KUL</Text>
                <Text style={styles.longText}>Kuala Lumpur</Text>
                <Text style={styles.longText}>Malaysia</Text>
              </View>
              <View style={styles.buttonIcon}></View>
              <View style={styles.bottomTextBackground}>
                <Text style={styles.shortText}>DMK</Text>
                <Text style={styles.longText}>Bangkok</Text>
                <Text style={styles.longText}>Thailand</Text>
              </View>
            </View>
            <View style={styles.bottomBackground}>
              <View style={styles.bottomTextBackground}>
                <Text style={styles.longText}>Departure</Text>
                <Text style={styles.longText}>24082019</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

TicketScreen.navigationOptions = {
  headerBackTitle: null,
  title: '🛫 Broading Pass',
  headerStyle: {
    backgroundColor: '#0089FF',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'left',
    flexGrow: 1,
    alignSelf: 'center',
  },
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
  linearGradient: {
    width,
    height,
    position: 'absolute',
  },
  bottomTextBackground: {
    alignItems: 'center',
    width: (width) / 3,
  },
  qrCodeBackground: {
    paddingTop: 10,
    borderRadius: 5,
    margin: 20,
    backgroundColor: '#fff',
    width: width - 40,
    height: 360,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  qrCodeDownBackground: {
    paddingLeft: 10,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    backgroundColor: '#EBEBEB',
    width: width - 40,
    height: 80,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  boldText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4FFF00',
  },
  bottomBackground: {
    marginTop: 10,
    flexDirection: 'row',
  },
  marginLeft10: {
    marginLeft: 10,
  },
  shortText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  longText: {
    color: '#fff',
    fontSize: 14,
  }
});
