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
      <View style={styles.tradrboxContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
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
});

export default TradrboxFile;
