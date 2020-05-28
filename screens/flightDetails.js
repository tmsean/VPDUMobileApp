import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function FlightDetails({ navigation }) {
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
  const item = flights.find(item => item.flight_No === navigation.getParam( 'item', 'flight_No'));


  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Flight {item.flight_No}</Text>
        {/* <div>
        {navigation.map(image => 
        <Text>{ navigation.getParam('sector') }</Text>)}
        </div> */}
        <Card>
      <Text>{navigation.getParam('itemID')}</Text>
        {/* <Text style={globalStyles.titleText}>
          { navigation.getParam( 'item', 'flight_No') }
        </Text> */}
        {/* <Text>{ navigation.getParam('sector') }</Text>
        {/* <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View> */}
        <Text>{ "Sector: " + item.sector }</Text>
        <Text>{ "From date: " + item.from_date } { "To date:: " + item.to_date }</Text>
        <Text></Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
});

// const data = [
//   {
//      "id": "qwerty",
//      "email": "cat@gmail.com",
//      "name": "cat"
//   },
//   {
//      "id": "abcdef",
//      "email": "abc@gmail.com",
//      "name": "abc"
//   },       
//   {
//      "id": "owowao",
//      "email": "dog@gmail.com",
//      "name": "dog"
//   },
// ];

// const findIdByEmail = (data, email) => {
//  const el = data.find(el => el.email === email); // Possibly returns `undefined`
//  return el && el.id; // so check result is truthy and extract `id`
// }

// console.log(findIdByEmail(data, 'cat@gmail.com'));
// console.log(findIdByEmail(data, 'abc@gmail.com'));
// console.log(findIdByEmail(data, 'gibberish'));