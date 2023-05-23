/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';

import MyButton from '../Components/Button';
import MyTextInput from '../Components/TextInput';

import {formStyles} from '../assets/css/form';
import {indexStyles} from '../assets/css/index';

import BackIcon from '../assets/icons/backIcon.svg';
import FoldedHands from '../assets/icons/foldedHands.svg';
import LogoApple from '../assets/icons/logoApple.svg';

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

function alertInfo() {
  Alert.alert('INFO', 'Fonctionnalité en cours de développement', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
}

function ConnectToAppleButton({children}) {
  return (
    <View style={formStyles.connectToAppleButtonContainer}>
      <TouchableOpacity
        style={[indexStyles.horizontalFlex, formStyles.connectToAppleButton]}
        onPress={() => alertInfo()}>
        <LogoApple width={16} height={20} style={styles.connectToAppleImg} />
        <Text style={formStyles.connectToAppleButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}
function InscriptionForm({title}) {
  return (
    <View style={styles.inscriptionFormContainer}>
      <View style={[indexStyles.horizontalFlex, formStyles.titleContainer]}>
        <Text style={formStyles.title}>{title}</Text>
        <FoldedHands width={18} height={18} style={formStyles.titleImg} />
      </View>
      <View style={formStyles.formContent}>
        <View style={formStyles.inputContainer}>
          <MyTextInput
            placeholder="Prénom"
            autoCapitalize="none"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
        </View>
        <View style={formStyles.inputContainer}>
          <MyTextInput
            placeholder="Nom"
            autoCapitalize="none"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
        </View>
        <View style={formStyles.inputContainer}>
          <MyTextInput
            placeholder="Email"
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
        </View>
        <View style={formStyles.inputContainer}>
          <MyTextInput
            placeholder="Téléphone"
            autoCompleteType="phone"
            keyboardType="phone-pad"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
        </View>
        <View style={formStyles.inputContainer}>
          <MyTextInput
            placeholder="Mot de passe"
            secureTextEntry
            autoCompleteType="password"
            autoCapitalize="none"
            keyboardAppearance="dark"
          />
        </View>
        <View style={formStyles.loginButtonContainer}>
          <MyButton label="S'inscrire" onPress={() => alertInfo()} />
        </View>
      </View>
    </View>
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
});

export default Inscription;
