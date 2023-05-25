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
import FoldedHands from '../assets/icons/foldedHands.svg';
import {Formik} from 'formik';
import LogoApple from '../assets/icons/logoApple.svg';
import MyButton from '../Components/Button';
import MyTextInput from '../Components/TextInput';
import {formStyles} from '../assets/css/form';
import {indexStyles} from '../assets/css/index';
import {useNavigation} from '@react-navigation/native';

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
function InscriptionForm({title}) {
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
            <Text style={formStyles.title}>{title}</Text>
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
                    ? [styles.inputIcon, {borderColor: 'red', borderWidth: 2}]
                    : styles.inputIcon
                }>
                <TextInput
                  placeholder="Mot de passe*"
                  secureTextEntry={isPasswordTextSecured}
                  autoCompleteType="password"
                  autoCapitalize="none"
                  keyboardAppearance="dark"
                  onChangeText={handleChange('password')}
                  value={values.password}
                  style={styles.inputStyle}
                  placeholderTextColor="#1A2442"
                />
                <TouchableOpacity
                  onPress={() =>
                    setIsPasswordTextSecured(!isPasswordTextSecured)
                  }>
                  <Eye width={22} height={14} />
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
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView>
        <View>
          <Navbar>Tradrboard</Navbar>
          <View>
            <Image
              source={require('../assets/tradrLightLogo.png')}
              style={formStyles.image}
            />
          </View>
          <ConnectToAppleButton>Continuer avec Apple</ConnectToAppleButton>
          <InscriptionForm title="Un tout nouveau membre !" />
          <View style={styles.inscriptionContainer}>
            <Text style={styles.inscriptionTitle}>
              Vous êtes déjà un membre Tradr ?
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inscriptionFormContainer: {
    alignSelf: 'center',
    marginTop: 50,
    width: '100%',
    maxWidth: 350,
    paddingLeft: 10,
    paddingRight: 10,
    // height: 416,
  },
  inscriptionContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: 0,
    width: '100%',
    height: 52,
    // marginTop: 70,
    marginTop: 20,
  },
  inscriptionTitle: {
    height: 18,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 18,
    color: '#1A2442',
  },
  inputIcon: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    alignItems: 'center',
    // maxWidth: 350,
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
  },
  inputStyle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 21,
    color: '#1A2442',
    marginLeft: 15,
    width: '83%',
  },
});

export default Inscription;
