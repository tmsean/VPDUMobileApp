import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, Button } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';
import Suppy from '../screens/supply';


export default function ShiftDetails({ navigation }) {
    const [shifts, setShifts] = useState([
        {
          id: '1',
          date: '11-05-2020',
          shift_no: '1',
          type: 'Dùng được',
          status: 'DANG NHAP'
        },
        {
          id: '2',
          date: '11-05-2020',
          shift_no: '2',
          type: 'Dùng được',
          to_date: 'DANG NHAP'
        },
        {
          id: '3',
          date: '11-05-2020',
          shift_no: '2',
          type: 'Thải loại',
          status: 'DANG NHAP'
        },
      ]);
  const shift = shifts.find(item => item.id === navigation.getParam( 'item', 'id'));
  const id = navigation.getParam( 'item', 'id');


  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Shifts details Page</Text>
        <Card>
          <Text>Ca {shift.shift_no}</Text>
          <Text>Ngày {shift.date} </Text>
          <Text>Loại {shift.type}</Text>
        </Card>
        <Button
        style={globalStyles.button}
        title = "Supplies"
        color = "#0BC586"
        onPress = {() => navigation.push("Suppy")}
        accessibilityLabel="Learn more about this purple button" ></Button>
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