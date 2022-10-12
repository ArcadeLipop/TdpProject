import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import RoootNavigator, {Roott} from './src/navigatiion/RootNavigator';



export default function App() {
  return (
  <RoootNavigator />
  );
}
const styles = StyleSheet.create({

container:{
  flex:1
}
});