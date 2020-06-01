import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal,
  TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Supply({navigation}) {
  const [flights, setFLights] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      flight_No: 'VN4790',
      sector: 'HANSGN',
      from_date: '01-03-2020',
      to_date: '03-03-2020'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      flight_No: 'VN777',
      sector: 'DADSGN',
      from_date: '01-03-2020',
      to_date: '03-03-2020'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      flight_No: 'VN803',
      sector: 'HANDAD',
      from_date: '01-03-2020',
      to_date: '03-03-2020'
    },
  ]);
  const [supplies, setSupplies] = useState([
    {
      id: 'NME224E',
      name: 'CHUM M2 NHUA L3 (VANG XANH)',
      unit: 'COC',
      stewardess_quantity: '342',
      real_quantity: '342'
    },
    {
      id: 'BBE200N',
      name: 'BIA 333',
      unit: 'LON',
      stewardess_quantity: '12',
      real_quantity: '13'
    },
    { 
      id: 'BTC305P',
      name: 'CA PHE CAPPUCCINO (MOCHA)',
      unit: 'GOI',
      stewardess_quantity: '21',
      real_quantity: '20'
    },
  ]);
  const item = flights.find(item => item.flight_No === navigation.getParam('item', 'flight_No'));
  const flight_number = navigation.getParam('flight_number');

  return (
    <View style={globalStyles.container}>
      <Text>List of supplies from flight {flight_number}</Text>
      <FlatList data={supplies} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('SupplyDetails', {item: item.id})}>
          <Card>
            <Text style={globalStyles.titleText}>{ item.name }</Text>
            <Text> {item.id}</Text>
          </Card>
        </TouchableOpacity>
      )} />
      
    <Button
          title="Add"
          color = "#0BC586"
          onPress={() => {
            // Pass params back to home screen
            navigation.navigate('Supply', flight_number);
          }}>
    </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  }
});