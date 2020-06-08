import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text>About Screen</Text>
      <Ionicons name="ios-airplane" color="#aaa" size={16} />
    </View>
  );
}