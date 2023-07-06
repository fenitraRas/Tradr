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
import PartyingFace from '../assets/icons/partyingFace.svg';
import React from 'react';
import TradrLogo from '../assets/icons/tradrLogo.svg';
import WhiteTradrLogo from '../assets/icons/whiteTradrLogo.svg';
import {formStyles} from '../assets/css/form';
import {indexStyles} from '../assets/css/index';
import theme from '../assets/theme';
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';

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
        style={[indexStyles.horizontalFlex, formStyles.connectToAppleButton]}>
        <LogoApple width={16} height={20} style={styles.connectToAppleImg} />
        <Text style={formStyles.connectToAppleButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}
function Form({classes, title}) {
  return (
    <View style={formStyles.formContainer}>
      <View style={[indexStyles.horizontalFlex, formStyles.titleContainer]}>
        <Text style={classes.title}>{title}</Text>
        <PartyingFace width={18} height={18} style={formStyles.titleImg} />
      </View>
      <View style={formStyles.formContent}>
        <View style={styles.inputContainer}>
          <MyTextInput
            placeholder="Nouveau mot de passe"
            secureTextEntry
            autoCompleteType="password"
            autoCapitalize="none"
            keyboardAppearance="dark"
          />
        </View>
        <View style={formStyles.inputContainer}>
          <MyTextInput
            placeholder="Confirmation mot de passe"
            secureTextEntry
            autoCompleteType="password"
            autoCapitalize="none"
            keyboardAppearance="dark"
          />
        </View>
        <View style={formStyles.loginButtonContainer}>
          <MyButton label="Confirmer" onPress={() => true} />
        </View>
      </View>
    </View>
  );
}
function NewPassword() {
  const navigation = useNavigation();
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const classes = {
    connectTitle: [
      styles.connectTitle,
      colorScheme === 'dark' && styles.connectTitleDark,
    ],
    connectText: [
      styles.connectText,
      colorScheme === 'dark' && styles.connectTextDark,
    ],
    title: [styles.title, colorScheme === 'dark' && styles.titleDark],
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
      <ScrollView>
        <View>
          <Navbar>Tradrboard</Navbar>
          <View style={formStyles.logoContainer}>{logo}</View>
          <ConnectToAppleButton>Continuer avec Apple</ConnectToAppleButton>
          <Form classes={classes} title="Un tout nouveau mot de passe !" />
          <View style={styles.inscriptionContainer}>
            <Text style={classes.connectTitle}>Vous vous en rappeler ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Connection')}>
              <Text style={classes.connectText}>Connectez-vous</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
  inscriptionContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: 0,
    width: 230,
    height: 52,
    // marginTop: 274,
    marginTop: 241,
  },
  connectTitleDark: {
    color: theme.colors.text.$textDark,
  },
  connectTitle: {
    height: 18,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 18,
    color: theme.colors.text.$textLight,
    textAlign: 'center',
  },
  connectTextDark: {
    color: theme.colors.text.$textDark,
  },
  connectText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 24,
    color: theme.colors.text.$textLight,
    width: 165,
    height: 24,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default NewPassword;
