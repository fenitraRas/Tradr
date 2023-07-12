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

import ChevronLeft from '../assets/icons/chevronLeft.svg';
import ChevronLeftDark from '../assets/icons/chevronLeftDark.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import PlayButton from '../assets/icons/playButton.svg';
import Video from 'react-native-video';
import {formStyles} from '../assets/css/form';
import {indexStyles} from '../assets/css';
import theme from '../assets/theme';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import video from '../assets/video/video_test.mp4';

function Navbar(props) {
  const navigation = useNavigation();
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const [option] = useState(colorScheme);
  return (
    <View style={formStyles.navbarContainer}>
      <View style={formStyles.navbarIcon}>
        <TouchableOpacity onPress={() => navigation.navigate('Replay')}>
          {option === 'light' ? (
            <ChevronLeft width={30} height={20} />
          ) : (
            <ChevronLeftDark width={30} height={20} />
          )}
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
        <TouchableOpacity onPress={() => props.handleScrollToRight()}>
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

function LiveReplayContent(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <View style={[props.classes.replayContent, indexStyles.shadowProp]}>
      <View style={props.classes.lastLiveCard}>
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
        <Text style={props.classes.videoTitle}>Live Trading</Text>
        <Text style={props.classes.videoSubtitle}>01 Jan 2023</Text>
        <Text style={props.classes.videoDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </Text>
      </View>

      <Text style={[styles.replaySubtitleWithoutImg]}>
        Sélectionné pour toi
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.videoListContainer}>
        <View style={props.classes.videoCard}>
          <Image
            source={require('../assets/formationBg.jpg')}
            style={styles.image}
          />
          <View style={styles.playButtonContainer}>
            <View>
              <PlayButton width={36} height={36} />
            </View>
          </View>
          <Text style={props.classes.imgTitle}>Live Trading</Text>
          <Text style={props.classes.imgDate}>24 Novembre 2022</Text>
        </View>
        <View style={props.classes.videoCard}>
          <Image
            source={require('../assets/formationBg.jpg')}
            style={styles.image}
          />
          <View style={styles.playButtonContainer}>
            <View>
              <PlayButton width={36} height={36} />
            </View>
          </View>
          <Text style={props.classes.imgTitle}>Live Trading</Text>
          <Text style={props.classes.imgDate}>24 Novembre 2022</Text>
        </View>
      </ScrollView>
    </View>
  );
}

function LiveReplayContainer(props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <LiveReplayContent classes={props.classes} />
    </ScrollView>
  );
}

function LiveReplay() {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const classes = {
    replayContent: [
      styles.replayContent,
      colorScheme === 'dark' && styles.replayContentDark,
    ],
    lastLiveCard: [
      styles.lastLiveCard,
      colorScheme === 'dark' && styles.lastLiveCardDark,
    ],
    videoTitle: [
      styles.videoTitle,
      colorScheme === 'dark' && styles.videoTitleDark,
    ],
    videoSubtitle: [
      styles.videoSubtitle,
      colorScheme === 'dark' && styles.videoSubtitleDark,
    ],
    videoDescription: [
      styles.videoDescription,
      colorScheme === 'dark' && styles.videoDescriptionDark,
    ],
    videoCard: [
      styles.videoCard,
      colorScheme === 'dark' && styles.videoCardDark,
    ],
    imgTitle: [styles.imgTitle, colorScheme === 'dark' && styles.imgTitleDark],
    imgDate: [styles.imgDate, colorScheme === 'dark' && styles.imgDateDark],
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
          title="Live Trading"
        />
      )}
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        onContentSizeChange={handleContentSizeChange}
        contentOffset={{x: 0, y: 0}}>
        <Menu
          currentScreen="LiveReplay"
          handleScrollToLeft={() => handleScrollToLeft()}
        />
        <LiveReplayContainer classes={classes} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  replayContent: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 95,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
    paddingBottom: 14,
  },
  replayContentDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  navbarText: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Montserrat',
    color: '#1A2442',
  },
  lastLiveCardDark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  lastLiveCard: {
    backgroundColor: theme.colors.component.$cardLight,
    width: '100%',
    height: 384,
    marginTop: 10,
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(9, 13, 109, 0.4)',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  videoContainer: {
    width: '100%',
    height: 201,
  },
  video: {
    borderRadius: 20,
    height: 201,
    width: '100%',
  },
  videoTitle: {
    color: theme.colors.text.$textLight,
    fontWeight: 600,
    fontSize: 28,
    lineHeight: 34,
    fontFamily: 'Montserrat',
    marginLeft: 15,
    marginTop: 13,
  },
  videoTitleDark: {
    color: theme.colors.text.$textDark,
  },
  videoSubtitleDark: {
    color: theme.colors.text.$textDark,
  },
  videoSubtitle: {
    color: theme.colors.text.$textLight,
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 16,
    fontFamily: 'Montserrat',
    marginLeft: 15,
  },
  videoDescriptionDark: {
    color: theme.colors.text.$textDark,
  },
  videoDescription: {
    color: theme.colors.text.$textLight,
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 16,
    fontFamily: 'Montserrat',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    opacity: 0.6,
  },
  replaySubtitleWithoutImg: {
    color: '#9BA5BF',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'Montserrat',
    marginLeft: 6,
    marginTop: 30,
  },
  videoListContainer: {
    flexDirection: 'row',
    overflowX: 'scroll',
    width: Dimensions.get('window').width,
    marginTop: 15,
  },
  videoCardDark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  videoCard: {
    backgroundColor: theme.colors.component.$cardLight,
    borderRadius: 20,
    width: 210,
    height: 169,
    marginRight: 10,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(9, 13, 109, 0.4)',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  image: {
    width: '100%',
    height: 113,
    borderRadius: 15,
  },
  playButtonContainer: {
    width: '100%',
    position: 'absolute',
    top: 39,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgTitleDark: {
    color: theme.colors.text.$textDark,
  },
  imgTitle: {
    color: theme.colors.text.$textLight,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 22,
    marginTop: 5,
    marginLeft: 10,
  },
  imgDateDark: {
    color: theme.colors.text.$textDark,
  },
  imgDate: {
    marginTop: 2,
    marginLeft: 10,
    color: theme.colors.text.$textLight,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12,
  },
});

export default LiveReplay;
