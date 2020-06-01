import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button.js';

const SupplySchema = yup.object({
  name: yup.string()
    .required()
    .min(5),
  unit: yup.string()
    .required(),
  stewardess_quantity: yup.string()
    .required(),
  real_quantity: yup.string()
    .required()
//   rating: yup.string()
//     .required()
//     .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
//       return parseInt(val) < 6 && parseInt(val) > 0;
//     }),
});

export default function SupplyForm({ addSupply }) {

  return (
      
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={SupplySchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          addSupply(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Supply name'
              onChangeText={props.handleChange('Name')}
              onBlur={props.handleBlur('Name')} 
              value={props.values.name}
            />
            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>

            <TextInput
              style={globalStyles.input}
              multiline minHeight={60}
              placeholder='Unit'
              onChangeText={props.handleChange('unit')}
              onBlur={props.handleBlur('unit')}
              value={props.values.unit}
            />
            <Text style={globalStyles.errorText}>{props.touched.unit && props.errors.unit}</Text>

            <TextInput 
              style={globalStyles.input}
              placeholder='Stewardess quantity'
              onChangeText={props.handleChange('stewardess_quantity')}
              onBlur={props.handleBlur('stewardess_quantity')} 
              value={props.values.stewardess_quantity}
              keyboardType='numeric'
            />
            <Text style={globalStyles.errorText}>{props.touched.stewardess_quantity && props.errors.stewardess_quantity}</Text>
            
            <TextInput 
              style={globalStyles.input}
              placeholder='Real quantity'
              onChangeText={props.handleChange('real_quantity')}
              onBlur={props.handleBlur('real_quantity')} 
              value={props.values.real_quantity}
              keyboardType='numeric'
            />
            <Text style={globalStyles.errorText}>{props.touched.real_quantity && props.errors.real_quantity}</Text>

            <FlatButton onPress={props.handleSubmit} text='submit' />
            
          </View>
        )}
      </Formik>
    </View>
    
  );
}