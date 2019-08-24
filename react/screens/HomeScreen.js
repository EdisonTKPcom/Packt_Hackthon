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
const checkedTickColor = '#55FF00'
const uncheckedTickColor = '#7A7A7A'
export default class HomeScreen extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe",
      date: "24-08-2019",
      gateway: "AF01",
      seat: "01A",
      checkStatus: [
        true,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
      ],
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.upperBackground}>
        </View>
        <View style={styles.detailsBackground}>
          {/* Profile Icon */}
          <View style={styles.icon}>
          </View>
          {/* Profile Details */}
          <View style={styles.details}>
            <Text style={styles.largerText}>{this.state.name}</Text>
            <Text style={styles.smallerText}>{this.state.date}</Text>
            <Text style={styles.smallerText}>Gateway : {this.state.gateway}</Text>
            <Text style={styles.smallerText}>Seat : {this.state.seat}</Text>
          </View>
          {/* Countdown Timer */}
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

        {/* Navigation Background */}
        <View style={styles.navigationBackground}>
          <TouchableOpacity style={styles.button} onPress={() => navigate('ScanQR')}>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Navigation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Ticket')}>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Ticket</Text>
          </TouchableOpacity>
          <View style={styles.button}>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Mail</Text>
          </View>
          <View style={styles.button}>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Emergency</Text>
          </View>
        </View>

        {/* Passenger Status */}
        <Text style={styles.titleText}>Passenger Status</Text>
        <View style={styles.statusBackground}>
          {/* Passenger Status - Check In*/}
          <View style={this.state.checkStatus[0] ? styles.statusButton : styles.unCheckStatusButton}>
            <View style={styles.tickIcon}>
              <Icon
                name='check-circle'
                color={this.state.checkStatus[0] ? checkedTickColor : uncheckedTickColor}
                size={20}
                type={'material'}
              />
            </View>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Passenger{'\n'}Check In</Text>
          </View>
          {/* Passenger Status - Security Check*/}
          <View style={this.state.checkStatus[1] ? styles.statusButton : styles.unCheckStatusButton}>
            <View style={styles.tickIcon}>
              <Icon
                name='check-circle'
                color={this.state.checkStatus[1] ? checkedTickColor : uncheckedTickColor}
                size={20}
                type={'material'}
              />
            </View>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Security{'\n'}Check</Text>
          </View>
          {/* Passenger Status - Waiting at boarding gate*/}
          <View style={this.state.checkStatus[2] ? styles.statusButton : styles.unCheckStatusButton}>
            <View style={styles.tickIcon}>
              <Icon
                name='check-circle'
                color={this.state.checkStatus[2] ? checkedTickColor : uncheckedTickColor}
                size={20}
                type={'material'}
              />
            </View>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Waiting at{'\n'}boarding gate</Text>
          </View>
          {/* Passenger Status - Passenger Onboarding*/}
          <View style={this.state.checkStatus[3] ? styles.statusButton : styles.unCheckStatusButton}>
            <View style={styles.tickIcon}>
              <Icon
                name='check-circle'
                color={this.state.checkStatus[3] ? checkedTickColor : uncheckedTickColor}
                size={20}
                type={'material'}
              />
            </View>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Passenger{'\n'}Onboarding</Text>
          </View>
        </View>

        {/* Luggage Status */}
        <Text style={styles.titleText}>Luggage Status</Text>
        <View style={styles.statusBackground}>
          {/* Luggage Status - Luggage Check In*/}
          <View style={this.state.checkStatus[4] ? styles.statusButton : styles.unCheckStatusButton}>
            <View style={styles.tickIcon}>
              <Icon
                name='check-circle'
                color={this.state.checkStatus[4] ? checkedTickColor : uncheckedTickColor}
                size={20}
                type={'material'}
              />
            </View>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Luggage{'\n'}Check In</Text>
          </View>
          {/* Luggage Status - Security and Custom Check*/}
          <View style={this.state.checkStatus[5] ? styles.statusButton : styles.unCheckStatusButton}>
            <View style={styles.tickIcon}>
              <Icon
                name='check-circle'
                color={this.state.checkStatus[5] ? checkedTickColor : uncheckedTickColor}
                size={20}
                type={'material'}
              />
            </View>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Security and{'\n'}Custom Check</Text>
          </View>
          {/* Luggage Status - Loading*/}
          <View style={this.state.checkStatus[6] ? styles.statusButton : styles.unCheckStatusButton}>
            <View style={styles.tickIcon}>
              <Icon
                name='check-circle'
                color={this.state.checkStatus[6] ? checkedTickColor : uncheckedTickColor}
                size={20}
                type={'material'}
              />
            </View>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Loading</Text>
          </View>
          {/* Luggage Status - Luggage Onboarding*/}
          <View style={this.state.checkStatus[7] ? styles.statusButton : styles.unCheckStatusButton}>
            <View style={styles.tickIcon}>
              <Icon
                name='check-circle'
                color={this.state.checkStatus[7] ? checkedTickColor : uncheckedTickColor}
                size={20}
                type={'material'}
              />
            </View>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Luggage{'\n'}Onboarding</Text>
          </View>
        </View>

        {/* Itinerary */}
        <Text style={styles.titleText}>Itinerary</Text>
        <View style={styles.statusBackground}>
          {/* Itinerary - Insurance*/}
          <View style={this.state.checkStatus[8] ? styles.statusButton : styles.unCheckStatusButton}>
            <View style={styles.tickIcon}>
              <Icon
                name='check-circle'
                color={this.state.checkStatus[8] ? checkedTickColor : uncheckedTickColor}
                size={20}
                type={'material'}
              />
            </View>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Insurance</Text>
          </View>
          {/* Itinerary - Meal*/}
          <View style={this.state.checkStatus[9] ? styles.statusButton : styles.unCheckStatusButton}>
            <View style={styles.tickIcon}>
              <Icon
                name='check-circle'
                color={this.state.checkStatus[9] ? checkedTickColor : uncheckedTickColor}
                size={20}
                type={'material'}
              />
            </View>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Meal</Text>
          </View>
          {/* Itinerary - Transport*/}
          <View style={this.state.checkStatus[10] ? styles.statusButton : styles.unCheckStatusButton}>
            <View style={styles.tickIcon}>
              <Icon
                name='check-circle'
                color={this.state.checkStatus[10] ? checkedTickColor : uncheckedTickColor}
                size={20}
                type={'material'}
              />
            </View>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Transport</Text>
          </View>
          {/* Itinerary - Merchandise*/}
          <View style={this.state.checkStatus[11] ? styles.statusButton : styles.unCheckStatusButton}>
            <View style={styles.tickIcon}>
              <Icon
                name='check-circle'
                color={this.state.checkStatus[11] ? checkedTickColor : uncheckedTickColor}
                size={20}
                type={'material'}
              />
            </View>
            <View style={styles.buttonIcon}></View>
            <Text style={styles.buttonText}>Merchandise</Text>
          </View>
        </View>

        {/* Promotion*/}
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
  unCheckStatusButton: {
    backgroundColor: '#fff',
    marginLeft: 10,
    width: (width - 50) / 4,
    height: 100,
    borderColor: '#aaa',
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
  },
  tickIcon: {
    position: 'absolute',
    top: 2,
    right: 2,
  }
});
