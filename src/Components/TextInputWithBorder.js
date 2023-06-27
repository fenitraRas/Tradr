import {
  Platform,
  TextInput as RNTextInput,
  StyleSheet,
  View,
} from 'react-native';

import React from 'react';

export default function TextInputWithBorder({error, ...otherProps}) {
  return (
    <View
      style={
        error
          ? [styles.inputContainer, {borderColor: 'red', borderWidth: 2}]
          : styles.inputContainer
      }>
      <RNTextInput
        style={styles.inputStyle}
        // underlineColorAndroid='transparent'
        placeholderTextColor="#1A2442"
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
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
    justifyContent: 'center',
    borderColor: '#9154FD',
    borderWidth: 1,
  },
  inputStyle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 21,
    color: '#1A2442',
    marginLeft: 15,
  },
});
