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
  TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import ChevronLeft from '../assets/icons/chevronLeft.svg';
import Chat from '../assets/icons/chat.svg';
import Search from '../assets/icons/search.svg';
import PdfIcon from '../assets/icons/pdfIcon.svg';
import Download from '../assets/icons/download.svg';

import {formStyles} from '../assets/css/form';

function Navbar(props) {
  const navigation = useNavigation();
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const [option] = useState(colorScheme);
  return (
    <View style={formStyles.navbarContainer}>
      <View style={formStyles.navbarIcon}>
        <TouchableOpacity onPress={() => navigation.navigate('TradrboxFolder')}>
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

function TradrboxFileContent() {
  const [text, onChangeText] = React.useState('Rechercher');
  return (
    <View style={[styles.tradrboxContent, styles.shadowProp]}>
      <View style={styles.tradrboxTitleContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Search width={11} height={11} style={styles.searchIcon} />
      </View>
      <ScrollView>
        <View style={styles.fileContainer}>
          <View style={styles.fileCard}>
            <View style={styles.fileCardTop}>
              <Chat width={24} height={24} style={styles.fileCardTopImg} />
              <Text style={styles.fileCardTopText}>
                Épisode 01 - Bien commencer le trading
              </Text>
            </View>
            <View style={styles.fileCardBottom}>
              <TouchableOpacity style={styles.fileCardButton}>
                <Text style={styles.fileCardButtonText}>Rejoindre</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.fileCard}>
            <View style={styles.fileCardTop}>
              <PdfIcon width={24} height={24} style={styles.fileCardTopImg} />
              <Text style={styles.fileCardTopText}>
                Épisode 02 - Prendre le contrôle de son capital
              </Text>
            </View>
            <View style={styles.fileCardBottom}>
              <Text style={styles.fileCardText}>174 mo</Text>
              <TouchableOpacity style={styles.fileCardDownloadButton}>
                <Download width={15.09} height={13.33} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.fileCard}>
            <View style={styles.fileCardTop}>
              <PdfIcon width={24} height={24} style={styles.fileCardTopImg} />
              <Text style={styles.fileCardTopText}>
                Comment devenir membre Tradr ?
              </Text>
            </View>
            <View style={styles.fileCardBottom}>
              <Text style={styles.fileCardText}>174 mo</Text>
              <TouchableOpacity style={styles.fileCardDownloadButton}>
                <Download width={15.09} height={13.33} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.fileCard}>
            <View style={styles.fileCardTop}>
              <PdfIcon width={24} height={24} style={styles.fileCardTopImg} />
              <Text style={styles.fileCardTopText}>
                Épisode 02 - Prendre le contrôle de son capital
              </Text>
            </View>
            <View style={styles.fileCardBottom}>
              <Text style={styles.fileCardText}>174 mo</Text>
              <TouchableOpacity style={styles.fileCardDownloadButton}>
                <Download width={15.09} height={13.33} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.fileCard}>
            <View style={styles.fileCardTop}>
              <PdfIcon width={24} height={24} style={styles.fileCardTopImg} />
              <Text style={styles.fileCardTopText}>
                Épisode 01 - Bien commencer le trading 
              </Text>
            </View>
            <View style={styles.fileCardBottom}>
              <Text style={styles.fileCardText}>174 mo</Text>
              <TouchableOpacity style={styles.fileCardDownloadButton}>
                <Download width={15.09} height={13.33} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.fileCard}>
            <View style={styles.fileCardTop}>
              <Chat width={24} height={24} style={styles.fileCardTopImg} />
              <Text style={styles.fileCardTopText}>
                Prises de positions de nos traders
              </Text>
            </View>
            <View style={styles.fileCardBottom}>
              <TouchableOpacity style={styles.fileCardButton}>
                <Text style={styles.fileCardButtonText}>Rejoindre</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.fileCard}>
            <View style={styles.fileCardTop}>
              <Chat width={24} height={24} style={styles.fileCardTopImg} />
              <Text style={styles.fileCardTopText}>
                Comment devenir membre Tradr ?
              </Text>
            </View>
            <View style={styles.fileCardBottom}>
              <TouchableOpacity style={styles.fileCardButton}>
                <Text style={styles.fileCardButtonText}>Rejoindre</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function TradrboxFileContainer() {
  return (
    <ScrollView>
      <TradrboxFileContent />
    </ScrollView>
  );
}

function TradrboxFile() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={{height: Dimensions.get('window').height}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Navbar title="Titre du dossier" />
      <TradrboxFileContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tradrboxContent: {
    width: Dimensions.get('window').width,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
    paddingBottom: 14,
    height:
      Platform.OS === 'android'
        ? Dimensions.get('window').height - 74
        : Dimensions.get('window').height - 139,
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
  tradrboxTitleContainer: {
    width: 'auto',
  },
  navbarText: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Montserrat',
    color: '#1A2442',
  },
  input: {
    width: '100%',
    height: Platform.OS === 'android' ? 35 : 27,
    borderWidth: 0,
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: '#E9EDFC',
    borderRadius: 20,
    paddingLeft: 30,
    color: '#9BA5BF',
    fontSize: 12,
    lineHeight: 15,
    fontFamily: 'Montserrat',
  },
  searchIcon: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 41 : 38,
    left: 10,
  },
  fileContainer: {
    width: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 3,
    paddingRight: 3,
    justifyContent: 'space-between',
    marginHorizontal: Platform.OS === 'android' ? 5 : 15,
  },
  fileCard: {
    width: 175,
    height: 120,
    backgroundColor: '#E9EDFC',
    borderRadius: 20,
    // ...Platform.select({
    //   ios: {
    //     shadowColor: 'rgba(9, 13, 109, 0.4)',
    //     shadowOffset: {width: 0, height: 1},
    //     shadowOpacity: 0.6,
    //     shadowRadius: 5,
    //   },
    //   android: {
    //     elevation: 8,
    //     shadowColor: 'rgba(9, 13, 109, 0.4)',
    //     shadowOffset: {width: 0, height: 1},
    //     shadowRadius: 5,
    //   },
    // }),
    paddingLeft: 5,
    paddingRight: 5,
    marginVertical: Platform.OS === 'android' ? 11 : 15,
  },
  fileCardTop: {
    flexDirection: 'row',
    width: '100%',
  },
  fileCardTopImg: {
    marginTop: 18,
    marginLeft: 10,
    marginRight: 11,
  },
  fileCardTopText: {
    color: '#1A2442',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 15,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    width: 115,
    height: 45,
    marginTop: 15,
    marginRight: 5,
  },
  fileCardBottom: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 15,
    height: 41,
    marginTop: 14,
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  fileCardButton: {
    backgroundColor: '#9154FD',
    width: 77,
    height: 21,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 4,
    shadowColor: 'rgba(145, 84, 253, 0.6)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 14,
  },
  fileCardButtonText: {
    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 17,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    textAlign: 'center',
    marginTop: 2,
  },
  fileCardDownloadButton: {
    position: 'absolute',
    top: 12.33,
    right: 15.33,
  },
  fileCardText: {
    color: '#1A2442',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 15,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    marginLeft: 14.14,
    marginTop: 12.33,
  },
});

export default TradrboxFile;