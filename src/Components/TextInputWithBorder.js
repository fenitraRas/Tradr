import {
  Platform,
  TextInput as RNTextInput,
  StyleSheet,
  View,
} from 'react-native';

import React from 'react';
import theme from '../assets/theme';
import {useSelector} from 'react-redux';

export default function TextInputWithBorder({error, ...otherProps}) {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const classes = {
    inputContainer: [
      styles.inputContainer,
      colorScheme === 'dark' && styles.inputContainerDark,
    ],
    inputStyle: [
      styles.inputStyle,
      colorScheme === 'dark' && styles.inputStyleDark,
    ],
  };
  return (
    <View
      style={
        error
          ? [classes.inputContainer, {borderColor: 'red', borderWidth: 2}]
          : classes.inputContainer
      }>
      <RNTextInput
        style={classes.inputStyle}
        // underlineColorAndroid='transparent'
        placeholderTextColor={
          colorScheme === 'dark'
            ? theme.colors.text.$placeholderDark
            : theme.colors.text.$placeholderLight
        }
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainerDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  inputContainer: {
    width: '100%',
    height: 49,
    marginTop: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderRadius: 10,
    elevation: 8,
    shadowColor: '#090d6d',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent: 'center',
    borderColor: '#9154FD',
    borderWidth: 1,
  },
  inputStyleDark: {
    color: theme.colors.text.$textDark,
  },
  inputStyle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 21,
    color: theme.colors.text.$textLight,
    marginLeft: 15,
  },
});
