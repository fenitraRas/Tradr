/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Dimensions,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import IconGroup1 from '../assets/icons/iconGroup1.svg';
import Twitter from '../assets/icons/twitter.svg';
import Linkedin from '../assets/icons/linkedin.svg';

import {formStyles} from '../assets/css/form';

function Navbar(props) {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const [option] = useState(colorScheme);
  return (
    <View style={formStyles.navbarContainer}>
      <View style={formStyles.navbarIcon} />
      <View style={formStyles.navbarTextContainer}>
        <Text
          style={[
            styles.navbarText,
            {color: option === 'dark' ? '#FFFFFF' : '#1A2442'},
          ]}>
          {props.title}
        </Text>
      </View>
      <View style={formStyles.navbarIcon}>
        <TouchableOpacity>
          {option === 'light' ? (
            <DotThreeVertical width={30} height={20} />
          ) : (
            <DotThreeVerticalLight width={30} height={20} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

function SettingContent() {
  return (
    <View style={[styles.settingContent, styles.shadowProp]}>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Compte</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Langage</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Support</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.itemText}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
}

function SettingFooter() {
  return (
    <View style={[styles.settingFooter]}>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <IconGroup1 width={26} height={26} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Twitter width={26} height={26} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Linkedin width={26} height={26} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.infoApp}>Création Pléiade[s] - TRADR © 2023</Text>
      <Text style={styles.version}>version 1.0.0</Text>
    </View>
  );
}

function SettingContainer() {
  return (
    <ScrollView style={styles.content}>
      <SettingContent />
    </ScrollView>
  );
}

function Setting() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={{height: Dimensions.get('window').height}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Navbar title="Paramètres" />
      <SettingContainer />
      <SettingFooter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  settingContent: {
    width: Dimensions.get('window').width,
    height:
      Platform.OS === 'android'
        ? Dimensions.get('window').height
        : Dimensions.get('window').height - 140,
    paddingLeft: 28,
    paddingRight: 28,
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
    paddingBottom: 14,
  },
  shadowProp: {
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 2,
  },
  content: {
    height:
      Platform.OS === 'android'
        ? Dimensions.get('window').height - 120
        : Dimensions.get('window').height - 170,
  },
  navbarText: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Montserrat',
    color: '#1A2442',
  },
  item: {
    width: '100%',
    borderBottomColor: '#D2D6E1',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
  },
  itemText: {
    height: 20,
    marginTop: 17,
    marginBottom: 17,
    color: '#1A2442',
    fontSize: 16,
    fontFamily: 'Montserrat',
  },
  settingFooter: {
    position: 'absolute',
    bottom: Platform.OS === 'android' ? 25 : 35,
    left: 0,
    height: 100,
    width: '100%',
  },
  iconContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 26,
  },
  icon: {
    marginLeft: 14,
    marginRight: 14,
  },
  infoApp: {
    marginTop: 20,
    textAlign: 'center',
    color: '#9BA5BF',
    fontFamily: 'Montserrat',
    fontSize: 16,
  },
  version: {
    textAlign: 'center',
    marginTop: 6,
    color: '#9BA5BF',
    fontFamily: 'Montserrat',
    fontSize: 13,
  },
});

export default Setting;
