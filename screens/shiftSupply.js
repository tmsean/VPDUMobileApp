import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal,
  TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import ShiftSupplyForm from '../screens/shiftSupplyForm';
import { MaterialIcons } from '@expo/vector-icons';

export default function ShiftSupply({navigation}) {
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
  const [supplies, setSupplies] = useState([
    {
      id: 'NCH337E',
      name: 'DIA SU PHANG',
      unit: 'CAI',
      quantity: '11',
      creator: 'Nhân viên QLKH'
    },
    {
        id: 'NCH343E',
        name: 'DIA SU M2 ML Loại 2',
        unit: 'CAI',
        quantity: '7',
        creator: 'Nhân viên QLKH'
      },
  ]);
  // const addSupply = (supply) => {
  //   supply.id = Math.random().toString();
  //   setSupplies((currentSupplies) => {
  //     return [supply, ...currentSupplies];
  //   });
  //   setModalOpen(false);
  // };
  
  const shift = shifts.find(item => item.id === navigation.getParam('shift', 'id'));

  return (
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
              <ShiftSupplyForm addSupply={addSupply} />
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <MaterialIcons 
          name='add' 
          size={24} 
          style={styles.modalToggle}
          onPress={() => setModalOpen(true)} 
        /> */}

      <Text>Danh sách vật tư ca ngày {shift.date}</Text>
      <FlatList data={supplies} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('shiftSupplyDetails', {item: item.id})}>
          <Card>
            <Text style={globalStyles.titleText}>{ item.name }</Text>
            <Text> {item.id}</Text>
          </Card>
        </TouchableOpacity>
      )} />
      
    <Button
        title="Add"
        color = "#0BC586"
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}>
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