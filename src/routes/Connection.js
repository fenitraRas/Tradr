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
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useState} from 'react';

import BackIcon from '../assets/icons/backIcon.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import LogoApple from '../assets/icons/logoApple.svg';
import Eye from '../assets/icons/eye.svg';
import EyeDark from '../assets/icons/eyeDark.svg';
import MyButton from '../Components/Button';
import MyTextInput from '../Components/TextInput';
import TradrLogo from '../assets/icons/tradrLogo.svg';
import WavingHand from '../assets/icons/wavingHand.svg';
import WhiteTradrLogo from '../assets/icons/whiteTradrLogo.svg';
import {formStyles} from '../assets/css/form';
import {indexStyles} from '../assets/css/index';
import theme from '../assets/theme';
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
function ConnectForm(props) {
  const navigation = useNavigation();
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const [secureMdp, setSecureMdp] = useState(true);
  const dispatch = useDispatch();
  return (
    <View style={formStyles.formContainer}>
      <View style={[indexStyles.horizontalFlex, formStyles.titleContainer]}>
        <Text style={props.classes.title}>{props.title}</Text>
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
          <View style={props.classes.inputIcon}>
            <TextInput
              placeholder="Mot de passe"
              secureTextEntry={secureMdp}
              autoCompleteType="password"
              autoCapitalize="none"
              keyboardAppearance="dark"
              value="12345"
              style={props.classes.inputStyle}
              placeholderTextColor={props.classes.placeholder}
            />
            <TouchableOpacity onPress={() => setSecureMdp(!secureMdp)}>
              {colorScheme === 'dark' ? (
                <EyeDark width={22} height={14} />
              ) : (
                <Eye width={22} height={14} />
              )}
            </TouchableOpacity>
          </View>
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
          <Text style={props.classes.inscriptionTitle}>
            Mot de passe oublié ?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Connection() {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const classes = {
    title: [styles.title, colorScheme === 'dark' && styles.titleDark],
    inscriptionTitle: [
      styles.inscriptionTitle,
      colorScheme === 'dark' && styles.inscriptionTitleDark,
    ],
    inscriptionText: [
      styles.inscriptionText,
      colorScheme === 'dark' && styles.inscriptionTextDark,
    ],
    inputStyle: [
      styles.inputStyle,
      colorScheme === 'dark' && styles.inputStyleDark,
    ],
    inputIcon: [
      styles.inputIcon,
      colorScheme === 'dark' && styles.inputIconDark,
    ],
    placeholder:
      colorScheme === 'dark'
        ? theme.colors.text.$placeholderDark
        : theme.colors.text.$placeholderLight,
  };
  const navigation = useNavigation();
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Navbar>Tradrboard</Navbar>
          <View style={formStyles.logoContainer}>{logo}</View>
          <ConnectToAppleButton>Continuer avec Apple</ConnectToAppleButton>
          <ConnectForm classes={classes} title="Ravi de vous revoir!" />
          <View style={styles.inscriptionContainer}>
            <Text style={classes.inscriptionTitle}>
              Rejoignez notre communauté !
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Inscription')}>
              <Text style={classes.inscriptionText}>S'inscrire</Text>
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
    width: 240,
    height: 52,
    marginTop: 207,
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
  inscriptionTextDark: {
    color: theme.colors.text.$textDark,
  },
  inscriptionText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 24,
    color: theme.colors.text.$textLight,
    width: 94,
    height: 24,
    marginTop: 10,
  },
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
  inputIconDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  inputIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 49,
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
    marginTop: 15,
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
    width: '87%',
  },
});

export default Connection;
