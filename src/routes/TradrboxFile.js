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

import Chat from '../assets/icons/chat.svg';
import ChevronLeft from '../assets/icons/chevronLeft.svg';
import ChevronLeftDark from '../assets/icons/chevronLeftDark.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import Download from '../assets/icons/download.svg';
import PdfIcon from '../assets/icons/pdfIcon.svg';
import Search from '../assets/icons/search.svg';
import {formStyles} from '../assets/css/form';
import {indexStyles} from '../assets/css';
import theme from '../assets/theme';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

function Navbar(props) {
  const navigation = useNavigation();
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const [option] = useState(colorScheme);
  return (
    <View style={formStyles.navbarContainer}>
      <View style={formStyles.navbarIcon}>
        <TouchableOpacity onPress={() => navigation.navigate('TradrboxFolder')}>
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

function TradrboxFileContent(props) {
  const [text, onChangeText] = React.useState('Rechercher');
  return (
    <View style={[props.classes.tradrboxContent, indexStyles.shadowProp]}>
      <View style={styles.tradrboxTitleContainer}>
        <TextInput
          style={props.classes.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Search width={11} height={11} style={styles.searchIcon} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.fileContainer}>
          <View style={props.classes.fileCard}>
            <View style={styles.fileCardTop}>
              <Chat width={24} height={24} style={styles.fileCardTopImg} />
              <Text style={props.classes.fileCardTopText}>
                Épisode 01 - Bien commencer le trading
              </Text>
            </View>
            <View style={props.classes.fileCardBottom}>
              <TouchableOpacity style={styles.fileCardButton}>
                <Text style={styles.fileCardButtonText}>Rejoindre</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={props.classes.fileCard}>
            <View style={styles.fileCardTop}>
              <PdfIcon width={24} height={24} style={styles.fileCardTopImg} />
              <Text style={props.classes.fileCardTopText}>
                Épisode 02 - Prendre le contrôle de son capital
              </Text>
            </View>
            <View style={props.classes.fileCardBottom}>
              <Text style={props.classes.fileCardText}>174 mo</Text>
              <TouchableOpacity style={styles.fileCardDownloadButton}>
                <Download width={15.09} height={13.33} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={props.classes.fileCard}>
            <View style={styles.fileCardTop}>
              <PdfIcon width={24} height={24} style={styles.fileCardTopImg} />
              <Text style={props.classes.fileCardTopText}>
                Comment devenir membre Tradr ?
              </Text>
            </View>
            <View style={props.classes.fileCardBottom}>
              <Text style={props.classes.fileCardText}>174 mo</Text>
              <TouchableOpacity style={styles.fileCardDownloadButton}>
                <Download width={15.09} height={13.33} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={props.classes.fileCard}>
            <View style={styles.fileCardTop}>
              <PdfIcon width={24} height={24} style={styles.fileCardTopImg} />
              <Text style={props.classes.fileCardTopText}>
                Épisode 02 - Prendre le contrôle de son capital
              </Text>
            </View>
            <View style={props.classes.fileCardBottom}>
              <Text style={props.classes.fileCardText}>174 mo</Text>
              <TouchableOpacity style={styles.fileCardDownloadButton}>
                <Download width={15.09} height={13.33} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={props.classes.fileCard}>
            <View style={styles.fileCardTop}>
              <PdfIcon width={24} height={24} style={styles.fileCardTopImg} />
              <Text style={props.classes.fileCardTopText}>
                Épisode 01 - Bien commencer le trading
              </Text>
            </View>
            <View style={props.classes.fileCardBottom}>
              <Text style={props.classes.fileCardText}>174 mo</Text>
              <TouchableOpacity style={styles.fileCardDownloadButton}>
                <Download width={15.09} height={13.33} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={props.classes.fileCard}>
            <View style={styles.fileCardTop}>
              <Chat width={24} height={24} style={styles.fileCardTopImg} />
              <Text style={props.classes.fileCardTopText}>
                Prises de positions de nos traders
              </Text>
            </View>
            <View style={props.classes.fileCardBottom}>
              <TouchableOpacity style={styles.fileCardButton}>
                <Text style={styles.fileCardButtonText}>Rejoindre</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={props.classes.fileCard}>
            <View style={styles.fileCardTop}>
              <Chat width={24} height={24} style={styles.fileCardTopImg} />
              <Text style={props.classes.fileCardTopText}>
                Comment devenir membre Tradr ?
              </Text>
            </View>
            <View style={props.classes.fileCardBottom}>
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

function TradrboxFileContainer(props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TradrboxFileContent classes={props.classes} />
    </ScrollView>
  );
}

function TradrboxFile() {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const classes = {
    tradrboxContent: [
      styles.tradrboxContent,
      colorScheme === 'dark' && styles.tradrboxContentDark,
    ],
    input: [styles.input, colorScheme === 'dark' && styles.inputDark],
    fileCard: [styles.fileCard, colorScheme === 'dark' && styles.fileCardDark],
    fileCardBottom: [
      styles.fileCardBottom,
      colorScheme === 'dark' && styles.fileCardBottomCard,
    ],
    fileCardTopText: [
      styles.fileCardTopText,
      colorScheme === 'dark' && styles.fileCardTopTextDark,
    ],
    fileCardText: [
      styles.fileCardText,
      colorScheme === 'dark' && styles.fileCardTextDark,
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
          title="Titre du dossier"
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
          currentScreen="TradrboxFile"
          handleScrollToLeft={() => handleScrollToLeft()}
        />
        <TradrboxFileContainer classes={classes} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tradrboxContentDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  tradrboxContent: {
    width: Dimensions.get('window').width,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
    paddingBottom: 14,
    height:
      Platform.OS === 'android'
        ? Dimensions.get('window').height - 74
        : Dimensions.get('window').height - 109,
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
  inputDark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  input: {
    width: '100%',
    height: Platform.OS === 'android' ? 35 : 27,
    borderWidth: 0,
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: theme.colors.component.$cardLight,
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
    // paddingLeft: 3,
    // paddingRight: 3,
    justifyContent: 'space-between',
    marginHorizontal: Platform.OS === 'android' ? 5 : 5,
  },
  fileCardDark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  fileCard: {
    width: 170,
    height: 120,
    backgroundColor: theme.colors.component.$cardLight,
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(9, 13, 109, 0.4)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
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
  fileCardTopTextDark: {
    color: theme.colors.text.$textDark,
  },
  fileCardTopText: {
    color: theme.colors.text.$textLight,
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
  fileCardBottomCard: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  fileCardBottom: {
    flexDirection: 'row',
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    width: '100%',
    borderRadius: 15,
    height: 41,
    marginTop: 14,
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
  fileCardTextDark: {
    color: theme.colors.text.$textDark,
  },
  fileCardText: {
    color: theme.colors.text.$textLight,
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
