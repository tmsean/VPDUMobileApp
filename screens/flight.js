import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Flight({navigation}) {
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
    
    return (
      //   <View style={globalStyles.container}>
      //   <Text>Flight Screen</Text>
      //   <FlatList data={reviews} renderItem={({ item }) => (
      //   <TouchableOpacity onPress={() => navigation.navigate('flightDetails', item)}>
      //     <Card>
      //       {/* <Text style={globalStyles.titleText}>{ item.title}</Text> */}
      //     </Card>
      //   </TouchableOpacity>
      // )} />
      //   </View>
      <View style={globalStyles.container}>
        <Text>Flight Screen</Text>
        <FlatList data = {flights} renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.push('FlightDetails', {item: item.flight_No})}>
            <Card>
              <Text style={globalStyles.titleText}>{item.flight_No}</Text>
            </Card>
          </TouchableOpacity>
        )}>
        </FlatList>
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
