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
import ShushingFace from '../assets/icons/shushingFace.svg';

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
function Form({title}) {
  return (
    <View style={styles.FormContainer}>
      <View style={[styles.horizontalFlex, styles.titleContainer]}>
        <Text style={styles.title}>{title}</Text>
        <ShushingFace width={18} height={18} style={styles.titleImg} />
      </View>
      {/* form content */}
    </View>
  );
}

function ForgetPasswordCode() {
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
              style={styles.image}
            />
          </View>
          <ConnectToAppleButton>Continuer avec Apple</ConnectToAppleButton>
          <Form title="On vous a envoyé un petit code." />
          <View style={styles.inscriptionContainer}>
            <Text style={styles.connectTitle}>Vous vous en rappeler ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Connection')}>
              <Text style={styles.connectText}>Connectez-vous</Text>
            </TouchableOpacity>
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
    marginTop: 40,
    alignSelf: 'center',
    height: 40,
    width: 113.68,
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
  FormContainer: {
    marginTop: 50,
    width: 350,
    height: 180,
    marginLeft: 20,
    backgroundColor: 'green',
  },
  titleContainer: {
    height: 22,
    // backgroundColor: 'green',
  },
  title: {
    height: 24,
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
  // connectButton: {
    
  // },
  // connectButtonText: {
    
  // },
  inscriptionContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: 0,
    width: 230,
    height: 52,
    // marginTop: 333,
    marginTop: 200,
  },
  connectTitle: {
    height: 18,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 18,
    color: '#1A2442',
    textAlign: 'center',
  },
  connectText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 24,
    color: '#1A2442',
    width: 165,
    height: 24,
    textAlign: 'center',
  },
});

export default ForgetPasswordCode;
