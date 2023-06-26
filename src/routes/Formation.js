/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
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
import React, {useRef, useState} from 'react';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import PlayButton from '../assets/icons/playButton.svg';
import Rewind from '../assets/icons/rewind.svg';
import {formStyles} from '../assets/css/form';
import theme from '../assets/theme';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

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
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const classes = {
    container: [
      styles.container,
      colorScheme === 'dark' && styles.containerDark,
    ],
    content: [styles.content, colorScheme === 'dark' && styles.contentDark],
  };
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView style={classes.container}>
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
          <Rewind width={24} height={20} style={styles.rewindicon} />
        </TouchableOpacity>
      </View>
      <View style={styles.fixedNavbar}>
        <Navbar title="Formation" />
      </View>

      <ScrollView style={classes.content}>
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
    backgroundColor: theme.colors.background.$backgroundLight,
    paddingBottom: 20,
  },
  containerDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  imgContainer: {
    width: '100%',
    height: 377,
  },
  image: {
    width: '100%',
    height: 742,
    marginTop: Platform.OS === 'android' ? 0 : -StatusBarManager.HEIGHT - 5,
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
    backgroundColor: theme.colors.background.$backgroundLight,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  contentDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
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
    width: '100%',
    height: 20,
    right: 10,
    bottom: 12,
  },
  rewindicon: {
    position: 'absolute',
    right: 10,
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
        // elevation: 10,
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
