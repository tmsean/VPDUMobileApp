import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) {
  const [flights, setFlights] = useState([
    { flight_no: 'VN777', f_date: '11-feb-2020', t_date: '12-feb-2020', origin: 'HAN', destination: 'SGN', key: '1' },
    { flight_no: 'VN8080', f_date: '12-feb-2020', t_date: '13-feb-2020', origin: 'DAD', destination: 'SGN', key: '1' },
    { flight_no: 'VN1576', f_date: '13-feb-2020', t_date: '14-feb-2020', origin: 'HAN', destination: 'DAD', key: '1' },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Card>
            <Text style={globalStyles.titleText}>{ item.flight_no }</Text>
          </Card>
        </TouchableOpacity>
      )} />
    </View>
  );
}