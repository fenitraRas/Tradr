/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Dimensions,
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

import ChevronLeft from '../assets/icons/chevronLeft.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import MyTextInput from '../Components/TextInput';
import MyTextInputWithBorder from '../Components/TextInputWithBorder';
import PurpleButton from '../Components/PurpleButton';
import {formStyles} from '../assets/css/form';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

function Navbar(props) {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const [option] = useState(colorScheme);
  const navigation = useNavigation();
  return (
    <View style={formStyles.navbarContainer}>
      <View style={formStyles.navbarIcon}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
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

function EditProfileTitle({title}) {
  return (
    <View style={[styles.informationContainer, {marginTop: 15}]}>
      <View style={[styles.informationTitleContainer]}>
        <Text style={[styles.informationCardTitle]}>{title}</Text>
      </View>
    </View>
  );
}

function EditProfileForm() {
  return (
    <View style={[styles.informationCard, styles.cardInfoHeight]}>
      <View style={styles.informationCardContent}>
        <View style={[styles.fullInfoItem]}>
          <Text style={[styles.textInfo]}>Prénom</Text>
          <View style={[formStyles.inputContainer, styles.interH]}>
            <MyTextInputWithBorder
              placeholder="Prénom"
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              value="Kévin"
            />
          </View>
        </View>
        <View style={[styles.fullInfoItem]}>
          <Text style={[styles.textInfo]}>Nom</Text>
          <View style={[formStyles.inputContainer, styles.interH]}>
            <MyTextInputWithBorder
              placeholder="Nom"
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              value="Clément"
            />
          </View>
        </View>
        <View style={[styles.fullInfoItem]}>
          <Text style={[styles.textInfo]}>Email</Text>
          <View style={[formStyles.inputContainer, styles.interH]}>
            <MyTextInputWithBorder
              placeholder="Email"
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardType="email-address"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              value="pleiades@trad.com"
            />
          </View>
        </View>
        <View style={[styles.fullInfoItem]}>
          <Text style={[styles.textInfo]}>Téléphone</Text>
          <View style={[formStyles.inputContainer, styles.interH]}>
            <MyTextInputWithBorder
              placeholder="Téléphone"
              autoCompleteType="phone"
              keyboardType="phone-pad"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              value="0633445566"
            />
          </View>
        </View>
        <View style={[styles.fullInfoItem]}>
          <Text style={[styles.textInfo]}>Nouveau mot de passe</Text>
          <View style={[formStyles.inputContainer, styles.interH]}>
            <MyTextInputWithBorder
              placeholder="Nouveau mot de passe"
              autoCapitalize="none"
              secureTextEntry
              autoCompleteType="password"
              keyboardAppearance="dark"
              value="mdp"
            />
          </View>
        </View>
        <View style={[styles.fullInfoItem]}>
          <View style={[formStyles.inputContainer, {marginTop: -10}]}>
            <MyTextInputWithBorder
              placeholder="Confirmer mot de passe"
              autoCapitalize="none"
              secureTextEntry
              autoCompleteType="password"
              keyboardAppearance="dark"
            />
          </View>
        </View>
      </View>
    </View>
  );
}

function EditProfileContent(props) {
  return (
    <View style={[styles.editProfileContent, styles.shadowProp]}>
      <EditProfileTitle title="Modifier des informations" />
      <EditProfileForm />
      <View style={styles.saveButtonContainer}>
        <PurpleButton label="Enregistrer" />
      </View>
    </View>
  );
}

function EditProfileContainer() {
  return (
    <ScrollView>
      <EditProfileContent />
    </ScrollView>
  );
}

function EditProfile() {
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
        <EditProfileContainer />
      </ScrollView>
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
  editProfileContent: {
    width: Dimensions.get('window').width,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
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
  informationContainer: {
    width: '100%',
  },
  informationTitleContainer: {
    height: 24,
    marginLeft: 5,
    alignSelf: 'center',
    // maxWidth: 370,
    maxWidth: '100%',
  },
  informationCardTitle: {
    height: 24,
    width: 370,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 500,
    color: '#1A2442',
  },
  informationCard: {
    width: '100%',
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#E9EDFC',
    alignSelf: 'center',
    // maxWidth: 370,
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
    height: 488,
  },
  informationCardContent: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  fullInfoItem: {
    width: '100%',
    marginTop: 14,
  },
  interH: {
    marginTop: -6,
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
  saveButtonContainer: {
    width: '100%',
    marginTop: 30,
    alignSelf: 'center',
    maxWidth: 370,
  },
});

export default EditProfile;
