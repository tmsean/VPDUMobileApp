import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, Button } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';
import Flight from '../screens/flight';
import Supply from '../screens/supply';

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
  const item = flights.find(item => item.id === navigation.getParam( 'item', 'id'));
  const flight_number = navigation.getParam( 'item', 'flight_No').toString();


  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Flight {item.flight_No}</Text>
        {/* <div>
        {navigation.map(image => 
        <Text>{ navigation.getParam('sector') }</Text>)}
        </div> */}
        <Card>
        <Text>{navigation.getParam('item', 'flight_No')}</Text>
        {/* <Text style={globalStyles.titleText}>
          { navigation.getParam( 'item', 'flight_No') }
        </Text> */}
        {/* <Text>{ navigation.getParam('sector') }</Text>
        {/* <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View> */}
        <Text>{ "Sector: " + item.sector }</Text>
        <Text>{ "From date: " + item.from_date } { "To date: " + item.to_date }</Text>
        <Button
          title="Supplies"
          onPress={() => {
            // Pass params back to home screen
            navigation.navigate('Supply', flight_number);
          }}
        />
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