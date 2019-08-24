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
  Button,
  FlatList
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import { Icon } from 'react-native-elements'
import { MonoText } from '../components/StyledText';

const { width, height } = Dimensions.get('window')

export default class ShopScreen extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.listViewRow}>
          <Image source={require('../assets/images/banking.png')} style={styles.buttonIcon}/>
          <Text style={styles.whiteText}>Anchors</Text>
        </View>
        <View style={styles.listViewRow}>
          <Image source={require('../assets/images/banking.png')} style={styles.buttonIcon}/>
          <Text style={styles.whiteText}>Bags</Text>
        </View>
        <View style={styles.listViewRow}>
          <Image source={require('../assets/images/banking.png')} style={styles.buttonIcon}/>
          <Text style={styles.whiteText}>Banking</Text>
        </View>
        <View style={styles.listViewRow}>
          <Image source={require('../assets/images/clinic.png')} style={styles.buttonIcon}/>
          <Text style={styles.whiteText}>Clinic</Text>
        </View>
        <View style={styles.listViewRow}>
          <Image source={require('../assets/images/beauty.png')} style={styles.buttonIcon}/>
          <Text style={styles.whiteText}>Beauty</Text>
        </View>
        <View style={styles.listViewRow}>
          <Image source={require('../assets/images/digitalLifestyle.png')} style={styles.buttonIcon}/>
          <Text style={styles.whiteText}>Digital Lifestyle</Text>
        </View>
        <View style={styles.listViewRow}>
          <Image source={require('../assets/images/foodAndBeverage.png')} style={styles.buttonIcon}/>
          <Text style={styles.whiteText}>Food & Beverages</Text>
        </View>
      </View>
    )
  }
}

ShopScreen.navigationOptions = {
  title: 'Shop',
  headerRight: (
    <View style={{
      width: 50,
      height: 50,
      borderRadius: 50,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Icon
        name='search'
        color={'#000'}
        size={30}
        type={'material'}
      />
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listViewRow: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width,
    height: 70,
    borderBottomColor: '#aaa',
    borderBottomWidth: 0.5,
  },
  icon: {
    margin: 10,
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#FF9E00',
  },
  buttonIcon: {
    width: 40,
    height: 40,
    margin: 5,
    resizeMode: 'contain'
  },
});
