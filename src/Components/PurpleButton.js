import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Platform} from 'react-native';

export default function PurpleButton({label, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: 49,
    maxWidth: 370,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9154FD',
    elevation: 4,
    shadowColor: 'rgba(145, 84, 253, 0.8)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
  buttonText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 21,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
