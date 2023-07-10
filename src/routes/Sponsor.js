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

function SponsorContent(props) {
  return (
    <View style={[props.classes.sponsorContent, indexStyles.shadowProp]}>
      <View style={styles.sponsorTitleContainer}>
        <Text style={props.classes.sponsorTitle}>
          Le succès les attend aussi !
          <Rocket width={26} height={26} marginLeft={15} />
        </Text>
      </View>

      <View style={props.classes.sponsorCard}>
        <Text style={props.classes.sponsorLinkTitle}>
          Mon lien de parrainage
        </Text>
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
        <Text style={props.classes.sponsorLabel}>Mon parrain</Text>
        <View style={props.classes.sponsorNameContainer}>
          <Image
            source={require('../assets/avatar.png')}
            style={styles.avatar}
          />
          <View style={styles.sponsorLeftText}>
            <Text style={props.classes.firstName}>Julien</Text>
            <Text style={props.classes.name}>Lenoir</Text>
          </View>
          <View style={styles.sponsorRightText}>
            <Text style={styles.dateLabel}>Date de parrainage</Text>
            <Text style={props.classes.date}>15 Mar. 2023</Text>
          </View>
        </View>
      </View>

      <Text style={props.classes.contactTitle}>
        Mes contacts
        <FoldedHands width={15} height={15} style={styles.contactTitleImg} />
      </Text>
      <View style={props.classes.contactCard}>
        <View>
          <Text style={props.classes.contactSubtitle}>
            Mes contacts parrainés
          </Text>
          <View style={props.classes.sponsorNameContainer}>
            <Image
              source={require('../assets/avatar.png')}
              style={styles.avatar}
            />
            <View style={styles.sponsorLeftText}>
              <Text style={props.classes.firstName}>Jean-mathieu</Text>
              <Text style={props.classes.name}>Valberg</Text>
            </View>
            <View style={styles.sponsorRightText}>
              <Text style={styles.dateLabel}>Date de parrainage</Text>
              <Text style={props.classes.date}>08 Mar. 2023</Text>
            </View>
          </View>
          <View style={props.classes.sponsorNameContainer}>
            <Image
              source={require('../assets/avatar.png')}
              style={styles.avatar}
            />
            <View style={styles.sponsorLeftText}>
              <Text style={props.classes.firstName}>Émilia</Text>
              <Text style={props.classes.name}>Detroit</Text>
            </View>
            <View style={styles.sponsorRightText}>
              <Text style={styles.dateLabel}>Date de parrainage</Text>
              <Text style={props.classes.date}>02 Jan. 2023</Text>
            </View>
          </View>
        </View>

        <View style={styles.invitationContainer}>
          <Text style={props.classes.contactSubtitle}>
            Mes invitations restantes
          </Text>
          <View style={props.classes.sponsorNameContainer}>
            <Image
              source={require('../assets/person.png')}
              style={styles.avatar}
            />
            <View style={styles.invitationLabelContainer}>
              <Text style={styles.invitationLabel}>Invitation restante</Text>
            </View>
          </View>
          <View style={props.classes.sponsorNameContainer}>
            <Image
              source={require('../assets/person.png')}
              style={styles.avatar}
            />
            <View style={styles.invitationLabelContainer}>
              <Text style={styles.invitationLabel}>Invitation restante</Text>
            </View>
          </View>
          <View style={props.classes.sponsorNameContainer}>
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

function SponsorContainer(props) {
  return (
    <ScrollView>
      <SponsorContent classes={props.classes} />
    </ScrollView>
  );
}

function Sponsor() {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const classes = {
    sponsorContent: [
      styles.sponsorContent,
      colorScheme === 'dark' && styles.sponsorContentDark,
    ],
    sponsorTitle: [
      styles.sponsorTitle,
      colorScheme === 'dark' && styles.sponsorTitleDark,
    ],
    sponsorCard: [
      styles.sponsorCard,
      colorScheme === 'dark' && styles.sponsorCardDark,
    ],
    sponsorLinkTitle: [
      styles.sponsorLinkTitle,
      colorScheme === 'dark' && styles.sponsorLinkTitleDark,
    ],
    sponsorLabel: [
      styles.sponsorLabel,
      colorScheme === 'dark' && styles.sponsorLabelDark,
    ],
    sponsorNameContainer: [
      styles.sponsorNameContainer,
      colorScheme === 'dark' && styles.sponsorNameContainerDark,
    ],
    firstName: [
      styles.firstName,
      colorScheme === 'dark' && styles.firstNameDark,
    ],
    name: [styles.name, colorScheme === 'dark' && styles.nameDark],
    date: [styles.date, colorScheme === 'dark' && styles.dateDark],
    contactTitle: [
      styles.contactTitle,
      colorScheme === 'dark' && styles.contactTitleDark,
    ],
    contactCard: [
      styles.contactCard,
      colorScheme === 'dark' && styles.contactCardDark,
    ],
    contactSubtitle: [
      styles.contactSubtitle,
      colorScheme === 'dark' && styles.contactSubtitleDark,
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
        <SponsorContainer classes={classes} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sponsorContentDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  sponsorContent: {
    width: Dimensions.get('window').width,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
    paddingBottom: 34,
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
  sponsorTitleDark: {
    color: theme.colors.text.$textDark,
  },
  sponsorTitle: {
    color: theme.colors.text.$textLight,
    marginTop: 30,
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 32,
    marginLeft: 5,
    marginRight: 15,
  },
  sponsorCardDark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  sponsorCard: {
    backgroundColor: theme.colors.component.$cardLight,
    width: '100%',
    height: 190,
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 30,
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
  sponsorLinkTitleDark: {
    color: theme.colors.text.$textDark,
  },
  sponsorLinkTitle: {
    marginTop: 15,
    marginLeft: 5,
    color: theme.colors.text.$textLight,
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
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.8,
    shadowRadius: 6,
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
  sponsorLabelDark: {
    color: theme.colors.text.$textDark,
  },
  sponsorLabel: {
    color: theme.colors.text.$textLight,
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'Montserrat',
    marginLeft: 5,
    marginTop: 20,
  },
  sponsorNameContainerDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  sponsorNameContainer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    width: '100%',
    height: 60,
    borderRadius: 10,
    marginTop: 10,
    elevation: 5,
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
  firstNameDark: {
    color: theme.colors.text.$textDark,
  },
  firstName: {
    color: theme.colors.text.$textLight,
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'Montserrat',
  },
  nameDark: {
    color: theme.colors.text.$textDark,
  },
  name: {
    marginTop: 2,
    color: theme.colors.text.$textLight,
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
  dateDark: {
    color: theme.colors.text.$textDark,
  },
  date: {
    marginTop: 3,
    color: theme.colors.text.$textLight,
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'Montserrat',
    textAlign: 'right',
  },
  contactTitleDark: {
    color: theme.colors.text.$textDark,
  },
  contactTitle: {
    marginTop: 30,
    marginLeft: 15,
    color: theme.colors.text.$textLight,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Montserrat',
  },
  contactTitleImg: {
    marginLeft: 15,
  },
  contactCardDark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  contactCard: {
    height: 431,
    width: '100%',
    backgroundColor: theme.colors.component.$cardLight,
    borderRadius: 20,
    marginTop: 10,
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
    paddingLeft: 10,
    paddingRight: 10,
  },
  contactSubtitleDark: {
    color: theme.colors.text.$textDark,
  },
  contactSubtitle: {
    color: theme.colors.text.$textLight,
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
