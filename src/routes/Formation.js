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
  NativeModules,
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

import ArrowRigth from '../assets/icons/arrowRigth.svg';
import Books from '../assets/icons/books.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import HighVoltage from '../assets/icons/highVoltage.svg';
import Locked from '../assets/icons/locked.svg';
import PlayButton from '../assets/icons/playButton.svg';
import {ProgressBar} from 'react-native-paper';
import Rewind from '../assets/icons/rewind.svg';
import SeletedRadio from '../assets/icons/selectedRadio.svg';
import UnseletedRadio from '../assets/icons/unselectedRadio.svg';
import Video from 'react-native-video';
import WavingHand from '../assets/icons/wavingHand.svg';
import {formStyles} from '../assets/css/form';
import {indexStyles} from '../assets/css/index';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import video from '../assets/video/video_test.mp4';

const {StatusBarManager} = NativeModules;

function Navbar(props) {
  const navigation = useNavigation();
  return (
    <View style={formStyles.navbarContainer}>
      <View style={formStyles.navbarIcon} />
      <View style={formStyles.navbarTextContainer}>
        <Text style={[styles.navbarText]}>{props.title}</Text>
      </View>
      <View style={formStyles.navbarIcon}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tradrboard')}>
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
        <Text style={styles.videoTitle}>Titre video</Text>
        <Text style={styles.videoEpisode}>Episode 3 Saison 1</Text>
        <View style={styles.caption}>
          <Text style={styles.videoStatus}>En cours</Text>
        </View>
        <View style={styles.videoTime} />
        <View style={styles.videoTimeInProgress} />
        <TouchableOpacity style={styles.rewind} onPress={() => {}}>
          <Rewind width={24} height={20} position="absolute" />
        </TouchableOpacity>
      </View>
      <View style={styles.fixedNavbar}>
        <Navbar title="Formation" />
      </View>

      <ScrollView style={styles.content}>
        <View>
          <Text style={styles.coverTitle}>Reprendre</Text>
          <ScrollView horizontal style={styles.cover}>
            <TouchableOpacity>
              <Image
                source={require('../assets/video/trade.jpeg')}
                style={styles.coverImage}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/video/the_economist.jpg')}
                style={styles.coverImage}
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View>
          <Text style={styles.coverTitle}>Découvrir</Text>
          <ScrollView horizontal style={styles.cover}>
            <TouchableOpacity>
              <Image
                source={require('../assets/video/discover1.jpeg')}
                style={styles.coverImage}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/video/discover2.jpeg')}
                style={styles.coverImage}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/video/discover3.jpeg')}
                style={styles.coverImage}
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View>
          <Text style={styles.coverTitle}>Accès Premium</Text>
          <ScrollView horizontal style={styles.cover}>
            <TouchableOpacity>
              <Image
                source={require('../assets/formationBg.jpg')}
                style={styles.coverImage}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/formationBg.jpg')}
                style={styles.coverImage}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/formationBg.jpg')}
                style={styles.coverImage}
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
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
    height: 377,
    // backgroundColor: 'red',
  },
  image: {
    width: '100%',
    height: 742,
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
    top: 161,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    height: 898,
    left: 0,
    // top: 275,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  videoTitle: {
    position: 'absolute',
    width: '100%',
    height: 34,
    top: 283,
    left: 15,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 28,
    lineHeight: 34,
    color: '#FFFFFF',
  },
  videoEpisode: {
    position: 'absolute',
    width: '100%',
    height: 18,
    top: 318,
    left: 15,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
    color: '#FFFFFF',
    opacity: 0.7,
  },
  caption: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 2,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 4,
    gap: 10,
    position: 'absolute',
    width: 71,
    height: 21,
    left: 15,
    top: 346,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
  },
  videoStatus: {
    position: 'absolute',
    width: '100%',
    height: 15,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 15,
    color: '#FFFFFF',
    alignSelf: 'center',
  },
  videoTime: {
    position: 'absolute',
    width: Dimensions.get('window').width - 159,
    height: 8,
    left: 100,
    top: 352,
    borderRadius: 6.5,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
  },
  videoTimeInProgress: {
    position: 'absolute',
    width: 91,
    height: 8,
    left: 100,
    top: 352,
    borderRadius: 6.5,
    backgroundColor: '#FFFFFF',
  },
  rewind: {
    position: 'absolute',
    width: Dimensions.get('window').width - 346 - 20,
    height: 20,
    left: 366,
    top: 346,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverTitle: {
    width: '100%',
    height: 18,
    top: 20,
    left: 15,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
    color: '#9BA5BF',
  },
  cover: {
    width: Dimensions.get('window').width,
    height: 215,
    left: 0,
    marginTop: 33,
    flexDirection: 'row',
    overflowX: 'scroll',
  },
  coverImage: {
    width: 152,
    height: 215,
    left: -5,
    marginLeft: 15,
    flex: 1,
    borderRadius: 15,
    backgroundColor: '#fff',
    ...Platform.select({
      android: {
        elevation: 10,
      },
      ios: {
        shadowColor: '#282A49',
        shadowOffset: {width: 0, height: 30},
        shadowOpacity: 0.4,
        shadowRadius: 50,
      },
    }),
  },
});

export default Formation;
