import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      Flight_No: 'VN4790',
      Sector: 'HANSGN',
      From_Date: '01-03-2020',
      To_Date: '03-03-2020'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      Flight_No: 'VN8080',
      Sector: 'DADSGN',
      From_Date: '01-03-2020',
      To_Date: '03-03-2020'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      Flight_No: 'VN803',
      Sector: 'HANDAD',
      From_Date: '01-03-2020',
      To_Date: '03-03-2020'
    },
];

function Item({ Flight_No, Sector, From_Date, To_Date }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{Flight_No}</Text>
      <Text style={styles.title}>{Sector}</Text>
      <Text style={styles.title}>{From_Date}</Text>
      <Text style={styles.title}>{To_Date}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item Flight_No={item.Flight_No} Sector={item.Sector} From_Date={item.From_Date} To_Date={item.To_Date} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
  },
});
