import React, { useState } from 'react';  
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal,
  TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import FlightForm from '../screens/flightForm';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Flight({navigation}) {
    const [modalOpen, setModalOpen] = useState(false);
    const [flights, setFlights] = useState([
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          flight_No: 'VN4790',
          origin: 'HAN',
          destination: 'SGN',
          from_date: '01-03-2020',
          to_date: '03-03-2020',
          type: 'Cấp lên',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          flight_No: 'VN777',
          origin: 'HAN',
          destination: 'SGN',
          from_date: '01-03-2020',
          to_date: '03-03-2020',
          type: 'Cấp lên',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          flight_No: 'VN803',
          origin: 'HAN',
          destination: 'SGN',
          from_date: '01-03-2020',
          to_date: '03-03-2020',
          type: 'Thu hồi',
        },
      ]);

      const addFlight = (flight) => {
        flight.id = Math.random().toString();
        setFlights((currentFlights) => {
          return [flight, ...currentFlights];
        });
        setModalOpen(false);
      };

      const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
          return [review, ...currentReviews];
        });
        setModalOpen(false);
      };
    
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

        <Modal visible={modalOpen} animationType='slide'>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <MaterialIcons 
                name='close'
                size={24} 
                style={{...styles.modalToggle, ...styles.modalClose}} 
                onPress={() => setModalOpen(false)} 
              />
              <FlightForm addFlight={addFlight} />
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <MaterialIcons 
          name='add' 
          size={24} 
          style={styles.modalToggle}
          onPress={() => setModalOpen(true)} 
        />
        <Text>Flight Screen</Text>
        <FlatList data = {flights} renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.push('FlightDetails', {item: item.id})}>
            <Card>
              <Ionicons name="ios-airplane" color="#fff" size={16} />
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
