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
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import Menu, {NavbarMenu} from './Menu';
import React, {useRef, useState} from 'react';

import ChevronLeft from '../assets/icons/chevronLeft.svg';
import ChevronLeftDark from '../assets/icons/chevronLeftDark.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import Eye from '../assets/icons/eye.svg';
import EyeDark from '../assets/icons/eyeDark.svg';
import MyTextInputWithBorder from '../Components/TextInputWithBorder';
import PurpleButton from '../Components/PurpleButton';
import {formStyles} from '../assets/css/form';
import {indexStyles} from '../assets/css';
import theme from '../assets/theme';
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

function EditProfileTitle({classes, title}) {
  return (
    <View style={[styles.informationContainer, {marginTop: 15}]}>
      <View style={[styles.informationTitleContainer]}>
        <Text style={[classes.informationCardTitle]}>{title}</Text>
      </View>
    </View>
  );
}

function EditProfileForm(props) {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const [secureMdp, setSecureMdp] = useState(true);
  const [secureMdp2, setSecureMdp2] = useState(true);
  return (
    <View style={[props.classes.informationCard, styles.cardInfoHeight]}>
      <View style={styles.informationCardContent}>
        <View style={[styles.fullInfoItem]}>
          <Text style={[props.classes.textInfo]}>Prénom</Text>
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
          <Text style={[props.classes.textInfo]}>Nom</Text>
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
          <Text style={[props.classes.textInfo]}>Email</Text>
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
          <Text style={[props.classes.textInfo]}>Téléphone</Text>
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
          <Text style={[props.classes.textInfo]}>Nouveau mot de passe</Text>
          <View style={[props.classes.inputIcon, {marginTop: 6}]}>
            <TextInput
              placeholder="Nouveau mot de passe"
              secureTextEntry={secureMdp}
              autoCompleteType="password"
              autoCapitalize="none"
              keyboardAppearance="dark"
              value="mdp"
              style={props.classes.inputStyle}
              placeholderTextColor={props.classes.placeholder}
            />
            <TouchableOpacity onPress={() => setSecureMdp(!secureMdp)}>
              {colorScheme === 'dark' ? (
                <EyeDark width={22} height={14} />
              ) : (
                <Eye width={22} height={14} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.fullInfoItem]}>
          <View style={props.classes.inputIcon}>
            <TextInput
              placeholder="Confirmer mot de passe"
              secureTextEntry={secureMdp2}
              autoCompleteType="password"
              autoCapitalize="none"
              keyboardAppearance="dark"
              style={props.classes.inputStyle}
              placeholderTextColor={props.classes.placeholder}
            />
            <TouchableOpacity onPress={() => setSecureMdp2(!secureMdp2)}>
              {colorScheme === 'dark' ? (
                <EyeDark width={22} height={14} />
              ) : (
                <Eye width={22} height={14} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
function EditProfileContent(props) {
  return (
    <View style={[props.classes.editProfileContent, indexStyles.shadowProp]}>
      <EditProfileTitle
        classes={props.classes}
        title="Modification des informations"
      />
      <EditProfileForm classes={props.classes} />
      <View style={styles.saveButtonContainer}>
        <PurpleButton label="Enregistrer" />
      </View>
    </View>
  );
}

function EditProfileContainer(props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <EditProfileContent classes={props.classes} />
    </ScrollView>
  );
}

function EditProfile() {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const classes = {
    editProfileContent: [
      styles.editProfileContent,
      colorScheme === 'dark' && styles.editProfileContentDark,
    ],
    informationCardTitle: [
      styles.informationCardTitle,
      colorScheme === 'dark' && styles.informationCardTitleDark,
    ],
    informationCard: [
      styles.informationCard,
      colorScheme === 'dark' && styles.informationCardDark,
    ],
    textInfo: [styles.textInfo, colorScheme === 'dark' && styles.textInfoDark],
    inputStyle: [
      styles.inputStyle,
      colorScheme === 'dark' && styles.inputStyleDark,
    ],
    inputIcon: [
      styles.inputIcon,
      colorScheme === 'dark' && styles.inputIconDark,
    ],
    placeholder:
      colorScheme === 'dark'
        ? theme.colors.text.$placeholderDark
        : theme.colors.text.$placeholderLight,
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
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
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
        <EditProfileContainer classes={classes} />
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
  editProfileContentDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  editProfileContent: {
    width: Dimensions.get('window').width,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
    height:
      Platform.OS === 'android'
        ? Dimensions.get('window').height - 74
        : Dimensions.get('window').height - 109,
  },
  informationContainer: {
    width: '100%',
  },
  informationTitleContainer: {
    height: 24,
    marginLeft: 5,
    // alignSelf: 'center',
    maxWidth: '100%',
  },
  informationCardTitleDark: {
    color: theme.colors.text.$textDark,
  },
  informationCardTitle: {
    height: 24,
    width: 370,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 500,
    color: theme.colors.text.$textLight,
  },
  informationCardDark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  informationCard: {
    width: '100%',
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: theme.colors.component.$cardLight,
    alignSelf: 'center',
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
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
    // alignSelf: 'center',
    // maxWidth: 370,
  },
  inputIconDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  inputIcon: {
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: 49,
    // marginTop: 10,
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
    justifyContent: 'center',
    borderColor: '#9154FD',
    borderWidth: 1,
  },
  inputStyleDark: {
    color: theme.colors.text.$textDark,
  },
  inputStyle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 21,
    color: theme.colors.text.$textLight,
    // marginLeft: 15,
    width: '87%',
  },
});

export default EditProfile;
