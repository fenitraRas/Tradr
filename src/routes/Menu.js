import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Accompagnement from '../assets/icons/accompagnement.svg';
import Live from '../assets/icons/live.svg';
import OpenDark from '../assets/icons/openDark.svg';
import OpenLight from '../assets/icons/openLight.svg';
import Outils from '../assets/icons/outils.svg';
import Params from '../assets/icons/params.svg';
import Parrainage from '../assets/icons/parrainage.svg';
import Profil from '../assets/icons/profil.svg';
import Quiz from '../assets/icons/quiz.svg';
import Replay from '../assets/icons/replay.svg';
import SwitchIconDark from '../assets/switchIconDark.svg';
import SwitchIconLight from '../assets/switchIconLight.svg';
import Tradr from '../assets/icons/tradrboard.svg';
import Tradrbox from '../assets/icons/tradrbox.svg';
import Vector from '../assets/icons/vector.svg';
import {useNavigation} from '@react-navigation/native';

export function NavbarMenu(props) {
  const dispatch = useDispatch();
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const [option, setOption] = useState(colorScheme);

  function changeTheme(opt) {
    switch (opt) {
      case 'light':
        dispatch({type: 'SET_THEME', theme: 'dark'});
        setOption('dark');
        break;
      case 'dark':
        dispatch({type: 'SET_THEME', theme: 'light'});
        setOption('light');
        break;
      default:
        break;
    }
  }

  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navbarIcon}>
        <TouchableOpacity
          style={styles.buttonSwitcher}
          onPress={() => {
            changeTheme(option);
          }}>
          {option === 'light' ? (
            <SwitchIconLight width={71} height={36} position="absolute" />
          ) : (
            <SwitchIconDark width={71} height={36} position="absolute" />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.navbarTextContainer}>
        <Text
          style={[
            styles.navbarText,
            {color: option === 'light' ? '#1A2442' : '#FFFFFF'},
          ]}>
          Menu
        </Text>
      </View>
      <View style={styles.navbarIcon}>
        <TouchableOpacity
          style={styles.buttonOpen}
          onPress={() => props.handleScrollToLeft()}>
          {option === 'light' ? (
            <OpenLight width={30} height={22} position="absolute" />
          ) : (
            <OpenDark width={30} height={22} position="absolute" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Menu(props) {
  const [isConnected, setIsConnected] = useState(false);
  const isAuthenticated = useSelector(
    state => state.userReducer.isAuthenticated,
  );

  useEffect(() => {
    setIsConnected(isAuthenticated);
  }, [isAuthenticated]);

  if (isConnected) {
    return (
      <MenuConnected
        setIsConnected={v => setIsConnected(v)}
        currentScreen={props.currentScreen}
        handleScrollToLeft={() => props.handleScrollToLeft()}
      />
    );
  }
  return <MenuDisconnected title={props.title} />;
}

function MenuDisconnected(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <View style={styles.profil}>
        <Profil position="absolute" />
      </View>
      <View style={styles.rectangle283} />
      <View style={styles.menuNav}>
        <Tradr />
        <Text style={styles.tradrText}>{props.title}</Text>
        <View style={styles.actived} />
      </View>
      <Text style={styles.connectText}>
        Connecte toi pour avoir accès à Tradr dans son intégralité !
      </Text>
      <TouchableOpacity
        style={styles.connectButton}
        onPress={() => {
          navigation.navigate('Connection');
        }}>
        <Text style={styles.connectButtonText}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
}

function MenuConnected(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.menuContainer}>
      <View style={styles.profil}>
        <Image
          style={{position: 'absolute'}}
          source={require('../assets/profil.png')}
        />
      </View>
      <Text style={styles.name}>Kévin Clément</Text>
      <TouchableOpacity
        style={styles.buttonProfil}
        onPress={() => {
          props.currentScreen === 'Profile'
            ? props.handleScrollToLeft()
            : navigation.replace('Profile');
        }}>
        <Text style={styles.profilText}>Mon profil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuNav}
        onPress={() => {
          props.currentScreen === 'Tradrboard'
            ? props.handleScrollToLeft()
            : navigation.replace('Tradrboard');
        }}>
        <Tradr />
        <Text style={styles.tradrText}>Tradrboard</Text>
        <View style={styles.actived} />
      </TouchableOpacity>

      <View style={styles.services}>
        <Text style={styles.title}>Services</Text>
        <TouchableOpacity
          style={styles.iconText}
          onPress={() => {
            navigation.navigate('Formation');
          }}>
          <Vector width={18} height={18} />
          <Text style={styles.subTitle}>Formation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconText}
          onPress={() => {
            props.currentScreen === 'Accompaniement'
              ? props.handleScrollToLeft()
              : navigation.replace('Accompaniement');
          }}>
          <Accompagnement width={18} height={18} />
          <Text style={styles.subTitle}>Accompagnement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconText}
          onPress={() => {
            props.currentScreen === 'Quiz'
              ? props.handleScrollToLeft()
              : navigation.replace('Quiz');
          }}>
          <Quiz width={18} height={18} />
          <Text style={styles.subTitle}>Quiz</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.premium}>
        <Text style={styles.title}>Premuim</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TradrboxFolder');
          }}
          style={styles.iconText}>
          <Tradrbox width={18} height={18} />
          <Text style={styles.subTitle}>Tradrbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconText} onPress={() => {}}>
          <Live width={18} height={18} />
          <Text style={styles.subTitle}>Live</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Replay');
          }}
          style={styles.iconText}>
          <Replay width={18} height={18} />
          <Text style={styles.subTitle}>Replay</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.plus}>
        <Text style={styles.title}>Plus</Text>
        <View style={styles.iconText} onPress={() => {}}>
          <Outils width={18} height={18} />
          <Text style={styles.subTitle}>Outils</Text>
        </View>
        <TouchableOpacity
          style={styles.iconText}
          onPress={() => {
            navigation.navigate('Sponsor');
          }}>
          <Parrainage width={18} height={18} />
          <Text style={styles.subTitle}>Parrainer</Text>
        </TouchableOpacity>
        <View style={styles.iconText} onPress={() => {}}>
          <Params width={18} height={18} />
          <Text style={styles.subTitle}>Paramètres</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.disconnect}
        onPress={() => {
          props.setIsConnected(false);
          dispatch({type: 'LOGOUT'});
          navigation.replace('Tradrboard');
        }}>
        <Text style={styles.disconnectText}>Se déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    width: Dimensions.get('window').width,
    height: 27,
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 10,
  },

  navbarIcon: {
    flex: 1,
    paddingTop: -5,
    maxWidth: 70,
    minWidth: 70,
  },
  navbarTextContainer: {
    flex: 2,
  },
  navbarText: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Montserrat',
    color: '#1A2442',
  },
  buttonSwitcher: {
    width: Dimensions.get('window').width - 309 - 10,
    height: 36,
    marginLeft: 10,
    marginTop: -5,
  },
  buttonOpen: {
    height: 22,
    width: Dimensions.get('window').width - 345 - 15,
    border: 5,
    marginTop: 3,
    marginLeft: 28,
  },
  menuContainer: {
    marginLeft: 50,
    marginRight: 7,
    width: Dimensions.get('window').width - 52 - 13,
    height:
      Platform.OS === 'android'
        ? Dimensions.get('window').height - 15 - 26 - 8 - 27
        : Dimensions.get('window').height - 15 - 61 - 8 - 27,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#090d6d',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    shadowRadius: 20,
    borderRadius: 30,
  },
  profil: {
    position: 'absolute',
    marginLeft: 15,
    marginTop: 15,
  },
  rectangle283: {
    position: 'absolute',
    width: Dimensions.get('window').width - 109 - 137,
    height: 14,
    marginLeft: 109,
    marginTop: 45,
    backgroundColor: '#E9EDFC',
    borderRadius: 20,
  },
  menuNav: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    width: Dimensions.get('window').width - 77 - 43,
    height: 21,
    left: 30,
    top: 127,
  },
  tradrText: {
    width: Dimensions.get('window').width - 215 - 78,
    height: 21,
    left: 35,
    fontWeight: 600,
    fontSize: 17,
    lineHeight: 21,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    color: '#1A2442',
  },
  actived: {
    position: 'absolute',
    width: 7,
    height: 7,
    right: 0,
    top: '50%',
    marginTop: -3.5,
    backgroundColor: '#9154FD',
    shadowColor: '#9154FD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 15,
  },
  connectText: {
    position: 'absolute',
    width: Dimensions.get('window').width - 70 - 25,
    height: 42,
    left: 12,
    top: 305,
    fontWeight: 400,
    fontSize: 17,
    lineHeight: 21,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    color: '#9BA5BF',
    textAlign: 'center',
  },
  connectButton: {
    position: 'absolute',
    width: Dimensions.get('window').width - 145 - 103,
    height: 38,
    left: 90,
    top: 367,
    backgroundColor: '#9154FD',
    borderRadius: 10,
    shadowColor: 'rgba(145, 84, 253, 0.8)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 7,
    justifyContent: 'center',
  },
  connectButtonText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  name: {
    position: 'absolute',
    width: Dimensions.get('window').width - 140 - 113,
    height: 22,
    left: 103,
    top: 25,
    color: '#1A2442',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
  },
  buttonProfil: {
    position: 'absolute',
    width: Dimensions.get('window').width - 114 - 195,
    height: 17,
    left: 118,
    top: 57,
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
  services: {
    width: Dimensions.get('window').width - 153.02 - 40,
    height: 126,
    top: 178,
    left: 30,
    position: 'absolute',
  },
  title: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 18,
    color: '#1A2442',
  },
  iconText: {
    flexDirection: 'row',
    padding: 0,
    gap: 17,
    marginTop: 15,
    alignItems: 'center',
  },
  subTitle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 17,
    lineHeight: 21,
    color: '#9BA5BF',
  },
  premium: {
    width: Dimensions.get('window').width - 153.02 - 40,
    height: 126,
    top: 334,
    left: 30,
    position: 'absolute',
  },
  plus: {
    width: Dimensions.get('window').width - 153.02 - 40,
    height: 126,
    top: 490,
    left: 30,
    position: 'absolute',
  },
  disconnect: {
    position: 'absolute',
    width: Dimensions.get('window').width - 150 - 104,
    bottom: 30,
    left: 94,
  },
  disconnectText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 21,
    color: '#1A2442',
    textAlign: 'center',
  },
});

export default Menu;
