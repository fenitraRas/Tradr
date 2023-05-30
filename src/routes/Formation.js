/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Alert,
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
  NativeModules,
} from 'react-native';
import Menu, {NavbarMenu} from './Menu';
import React, {useRef, useState} from 'react';
import {ProgressBar} from 'react-native-paper';
import Video from 'react-native-video';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {formStyles} from '../assets/css/form';
import {indexStyles} from '../assets/css/index';

import ArrowRigth from '../assets/icons/arrowRigth.svg';
import Books from '../assets/icons/books.svg';
import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import PlayButton from '../assets/icons/playButton.svg';
import HighVoltage from '../assets/icons/highVoltage.svg';
import Locked from '../assets/icons/locked.svg';
import SeletedRadio from '../assets/icons/selectedRadio.svg';
import UnseletedRadio from '../assets/icons/unselectedRadio.svg';
import WavingHand from '../assets/icons/wavingHand.svg';

import video from '../assets/video/video_test.mp4';

const {StatusBarManager} = NativeModules;

function Navbar(props) {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const [option] = useState(colorScheme);
  return (
    <View style={formStyles.navbarContainer}>
      <View style={formStyles.navbarIcon} />
      <View style={formStyles.navbarTextContainer}>
        <Text style={[styles.navbarText]}>{props.title}</Text>
      </View>
      <View style={formStyles.navbarIcon}>
        <TouchableOpacity style={styles.button}>
          <DotThreeVerticalLight width={30} height={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Formation() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [isPlaying, setIsPlaying] = React.useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.imgContainer}>
        <Image
          source={require('../assets/formationBg.jpg')}
          style={styles.image}
        />
        <View style={styles.PlayButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('FormationPlayer')}>
            <PlayButton width={46} height={46} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.fixedNavbar}>
        <Navbar title="Formation" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navbarText: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Montserrat',
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  imgContainer: {
    width: '100%',
    height: 436,
    backgroundColor: 'red',
  },
  image: {
    width: '100%',
    height: 436,
    marginTop: Platform.OS === 'android' ? 0 : -StatusBarManager.HEIGHT - 5,
    // width: Dimensions.get('window').width,
    // height:
    //   Platform.OS === 'android'
    //     ? 416
    //     : Dimensions.get('window').height + StatusBarManager.HEIGHT,
    // backgroundColor: 'red',
    // maxHeight: 416,
  },
  fixedNavbar: {
    width: '100%',
    position: 'absolute',
    top: Platform.OS === 'android' ? 10 : 52,
    left: 0,
  },
  PlayButtonContainer: {
    width: '100%',
    position: 'absolute',
    top: 172,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Formation;
