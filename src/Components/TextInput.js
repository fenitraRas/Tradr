import React from 'react';
import {
  TextInput as RNTextInput,
  View,
  StyleSheet,
  Platform,
} from 'react-native';

export default function TextInput({...otherProps}) {
  return (
    <View style={styles.inputContainer}>
      <RNTextInput
        style={styles.inputStyle}
        // underlineColorAndroid='transparent'
        // placeholderTextColor='rgba(34, 62, 75, 0.7)'
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: 350,
    height: 49,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: Platform.OS === 'android' ? -15 : undefined,
  },
  inputStyle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 21,
    color: '#1A2442',
  },
});
