/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
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

import BackIcon from '../assets/icons/backIcon.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import LogoApple from '../assets/icons/logoApple.svg';
import MyButton from '../Components/Button';
import MyTextInput from '../Components/TextInput';
import React from 'react';
import WavingHand from '../assets/icons/wavingHand.svg';
import {formStyles} from '../assets/css/form';
import {indexStyles} from '../assets/css/index';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import TradrLogo from '../assets/icons/tradrLogo.svg';
import WhiteTradrLogo from '../assets/icons/whiteTradrLogo.svg';

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
        <TouchableOpacity onPress={() => navigation.navigate('Tradrboard')}>
          <Text style={formStyles.navbarText}>{children}</Text>
        </TouchableOpacity>
      </View>
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
function ConnectForm({title}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={formStyles.formContainer}>
      <View style={[indexStyles.horizontalFlex, formStyles.titleContainer]}>
        <Text style={formStyles.title}>{title}</Text>
        <WavingHand width={18} height={18} />
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
            editable={false}
            value="kevin@tradrdemo.fr"
          />
        </View>
        <View style={formStyles.inputContainer}>
          <MyTextInput
            placeholder="Mot de passe"
            secureTextEntry
            autoCompleteType="password"
            autoCapitalize="none"
            keyboardAppearance="dark"
            editable={false}
            value="12345"
          />
        </View>
        <View style={formStyles.loginButtonContainer}>
          <MyButton
            label="Se connecter"
            onPress={() => {
              dispatch({type: 'LOGIN'});
              navigation.push('Tradrboard');
            }}
          />
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
  let logo = isDarkMode ? (
    <WhiteTradrLogo width={113.684} height={40} />
  ) : (
    <TradrLogo width={113.684} height={40} />
  );
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView>
        <View>
          <Navbar>Tradrboard</Navbar>
          <View style={formStyles.logoContainer}>{logo}</View>
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
    marginTop: 10,
  },
});

export default Connection;
