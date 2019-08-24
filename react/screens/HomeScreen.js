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
import { MonoText } from '../components/StyledText';
const { width, height } = Dimensions.get('window')

export default class HomeScreen extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe",
      date: "24-08-2019",
      gateway: "AF01",
      seat: "01A",
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.upperBackground}>
        </View>
        <View style={styles.detailsBackground}>
          <View style={styles.icon}>
          </View>
          <View style={styles.details}>
            <Text style={styles.largerText}>{this.state.name}</Text>
            <Text style={styles.smallerText}>{this.state.date}</Text>
            <Text style={styles.smallerText}>Gateway : {this.state.gateway}</Text>
            <Text style={styles.smallerText}>Seat : {this.state.seat}</Text>
          </View>
          <View style={styles.onBoarding}>
            <Text style={styles.onBoardingText}>On Boarding</Text>
            <CountDown
              until={7200}
              digitTxtStyle={{color: '#fff'}}
              digitStyle={{backgroundColor: '#fff4'}}
              timeToShow={['H', 'M', 'S']}
              onFinish={() => alert('finished')}
              onPress={() => alert('hello')}
              timeLabels={{h: null, m: null, s: null}}
              size={20}
            />
          </View>
        </View>
        <View style={styles.navigationBackground}>
          <View style={styles.button}>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Navigation</Text>
          </View>
          <View style={styles.button}>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Ticket</Text>
          </View>
          <View style={styles.button}>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Mail</Text>
          </View>
          <View style={styles.button}>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Emergency</Text>
          </View>
        </View>
        <Text style={styles.titleText}>Passenger Status</Text>
        <View style={styles.statusBackground}>
          <View style={styles.statusButton}>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Navigation</Text>
          </View>
          <View style={styles.statusButton}>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Ticket</Text>
          </View>
          <View style={styles.statusButton}>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Mail</Text>
          </View>
          <View style={styles.statusButton}>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Emergency</Text>
          </View>
        </View>
        <Text style={styles.titleText}>Luggage Status</Text>
        <View style={styles.statusBackground}>
          <View style={styles.statusButton}>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Luggage{'\n'}Check In</Text>
          </View>
          <View style={styles.statusButton}>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Security and{'\n'}Custom Check</Text>
          </View>
          <View style={styles.statusButton}>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Loading</Text>
          </View>
          <View style={styles.statusButton}>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Luggage{'\n'}Onboarding</Text>
          </View>
        </View>
        <Text style={styles.titleText}>Itinerary</Text>
        <View style={styles.statusBackground}>
          <View style={styles.statusButton}>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Insurance</Text>
          </View>
          <View style={styles.statusButton}>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Meal</Text>
          </View>
          <View style={styles.statusButton}>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Transport</Text>
          </View>
          <View style={styles.statusButton}>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Merchandise</Text>
          </View>
        </View>
        <Text style={styles.titleText}>Promotion</Text>
        <View style={styles.statusBackground}>
          <View style={styles.promotionBackground}>
          </View>
          <View style={styles.promotionBackground}>
          </View>
        </View>
      </ScrollView>
    )
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  upperBackground: {
    width,
    height: height * 0.3,
    backgroundColor: '#2956FA',
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 150,
    position: 'absolute',
  },
  detailsBackground: {
    marginTop: 20,
    height: height * 0.15,
    flexDirection: 'row',
  },
  icon: {
    margin: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4FFF00',
  },
  buttonIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4FFF00',
  },
  details: {
    margin: 10,
  },
  onBoarding: {
    margin: 10,
  },
  largerText: {
    color: '#fff',
    fontSize: 16,
  },
  smallerText: {
    color: '#fff',
    fontSize: 12,
  },
  button: {
    width: (width - 20) / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 12,
  },
  titleText: {
    marginLeft: 10,
    marginBottom: 10,
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  onBoardingText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },
  navigationBackground: {
    backgroundColor: '#fff',
    margin: 10,
    width: width - 20,
    height: 100,
    borderColor: '#D5A457',
    borderWidth: 2,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    flexDirection: 'row',
  },
  statusBackground: {
    flexDirection: 'row',
  },
  statusButton: {
    backgroundColor: '#fff',
    marginLeft: 10,
    width: (width - 50) / 4,
    height: 100,
    borderColor: '#D5A457',
    borderWidth: 2,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  promotionBackground: {
    backgroundColor: '#fff',
    marginLeft: 10,
    width: (width - 30) / 2,
    height: 200,
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  }
});
