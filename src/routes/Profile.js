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

import CardIndexDividers from '../assets/icons/cardIndexDividers.svg';
import ChartIncreasing from '../assets/icons/chartIncreasing.svg';
import Closed from '../assets/icons/closed.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import Sparkles from '../assets/icons/sparkles.svg';
import {formStyles} from '../assets/css/form';
import {indexStyles} from '../assets/css/index';
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

function ProfileContent(props) {
  const navigation = useNavigation();
  return (
    <View style={[props.classes.profileContent, indexStyles.shadowProp]}>
      <View style={styles.profil}>
        <Image style={styles.img} source={require('../assets/profil.png')} />
      </View>
      <Text style={props.classes.name} numberOfLines={1}>
        Kévin Clément
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('EditProfile')}
        style={styles.buttonProfil}>
        <Text style={styles.profilText}>Modifier mes informations</Text>
      </TouchableOpacity>
      <ProfileInformation classes={props.classes} title="Mes informations" />
      <ProfileInformationContent classes={props.classes} />
      <ProfileDocument classes={props.classes} title="Mes documents" />
      <ProfileDocumentContent classes={props.classes} />
      <ProfileStatistical classes={props.classes} title="Mes statistiques" />
      <ProfileStatisticalContent classes={props.classes} />
    </View>
  );
}

function ProfileInformation({classes, title}) {
  return (
    <View style={[styles.informationContainer, {marginTop: 119}]}>
      <View
        style={[indexStyles.horizontalFlex, styles.informationTitleContainer]}>
        <Text style={[styles.informationCardTitle, classes.informationTitle]}>
          {title}
        </Text>
        <Sparkles width={18} height={18} style={styles.imageTitle} />
      </View>
    </View>
  );
}

function ProfileDocument({classes, title}) {
  return (
    <View style={[styles.informationContainer, {marginTop: 30}]}>
      <View
        style={[indexStyles.horizontalFlex, styles.informationTitleContainer]}>
        <Text style={[styles.informationCardTitle, classes.documentTitle]}>
          {title}
        </Text>
        <CardIndexDividers width={18} height={18} style={styles.imageTitle} />
      </View>
    </View>
  );
}

function ProfileStatistical({classes, title}) {
  return (
    <View style={[styles.informationContainer, {marginTop: 30}]}>
      <View
        style={[indexStyles.horizontalFlex, styles.informationTitleContainer]}>
        <Text style={[styles.informationCardTitle, classes.statisticalTitle]}>
          {title}
        </Text>
        <ChartIncreasing width={18} height={18} style={styles.imageTitle} />
      </View>
    </View>
  );
}

function ProfileStatisticalContent(props) {
  return (
    <View style={[props.classes.informationCard, styles.cardStat]}>
      <View style={[styles.arrangeHorizontally, {paddingRight: 15}]}>
        <View style={[styles.infoItem, {marginLeft: -3, paddingRight: 5}]}>
          <Text
            numberOfLines={1}
            style={[props.classes.addText, {marginLeft: 8}]}>
            Formations réalisées
          </Text>
          <View
            style={[
              props.classes.numberStatContainer,
              {width: '100%', marginTop: 15, marginLeft: 8},
            ]}>
            <Text style={styles.numberStatText}>5</Text>
          </View>
        </View>
        <View style={[styles.infoItem, {paddingLeft: 5}]}>
          <Text style={[props.classes.addText, {marginLeft: 8}]}>
            Épisodes vues
          </Text>
          <View
            style={[
              props.classes.numberStatContainer,
              {width: '100%', marginTop: 15, marginLeft: 8},
            ]}>
            <Text style={styles.numberStatText}>63</Text>
          </View>
        </View>
      </View>

      <View>
        <Text style={[props.classes.addText, {marginTop: 15, marginLeft: 10}]}>
          Quiz réussi
        </Text>
      </View>
      <View style={[styles.arrangeHorizontally, {paddingRight: 11}]}>
        <View style={[{marginLeft: -3, paddingRight: 5, width: '33%'}]}>
          <View
            style={[
              props.classes.numberStatContainer,
              {width: '100%', marginTop: 10, marginLeft: 8},
            ]}>
            <Text style={styles.numberStatText}>25</Text>
          </View>
        </View>
        <View style={[{paddingLeft: 5, paddingRight: 5, width: '33%'}]}>
          <View
            style={[
              props.classes.numberStatContainer,
              {width: '100%', marginTop: 10, marginLeft: 8},
            ]}>
            <Text style={styles.numberStatText}>17</Text>
          </View>
        </View>
        <View style={[{paddingLeft: 5, width: '33%'}]}>
          <View
            style={[
              props.classes.numberStatContainer,
              {width: '100%', marginTop: 10, marginLeft: 8},
            ]}>
            <Text style={styles.numberStatText}>13</Text>
          </View>
        </View>
      </View>

      <View style={[styles.arrangeHorizontally, {paddingRight: 15}]}>
        <View style={[styles.infoItem, {marginLeft: -3, paddingRight: 5}]}>
          <Text style={[props.classes.addText, {marginLeft: 8}]}>
            Objectif réussi
          </Text>
          <View
            style={[
              props.classes.numberStatContainer,
              {width: '100%', marginTop: 15, marginLeft: 8},
            ]}>
            <Text style={styles.numberStatText}>32</Text>
          </View>
        </View>
        <View style={[styles.infoItem, {paddingLeft: 5}]}>
          <Text style={[props.classes.addText, {marginLeft: 8}]}>
            Certificats
          </Text>
          <View
            style={[
              props.classes.numberStatContainer,
              {width: '100%', marginTop: 15, marginLeft: 8},
            ]}>
            <Text style={styles.numberStatText}>6</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function ProfileDocumentContent(props) {
  const values = [
    'CV 20022-23.pdf',
    'newspaper.pdf',
    'sans-titre.jpg',
    'episode.jpg',
    'doc1.pdf',
    'CI.png',
    'document.pdf',
  ];
  return (
    <View style={[props.classes.informationCard, styles.cardDocHeight]}>
      <View>
        <View style={styles.addDocumentContainer}>
          <View style={styles.addDocumentLeft}>
            <Text style={props.classes.addText}>Ajouter un document</Text>
          </View>
          <TouchableOpacity style={styles.addDocumentRight}>
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.arrangeHorizontally, {maxHeight: 130}]}>
          {values.map(value => (
            <View key={value} style={[props.classes.pdfContainer]}>
              <Text style={props.classes.pdfText}>{value}</Text>
              <TouchableOpacity style={styles.imageClosed}>
                <Closed width={6} height={6} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

function ProfileInformationContent(props) {
  return (
    <View style={[props.classes.informationCard, styles.cardInfoHeight]}>
      <View style={styles.informationCardContent}>
        <View style={[styles.infoItem, {paddingRight: 5}]}>
          <Text style={[props.classes.textInfo]}>Prénom</Text>
          <View style={[props.classes.infoTextContainer]}>
            <Text style={props.classes.infoText}>Kévin</Text>
          </View>
        </View>
        <View style={[styles.infoItem, {paddingLeft: 5}]}>
          <Text style={[props.classes.textInfo]}>Nom</Text>
          <View style={[props.classes.infoTextContainer]}>
            <Text style={props.classes.infoText}>Clément</Text>
          </View>
        </View>
        <View style={[styles.fullInfoItem]}>
          <Text style={[props.classes.textInfo]}>Email</Text>
          <View style={[props.classes.infoTextContainer]}>
            <Text style={props.classes.infoText}>pleiades@trad.com</Text>
          </View>
        </View>
        <View style={[styles.fullInfoItem]}>
          <Text style={[props.classes.textInfo]}>Téléphone</Text>
          <View style={[props.classes.infoTextContainer]}>
            <Text style={props.classes.infoText}>0633445566</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function ProfileContainer(props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ProfileContent classes={props.classes} />
    </ScrollView>
  );
}

function Profile() {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const classes = {
    profileContent: [
      styles.profileContent,
      colorScheme === 'dark' && styles.profileContentDark,
    ],
    informationCard: [
      styles.informationCard,
      colorScheme === 'dark' && styles.informationCardDark,
    ],
    infoTextContainer: [
      styles.infoTextContainer,
      colorScheme === 'dark' && styles.infoTextContainerDark,
    ],
    pdfContainer: [
      styles.pdfContainer,
      colorScheme === 'dark' && styles.pdfContainerDark,
    ],
    numberStatContainer: [
      styles.numberStatContainer,
      colorScheme === 'dark' && styles.numberStatContainerDark,
    ],
    name: [styles.name, colorScheme === 'dark' && styles.nameDark],
    informationTitle: [
      styles.informationTitle,
      colorScheme === 'dark' && styles.informationTitleDark,
    ],
    textInfo: [styles.textInfo, colorScheme === 'dark' && styles.textInfoDark],
    infoText: [styles.infoText, colorScheme === 'dark' && styles.infoTextDark],
    documentTitle: [
      styles.documentTitle,
      colorScheme === 'dark' && styles.documentTitleDark,
    ],
    addText: [styles.addText, colorScheme === 'dark' && styles.addTextDark],
    pdfText: [styles.pdfText, colorScheme === 'dark' && styles.pdfTextDark],
    statisticalTitle: [
      styles.statisticalTitle,
      colorScheme === 'dark' && styles.statisticalTitleDark,
    ],
  };
  const backgroundStyle = {
    backgroundColor: colorScheme === 'dark' ? Colors.darker : Colors.lighter,
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
        barStyle={colorScheme ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {scrollToMenu ? (
        <NavbarMenu handleScrollToLeft={() => handleScrollToLeft()} />
      ) : (
        <Navbar
          handleScrollToRight={() => handleScrollToRight()}
          title="Mon Profil"
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
          currentScreen="Profile"
          handleScrollToLeft={() => handleScrollToLeft()}
        />
        <ProfileContainer classes={classes} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileContentDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  profileContent: {
    width: Dimensions.get('window').width,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
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
  profil: {
    position: 'absolute',
    marginLeft: 15,
    marginTop: 15,
  },
  nameDark: {
    color: theme.colors.text.$textDark,
  },
  name: {
    position: 'absolute',
    width: Dimensions.get('window').width - 128,
    height: 29,
    left: 104,
    top: 18,
    color: theme.colors.text.$textLight,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 29,
  },
  buttonProfil: {
    position: 'absolute',
    width: Platform.OS === 'android' ? 180 : 197,
    height: 21,
    left: 105,
    top: 55,
    padding: 2,
    backgroundColor: '#9154FD',
    borderRadius: 4,
    shadowColor: 'rgba(145, 84, 253, 0.8)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    justifyContent: 'center',
  },
  profilText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 17,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  navbarText: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Montserrat',
    color: '#1A2442',
  },
  informationContainer: {
    width: '100%',
  },
  informationTitleContainer: {
    height: 24,
    marginLeft: 5,
  },
  informationCardTitle: {
    height: 24,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 500,
  },
  informationTitleDark: {
    color: theme.colors.text.$textDark,
  },
  informationTitle: {
    width: Platform.OS === 'android' ? 167 : 186,
    color: theme.colors.text.$textLight,
  },
  documentTitleDark: {
    color: theme.colors.text.$textDark,
  },
  documentTitle: {
    width: Platform.OS === 'android' ? 155 : 174,
    color: theme.colors.text.$textLight,
  },
  imageTitle: {
    marginTop: 2,
  },
  informationCardDark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  informationCard: {
    width: '100%',
    marginTop: 10,
    alignItems: 'flex-start',
    borderRadius: 20,
    backgroundColor: theme.colors.component.$cardLight,
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: Platform.OS === 'android' ? -35 : undefined,
  },
  cardInfoHeight: {
    height: 236,
  },
  cardDocHeight: {
    height: 168,
  },
  cardStat: {
    height: Platform.OS === 'android' ? 366 : 'auto',
    marginBottom: 10,
  },
  informationCardContent: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  infoItem: {
    width: '50%',
    marginTop: 14,
  },
  fullInfoItem: {
    width: '100%',
    marginTop: 10,
  },
  textInfoDark: {
    color: theme.colors.text.$textDarkSecondaire,
  },
  textInfo: {
    height: 16,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
    color: theme.colors.text.$textLightSecondaire,
    marginLeft: 5,
  },
  infoTextContainerDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  infoTextContainer: {
    width: '100%',
    height: 44,
    paddingTop: 10,
    paddingLeft: 10,
    marginTop: 4,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderRadius: 10,
    elevation: 8,
    shadowColor: '#090d6d',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  infoTextDark: {
    color: theme.colors.text.$textDark,
  },
  infoText: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    color: theme.colors.text.$textLight,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
  },
  addDocumentContainer: {
    marginTop: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: 32,
  },
  addDocumentLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 15,
    paddingTop: 3,
    minWidth: 100,
    marginTop: 2,
  },
  addTextDark: {
    color: theme.colors.text.$textDark,
  },
  addText: {
    fontWeight: 500,
    color: theme.colors.text.$textLight,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 18,
  },
  addDocumentRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 4,
  },
  addButton: {
    width: 26,
    height: 26,
    alignItems: 'center',
    marginRight: 6,
    backgroundColor: '#9154FD',
    borderRadius: 10,
    elevation: 8,
    shadowColor: '#9154FD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 600,
    fontSize: 18,
    marginTop: 1,
  },
  arrangeHorizontally: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    padding: 5,
  },
  pdfContainerDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  pdfContainer: {
    margin: 5,
    width: 'auto',
    height: 29,
    padding: 4,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderRadius: 4,
    ...Platform.select({
      ios: {
        shadowColor: '#090d6d',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  pdfTextDark: {
    color: theme.colors.text.$textDark,
  },
  pdfText: {
    fontWeight: 400,
    fontSize: 17,
    lineHeight: 21,
    color: theme.colors.text.$textLight,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    marginRight: 12,
  },
  imageClosed: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  statisticalTitleDark: {
    color: theme.colors.text.$textDark,
  },
  statisticalTitle: {
    width: Platform.OS === 'android' ? 158 : 177,
    color: theme.colors.text.$textLight,
  },
  numberStatContainerDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  numberStatContainer: {
    margin: 5,
    width: 'auto',
    height: 46,
    padding: 4,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderRadius: 11,
    elevation: 8,
    shadowColor: '#090d6d',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  numberStatText: {
    fontWeight: 700,
    fontSize: 32,
    lineHeight: 38,
    color: '#9154FD',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    textAlign: 'center',
  },
  img: {
    display: 'flex',
    position: 'absolute',
    width: 74,
    height: 74,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: 15,
  },
});

export default Profile;
