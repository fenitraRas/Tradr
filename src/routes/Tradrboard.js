/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
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
import {indexStyles} from '../assets/css/index';
import {formStyles} from '../assets/css/form';

import ArrowRigth from '../assets/icons/arrowRigth.svg';
import Books from '../assets/icons/books.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import HighVoltage from '../assets/icons/highVoltage.svg';
import Locked from '../assets/icons/locked.svg';
import {ProgressBar} from 'react-native-paper';
import SeletedRadio from '../assets/icons/selectedRadio.svg';
import UnseletedRadio from '../assets/icons/unselectedRadio.svg';
import Video from 'react-native-video';
import WavingHand from '../assets/icons/wavingHand.svg';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import video from '../assets/video/video_test.mp4';

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
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.handleScrollToRight()}>
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

function TradrboardContent({children}) {
  const navigation = useNavigation();
  return (
    <View style={[styles.tradrboardContent, styles.shadowProp]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Connection')}
        style={styles.connectButton}>
        <Text style={styles.connectButtonText}>{children}</Text>
      </TouchableOpacity>
      <View style={indexStyles.horizontalFlex}>
        <Hola>Holà !</Hola>
        <WavingHand width={26} height={26} style={styles.holaImage} />
      </View>

      <TradrBoardInfo title="Personnel" />
      <TradrBoardObjective title="Objectifs à compléter" />
      <TradrBoardVideo title="Episode en libre accès" />
    </View>
  );
}

function Hola({children, title}) {
  return (
    <View style={styles.holaContent}>
      <Text style={styles.holaText}>{children}</Text>
    </View>
  );
}

function TradrBoardInfo({title}) {
  const navigation = useNavigation();
  return (
    <View style={styles.tradrboardCardContainer}>
      <View style={[indexStyles.horizontalFlex, styles.cardTitleContainer]}>
        <Text style={[styles.cardTitle, styles.infoTitle]}>{title}</Text>
        <Locked width={18} height={18} style={styles.imageTitle} />
      </View>
      <View style={styles.tradrboardCard}>
        <View style={styles.infoItem}>
          <Text style={[styles.textInfo, {marginLeft: 35}]}>Mon niveau</Text>
          <View style={[styles.infoButton, {width: 112, marginLeft: 35}]}>
            <Text style={styles.infoButtonText}>Non-inscrit</Text>
          </View>
        </View>
        <View style={styles.infoItem}>
          <Text style={[styles.textInfo, {marginLeft: 8}]}>Membre depuis</Text>
          <View style={[styles.infoButton, {width: 131, marginLeft: 8}]}>
            <Text style={styles.infoButtonText}>Aujourd'hui?</Text>
          </View>
        </View>
        <View style={styles.infoItem}>
          <Text style={[styles.textInfo, {marginLeft: 35}]}>Abonnement</Text>
          <View style={[styles.infoButton, {width: 73, marginLeft: 35}]}>
            <Text style={styles.infoButtonText}>Aucun</Text>
          </View>
        </View>
        <View style={styles.infoItem}>
          <Text style={[styles.textInfo, {marginLeft: 8}]}>
            Mes informations
          </Text>
          <TouchableOpacity
            style={[indexStyles.horizontalFlex, {marginLeft: 8}]}
            onPress={() => {
              navigation.navigate('Connection');
            }}>
            <Text style={styles.connectInfoButtonText}>Se connecter</Text>
            <ArrowRigth
              width={13}
              height={16}
              style={styles.connectInfoButtonImg}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function TradrBoardObjective({title}) {
  return (
    <View style={styles.tradrboardCardContainer}>
      <View style={[indexStyles.horizontalFlex, styles.cardTitleContainer]}>
        <Text style={[styles.cardTitle, styles.objectiveTitle]}>{title}</Text>
        <HighVoltage width={18} height={18} style={styles.imageTitle} />
      </View>
      <View style={styles.tradrboardCard}>
        <View style={indexStyles.verticalFlex}>
          <View style={styles.progressContainer}>
            <View style={styles.progressNumber}>
              <Text style={styles.progressText}>0</Text>
            </View>
            <View style={styles.progressContent}>
              <ProgressBar
                style={styles.progress}
                progress={0.33}
                color="#9154FD"
              />
            </View>
            <View style={styles.progressNumber}>
              <Text style={styles.progressText}>3</Text>
            </View>
          </View>
          <View style={[indexStyles.horizontalFlex, styles.radioContent]}>
            <UnseletedRadio width={28} height={28} />
            <Text style={styles.radioText}>S'inscrire</Text>
          </View>
          <View style={[indexStyles.horizontalFlex, styles.radioContent]}>
            <SeletedRadio width={28} height={28} />
            <Text style={styles.radioText}>Visionner l'épisode accessible</Text>
          </View>
          <View style={[indexStyles.horizontalFlex, styles.radioContent]}>
            <UnseletedRadio width={28} height={28} />
            <Text style={styles.radioText}>
              Accomplir les deux objectifs précédents
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function TradrBoardVideo({title}) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  return (
    <View style={styles.tradrboardCardContainer}>
      <View style={[indexStyles.horizontalFlex, styles.cardTitleContainer]}>
        <Text style={[styles.cardTitle, styles.videoTitle]}>{title}</Text>
        <Books width={18} height={18} style={styles.imageTitle} />
      </View>
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
        {/* <Image source={require('../assets/video.png')} style={styles.video} /> */}
      </View>
    </View>
  );
}

function TradrboardContainer(props) {
  return (
    <ScrollView>
      <TradrboardContent>Se connecter</TradrboardContent>
    </ScrollView>
  );
}

function Tradrboard() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const scrollViewRef = useRef(null);
  const [scrollToMenu, setScrollToMenu] = useState(false);

  const handleScrollToRight = () => {
    setScrollToMenu(true);
    scrollViewRef.current.scrollTo({x: 41, animated: true});
  };
  const handleScrollToLeft = () => {
    setScrollToMenu(false);
    scrollViewRef.current.scrollToEnd();
  };

  const handleContentSizeChange = (contentWidth, contentHeight) => {
    const screenWidth = Dimensions.get('window').width;
    scrollViewRef.current.scrollTo({
      x: contentWidth - screenWidth,
      y: 0,
      animated: false,
    });
  };
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {scrollToMenu ? (
        <NavbarMenu handleScrollToLeft={() => handleScrollToLeft()} />
      ) : (
        <Navbar
          handleScrollToRight={() => handleScrollToRight()}
          title="Tradrboard"
        />
      )}
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        scrollEnabled={false}
        onContentSizeChange={handleContentSizeChange}
        contentOffset={{x: 0, y: 0}}>
        <Menu />
        <TradrboardContainer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  progressText: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Montserrat',
    color: '#1A2442',
  },
  tradrboardContent: {
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
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
  connectButton: {
    width: 102,
    height: 21,
    borderRadius: 4,
    paddingTop: 2,
    paddingRight: 4,
    paddingBottom: 2,
    paddingLeft: 4,
    backgroundColor: '#9154FD',
    marginTop: 15,
    marginLeft: 15,
    shadowColor: 'rgba(145, 84, 253, 0.8)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 1,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(145, 84, 253, 0.6)',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 14,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  connectButtonText: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 17,
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
  },
  holaContent: {
    width: 96,
    height: 41,
    marginLeft: 15,
    marginTop: 15,
  },
  holaText: {
    width: 96,
    height: 41,
    fontWeight: 600,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 34,
    lineHeight: 41,
  },
  holaImage: {
    marginTop: 22,
  },
  tradrboardCardContainer: {
    width: '100%',
    marginTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  cardTitleContainer: {
    height: 24,
    marginLeft: 5,
  },
  cardTitle: {
    height: 24,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 24,
  },
  infoTitle: {
    width: Platform.OS === 'android' ? 98 : 103,
  },
  objectiveTitle: {
    width: Platform.OS === 'android' ? 200 : 219,
  },
  videoTitle: {
    width: Platform.OS === 'android' ? 210 : 225,
  },
  videoContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
    height: 260,
  },
  video: {
    borderRadius: 20,
    height: 200,
    width: '100%',
  },
  imageTitle: {
    marginTop: 2,
  },
  tradrboardCard: {
    width: '100%',
    height: 159,
    marginTop: 10,
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
  infoItem: {
    width: '50%',
  },
  textInfo: {
    height: 18,
    marginTop: 15,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
    color: '#1A2442',
  },
  infoButton: {
    height: 29,
    borderRadius: 4,
    paddingTop: 2,
    paddingRight: 4,
    paddingBottom: 2,
    paddingLeft: 4,
    backgroundColor: '#9154FD',
    marginTop: 5,
    shadowColor: 'rgba(145, 84, 253, 0.7)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 4,
  },
  infoButtonText: {
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 21,
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
  },
  connectInfoButtonText: {
    width: Platform.OS === 'android' ? 108 : 114,
    fontStyle: 'normal',
    height: 21,
    color: '#9154FD',
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 21,
    fontFamily: 'Montserrat',
    marginTop: 12,
  },
  connectInfoButtonImg: {
    color: '#9154FD',
    marginTop: 16,
    // fontWeight: 500,
  },

  progressContainer: {
    width: '100%',
    height: 27,
    flexDirection: 'row',
    marginTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 5,
  },
  progressNumber: {
    flex: 1,
    maxWidth: 27,
    minWidth: 27,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    // fontWeight: 500,
    fontSize: 22,
    lineHeight: 27,
    color: '#1A2442',
  },
  progressContent: {
    flex: 2,
  },
  progress: {
    backgroundColor: '#FFFFFF',
    height: 13,
    borderRadius: 6.5,
    marginTop: 4,
    shadowColor: 'rgba(145, 84, 253, 0.8)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 1,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(145, 84, 253, 0.6)',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 14,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  radioContent: {
    marginLeft: 24,
  },
  radioText: {
    marginTop: 4,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
    color: '#1A2442',
  },
});

export default Tradrboard;
