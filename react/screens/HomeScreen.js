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
  YellowBox,
  Modal,
  TouchableHighlight
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import { Icon } from 'react-native-elements'
import { MonoText } from '../components/StyledText';
import * as firebase from 'firebase';
import _ from 'lodash';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
var CryptoJS = require("crypto-js");

const { width, height } = Dimensions.get('window')
const checkedTickColor = '#55FF00'
const uncheckedTickColor = '#7A7A7A'
const redTickColor = '#FF0000'
export default class HomeScreen extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe",
      date: "24-08-2019",
      gateway: "AF01",
      seat: "01A",
      passengerCheckStatus: [
        false,
        false,
        false,
        0,
      ],
      luggageCheckStatus: [
        false,
        false,
        false,
        false,
      ],
      itemCheckStatus: [
        false,
        false,
        false,
        false,
      ],
      modalVisible: false,
    }
    // initialize firebase
    console.disableYellowBox = true
    YellowBox.ignoreWarnings(['Setting a timer']);
    const _console = _.clone(console);
    console.warn = message => {
      if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
      }
    };
    const firebaseConfig = {
      apiKey: "AIzaSyDAZnZkbzw6p73MraY67gmQ4aORU0aFywg",
      authDomain: "poshack-8567e.firebaseapp.com",
      databaseURL: "https://poshack-8567e.firebaseio.com",
      projectId: "poshack-8567e",
      storageBucket: "poshack-8567e.appspot.com",
      messagingSenderId: "469625282553",
      appId: "1:469625282553:web:77d111ddbaec972b"
    }
    if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig) }
    firebase.database().ref('customer/1001/luggageStatus').on('value', (snapshot) => {
      collectedData = snapshot.val()
      if (collectedData == 0) {
        this.setState({luggageCheckStatus: [false, false, false, false]})
        fetch('http://13.250.23.123:9000/off');
      } else if (collectedData == 1) {
        this.sendNotification(5)
        this.setState({luggageCheckStatus: [true, false, false, false]})
        fetch('http://13.250.23.123:9000/off');
      } else if (collectedData == 2) {
        this.setState({luggageCheckStatus: [true, true, false, false]})
        fetch('http://13.250.23.123:9000/off');
        this.sendNotification(6)
      } else if (collectedData == 3) {
        this.setState({luggageCheckStatus: [true, true, true, false]})
        fetch('http://13.250.23.123:9000/off');
        this.sendNotification(7)
      } else if (collectedData == 4) {
        this.setState({luggageCheckStatus: [true, true, true, true]})
        fetch('http://13.250.23.123:9000/off');
        this.sendNotification(8)
      }
    })
    firebase.database().ref('customer/1001/passengerStatus').on('value', (snapshot) => {
      collectedData = snapshot.val()
      if (collectedData == 0) {
        this.setState({passengerCheckStatus: [false, false, false, 0]})
        fetch('http://13.250.23.123:9000/off');
      } else if (collectedData == 1) {
        this.setState({passengerCheckStatus: [true, false, false, 0]})
        this.setState({itemCheckStatus: [true, false, false, false]})
        this.sendNotification(1)
        fetch('http://13.250.23.123:9000/off');
      } else if (collectedData == 2) {
        this.setState({passengerCheckStatus: [true, true, false, 0]})
        this.sendNotification(2)
        fetch('http://13.250.23.123:9000/off');
      } else if (collectedData == 3) {
        this.setState({passengerCheckStatus: [true, true, true, 0]})
        this.sendNotification(3)
        fetch('http://13.250.23.123:9000/off');
      } else if (collectedData == 4) {
        this.setState({passengerCheckStatus: [true, true, true, 1]})
        this.sendNotification(4)
        fetch('http://13.250.23.123:9000/off');
      } else if (collectedData == 5) {
        this.setState({passengerCheckStatus: [true, true, true, 2]})
        this.sendNotification(9)
        fetch('http://13.250.23.123:9000/on');
      }
    })
  }

  async componentDidMount() {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      return;
    }
    Notifications.addListener(this.handleNotification);

  }

  sendNotification(number) {
    let localNotification
    if (number == 1) {
      localNotification = {
        title: 'You have successfully check in boarding Gate!',
        body: 'Please proceed to custom'
      };
    } else if (number == 2) {
      localNotification = {
        title: 'You cleared security',
        body: 'Please proceed to boarding gate or enjoy food in your restaurant'
      };
    } else if (number == 3) {
      localNotification = {
        title: 'You have successfully check in boarding Gate!',
        body: 'Please wait patiently in gate for boarding.'
      };
    } else if (number == 4) {
      localNotification = {
        title: 'You are allowed to onboarding',
        body: 'Enjoy your journey.'
      };
    } else if (number == 5) {
      localNotification = {
        title: 'Your luggage had checked in.',
        body: 'Going for security and custom checking'
      };
    } else if (number == 6) {
      localNotification = {
        title: 'Your luggage had cleared security and custom check',
        body: 'Loading into container'
      };
    } else if (number == 7) {
      localNotification = {
        title: 'Your luggage had been loaded',
        body: 'Waiting for onboarding'
      };
    } else if (number == 8) {
      localNotification = {
        title: 'Your luggage had onboarding',
        body: 'Enjoy your journey.'
      };
    } else if (number == 9) {
      localNotification = {
        title: 'You are forbidden to onboarding due to overtime',
        body: 'Your luggage will be offload now. Please proceed to counter for more info.'
      };
    }
    const schedulingOptions = {
      time: (new Date()).getTime()
    }

    Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions);
  }

  handleNotification() {
    console.log('ok! got your notif');
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.modalOuterContainer}>
            <View style={styles.modalInnerContainer}>
              <Image source={require('../assets/images/tune.png')} style={styles.insuranceBackgroundImage}/>
              <View style={styles.insuranceCenter}>
                <TouchableOpacity onPress={() => navigate('Emergency')} style={styles.insuranceButton}>
                  <Text style={styles.insuranceButtonText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setModalVisible(false)} style={styles.insuranceButton}>
                  <Text style={styles.insuranceButtonText}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.upperBackground}>
        </View>
        <View style={styles.detailsBackground}>
          {/* Profile Icon */}
          <Image source={require('../assets/images/profilePicture.png')} style={styles.icon}/>
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
          <TouchableOpacity style={styles.button} onPress={() => navigate('Raw')}>
            <Image source={require('../assets/images/navigation.png')} style={styles.buttonIcon}/>
            <Text style={styles.buttonText}>Navigation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Ticket')}>
            <Image source={require('../assets/images/ticket.png')} style={styles.buttonIcon}/>
            <Text style={styles.buttonText}>Ticket</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Shop')}>
            <Image source={require('../assets/images/shop.png')} style={styles.buttonIcon}/>
            <Text style={styles.buttonText}>Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Emergency')}>
            <Image source={require('../assets/images/emergency.png')} style={styles.buttonIcon}/>
            <Text style={styles.buttonText}>Emergency</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {/* Passenger Status */}
          <Text style={styles.titleText}>Passenger Status</Text>
          <View style={styles.statusBackground}>
            {/* Passenger Status - Check In*/}
            <View style={this.state.passengerCheckStatus[0] ? styles.statusButton : styles.unCheckStatusButton}>
              <View style={styles.tickIcon}>
                <Icon
                  name='check-circle'
                  color={this.state.passengerCheckStatus[0] ? checkedTickColor : uncheckedTickColor}
                  size={20}
                  type={'material'}
                />
              </View>
              <Image source={require('../assets/images/passengerCheckIn.png')} style={styles.buttonIcon}/>
              <Text style={styles.buttonText}>Passenger{'\n'}Check In</Text>
            </View>
            {/* Passenger Status - Security Check*/}
            <View style={this.state.passengerCheckStatus[1] ? styles.statusButton : styles.unCheckStatusButton}>
              <View style={styles.tickIcon}>
                <Icon
                  name='check-circle'
                  color={this.state.passengerCheckStatus[1] ? checkedTickColor : uncheckedTickColor}
                  size={20}
                  type={'material'}
                />
              </View>
              <Image source={require('../assets/images/securityCheck.png')} style={styles.buttonIcon}/>
              <Text style={styles.buttonText}>Security{'\n'}Check</Text>
            </View>
            {/* Passenger Status - Waiting at boarding gate*/}
            <View style={this.state.passengerCheckStatus[2] ? styles.statusButton : styles.unCheckStatusButton}>
              <View style={styles.tickIcon}>
                <Icon
                  name='check-circle'
                  color={this.state.passengerCheckStatus[2] ? checkedTickColor : uncheckedTickColor}
                  size={20}
                  type={'material'}
                />
              </View>
              <Image source={require('../assets/images/waitingBoardingGate.png')} style={styles.buttonIcon}/>
              <Text style={styles.buttonText}>Waiting at{'\n'}boarding gate</Text>
            </View>
            {/* Passenger Status - Passenger Onboarding*/}
            <View style={this.state.passengerCheckStatus[3] ? styles.statusButton : styles.unCheckStatusButton}>
              <View style={styles.tickIcon}>
                <Icon
                  name={this.state.passengerCheckStatus[3] == 2 ? 'close' : 'check-circle'}
                  color={this.state.passengerCheckStatus[3] == 0 ? uncheckedTickColor : this.state.passengerCheckStatus[3] == 1 ? checkedTickColor : redTickColor}
                  size={20}
                  type={'material'}
                />
              </View>
              <Image source={require('../assets/images/passengerOnboarding.png')} style={styles.buttonIcon}/>
              <Text style={styles.buttonText}>Passenger{'\n'}Onboarding</Text>
            </View>
          </View>

          {/* Luggage Status */}
          <Text style={styles.titleText}>Luggage Status</Text>
          <View style={styles.statusBackground}>
            {/* Luggage Status - Luggage Check In*/}
            <View style={this.state.luggageCheckStatus[0] ? styles.statusButton : styles.unCheckStatusButton}>
              <View style={styles.tickIcon}>
                <Icon
                  name='check-circle'
                  color={this.state.luggageCheckStatus[0] ? checkedTickColor : uncheckedTickColor}
                  size={20}
                  type={'material'}
                />
              </View>
              <Image source={require('../assets/images/luggageCheckIn.png')} style={styles.buttonIcon}/>
              <Text style={styles.buttonText}>Luggage{'\n'}Check In</Text>
            </View>
            {/* Luggage Status - Security and Custom Check*/}
            <View style={this.state.luggageCheckStatus[1] ? styles.statusButton : styles.unCheckStatusButton}>
              <View style={styles.tickIcon}>
                <Icon
                  name='check-circle'
                  color={this.state.luggageCheckStatus[1] ? checkedTickColor : uncheckedTickColor}
                  size={20}
                  type={'material'}
                />
              </View>
              <Image source={require('../assets/images/luggageSecurity.png')} style={styles.buttonIcon}/>
              <Text style={styles.buttonText}>Security and{'\n'}Custom Check</Text>
            </View>
            {/* Luggage Status - Loading*/}
            <View style={this.state.luggageCheckStatus[2] ? styles.statusButton : styles.unCheckStatusButton}>
              <View style={styles.tickIcon}>
                <Icon
                  name='check-circle'
                  color={this.state.luggageCheckStatus[2] ? checkedTickColor : uncheckedTickColor}
                  size={20}
                  type={'material'}
                />
              </View>
              <Image source={require('../assets/images/loading.png')} style={styles.buttonIcon}/>
              <Text style={styles.buttonText}>Loading</Text>
            </View>
            {/* Luggage Status - Luggage Onboarding*/}
            <View style={this.state.luggageCheckStatus[3] ? styles.statusButton : styles.unCheckStatusButton}>
              <View style={styles.tickIcon}>
                <Icon
                  name='check-circle'
                  color={this.state.luggageCheckStatus[3] ? checkedTickColor : uncheckedTickColor}
                  size={20}
                  type={'material'}
                />
              </View>
              <Image source={require('../assets/images/luggageOnboarding.png')} style={styles.buttonIcon}/>
              <Text style={styles.buttonText}>Luggage{'\n'}Onboarding</Text>
            </View>
          </View>

          {/* Itinerary */}
          <Text style={styles.titleText}>Itinerary</Text>
          <View style={styles.statusBackground}>
            {/* Itinerary - Insurance*/}
            <TouchableOpacity onPress={() => this.setModalVisible(true)} style={this.state.itemCheckStatus[0] ? styles.statusButton : styles.unCheckStatusButton}>
              <View style={styles.tickIcon}>
                <Icon
                  name='check-circle'
                  color={this.state.itemCheckStatus[0] ? checkedTickColor : uncheckedTickColor}
                  size={20}
                  type={'material'}
                />
              </View>
              <Image source={require('../assets/images/insurance.png')} style={styles.buttonIcon}/>
              <Text style={styles.buttonText}>Insurance</Text>
            </TouchableOpacity>
            {/* Itinerary - Meal*/}
            <View style={this.state.itemCheckStatus[1] ? styles.statusButton : styles.unCheckStatusButton}>
              <View style={styles.tickIcon}>
                <Icon
                  name='check-circle'
                  color={this.state.itemCheckStatus[1] ? checkedTickColor : uncheckedTickColor}
                  size={20}
                  type={'material'}
                />
              </View>
              <Image source={require('../assets/images/meal.png')} style={styles.buttonIcon}/>
              <Text style={styles.buttonText}>Meal</Text>
            </View>
            {/* Itinerary - Transport*/}
            <View style={this.state.itemCheckStatus[2] ? styles.statusButton : styles.unCheckStatusButton}>
              <View style={styles.tickIcon}>
                <Icon
                  name='check-circle'
                  color={this.state.itemCheckStatus[2] ? checkedTickColor : uncheckedTickColor}
                  size={20}
                  type={'material'}
                />
              </View>
              <Image source={require('../assets/images/transport.png')} style={styles.buttonIcon}/>
              <Text style={styles.buttonText}>Transport</Text>
            </View>
            {/* Itinerary - Merchandise*/}
            <View style={this.state.itemCheckStatus[3] ? styles.statusButton : styles.unCheckStatusButton}>
              <View style={styles.tickIcon}>
                <Icon
                  name='check-circle'
                  color={this.state.itemCheckStatus[3] ? checkedTickColor : uncheckedTickColor}
                  size={20}
                  type={'material'}
                />
              </View>
              <Image source={require('../assets/images/merchandise.png')} style={styles.buttonIcon}/>
              <Text style={styles.buttonText}>Merchandise</Text>
            </View>
          </View>

          {/* Promotion*/}
          <Text style={styles.titleText}>Promotion</Text>
          <View style={styles.statusBackground}>
            <Image source={require('../assets/images/promotion1.png')} style={styles.promotionBackground}/>
            <Image source={require('../assets/images/promotion2.png')} style={styles.promotionBackground}/>
          </View>
        </ScrollView>
      </View>
    )
  }
}

HomeScreen.navigationOptions = {
  header: null,
  tabBarVisible: false,
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
    marginTop: 30,
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
    width: 40,
    height: 40,
    margin: 5,
    resizeMode: 'contain'
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
    height: 150,
    resizeMode: 'contain'
  },
  tickIcon: {
    position: 'absolute',
    top: 2,
    right: 2,
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
  },
  modalOuterContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalInnerContainer: {
    width: width - 20,
    height: height * 0.8,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
