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
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window')
export default class StartScreen extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.animation.play();
    this.animation.play(30, 120);
  }

  render() {
    const { navigate } = this.props.navigation;
    outerNavigate = navigate
    return (
      <View style={styles.container}>
        <View style={styles.lottieView}>
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            source={require('../assets/images/startAnimation.json')}
          />
        </View>
        <TouchableOpacity style={styles.navigateButton} onPress={() => navigate('Home')}>
          <Text style={styles.titleText}>Start Here</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

StartScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  navigateButton: {
    margin: 20,
    width: width - 200,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#FFA000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottieView: {
    height: 400,
    width,
  },
  titleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
