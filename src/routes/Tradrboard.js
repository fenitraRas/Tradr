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
import Menu, {NavbarMenu} from './Menu';
import React, {useRef, useState} from 'react';

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
import {formStyles} from '../assets/css/form';
import {indexStyles} from '../assets/css/index';
import theme from '../assets/theme';
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

function TradrboardContent(props) {
  const navigation = useNavigation();
  const user = useSelector(state => state.userReducer.user);
  if (user) {
    return (
      <View style={[props.classes.tradrboardContent, indexStyles.shadowProp]}>
        <View
          style={[
            styles.connectButton,
            {
              width: Platform.OS === 'android' ? 128 : 138,
            },
          ]}>
          <Text style={styles.connectButtonText}>Nouveau membre</Text>
        </View>
        <View
          style={[indexStyles.horizontalFlex, {marginLeft: 15, marginTop: 15}]}>
          <Text style={props.classes.holaText}>Holà, {`${user.prenom}`}!</Text>
          <WavingHand width={26} height={26} style={styles.holaImage} />
        </View>

        <TradrBoardInfo classes={props.classes} title="Personnel" />
        <TradrBoardObjective
          classes={props.classes}
          title="Objectifs à compléter"
        />
        <TradrBoardVideo
          classes={props.classes}
          title="Episode en libre accès"
        />
      </View>
    );
  }
  return (
    <View style={[props.classes.tradrboardContent, indexStyles.shadowProp]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Connection')}
        style={styles.connectButton}>
        <Text style={styles.connectButtonText}>{props.title}</Text>
      </TouchableOpacity>
      <View
        style={[indexStyles.horizontalFlex, {marginLeft: 15, marginTop: 15}]}>
        <Text style={props.classes.holaText}>Holà !</Text>
        <WavingHand width={26} height={26} style={styles.holaImage} />
      </View>

      <TradrBoardInfo classes={props.classes} title="Personnel" />
      <TradrBoardObjective
        classes={props.classes}
        title="Objectifs à compléter"
      />
      <TradrBoardVideo classes={props.classes} title="Episode en libre accès" />
    </View>
  );
}

function TradrBoardInfo({classes, title}) {
  const navigation = useNavigation();
  const user = useSelector(state => state.userReducer.user);
  const status = user ? user.statut : 'Non-inscrit';
  const member = user ? user.date_creation : "Aujourd'hui?";
  const subscription = user ? user.abonnement : 'Aucun';
  const info = user ? 'Voir mon profil' : 'Se connecter';
  return (
    <View style={styles.tradrboardCardContainer}>
      <View style={[indexStyles.horizontalFlex, styles.cardTitleContainer]}>
        <Text style={[classes.cardTitle, styles.infoTitle]}>{title}</Text>
        <Locked width={18} height={18} style={styles.imageTitle} />
      </View>
      <View style={classes.tradrboardCard}>
        <View style={styles.infoItem}>
          <Text style={[classes.textInfo, {marginLeft: 35}]}>Mon niveau</Text>
          <View style={[styles.infoButton, {width: 131, marginLeft: 35}]}>
            <Text style={styles.infoButtonText}>{status}</Text>
          </View>
        </View>
        <View style={styles.infoItem}>
          <Text style={[classes.textInfo, {marginLeft: 8}]}>Membre depuis</Text>
          <View style={[styles.infoButton, {width: 131, marginLeft: 8}]}>
            <Text style={styles.infoButtonText}>{member}</Text>
          </View>
        </View>
        <View style={styles.infoItem}>
          <Text style={[classes.textInfo, {marginLeft: 35}]}>Abonnement</Text>
          <View style={[styles.infoButton, {width: 131, marginLeft: 35}]}>
            <Text style={styles.infoButtonText}>{subscription}</Text>
          </View>
        </View>
        <View style={styles.infoItem}>
          <Text style={[classes.textInfo, {marginLeft: 8}]}>
            Mes informations
          </Text>
          <TouchableOpacity
            style={[indexStyles.horizontalFlex, {marginLeft: 8}]}
            onPress={() => {
              user
                ? navigation.navigate('Profile')
                : navigation.navigate('Connection');
            }}>
            <Text style={styles.connectInfoButtonText}>{info}</Text>
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

function TradrBoardObjective({classes, title}) {
  return (
    <View style={styles.tradrboardCardContainer}>
      <View style={[indexStyles.horizontalFlex, styles.cardTitleContainer]}>
        <Text style={[classes.cardTitle, styles.objectiveTitle]}>{title}</Text>
        <HighVoltage width={18} height={18} style={styles.imageTitle} />
      </View>
      <View style={classes.tradrboardCard}>
        <View style={indexStyles.verticalFlex}>
          <View style={styles.progressContainer}>
            <View style={styles.progressNumber}>
              <Text style={classes.progressText}>0</Text>
            </View>

            <View style={styles.progressContent}>
              <View style={styles.progressbar} />
              <View style={styles.progress} />
              {/* <ProgressBar
                style={styles.progress}
                progress={0.33}
                color="#9154FD"
              /> */}
            </View>
            <View style={styles.progressNumber}>
              <Text style={classes.progressText}>3</Text>
            </View>
          </View>
          <TouchableOpacity
            style={[indexStyles.horizontalFlex, styles.radioContent]}>
            <UnseletedRadio width={42} height={42} style={styles.radio} />
            <Text style={classes.radioText}>S'inscrire</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[indexStyles.horizontalFlex, styles.radioContent]}>
            <SeletedRadio width={42} height={42} style={styles.radio} />
            <Text style={classes.radioText}>
              Visionner l'épisode accessible
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[indexStyles.horizontalFlex, styles.radioContent]}>
            <UnseletedRadio width={42} height={42} style={styles.radio} />
            <Text style={classes.radioText}>
              Accomplir les deux objectifs précédents
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function TradrBoardVideo({classes, title}) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  return (
    <View style={styles.tradrboardCardContainer}>
      <View style={[indexStyles.horizontalFlex, styles.cardTitleContainer]}>
        <Text style={[classes.cardTitle, styles.videoTitle]}>{title}</Text>
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

export function TradrboardContainer(props) {
  return (
    <ScrollView>
      <TradrboardContent classes={props.classes} title="Se connecter" />
    </ScrollView>
  );
}

function Tradrboard() {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const classes = {
    tradrboardContent: [
      styles.tradrboardContent,
      colorScheme === 'dark' && styles.tradrboardContentDark,
    ],
    holaText: [styles.holaText, colorScheme === 'dark' && styles.holaTextDark],
    cardTitle: [
      styles.cardTitle,
      colorScheme === 'dark' && styles.cardTitleDark,
    ],
    tradrboardCard: [
      styles.tradrboardCard,
      colorScheme === 'dark' && styles.tradrboardCardDark,
    ],
    textInfo: [styles.textInfo, colorScheme === 'dark' && styles.textInfoDark],
    progressText: [
      styles.progressText,
      colorScheme === 'dark' && styles.progressTextDark,
    ],
    radioText: [
      styles.radioText,
      colorScheme === 'dark' && styles.radioTextDark,
    ],
  };

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
        <Menu
          currentScreen="Tradrboard"
          handleScrollToLeft={() => handleScrollToLeft()}
        />
        <TradrboardContainer classes={classes} />
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
    color: '#1A2442',
  },
  progressText: {
    textAlign: 'center',
    fontWeight: 500,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 22,
    lineHeight: 27,
    color: theme.colors.text.$textLight,
  },
  progressTextDark: {
    color: theme.colors.text.$textDark,
  },
  tradrboardContent: {
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
  },
  tradrboardContentDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  radio: {
    shadowColor: 'rgba(145, 84, 253, 0.8)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
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
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 3,
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
    // width: Dimensions.get('window').width,
    height: 41,
    fontWeight: 600,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 34,
    lineHeight: 41,
    color: theme.colors.text.$textLight,
  },
  holaTextDark: {
    color: theme.colors.text.$textDark,
  },
  holaImage: {
    marginTop: 8,
    marginLeft: 15,
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
    color: theme.colors.text.$textLight,
    fontWeight: 500,
  },
  cardTitleDark: {
    color: theme.colors.text.$textDark,
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
    backgroundColor: theme.colors.component.$cardLight,
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: Platform.OS === 'android' ? -35 : undefined,
  },
  tradrboardCardDark: {
    backgroundColor: theme.colors.component.$cardDark,
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
    color: theme.colors.text.$textLight,
  },
  textInfoDark: {
    color: theme.colors.text.$textDark,
  },
  infoButton: {
    height: 29,
    borderRadius: 4,
    paddingTop: 4,
    paddingRight: 4,
    paddingBottom: 2,
    paddingLeft: 4,
    backgroundColor: '#9154FD',
    marginTop: 5,
    shadowColor: 'rgba(145, 84, 253, 0.7)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 3,
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
    // width: Platform.OS === 'android' ? 108 : 114,
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
    marginLeft: 10,
    // fontWeight: 500,
  },
  progressContainer: {
    width: '100%',
    height: 27,
    flexDirection: 'row',
    marginTop: 15,
    paddingLeft: 22,
    paddingRight: 22,
    marginBottom: 12,
  },
  progressNumber: {
    flex: 1,
    maxWidth: 32,
    minWidth: 32,
  },
  progressContent: {
    flex: 2,
  },
  // progress: {
  //   backgroundColor: '#FFFFFF',
  //   height: 13,
  //   borderRadius: 6.5,
  //   marginTop: 8,
  //   shadowColor: 'rgba(145, 84, 253, 0.8)',
  //   shadowOffset: {
  //     width: 0,
  //     height: 0,
  //   },
  //   shadowOpacity: 1,
  //   shadowRadius: 4,
  //   elevation: 1,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: 'rgba(145, 84, 253, 0.6)',
  //       shadowOffset: {
  //         width: 0,
  //         height: 0,
  //       },
  //       shadowOpacity: 1,
  //       shadowRadius: 14,
  //     },
  //     android: {
  //       elevation: 3,
  //     },
  //   }),
  // },
  radioContent: {
    marginLeft: 17,
    marginTop: -10,
  },
  radioText: {
    marginTop: 12,
    color: theme.colors.text.$textLight,
    fontSize: 15,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 21,
  },
  radioTextDark: {
    color: theme.colors.text.$textDark,
  },
  progressbar: {
    position: 'absolute',
    width: '100%',
    height: 13,
    marginTop: 8,
    borderRadius: 6.5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    shadowColor: 'rgba(9, 13, 109, 0.50)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 5,
  },
  progress: {
    position: 'absolute',
    width: '33.33%',
    height: 13,
    marginTop: 8,
    borderRadius: 6.5,
    backgroundColor: '#9154FD',
    shadowColor: 'rgba(145, 84, 253, 0.60)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 5,
  },
});

export default Tradrboard;
