import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          { navigation.getParam('flight_number') }
        </Text>
        <Text>{ navigation.getParam('f_date') }</Text>
        <Text>{ navigation.getParam('t_date') }</Text>
        <Text>{ navigation.getParam('origin') }</Text>
        <Text>{ navigation.getParam('destination') }</Text>
      </Card>
    </View>
  );
}