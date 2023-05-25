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
import ChevronLeft from '../assets/icons/chevronLeft.svg';
import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import BlackDotThreeVertical from '../assets/icons/blackDotThreeVertical.svg';
import HighVoltage from '../assets/icons/highVoltage.svg';
import Locked from '../assets/icons/locked.svg';
import SeletedRadio from '../assets/icons/selectedRadio.svg';
import UnseletedRadio from '../assets/icons/unselectedRadio.svg';
import WavingHand from '../assets/icons/wavingHand.svg';

import video from '../assets/video/video_test.mp4';

function Navbar(props) {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const [option] = useState(colorScheme);
  const navigation = useNavigation();
  return (
    <View style={formStyles.navbarContainer}>
      <View style={formStyles.navbarIcon}>
        <TouchableOpacity onPress={() => navigation.navigate('Formation')}>
          <ChevronLeft width={30} height={20} />
        </TouchableOpacity>
      </View>
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
          <BlackDotThreeVertical width={30} height={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function FormationPlayerContent() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  return (
    <View style={[styles.formationPlayerContent, styles.shadowProp]}>
      <View style={styles.cardContainer}>
        <View style={styles.videoContainer}>
          <Video
            source={video}
            paused={!isPlaying}
            controls={true}
            style={styles.video}
            repeat={true}
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={() => setIsPlaying(p => !p)}
            title={isPlaying ? 'Stop' : 'Play'}
          />
        </View>
        <View style={styles.videoTextContainer}>
          <Text style={styles.videoText}>Épisode 03</Text>
          <Text style={styles.videoTitle}>
            Prendre le contrôle de son capital
          </Text>
        </View>
      </View>
    </View>
  );
}

function FormationPlayerContainer() {
  return (
    <ScrollView>
      <FormationPlayerContent />
    </ScrollView>
  );
}

function FormationPlayer() {
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
      <Navbar title="God's Plan" />
      <FormationPlayerContainer />
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
    color: '#1A2442',
  },
  formationPlayerContent: {
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
    padding: 10,
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
  cardContainer: {
    width: '100%',
    height: 328,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    borderRadius: 20,
    backgroundColor: '#E9EDFC',
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: Platform.OS === 'android' ? -35 : undefined,
  },
  videoContainer: {
    width: '100%',
    height: 208,
  },
  video: {
    borderRadius: 20,
    height: 208,
    width: '100%',
  },
  videoTextContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  videoText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 15,
    color: '#9BA5BF',
    textTransform: 'uppercase',
    height: 15,
  },
  videoTitle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    color: '#1A2442',
    height: 24,
    marginTop: 3,
  },
});

export default FormationPlayer;
