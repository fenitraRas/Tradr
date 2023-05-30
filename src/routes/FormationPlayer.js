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
import {ProgressBar} from 'react-native-paper';
import Video from 'react-native-video';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {formStyles} from '../assets/css/form';
import {indexStyles} from '../assets/css/index';

import ChevronLeft from '../assets/icons/chevronLeft.svg';
import BlackDotThreeVertical from '../assets/icons/blackDotThreeVertical.svg';
import ArrowDownIcon from '../assets/icons/arrowDownIcon.svg';
import ArrowUpIcon from '../assets/icons/arrowUpIcon.svg';
import FileFolder from '../assets/icons/fileFolder.svg';
import Download from '../assets/icons/download.svg';
import PdfIcon from '../assets/icons/pdfIcon.svg';
import PlayVideo from '../assets/icons/playVideo.svg';

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
    <View style={[styles.formationPlayerContent, styles.shadowProp]}>
      <View
        style={[
          styles.cardContainer,
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
          <Text style={styles.videoTitle}>
            Prendre le contrôle de son capital
          </Text>
        </View>
        <AccordionItem
          title="Fichiers"
          expanded={expanded}
          setExpanded={v => setExpanded(v)}>
          {expanded ? (
            <ScrollView style={styles.accordBody}>
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
                      <Text style={styles.itemTitle}>{file.title}</Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          ) : null}
        </AccordionItem>
      </View>

      <View style={[styles.videoCardContainer]}>
        <VideoCardHeader />
        <VideoCardList files={files} />
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

function VideoCardList({files}) {
  const [selectedVideo, setSelectedVideo] = useState(2);
  return (
    <ScrollView style={styles.videoCardListContainer}>
      {files.map(file => {
        return (
          <TouchableOpacity
            key={file.id}
            style={
              selectedVideo === file.id
                ? styles.selectedVideoListContainer
                : styles.videoListContainer
            }
            onPress={() => setSelectedVideo(p => file.id)}>
            {selectedVideo === file.id ? (
              <PlayVideo width={32} height={32} />
            ) : null}
            <View style={styles.videoListContent}>
              <View>
                <View style={styles.topVideoList}>
                  <Text style={styles.fileId}>Épisode {file.id}</Text>
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

function AccordionItem({children, title, expanded, setExpanded}) {
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
        style={expanded ? styles.expendAccordHeader : styles.accordHeader}
        onPress={toggleItem}>
        <View style={indexStyles.horizontalFlex}>
          <Text style={styles.accordTitle}>{title}</Text>
          <FileFolder width={15} height={15} style={{marginLeft: 6}} />
        </View>
        {icon}
      </TouchableOpacity>
      {expanded && body}
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
  videoCardContainer: {
    height: 686,
    marginTop: 30,
    width: '100%',
    flex: 1,
    flexDirection: 'column',
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
  accordContainer: {
    marginTop: 5,
    width: '100%',
    padding: 10,
  },
  accordHeader: {
    backgroundColor: '#FFFFFF',
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
  expendAccordHeader: {
    backgroundColor: '#FFFFFF',
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
    color: '#1A2442',
  },
  accordBody: {
    backgroundColor: '#F7F7F7',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    height: 161,
    paddingTop: 12,
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
    width: '100%',
    paddingTop: 2,
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
    backgroundColor: '#E9EDFC',
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
    color: '#1A2442',
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
    color: '#1A2442',
  },
});

export default FormationPlayer;
