import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Platform} from 'react-native';

export default function Button({label, onPress}) {
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
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27355F',
    shadowColor: 'rgba(39, 53, 95, 0.8)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 1,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(39, 53, 95, 0.6)',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 14,
      },
      android: {
        elevation: 3,
      },
    }),
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
