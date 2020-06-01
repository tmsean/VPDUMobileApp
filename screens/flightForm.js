import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button.js';

const FlightSchema = yup.object({
  flight_No: yup.string()
    .required()
    .min(5),
  sector: yup.string()
    .required()
    .min(6),
  from_date: yup.string()
    .required()
    .min(10),
  to_date: yup.string()
    .required()
    .min(10),
//   rating: yup.string()
//     .required()
//     .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
//       return parseInt(val) < 6 && parseInt(val) > 0;
//     }),
});

export default function FlightForm({ addFlight }) {

  return (
      
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={FlightSchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          addFlight(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Flight number'
              onChangeText={props.handleChange('flight_No')}
              onBlur={props.handleBlur('flight_No')} 
              value={props.values.flight_No}
            />
            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

            <TextInput
              style={globalStyles.input}
              multiline minHeight={60}
              placeholder='Sector'
              onChangeText={props.handleChange('sector')}
              onBlur={props.handleBlur('sector')}
              value={props.values.sector}
            />
            <Text style={globalStyles.errorText}>{props.touched.sector && props.errors.sector}</Text>

            <TextInput 
              style={globalStyles.input}
              placeholder='From date'
              onChangeText={props.handleChange('from_date')}
              onBlur={props.handleBlur('from_date')} 
              value={props.values.from_date}
            />
            <Text style={globalStyles.errorText}>{props.touched.to_date && props.errors.to_date}</Text>
            
            <TextInput 
              style={globalStyles.input}
              placeholder='To date'
              onChangeText={props.handleChange('to_date')}
              onBlur={props.handleBlur('to_date')} 
              value={props.values.to_date}
            />
            <Text style={globalStyles.errorText}>{props.touched.to_date && props.errors.to_date}</Text>

            <FlatButton onPress={props.handleSubmit} text='submit' />
            
          </View>
        )}
      </Formik>
    </View>
    
  );
}