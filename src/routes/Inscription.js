/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';

import BackIcon from '../assets/icons/backIcon.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Eye from '../assets/icons/eye.svg';
import EyeDark from '../assets/icons/eyeDark.svg';
import FoldedHands from '../assets/icons/foldedHands.svg';
import {Formik} from 'formik';
import LogoApple from '../assets/icons/logoApple.svg';
import MyButton from '../Components/Button';
import MyTextInput from '../Components/TextInput';
import TradrLogo from '../assets/icons/tradrLogo.svg';
import WhiteTradrLogo from '../assets/icons/whiteTradrLogo.svg';
import {formStyles} from '../assets/css/form';
import {indexStyles} from '../assets/css/index';
import theme from '../assets/theme';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

function Navbar({children}) {
  const navigation = useNavigation();
  return (
    <View style={formStyles.navbarContainer}>
      <View style={formStyles.navbarIcon}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tradrboard')}>
          <BackIcon width={30} height={20} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={formStyles.navbarTextContainer}
        onPress={() => navigation.navigate('Tradrboard')}>
        <Text style={formStyles.navbarText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}

function ConnectToAppleButton({children}) {
  return (
    <View style={formStyles.connectToAppleButtonContainer}>
      <TouchableOpacity
        style={[indexStyles.horizontalFlex, formStyles.connectToAppleButton]}
        onPress={() => {}}>
        <LogoApple width={16} height={20} style={styles.connectToAppleImg} />
        <Text style={formStyles.connectToAppleButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}
function InscriptionForm({classes, title}) {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const [isPasswordTextSecured, setIsPasswordTextSecured] = useState(true);
  const [isButtonSubmitClicked, setIsButtonSubmitClicked] = useState(false);
  function isValidate(values) {
    for (const key in values) {
      if (key === 'email') {
        return isValidateEmail(values[key]);
      } else if (values[key] === '') {
        return false;
      }
    }
    return true;
  }

  function isValidateEmail(email) {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <Formik
      initialValues={{prenom: '', nom: '', email: '', phone: '', password: ''}}
      onSubmit={values => {
        setIsButtonSubmitClicked(true);
        if (isValidate(values)) {
          // dispatch({type: "REGISTER", payload: values})
        }
        console.log(values, isValidate(values));
      }}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.inscriptionFormContainer}>
          <View style={[indexStyles.horizontalFlex, formStyles.titleContainer]}>
            <Text style={classes.title}>{title}</Text>
            <FoldedHands width={18} height={18} style={formStyles.titleImg} />
          </View>
          <View style={formStyles.formContent}>
            <View style={formStyles.inputContainer}>
              <View style={[formStyles.inputContainer]}>
                <MyTextInput
                  placeholder="Prénom*"
                  autoCapitalize="none"
                  keyboardAppearance="dark"
                  returnKeyType="next"
                  returnKeyLabel="next"
                  onChangeText={handleChange('prenom')}
                  value={values.prenom}
                  error={
                    values.prenom === '' && isButtonSubmitClicked ? true : false
                  }
                />
              </View>
              <View style={formStyles.inputContainer}>
                <MyTextInput
                  placeholder="Nom*"
                  autoCapitalize="none"
                  keyboardAppearance="dark"
                  returnKeyType="next"
                  returnKeyLabel="next"
                  onChangeText={handleChange('nom')}
                  value={values.nom}
                  error={
                    values.nom === '' && isButtonSubmitClicked ? true : false
                  }
                />
              </View>
              <View style={formStyles.inputContainer}>
                <MyTextInput
                  placeholder="Email*"
                  autoCapitalize="none"
                  autoCompleteType="email"
                  keyboardType="email-address"
                  keyboardAppearance="dark"
                  returnKeyType="next"
                  returnKeyLabel="next"
                  onChangeText={handleChange('email')}
                  value={values.email}
                  error={
                    !isValidateEmail(values.email) && isButtonSubmitClicked
                      ? true
                      : false
                  }
                />
              </View>
              <View style={formStyles.inputContainer}>
                <MyTextInput
                  placeholder="Téléphone*"
                  autoCompleteType="phone"
                  keyboardType="phone-pad"
                  keyboardAppearance="dark"
                  returnKeyType="next"
                  returnKeyLabel="next"
                  onChangeText={handleChange('phone')}
                  value={values.phone}
                  error={
                    values.phone === '' && isButtonSubmitClicked ? true : false
                  }
                />
              </View>
              <View
                style={
                  values.password === '' && isButtonSubmitClicked
                    ? [classes.inputIcon, {borderColor: 'red', borderWidth: 2}]
                    : classes.inputIcon
                }>
                <TextInput
                  placeholder="Mot de passe*"
                  secureTextEntry={isPasswordTextSecured}
                  autoCompleteType="password"
                  autoCapitalize="none"
                  keyboardAppearance="dark"
                  onChangeText={handleChange('password')}
                  value={values.password}
                  style={classes.inputStyle}
                  placeholderTextColor={classes.placeholder}
                />
                <TouchableOpacity
                  onPress={() =>
                    setIsPasswordTextSecured(!isPasswordTextSecured)
                  }>
                  {colorScheme === 'dark' ? (
                    <EyeDark width={22} height={14} />
                  ) : (
                    <Eye width={22} height={14} />
                  )}
                </TouchableOpacity>
              </View>

              <View style={formStyles.loginButtonContainer}>
                <MyButton
                  onPress={handleSubmit}
                  title="Submit"
                  label="S'inscrire"
                />
              </View>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
}

function Inscription() {
  const navigation = useNavigation();
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const classes = {
    title: [styles.title, colorScheme === 'dark' && styles.titleDark],
    inscriptionTitle: [
      styles.inscriptionTitle,
      colorScheme === 'dark' && styles.inscriptionTitleDark,
    ],
    inputStyle: [
      styles.inputStyle,
      colorScheme === 'dark' && styles.inputStyleDark,
    ],
    placeholder:
      colorScheme === 'dark'
        ? theme.colors.text.$placeholderDark
        : theme.colors.text.$placeholderLight,
    inputIcon: [
      styles.inputIcon,
      colorScheme === 'dark' && styles.inputIconDark,
    ],
  };
  const backgroundStyle = {
    backgroundColor: colorScheme === 'dark' ? Colors.darker : Colors.lighter,
  };
  let logo =
    colorScheme === 'dark' ? (
      <WhiteTradrLogo width={113.684} height={40} />
    ) : (
      <TradrLogo width={113.684} height={40} />
    );
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'dark-content' : 'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        <Navbar>Tradrboard</Navbar>
        <ScrollView>
          <View style={formStyles.logoContainer}>{logo}</View>
          <ConnectToAppleButton>Continuer avec Apple</ConnectToAppleButton>
          <InscriptionForm classes={classes} title="Un tout nouveau membre !" />
          <TouchableOpacity
            style={styles.inscriptionContainer}
            onPress={() => navigation.navigate('Connection')}>
            <Text style={classes.inscriptionTitle}>
              Vous êtes déjà un membre Tradr ?
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleDark: {
    color: theme.colors.text.$textDark,
  },
  title: {
    height: 24,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 22,
    color: theme.colors.text.$textLight,
    marginRight: 6,
  },
  inscriptionFormContainer: {
    alignSelf: 'center',
    marginTop: 50,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  inscriptionContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: 0,
    width: '100%',
    height: 52,
    marginTop: 130,
  },
  inscriptionTitleDark: {
    color: theme.colors.text.$textDark,
  },
  inscriptionTitle: {
    height: 18,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 18,
    color: theme.colors.text.$textLight,
  },
  inputIconDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  inputIcon: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    alignItems: 'center',
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
    width: '83%',
  },
});

export default Inscription;
