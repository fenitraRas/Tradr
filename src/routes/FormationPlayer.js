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

import ArrowDownIcon from '../assets/icons/arrowDownIcon.svg';
import ArrowUpIcon from '../assets/icons/arrowUpIcon.svg';
import ChevronLeft from '../assets/icons/chevronLeft.svg';
import ChevronLeftDark from '../assets/icons/chevronLeftDark.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import Download from '../assets/icons/download.svg';
import FileFolder from '../assets/icons/fileFolder.svg';
import PdfIcon from '../assets/icons/pdfIcon.svg';
import PlayVideo from '../assets/icons/playVideo.svg';
import {ProgressBar} from 'react-native-paper';
import Video from 'react-native-video';
import {formStyles} from '../assets/css/form';
import {indexStyles} from '../assets/css/index';
import theme from '../assets/theme';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import video from '../assets/video/video_test.mp4';

function Navbar(props) {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const [option] = useState(colorScheme);
  const navigation = useNavigation();
  return (
    <View style={formStyles.navbarContainer}>
      <View style={formStyles.navbarIcon}>
        <TouchableOpacity onPress={() => navigation.navigate('Formation')}>
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

function FormationPlayerContent(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const files = [
    {
      id: 1,
      title: 'Bien commencer le trading',
      duration: '26mn',
    },
    {
      id: 2,
      title: 'Prendre le contrôle de son capital  ',
      duration: '24mn',
    },
    {
      id: 3,
      title: 'Le savoir',
      duration: '32mn',
    },
    {
      id: 4,
      title: 'Nouveau titre',
      duration: '22mn',
    },
    {
      id: 5,
      title: 'Michelle Dare',
      duration: '31mn',
    },
  ];
  return (
    <View style={[props.classes.formationPlayerContent, styles.shadowProp]}>
      <View
        style={[
          props.classes.cardContainer,
          expanded ? styles.expandedH : styles.inexpandedH,
        ]}>
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
          <Text style={props.classes.videoTitle}>
            Prendre le contrôle de son capital
          </Text>
        </View>
        <AccordionItem
          title="Fichiers"
          classes={props.classes}
          expanded={expanded}
          setExpanded={v => setExpanded(v)}>
          {expanded ? (
            <ScrollView style={props.classes.accordBody}>
              {files.map(file => {
                return (
                  <View key={file.id} style={styles.fileListContainer}>
                    <TouchableOpacity>
                      <Download
                        width={15}
                        height={14}
                        style={{marginTop: 8, marginLeft: 10}}
                      />
                    </TouchableOpacity>
                    <PdfIcon
                      width={23}
                      height={30}
                      style={{marginLeft: 10, marginRight: 7}}
                    />
                    <View>
                      <Text style={styles.itemId}>Épisode {file.id}</Text>
                      <Text style={props.classes.itemTitle}>{file.title}</Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          ) : null}
        </AccordionItem>
      </View>

      <View style={[props.classes.videoCardContainer]}>
        <VideoCardHeader />
        <VideoCardList classes={props.classes} files={files} />
      </View>
    </View>
  );
}

function VideoCardHeader() {
  return (
    <View style={styles.videoCardHeaderContainer}>
      <TouchableOpacity>
        <Text style={styles.selectedVideoCardHeaderText}>Saison 1</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.videoCardHeaderText}>Saison 2</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.videoCardHeaderText}>Saison 3</Text>
      </TouchableOpacity>
    </View>
  );
}

function VideoCardList({classes, files}) {
  const [selectedVideo, setSelectedVideo] = useState(2);
  return (
    <ScrollView style={classes.videoCardListContainer}>
      {files.map(file => {
        return (
          <TouchableOpacity
            key={file.id}
            style={
              selectedVideo === file.id
                ? classes.selectedVideoListContainer
                : styles.videoListContainer
            }
            onPress={() => setSelectedVideo(p => file.id)}>
            {selectedVideo === file.id ? (
              <PlayVideo width={32} height={32} />
            ) : null}
            <View style={styles.videoListContent}>
              <View>
                <View style={styles.topVideoList}>
                  <Text style={classes.fileId}>Épisode {file.id}</Text>
                  <View style={styles.progressContent}>
                    <ProgressBar
                      style={styles.progress}
                      progress={0.33}
                      color="#9154FD"
                    />
                  </View>
                  <Text style={styles.videoDuration}>{file.duration}</Text>
                </View>
                <View>
                  <Text style={styles.fileTitle}>{file.title}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

function AccordionItem({children, classes, title, expanded, setExpanded}) {
  function toggleItem() {
    setExpanded(!expanded);
  }

  const body = <View>{children}</View>;

  const icon = expanded ? (
    <ArrowUpIcon width={21.21} height={6.38} style={styles.arrow} />
  ) : (
    <ArrowDownIcon width={21.21} height={6.38} style={styles.arrow} />
  );

  return (
    <View style={styles.accordContainer}>
      <TouchableOpacity
        style={expanded ? classes.expendAccordHeader : classes.accordHeader}
        onPress={toggleItem}>
        <View style={indexStyles.horizontalFlex}>
          <Text style={classes.accordTitle}>{title}</Text>
          <FileFolder width={15} height={15} style={{marginLeft: 6}} />
        </View>
        {icon}
      </TouchableOpacity>
      {expanded && body}
    </View>
  );
}

function FormationPlayerContainer(props) {
  return (
    <ScrollView>
      <FormationPlayerContent classes={props.classes} />
    </ScrollView>
  );
}

function FormationPlayer() {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const classes = {
    formationPlayerContent: [
      styles.formationPlayerContent,
      colorScheme === 'dark' && styles.formationPlayerContentDark,
    ],
    cardContainer: [
      styles.cardContainer,
      colorScheme === 'dark' && styles.cardContainerDark,
    ],
    videoCardContainer: [
      styles.videoCardContainer,
      colorScheme === 'dark' && styles.videoCardContainerDark,
    ],
    videoTitle: [
      styles.videoTitle,
      colorScheme === 'dark' && styles.videoTitleDark,
    ],
    selectedVideoListContainer: [
      styles.selectedVideoListContainer,
      colorScheme === 'dark' && styles.selectedVideoListContainerDark,
    ],
    videoCardListContainer: [
      styles.videoCardListContainer,
      colorScheme === 'dark' && styles.videoCardListContainerDark,
    ],
    fileId: [styles.fileId, colorScheme === 'dark' && styles.fileIdDark],
    accordHeader: [
      styles.accordHeader,
      colorScheme === 'dark' && styles.accordHeaderDark,
    ],
    expendAccordHeader: [
      styles.expendAccordHeader,
      colorScheme === 'dark' && styles.expendAccordHeaderDark,
    ],
    accordBody: [
      styles.accordBody,
      colorScheme === 'dark' && styles.accordBodyDark,
    ],
    accordTitle: [
      styles.accordTitle,
      colorScheme === 'dark' && styles.accordTitleDark,
    ],
    itemTitle: [
      styles.itemTitle,
      colorScheme === 'dark' && styles.itemTitleDark,
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
          title="Trade"
          handleScrollToRight={() => handleScrollToRight()}
        />
      )}
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        scrollEnabled={false}
        onContentSizeChange={handleContentSizeChange}
        contentOffset={{x: 0, y: 0}}>
        <Menu
          currentScreen="Formation"
          handleScrollToLeft={() => handleScrollToLeft()}
        />
        <FormationPlayerContainer classes={classes} />
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
  formationPlayerContent: {
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.background.$backgroundLight,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
    padding: 10,
  },
  formationPlayerContentDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
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
  expandedH: {
    height: 479,
  },
  inexpandedH: {
    height: 328,
  },
  cardContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    borderRadius: 20,
    backgroundColor: theme.colors.component.$cardLight,
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: Platform.OS === 'android' ? -35 : undefined,
  },
  cardContainerDark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  videoCardContainer: {
    // height: 686,
    marginTop: 30,
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    borderRadius: 20,
    backgroundColor: theme.colors.component.$cardLight,
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: Platform.OS === 'android' ? -35 : undefined,
  },
  videoCardContainerDark: {
    backgroundColor: theme.colors.component.$cardDark,
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
    color: theme.colors.text.$textLight,
    height: 24,
    marginTop: 3,
  },
  videoTitleDark: {
    color: theme.colors.text.$textDark,
  },
  accordContainer: {
    marginTop: 5,
    width: '100%',
    padding: 10,
  },
  accordHeader: {
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 38,
    paddingLeft: 12,
    paddingTop: 11,
    paddingBottom: 3,
    borderRadius: 10,
    shadowColor: '#090d6d',
    shadowOffset: {width: 0, height: 15},
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 5,
  },
  accordHeaderDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  expendAccordHeader: {
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 29,
    paddingLeft: 12,
    paddingTop: 11,
    paddingBottom: 3,
    shadowColor: '#090d6d',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    elevation: 3,
    shadowRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  expendAccordHeaderDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  arrow: {
    marginTop: 5,
    marginRight: 14,
  },
  accordTitle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 15,
    color: theme.colors.text.$textLight,
  },
  accordTitleDark: {
    color: theme.colors.text.$textDark,
  },
  accordBody: {
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    flexDirection: 'row',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    height: 161,
    paddingTop: 12,
  },
  accordBodyDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  fileListContainer: {
    marginLeft: 10,
    marginBottom: 15,
    marginRight: 14,
    height: 31,
    flexDirection: 'row',
  },
  videoCardHeaderContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 13,
  },
  selectedVideoCardHeaderText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 17,
    color: '#9154FD',
    marginRight: 25,
  },
  videoCardHeaderText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17,
    color: '#9BA5BF',
    marginRight: 22,
  },

  videoCardListContainer: {
    paddingLeft: 4,
    paddingRight: 4,
    width: '95%',
    margin: 10,
    paddingTop: 2,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderRadius: 10,
    // borderTopRightRadius: 30,
  },
  videoCardListContainerDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  videoListContainer: {
    width: '100%',
    paddingLeft: 39,
    paddingTop: 15,
    paddingRight: 17,
    height: 54,
    flexDirection: 'row',
  },
  selectedVideoListContainer: {
    width: '100%',
    paddingLeft: 7,
    paddingTop: 15,
    paddingRight: 17,
    height: 54,
    borderRadius: 6,
    backgroundColor: theme.colors.component.$cardLight,
    elevation: 4,
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    flexDirection: 'row',
  },
  selectedVideoListContainerDark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  videoListContent: {
    marginBottom: 15,
    width: '100%',
    maxWidth: 294,
    height: 34,
  },
  topVideoList: {
    flexDirection: 'row',
    height: 17,
  },
  progressContent: {
    flex: 2,
    marginLeft: 80,
    marginTop: 6,
  },
  progress: {
    backgroundColor: '#FFFFFF',
    height: 2,
    width: 88,
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
  fileId: {
    marginTop: 2,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 17,
    color: theme.colors.text.$textLight,
  },
  fileIdDark: {
    color: theme.colors.text.$textDark,
  },
  videoDuration: {
    marginTop: 4,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12,
    color: '#706F94',
  },
  fileTitle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 15,
    color: '#9BA5BF',
  },
  itemId: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12,
    color: '#706F94',
  },
  itemTitle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 18,
    color: theme.colors.text.$textLight,
  },
  itemTitleDark: {
    color: theme.colors.text.$textDark,
  },
});

export default FormationPlayer;
