import React, { Component } from 'react'
import {
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Modal,
  ActivityIndicator,
  Image,
  LogBox
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

LogBox.ignoreLogs(['new NativeEventEmitter']);


export default class App extends Component {

  render() {
    return (
      <View style={{ position: 'relative', justifyContent: 'center', alignContent: 'center', alignItems: 'center', flex: 1, backgroundColor: "black" }
      }>
        <AnimatedCircularProgress
          size={200}
          width={32}
          fill={50}
          tintColor="#00e08f"
          rotation={0}
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875" />
        <View style={{ position: 'absolute', alignContent: 'center', textAlign: 'center', justifyContent: 'center' }}>
          <Text style={{ color: "white", fontSize: 40, fontWeight: 'bold', }}>50%</Text>
        </View>
      </View >
    )
  }
}
