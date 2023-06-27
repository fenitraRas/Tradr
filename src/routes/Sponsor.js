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

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Copy from '../assets/icons/copy.svg';
import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import FoldedHands from '../assets/icons/foldedHands.svg';
import Rocket from '../assets/icons/rocket.svg';
import Share from '../assets/icons/share.svg';
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

function SponsorContent() {
  return (
    <View style={[styles.sponsorContent, styles.shadowProp]}>
      <View style={styles.sponsorTitleContainer}>
        <Text style={styles.sponsorTitle}>
          Le succès les attend aussi !
          <Rocket width={26} height={26} />
        </Text>
      </View>

      <View style={styles.sponsorCard}>
        <Text style={styles.sponsorLinkTitle}>Mon lien de parrainage</Text>
        <View style={styles.sponsorLinkContainer}>
          <View style={styles.sponsorLinkContent}>
            <View style={styles.linkContainer}>
              <Text numberOfLines={1} style={styles.linkText}>
                https://tradr.com/r/kevin0834ufufunnufnfhhhhhh
              </Text>
            </View>
            <TouchableOpacity>
              <Share width={16.58} height={21} style={styles.linkImg} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Copy width={16.59} height={21} style={styles.linkImg} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.sponsorLabel}>Mon parrain</Text>
        <View style={styles.sponsorNameContainer}>
          <Image
            source={require('../assets/avatar.png')}
            style={styles.avatar}
          />
          <View style={styles.sponsorLeftText}>
            <Text style={styles.firstName}>Julien</Text>
            <Text style={styles.name}>Lenoir</Text>
          </View>
          <View style={styles.sponsorRightText}>
            <Text style={styles.dateLabel}>Date de parrainage</Text>
            <Text style={styles.date}>15 Mar. 2023</Text>
          </View>
        </View>
      </View>

      <Text style={styles.contactTitle}>
        Mes contacts
        <FoldedHands width={15} height={15} style={styles.contactTitleImg} />
      </Text>
      <View style={styles.contactCard}>
        <View>
          <Text style={styles.contactSubtitle}>Mes contacts parrainés</Text>
          <View style={styles.sponsorNameContainer}>
            <Image
              source={require('../assets/avatar.png')}
              style={styles.avatar}
            />
            <View style={styles.sponsorLeftText}>
              <Text style={styles.firstName}>Jean-mathieu</Text>
              <Text style={styles.name}>Valberg</Text>
            </View>
            <View style={styles.sponsorRightText}>
              <Text style={styles.dateLabel}>Date de parrainage</Text>
              <Text style={styles.date}>08 Mar. 2023</Text>
            </View>
          </View>
          <View style={styles.sponsorNameContainer}>
            <Image
              source={require('../assets/avatar.png')}
              style={styles.avatar}
            />
            <View style={styles.sponsorLeftText}>
              <Text style={styles.firstName}>Émilia</Text>
              <Text style={styles.name}>Detroit</Text>
            </View>
            <View style={styles.sponsorRightText}>
              <Text style={styles.dateLabel}>Date de parrainage</Text>
              <Text style={styles.date}>02 Jan. 2023</Text>
            </View>
          </View>
        </View>

        <View style={styles.invitationContainer}>
          <Text style={styles.contactSubtitle}>Mes invitations restantes</Text>
          <View style={styles.sponsorNameContainer}>
            <Image
              source={require('../assets/person.png')}
              style={styles.avatar}
            />
            <View style={styles.invitationLabelContainer}>
              <Text style={styles.invitationLabel}>Invitation restante</Text>
            </View>
          </View>
          <View style={styles.sponsorNameContainer}>
            <Image
              source={require('../assets/person.png')}
              style={styles.avatar}
            />
            <View style={styles.invitationLabelContainer}>
              <Text style={styles.invitationLabel}>Invitation restante</Text>
            </View>
          </View>
          <View style={styles.sponsorNameContainer}>
            <Image
              source={require('../assets/person.png')}
              style={styles.avatar}
            />
            <View style={styles.invitationLabelContainer}>
              <Text style={styles.invitationLabel}>Invitation restante</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function SponsorContainer() {
  return (
    <ScrollView>
      <SponsorContent />
    </ScrollView>
  );
}

function Sponsor() {
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
          title="Parrainer"
        />
      )}
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        scrollEnabled={false}
        onContentSizeChange={handleContentSizeChange}
        contentOffset={{x: 0, y: 0}}>
        <Menu
          currentScreen="Sponsor"
          handleScrollToLeft={() => handleScrollToLeft()}
        />
        <SponsorContainer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sponsorContent: {
    width: Dimensions.get('window').width,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
    paddingBottom: 34,
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
  sponsorTitleContainer: {
    width: 'auto',
  },
  sponsorTitle: {
    color: '#1A2442',
    marginTop: 30,
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 32,
    marginLeft: 5,
    marginRight: 15,
  },
  sponsorCard: {
    backgroundColor: '#E9EDFC',
    width: '100%',
    height: 190,
    borderRadius: 20,
    elevation: 8,
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {width: 0, height: 30},
    shadowOpacity: 1,
    shadowRadius: 40,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 30,
  },
  sponsorLinkTitle: {
    marginTop: 15,
    marginLeft: 5,
    color: '#1A2442',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'Montserrat',
  },
  sponsorLinkContainer: {
    width: '100%',
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 10,
  },
  sponsorLinkContent: {
    flexDirection: 'row',
    width: '100%',
  },
  linkContainer: {
    width: Dimensions.get('window').width - 111,
    backgroundColor: '#9154FD',
    height: 29,
    borderRadius: 4,
    elevation: 5,
    shadowColor: 'rgba(145, 84, 253, 0.7)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 20,
    paddingLeft: 8,
    paddingRight: 8,
  },
  linkText: {
    width: '100%',
    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 21,
    fontFamily: 'Montserrat',
    marginTop: 4,
  },
  linkImg: {
    marginLeft: 14,
    marginTop: 4,
  },
  sponsorLabel: {
    color: '#1A2442',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'Montserrat',
    marginLeft: 5,
    marginTop: 20,
  },
  sponsorNameContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 60,
    borderRadius: 10,
    marginTop: 10,
    elevation: 5,
    shadowColor: '#090d6d',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.4,
    shadowRadius: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    marginLeft: 6,
    marginTop: 6,
  },
  sponsorLeftText: {
    marginLeft: 12,
    marginTop: 12,
    width: '48%',
  },
  firstName: {
    color: '#1A2442',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'Montserrat',
  },
  name: {
    marginTop: 2,
    color: '#1A2442',
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'Montserrat',
  },
  sponsorRightText: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  dateLabel: {
    color: '#9BA5BF',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 15,
    fontFamily: 'Montserrat',
    textAlign: 'right',
  },
  date: {
    marginTop: 3,
    color: '#1A2442',
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'Montserrat',
    textAlign: 'right',
  },
  contactTitle: {
    marginTop: 30,
    marginLeft: 15,
    color: '#1A2442',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Montserrat',
  },
  contactTitleImg: {
    marginLeft: 6,
  },
  contactCard: {
    height: 431,
    width: '100%',
    backgroundColor: '#E9EDFC',
    borderRadius: 20,
    marginTop: 10,
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  contactSubtitle: {
    color: '#1A2442',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'Montserrat',
    marginLeft: 15,
    marginTop: 15,
  },
  invitationContainer: {
    marginTop: 5,
  },
  invitationLabelContainer: {
    width: 138,
    alignSelf: 'center',
    marginLeft: 12,
  },
  invitationLabel: {
    color: '#9BA5BF',
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'Montserrat',
  },
});

export default Sponsor;
