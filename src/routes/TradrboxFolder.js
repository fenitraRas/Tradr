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
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import Menu, {NavbarMenu} from './Menu';
import React, {useRef, useState} from 'react';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import FlexedBiceps from '../assets/icons/flexedBiceps.svg';
import GrayHeart from '../assets/icons/grayHeart.svg';
import RedHeart from '../assets/icons/redHeart.svg';
import Search from '../assets/icons/search.svg';
import {formStyles} from '../assets/css/form';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

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

function TradrboxFolderContent() {
  const [text, onChangeText] = React.useState('Rechercher');
  const navigation = useNavigation();
  return (
    <View style={[styles.tradrboxContent, styles.shadowProp]}>
      <View style={styles.tradrboxTitleContainer}>
        <Text style={styles.tradrboxTitle}>
          Un petit peu d’aide ?
          <FlexedBiceps width={26} height={26} />
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Search width={11} height={11} style={styles.searchIcon} />
      </View>
      <ScrollView>
        <View style={styles.folderContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('TradrboxFile');
            }}
            style={styles.folderCard}>
            <View style={styles.folderImageContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.folderImage}
              />
            </View>
            <Text style={styles.folderCardTitle}>Titre du dossier</Text>
            <Text style={styles.folderCardSubTitle}>Sous-titre du dossier</Text>
            <View style={styles.folderCardBottomContainer}>
              <View style={styles.folderCardBottom}>
                <Text style={styles.folderCardBottomLeft}>2 fichiers</Text>
                <GrayHeart
                  width={16}
                  height={14}
                  style={styles.folderCardBottomRight}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.folderCard}>
            <View style={styles.folderImageContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.folderImage}
              />
            </View>
            <Text style={styles.folderCardTitle}>Titre du dossier</Text>
            <Text style={styles.folderCardSubTitle}>Sous-titre du dossier</Text>
            <View style={styles.folderCardBottomContainer}>
              <View style={styles.folderCardBottom}>
                <Text style={styles.folderCardBottomLeft}>2 fichiers</Text>
                <RedHeart
                  width={16}
                  height={14}
                  style={styles.folderCardBottomRight}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.folderCard}>
            <View style={styles.folderImageContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.folderImage}
              />
            </View>
            <Text style={styles.folderCardTitle}>Titre du dossier</Text>
            <Text style={styles.folderCardSubTitle}>Sous-titre du dossier</Text>
            <View style={styles.folderCardBottomContainer}>
              <View style={styles.folderCardBottom}>
                <Text style={styles.folderCardBottomLeft}>2 fichiers</Text>
                <RedHeart
                  width={16}
                  height={14}
                  style={styles.folderCardBottomRight}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.folderCard}>
            <View style={styles.folderImageContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.folderImage}
              />
            </View>
            <Text style={styles.folderCardTitle}>Titre du dossier</Text>
            <Text style={styles.folderCardSubTitle}>Sous-titre du dossier</Text>
            <View style={styles.folderCardBottomContainer}>
              <View style={styles.folderCardBottom}>
                <Text style={styles.folderCardBottomLeft}>2 fichiers</Text>
                <GrayHeart
                  width={16}
                  height={14}
                  style={styles.folderCardBottomRight}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.folderCard}>
            <View style={styles.folderImageContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.folderImage}
              />
            </View>
            <Text style={styles.folderCardTitle}>Titre du dossier</Text>
            <Text style={styles.folderCardSubTitle}>Sous-titre du dossier</Text>
            <View style={styles.folderCardBottomContainer}>
              <View style={styles.folderCardBottom}>
                <Text style={styles.folderCardBottomLeft}>2 fichiers</Text>
                <RedHeart
                  width={16}
                  height={14}
                  style={styles.folderCardBottomRight}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.folderCard}>
            <View style={styles.folderImageContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.folderImage}
              />
            </View>
            <Text style={styles.folderCardTitle}>Titre du dossier</Text>
            <Text style={styles.folderCardSubTitle}>Sous-titre du dossier</Text>
            <View style={styles.folderCardBottomContainer}>
              <View style={styles.folderCardBottom}>
                <Text style={styles.folderCardBottomLeft}>2 fichiers</Text>
                <RedHeart
                  width={16}
                  height={14}
                  style={styles.folderCardBottomRight}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

function TradrboxFolderContainer() {
  return (
    <ScrollView>
      <TradrboxFolderContent />
    </ScrollView>
  );
}

function TradrboxFolder() {
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
          title="Tradrbox"
        />
      )}
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        scrollEnabled={false}
        onContentSizeChange={handleContentSizeChange}
        contentOffset={{x: 0, y: 0}}>
        <Menu
          currentScreen="TradrboxFolder"
          handleScrollToLeft={() => handleScrollToLeft()}
        />
        <TradrboxFolderContainer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tradrboxContent: {
    width: Dimensions.get('window').width,
    height:
      Platform.OS === 'android'
        ? Dimensions.get('window').height + 130
        : Dimensions.get('window').height,
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
  tradrboxTitleContainer: {
    width: 'auto',
  },
  tradrboxTitle: {
    color: '#1A2442',
    marginTop: 30,
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 32,
    marginLeft: 5,
    marginRight: 5,
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
    top: Platform.OS === 'android' ? 104 : 100,
    left: 10,
  },
  folderContainer: {
    width: 'auto',
    flexWrap: 'wrap',
    paddingLeft: Platform.OS === 'android' ? 10 : 0,
    paddingRight: Platform.OS === 'android' ? 10 : 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Platform.OS === 'android' ? 5 : 5,
  },
  folderCard: {
    width: Platform.OS === 'android' ? 160 : 170,
    height: 194,
    backgroundColor: '#E9EDFC',
    borderRadius: 16,
    marginVertical: Platform.OS === 'android' ? 11 : 15,
  },
  folderImageContainer: {
    width: Platform.OS === 'android' ? 150 : 160,
    height: 86,
    borderRadius: 16,
    marginLeft: 5,
    marginTop: 5,
  },
  folderImage: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
  folderCardTitle: {
    marginTop: 14,
    marginLeft: 15,
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 15,
    color: '#1A2442',
  },
  folderCardSubTitle: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12,
    color: '#9BA5BF',
    marginTop: 2,
    marginLeft: 15,
  },
  folderCardBottomContainer: {
    width: '100%',
    padding: 5,
    height: 40,
  },
  folderCardBottom: {
    flexDirection: 'row',
    borderRadius: 15,
    marginTop: 10,
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {width: 0, height: 15},
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  folderCardBottomLeft: {
    marginLeft: 15,
    marginTop: 13,
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 15,
    color: '#1A2442',
  },
  folderCardBottomRight: {
    position: 'absolute',
    top: 14,
    right: 12,
  },
});

export default TradrboxFolder;
