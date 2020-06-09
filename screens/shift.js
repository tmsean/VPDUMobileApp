import React, { useState } from 'react';  
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal,
  TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import About from '../screens/about';
import { SearchBar } from 'react-native-elements';
// import shiftForm from '../screens/shiftForm';

export default function shift({navigation}) {
    const [modalOpen, setModalOpen] = useState(false);
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
      const addShift = (shift) => {
        shift.id = Math.random().toString();
        setShifts((currentShifts) => {
          return [shift, ...currentShifts];
        });
        setModalOpen(false);
      };
    
    
    return (
      //   <View style={globalStyles.container}>
      //   <Text>shift Screen</Text>
      //   <FlatList data={reviews} renderItem={({ item }) => (
      //   <TouchableOpacity onPress={() => navigation.navigate('shiftDetails', item)}>
      //     <Card>
      //       {/* <Text style={globalStyles.titleText}>{ item.title}</Text> */}
      //     </Card>
      //   </TouchableOpacity>
      // )} />
      //   </View>
      <View style={globalStyles.container}>

        {/* <Modal visible={modalOpen} animationType='slide'>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <MaterialIcons 
                name='close'
                size={24} 
                style={{...styles.modalToggle, ...styles.modalClose}} 
                onPress={() => setModalOpen(false)} 
              />
              <shiftForm addShift={addShift} />
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <MaterialIcons 
          name='add' 
          size={24} 
          style={styles.modalToggle}
          onPress={() => setModalOpen(true)} 
        /> */}      
        <SearchBar
          placeholder="Type Here..."
          //onChangeText={this.updateSearch}
          //value={}
        />
        <Text>Shift Screen</Text>
        <FlatList data = {shifts} renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('ShiftDetails', {item: item.id})}>
            <Card>
              <Text style={globalStyles.titleText}>Ngày: {item.date}</Text>
              <Text style={globalStyles.titleText}>Ca: {item.shift_no}</Text>
              <Text style={globalStyles.titleText}>Loại: {item.type}</Text>
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
