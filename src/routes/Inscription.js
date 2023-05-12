/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
  Image,
} from 'react-native';

import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../assets/icons/backIcon.svg';
import LogoApple from '../assets/icons/logoApple.svg';
import FoldedHands from '../assets/icons/foldedHands.svg';
import MyTextInput from '../Components/TextInput';
import MyButton from '../Components/Button';

function Navbar({children}) {
  const navigation = useNavigation();
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navbarIcon}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tradrboard')}>
          <BackIcon width={30} height={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.navbarTextContainer}>
        <Text style={styles.navbarText}>{children}</Text>
      </View>
    </View>
  );
}

function ConnectToAppleButton({children}) {
  return (
    <View>
      <TouchableOpacity
        style={[styles.horizontalFlex, styles.connectToAppleButton]}>
        <LogoApple width={16} height={20} style={styles.connectToAppleImg} />
        <Text style={styles.connectToAppleButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}
function InscriptionForm({title}) {
  return (
    <View style={styles.InscriptionFormContainer}>
      <View style={[styles.horizontalFlex, styles.titleContainer]}>
        <Text style={styles.title}>{title}</Text>
        <FoldedHands width={18} height={18} style={styles.titleImg} />
      </View>
      <View style={styles.formContent}>
        <View style={styles.inputContainer}>
          <MyTextInput
            placeholder="Prénom"
            autoCapitalize="none"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
        </View>
        <View style={styles.inputContainer}>
          <MyTextInput
            placeholder="Nom"
            autoCapitalize="none"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
        </View>
        <View style={styles.inputContainer}>
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
        <View style={styles.inputContainer}>
          <MyTextInput
            placeholder="Téléphone"
            autoCompleteType="phone"
            keyboardType="phone-pad"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
          />
        </View>
        <View style={styles.inputContainer}>
          <MyTextInput
            placeholder="Mot de passe"
            secureTextEntry
            autoCompleteType="password"
            autoCapitalize="none"
            keyboardAppearance="dark"
          />
        </View>
        <View style={styles.loginButtonContainer}>
          <MyButton label="S'inscrire" onPress={() => true} />
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
              style={styles.image}
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
  horizontalFlex: {
    flex: 1,
    flexDirection: 'row',
  },
  verticalFlex: {
    flex: 1,
    flexDirection: 'column',
  },
  navbarContainer: {
    width: '100%',
    height: 27,
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 10,
  },
  formContent: {
    marginTop: 14,
  },
  inputContainer: {
    width: '100%',
  },
  loginButtonContainer: {
    marginTop: 30,
  },
  navbarIcon: {
    flex: 1,
    paddingTop: 2,
    maxWidth: 32,
    minWidth: 32,
  },
  navbarTextContainer: {
    flex: 1,
  },
  navbarText: {
    textAlign: 'left',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Montserrat',
    color: '#1A2442',
  },
  image: {
    height: 40,
    width: 113.68,
    marginTop: 40,
    alignSelf: 'center',
  },
  connectToAppleButton: {
    alignSelf: 'center',
    backgroundColor: '#000000',
    width: 350,
    height: 49,
    marginTop: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectToAppleImg: {
    color: '#FFFFFF',
    lineHeight: 20,
    fontSize: 17,
    fontWeight: 600,
  },
  connectToAppleButtonText: {
    width: 186,
    height: 21,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 21,
    color: '#FFFFFF',
    marginLeft: 10,
    marginTop: 1,
  },
  InscriptionFormContainer: {
    marginTop: 50,
    width: 350,
    // height: 416,
    marginLeft: 20,
  },
  titleContainer: {
    height: 22,
  },
  title: {
    height: 22,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 22,
    color: '#1A2442',
  },
  titleImg: {
    marginLeft: 6,
    marginTop: 2,
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
