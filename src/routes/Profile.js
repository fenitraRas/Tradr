/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Alert,
  Dimensions,
  FlatList,
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

import ButtonAdd from '../assets/icons/buttonAdd.svg';
import CardIndexDividers from '../assets/icons/cardIndexDividers.svg';
import ChartIncreasing from '../assets/icons/chartIncreasing.svg';
import Closed from '../assets/icons/closed.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import Sparkles from '../assets/icons/sparkles.svg';
import {formStyles} from '../assets/css/form';
import {indexStyles} from '../assets/css/index';
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
    <View style={[styles.profileContent, styles.shadowProp]}>
      <View style={styles.profil}>
        <Image
          style={{position: 'absolute'}}
          source={require('../assets/profil.png')}
        />
      </View>
      <Text style={styles.name} numberOfLines={1}>
        Kévin Clément
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('EditProfile')}
        style={styles.buttonProfil}>
        <Text style={styles.profilText}>Modifier mes informations</Text>
      </TouchableOpacity>
      <ProfileInformation title="Mes informations" />
      <ProfileInformationContent />
      <ProfileDocument title="Mes documents" />
      <ProfileDocumentContent />
      <ProfileStatistical title="Mes statistiques" />
      <ProfileStatisticalContent />
    </View>
  );
}

function ProfileInformation({title}) {
  return (
    <View style={[styles.informationContainer, {marginTop: 119}]}>
      <View
        style={[indexStyles.horizontalFlex, styles.informationTitleContainer]}>
        <Text style={[styles.informationCardTitle, styles.informationTitle]}>
          {title}
        </Text>
        <Sparkles width={18} height={18} style={styles.imageTitle} />
      </View>
    </View>
  );
}

function ProfileDocument({title}) {
  return (
    <View style={[styles.informationContainer, {marginTop: 30}]}>
      <View
        style={[indexStyles.horizontalFlex, styles.informationTitleContainer]}>
        <Text style={[styles.informationCardTitle, styles.documentTitle]}>
          {title}
        </Text>
        <CardIndexDividers width={18} height={18} style={styles.imageTitle} />
      </View>
    </View>
  );
}

function ProfileStatistical({title}) {
  return (
    <View style={[styles.informationContainer, {marginTop: 30}]}>
      <View
        style={[indexStyles.horizontalFlex, styles.informationTitleContainer]}>
        <Text style={[styles.informationCardTitle, styles.statisticalTitle]}>
          {title}
        </Text>
        <ChartIncreasing width={18} height={18} style={styles.imageTitle} />
      </View>
    </View>
  );
}

function ProfileStatisticalContent() {
  return (
    <View style={[styles.informationCard, styles.cardStat]}>
      <View style={[styles.arrangeHorizontally, {paddingRight: 15}]}>
        <View style={[styles.infoItem, {marginLeft: -3, paddingRight: 5}]}>
          <Text style={[styles.addText, {marginLeft: 8}]}>
            Formations réalisées
          </Text>
          <View
            style={[
              styles.numberStatContainer,
              {width: '100%', marginTop: 15, marginLeft: 8},
            ]}>
            <Text style={styles.numberStatText}>5</Text>
          </View>
        </View>
        <View style={[styles.infoItem, {paddingLeft: 5}]}>
          <Text style={[styles.addText, {marginLeft: 8}]}>Épisodes vues</Text>
          <View
            style={[
              styles.numberStatContainer,
              {width: '100%', marginTop: 15, marginLeft: 8},
            ]}>
            <Text style={styles.numberStatText}>63</Text>
          </View>
        </View>
      </View>

      <View>
        <Text style={[styles.addText, {marginTop: 15, marginLeft: 10}]}>
          Quiz réussi
        </Text>
      </View>
      <View style={[styles.arrangeHorizontally, {paddingRight: 11}]}>
        <View style={[{marginLeft: -3, paddingRight: 5, width: '33%'}]}>
          <View
            style={[
              styles.numberStatContainer,
              {width: '100%', marginTop: 10, marginLeft: 8},
            ]}>
            <Text style={styles.numberStatText}>25</Text>
          </View>
        </View>
        <View style={[{paddingLeft: 5, paddingRight: 5, width: '33%'}]}>
          <View
            style={[
              styles.numberStatContainer,
              {width: '100%', marginTop: 10, marginLeft: 8},
            ]}>
            <Text style={styles.numberStatText}>17</Text>
          </View>
        </View>
        <View style={[{paddingLeft: 5, width: '33%'}]}>
          <View
            style={[
              styles.numberStatContainer,
              {width: '100%', marginTop: 10, marginLeft: 8},
            ]}>
            <Text style={styles.numberStatText}>13</Text>
          </View>
        </View>
      </View>

      <View style={[styles.arrangeHorizontally, {paddingRight: 15}]}>
        <View style={[styles.infoItem, {marginLeft: -3, paddingRight: 5}]}>
          <Text style={[styles.addText, {marginLeft: 8}]}>Objectif réussi</Text>
          <View
            style={[
              styles.numberStatContainer,
              {width: '100%', marginTop: 15, marginLeft: 8},
            ]}>
            <Text style={styles.numberStatText}>32</Text>
          </View>
        </View>
        <View style={[styles.infoItem, {paddingLeft: 5}]}>
          <Text style={[styles.addText, {marginLeft: 8}]}>Certificats</Text>
          <View
            style={[
              styles.numberStatContainer,
              {width: '100%', marginTop: 15, marginLeft: 8},
            ]}>
            <Text style={styles.numberStatText}>6</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function ProfileDocumentContent() {
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
    <View style={[styles.informationCard, styles.cardDocHeight]}>
      <View>
        <View style={styles.addDocumentContainer}>
          <View style={styles.addDocumentLeft}>
            <Text style={styles.addText}>Ajouter un document</Text>
          </View>
          <TouchableOpacity style={styles.addDocumentRight}>
            <ButtonAdd width={26} height={26} />
          </TouchableOpacity>
        </View>

        <View style={[styles.arrangeHorizontally, {maxHeight: 130}]}>
          {values.map(value => (
            <View key={value} style={[styles.pdfContainer]}>
              <Text style={styles.pdfText}>{value}</Text>
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

function ProfileInformationContent() {
  return (
    <View style={[styles.informationCard, styles.cardInfoHeight]}>
      <View style={styles.informationCardContent}>
        <View style={[styles.infoItem, {paddingRight: 5}]}>
          <Text style={[styles.textInfo]}>Prénom</Text>
          <View style={[styles.infoTextContainer]}>
            <Text style={styles.infoText}>Kévin</Text>
          </View>
        </View>
        <View style={[styles.infoItem, {paddingLeft: 5}]}>
          <Text style={[styles.textInfo]}>Nom</Text>
          <View style={[styles.infoTextContainer]}>
            <Text style={styles.infoText}>Clément</Text>
          </View>
        </View>
        <View style={[styles.fullInfoItem]}>
          <Text style={[styles.textInfo]}>Email</Text>
          <View style={[styles.infoTextContainer]}>
            <Text style={styles.infoText}>pleiades@trad.com</Text>
          </View>
        </View>
        <View style={[styles.fullInfoItem]}>
          <Text style={[styles.textInfo]}>Téléphone</Text>
          <View style={[styles.infoTextContainer]}>
            <Text style={styles.infoText}>0633445566</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function ProfileContainer() {
  return (
    <ScrollView>
      <ProfileContent />
    </ScrollView>
  );
}

function Profile() {
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
          title="Mon Profil"
        />
      )}
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        scrollEnabled={false}
        onContentSizeChange={handleContentSizeChange}
        contentOffset={{x: 0, y: 0}}>
        <Menu
          currentScreen="Profile"
          handleScrollToLeft={() => handleScrollToLeft()}
        />
        <ProfileContainer />
      </ScrollView>
    </SafeAreaView>
  );
}

function alertInfo() {
  Alert.alert('INFO', 'Fonctionnalité en cours de développement', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
}

const styles = StyleSheet.create({
  profileContent: {
    width: Dimensions.get('window').width,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#FFFFFF',
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
    marginLeft: 9,
    marginTop: 15,
  },
  name: {
    position: 'absolute',
    width: Dimensions.get('window').width - 128,
    height: 29,
    left: 112,
    top: 26,
    color: '#1A2442',
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
    left: 112,
    top: 65,
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
  },
  informationTitle: {
    width: Platform.OS === 'android' ? 167 : 186,
  },
  documentTitle: {
    width: Platform.OS === 'android' ? 155 : 174,
  },
  imageTitle: {
    marginTop: 2,
  },
  informationCard: {
    width: '100%',
    marginTop: 10,
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
  cardInfoHeight: {
    height: 236,
  },
  cardDocHeight: {
    height: 168,
  },
  cardStat: {
    height: Platform.OS === 'android' ? 366 : 320,
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
  textInfo: {
    height: 16,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
    color: '#1A2442',
    marginLeft: 5,
  },
  infoTextContainer: {
    width: '100%',
    height: 44,
    paddingTop: 10,
    paddingLeft: 10,
    marginTop: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 8,
    shadowColor: '#090d6d',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.4,
    shadowRadius: 20,
  },
  infoText: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    color: '#1A2442',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
  },
  addDocumentContainer: {
    marginTop: 10,
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
  },
  addText: {
    fontWeight: 500,
    color: '#1A2442',
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
    width: 26,
    height: 26,
    padding: 10,
  },
  arrangeHorizontally: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    padding: 5,
  },
  pdfContainer: {
    margin: 5,
    width: 'auto',
    height: 29,
    padding: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    ...Platform.select({
      ios: {
        shadowColor: '#090d6d',
        shadowOffset: {width: 0, height: 8},
        shadowOpacity: 0.4,
        shadowRadius: 14,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  pdfText: {
    fontWeight: 400,
    fontSize: 17,
    lineHeight: 21,
    color: '#1A2442',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    marginRight: 12,
  },
  imageClosed: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  statisticalTitle: {
    width: Platform.OS === 'android' ? 158 : 177,
  },
  numberStatContainer: {
    margin: 5,
    width: 'auto',
    height: 46,
    padding: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 11,
    ...Platform.select({
      ios: {
        shadowColor: '#090d6d',
        shadowOffset: {width: 0, height: 8},
        shadowOpacity: 0.4,
        shadowRadius: 14,
      },
      android: {
        elevation: 4,
      },
    }),
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
});

export default Profile;
