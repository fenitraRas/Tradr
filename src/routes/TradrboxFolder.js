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
import {indexStyles} from '../assets/css';
import theme from '../assets/theme';
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

function TradrboxFolderContent(props) {
  const [text, onChangeText] = React.useState('Rechercher');
  const navigation = useNavigation();
  return (
    <View style={[props.classes.tradrboxContent, indexStyles.shadowProp]}>
      <View style={styles.tradrboxTitleContainer}>
        <Text style={props.classes.tradrboxTitle}>
          Un petit peu d’aide ?
          <FlexedBiceps width={26} height={26} marginLeft={2} />
        </Text>
        <TextInput
          style={props.classes.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Search width={11} height={11} style={styles.searchIcon} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.folderContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('TradrboxFile');
            }}
            style={props.classes.folderCard}>
            <View style={styles.folderImageContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.folderImage}
              />
            </View>
            <Text style={props.classes.folderCardTitle}>Titre du dossier</Text>
            <Text style={styles.folderCardSubTitle}>Sous-titre du dossier</Text>
            <View style={styles.folderCardBottomContainer}>
              <View style={props.classes.folderCardBottom}>
                <Text style={props.classes.folderCardBottomLeft}>
                  2 fichiers
                </Text>
                <GrayHeart
                  width={16}
                  height={14}
                  style={styles.folderCardBottomRight}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={props.classes.folderCard}>
            <View style={styles.folderImageContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.folderImage}
              />
            </View>
            <Text style={props.classes.folderCardTitle}>Titre du dossier</Text>
            <Text style={styles.folderCardSubTitle}>Sous-titre du dossier</Text>
            <View style={styles.folderCardBottomContainer}>
              <View style={props.classes.folderCardBottom}>
                <Text style={props.classes.folderCardBottomLeft}>
                  2 fichiers
                </Text>
                <RedHeart
                  width={16}
                  height={14}
                  style={styles.folderCardBottomRight}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={props.classes.folderCard}>
            <View style={styles.folderImageContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.folderImage}
              />
            </View>
            <Text style={props.classes.folderCardTitle}>Titre du dossier</Text>
            <Text style={styles.folderCardSubTitle}>Sous-titre du dossier</Text>
            <View style={styles.folderCardBottomContainer}>
              <View style={props.classes.folderCardBottom}>
                <Text style={props.classes.folderCardBottomLeft}>
                  2 fichiers
                </Text>
                <RedHeart
                  width={16}
                  height={14}
                  style={styles.folderCardBottomRight}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={props.classes.folderCard}>
            <View style={styles.folderImageContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.folderImage}
              />
            </View>
            <Text style={props.classes.folderCardTitle}>Titre du dossier</Text>
            <Text style={styles.folderCardSubTitle}>Sous-titre du dossier</Text>
            <View style={styles.folderCardBottomContainer}>
              <View style={props.classes.folderCardBottom}>
                <Text style={props.classes.folderCardBottomLeft}>
                  2 fichiers
                </Text>
                <GrayHeart
                  width={16}
                  height={14}
                  style={styles.folderCardBottomRight}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={props.classes.folderCard}>
            <View style={styles.folderImageContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.folderImage}
              />
            </View>
            <Text style={props.classes.folderCardTitle}>Titre du dossier</Text>
            <Text style={styles.folderCardSubTitle}>Sous-titre du dossier</Text>
            <View style={styles.folderCardBottomContainer}>
              <View style={props.classes.folderCardBottom}>
                <Text style={props.classes.folderCardBottomLeft}>
                  2 fichiers
                </Text>
                <RedHeart
                  width={16}
                  height={14}
                  style={styles.folderCardBottomRight}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={props.classes.folderCard}>
            <View style={styles.folderImageContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.folderImage}
              />
            </View>
            <Text style={props.classes.folderCardTitle}>Titre du dossier</Text>
            <Text style={styles.folderCardSubTitle}>Sous-titre du dossier</Text>
            <View style={styles.folderCardBottomContainer}>
              <View style={props.classes.folderCardBottom}>
                <Text style={props.classes.folderCardBottomLeft}>
                  2 fichiers
                </Text>
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

function TradrboxFolderContainer(props) {
  return (
    <ScrollView>
      <TradrboxFolderContent classes={props.classes} />
    </ScrollView>
  );
}

function TradrboxFolder() {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const classes = {
    tradrboxContent: [
      styles.tradrboxContent,
      colorScheme === 'dark' && styles.tradrboxContentDark,
    ],
    input: [styles.input, colorScheme === 'dark' && styles.inputDark],
    folderCard: [
      styles.folderCard,
      colorScheme === 'dark' && styles.folderCardDark,
    ],
    folderCardBottom: [
      styles.folderCardBottom,
      colorScheme === 'dark' && styles.folderCardBottomDark,
    ],
    tradrboxTitle: [
      styles.tradrboxTitle,
      colorScheme === 'dark' && styles.tradrboxTitleDark,
    ],
    folderCardTitle: [
      styles.folderCardTitle,
      colorScheme === 'dark' && styles.folderCardTitleDark,
    ],
    folderCardBottomLeft: [
      styles.folderCardBottomLeft,
      colorScheme === 'dark' && styles.folderCardBottomLeftDark,
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
          title="Tradrbox"
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
          currentScreen="TradrboxFolder"
          handleScrollToLeft={() => handleScrollToLeft()}
        />
        <TradrboxFolderContainer classes={classes} />
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
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
    paddingBottom: 14,
  },
  tradrboxContentDark: {
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
  tradrboxTitleDark: {
    color: theme.colors.text.$textDark,
  },
  tradrboxTitle: {
    color: theme.colors.text.$textLight,
    marginTop: 30,
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 32,
    marginLeft: 5,
    marginRight: 10,
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
  inputDark: {
    backgroundColor: theme.colors.component.$cardDark,
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
  folderCardDark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  folderCard: {
    width: Platform.OS === 'android' ? 160 : 170,
    height: 194,
    backgroundColor: theme.colors.component.$cardLight,
    borderRadius: 16,
    marginVertical: Platform.OS === 'android' ? 11 : 15,
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
  folderCardTitleDark: {
    color: theme.colors.text.$textDark,
  },
  folderCardTitle: {
    marginTop: 14,
    marginLeft: 15,
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 15,
    color: theme.colors.text.$textLight,
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
  folderCardBottomDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  folderCardBottom: {
    flexDirection: 'row',
    borderRadius: 15,
    marginTop: 10,
    width: '100%',
    height: 40,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
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
  folderCardBottomLeftDark: {
    color: theme.colors.text.$textDark,
  },
  folderCardBottomLeft: {
    marginLeft: 15,
    marginTop: 13,
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 15,
    color: theme.colors.text.$textLight,
  },
  folderCardBottomRight: {
    position: 'absolute',
    top: 14,
    right: 12,
  },
});

export default TradrboxFolder;
