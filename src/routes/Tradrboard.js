/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Dimensions,
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
import Menu, {NavbarMenu} from './Menu';
import React, {useRef, useState} from 'react';

import ArrowRigth from '../assets/icons/arrowRigth.svg';
import Books from '../assets/icons/books.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import HighVoltage from '../assets/icons/highVoltage.svg';
import Locked from '../assets/icons/locked.svg';
import {ProgressBar} from 'react-native-paper';
import SeletedRadio from '../assets/icons/selectedRadio.svg';
import UnseletedRadio from '../assets/icons/unselectedRadio.svg';
import WavingHand from '../assets/icons/wavingHand.svg';
import {useNavigation} from '@react-navigation/native';

function Navbar(props) {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navbarIcon} />
      <View style={styles.navbarTextContainer}>
        <Text style={styles.navbarText}>{props.title}</Text>
      </View>
      <View style={styles.navbarIcon}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.handleScrollToRight()}>
          <DotThreeVertical width={30} height={20} />
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
      <View style={styles.horizontalFlex}>
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
  return (
    <View style={styles.tradrboardCardContainer}>
      <View style={[styles.horizontalFlex, styles.cardTitleContainer]}>
        <Text style={[styles.cardTitle, styles.infoTitle]}>{title}</Text>
        <Locked width={18} height={18} style={styles.imageTitle} />
      </View>
      <View style={styles.tradrboardCard}>
        <View style={styles.infoItem}>
          <Text style={[styles.textInfo, {marginLeft: 35}]}>Mon niveau</Text>
          <TouchableOpacity
            style={[styles.infoButton, {width: 112, marginLeft: 35}]}>
            <Text style={styles.infoButtonText}>Non-inscrit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoItem}>
          <Text style={[styles.textInfo, {marginLeft: 8}]}>Membre depuis</Text>
          <TouchableOpacity
            style={[styles.infoButton, {width: 131, marginLeft: 8}]}>
            <Text style={styles.infoButtonText}>Aujourd'hui?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoItem}>
          <Text style={[styles.textInfo, {marginLeft: 35}]}>Abonnement</Text>
          <TouchableOpacity
            style={[styles.infoButton, {width: 73, marginLeft: 35}]}>
            <Text style={styles.infoButtonText}>Aucun</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoItem}>
          <Text style={[styles.textInfo, {marginLeft: 8}]}>
            Mes informations
          </Text>
          <TouchableOpacity style={[styles.horizontalFlex, {marginLeft: 8}]}>
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
      <View style={[styles.horizontalFlex, styles.cardTitleContainer]}>
        <Text style={[styles.cardTitle, styles.objectiveTitle]}>{title}</Text>
        <HighVoltage width={18} height={18} style={styles.imageTitle} />
      </View>
      <View style={styles.tradrboardCard}>
        <View style={styles.verticalFlex}>
          <View style={styles.progressContainer}>
            <View style={styles.progressNumber}>
              <Text style={styles.navbarText}>0</Text>
            </View>
            <View style={styles.progressContent}>
              <ProgressBar
                style={styles.progress}
                progress={0.33}
                color="#9154FD"
              />
            </View>
            <View style={styles.progressNumber}>
              <Text style={styles.navbarText}>3</Text>
            </View>
          </View>
          <View style={[styles.horizontalFlex, styles.radioContent]}>
            <UnseletedRadio width={28} height={28} />
            <Text style={styles.radioText}>S'inscrire</Text>
          </View>
          <View style={[styles.horizontalFlex, styles.radioContent]}>
            <SeletedRadio width={28} height={28} />
            <Text style={styles.radioText}>Visionner l'épisode accessible</Text>
          </View>
          <View style={[styles.horizontalFlex, styles.radioContent]}>
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
  return (
    <View style={styles.tradrboardCardContainer}>
      <View style={[styles.horizontalFlex, styles.cardTitleContainer]}>
        <Text style={[styles.cardTitle, styles.videoTitle]}>{title}</Text>
        <Books width={18} height={18} style={styles.imageTitle} />
      </View>
      <View style={styles.videoContainer}>
        <Image source={require('../assets/video.png')} style={styles.video} />
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
    flex: 2,
  },
  navbarText: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Montserrat',
    color: '#1A2442',
  },
  tradrboardContent: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 20,
    marginTop: 5,
  },
  shadowProp: {
    shadowOffset: {width: 2, height: 4},
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOpacity: 0.5,
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
    elevation: 4,
    shadowOffset: {width: 2, height: 4},
    shadowColor: 'rgba(145, 84, 253, 0.8)',
    shadowOpacity: 0.5,
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
  horizontalFlex: {
    flex: 1,
    flexDirection: 'row',
  },
  verticalFlex: {
    flex: 1,
    flexDirection: 'column',
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
    width: 390,
    marginTop: 30,
    // backgroundColor: 'red',
  },
  cardTitleContainer: {
    height: 24,
    marginLeft: 15,
    // backgroundColor: 'green',
  },
  cardTitle: {
    height: 24,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
  },
  infoTitle: {
    // width: 103,
    width: 98,
  },
  objectiveTitle: {
    // width: 219,
    width: 200,
  },
  videoTitle: {
    // width: 225,
    width: 210,
  },
  videoContainer: {
    margin: 10,
    // width: 200,
    height: 370,
  },
  video: {
    //video style
  },
  imageTitle: {
    marginTop: 2,
  },
  tradrboardCard: {
    marginLeft: 10,
    width: 370,
    height: 159,
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    borderRadius: 20,
    backgroundColor: '#E9EDFC',
    elevation: 40,
    shadowOffset: {width: 2, height: 4},
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOpacity: 0.5,
  },
  infoItem: {
    width: '50%',
  },
  textInfo: {
    // width: 87,
    height: 18,
    // marginLeft: 35,
    marginTop: 15,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
    color: '#1A2442',
  },
  infoButton: {
    // width: 102,
    height: 29,
    borderRadius: 4,
    paddingTop: 2,
    paddingRight: 4,
    paddingBottom: 2,
    paddingLeft: 4,
    backgroundColor: '#9154FD',
    marginTop: 5,
    // marginLeft: 35,
    elevation: 4,
    shadowOffset: {width: 2, height: 4},
    shadowColor: 'rgba(145, 84, 253, 0.8)',
    shadowOpacity: 0.5,
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
    // width: 114,
    width: 108,
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
    fontWeight: 500,
  },

  progressContainer: {
    width: 319,
    height: 27,
    flexDirection: 'row',
    marginLeft: 25,
    marginTop: 15,
    marginBottom: 5,
  },
  progressNumber: {
    flex: 1,
    maxWidth: 27,
    minWidth: 27,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
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
    elevation: 15,
    shadowOffset: {width: 2, height: 4},
    shadowColor: 'rgba(9, 13, 109, 0.5)',
    shadowOpacity: 0.5,
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
