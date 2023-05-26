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

import ChevronLeft from '../assets/icons/chevronLeft.svg';
import BlackDotThreeVertical from '../assets/icons/blackDotThreeVertical.svg';
import ArrowDownIcon from '../assets/icons/arrowDownIcon.svg';
import ArrowUpIcon from '../assets/icons/arrowUpIcon.svg';
import FileFolder from '../assets/icons/fileFolder.svg';
import Download from '../assets/icons/download.svg';
import PdfIcon from '../assets/icons/pdfIcon.svg';

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
      id: '1',
      title: 'Bien commencer le trading',
    },
    {
      id: '2',
      title: 'Prendre le contrôle de son capital  ',
    },
    {
      id: '3',
      title: 'Le savoir',
    },
    {
      id: '4',
      title: 'Le savoir',
    },
    {
      id: '5',
      title: 'Michelle Dare',
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
        {/* </View> */}
      </View>
    </View>
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
