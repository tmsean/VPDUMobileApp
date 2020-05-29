import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, Button } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';
import Supply from './supply';

export default function SupplyDetails({ navigation }) {
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
  const item = supplies.find(item => item.id === navigation.getParam( 'item', 'id'));
  const id = navigation.getParam( 'item', 'id');


  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Supplies details Page</Text>
        {/* {/* <div>
        {navigation.map(image => 
        <Text>{ navigation.getParam('sector') }</Text>)}
        </div> */}
        <Card>
        <Text>{navigation.getParam('item','id')}</Text>
        {/* <Text style={globalStyles.titleText}>
          { navigation.getParam( 'item', 'id') }
        </Text> */}
        {/* <Text>{ navigation.getParam('sector') }</Text>
        {/* <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View> */}
        {/* <Text>{ "Sector: " + item.sector }</Text>
        <Text>{ "From date: " + item.from_date } { "To date: " + item.to_date }</Text> */}
        <Button
          title="Supplies"
          onPress={() => {
            // Pass params back to home screen
            navigation.navigate('Supply', flight_number);
          }}
        />
      </Card> */}
      
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