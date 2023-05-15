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
import {indexStyles} from '../assets/css/index';
import {formStyles} from '../assets/css/form';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../assets/icons/backIcon.svg';
import LogoApple from '../assets/icons/logoApple.svg';
import WavingHand from '../assets/icons/wavingHand.svg';
import MyTextInput from '../Components/TextInput';
import MyButton from '../Components/Button';

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
      <View style={formStyles.navbarTextContainer}>
        <Text style={formStyles.navbarText}>{children}</Text>
      </View>
    </View>
  );
}

function ConnectToAppleButton({children}) {
  return (
    <View style={formStyles.connectToAppleButtonContainer}>
      <TouchableOpacity
        style={[indexStyles.horizontalFlex, formStyles.connectToAppleButton]}>
        <LogoApple width={16} height={20} style={styles.connectToAppleImg} />
        <Text style={formStyles.connectToAppleButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}
function ConnectForm({title}) {
  const navigation = useNavigation();
  return (
    <View style={formStyles.formContainer}>
      <View style={[indexStyles.horizontalFlex, formStyles.titleContainer]}>
        <Text style={formStyles.title}>{title}</Text>
        <WavingHand width={18} height={18} formStyles={styles.titleImg} />
      </View>
      <View style={formStyles.formContent}>
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
            placeholder="Mot de passe"
            secureTextEntry
            autoCompleteType="password"
            autoCapitalize="none"
            keyboardAppearance="dark"
          />
        </View>
        <View style={formStyles.loginButtonContainer}>
          <MyButton label="Se connecter" onPress={() => true} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgetPassword')}
          style={styles.forgetPassword}>
          <Text style={styles.inscriptionTitle}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Connection() {
  const navigation = useNavigation();
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
          <ConnectForm title="Ravi de vous revoir!" />
          <View style={styles.inscriptionContainer}>
            <Text style={styles.inscriptionTitle}>
              Rejoignez notre communauté !
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Inscription')}>
              <Text style={styles.inscriptionText}>S'inscrire</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  forgetPassword: {
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  inscriptionContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: 0,
    width: 230,
    height: 52,
    // marginTop: 137,
    marginTop: 107,
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
  inscriptionText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 24,
    color: '#1A2442',
    width: 94,
    height: 24,
  },
});

export default Connection;
