import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import OpenDark from '../assets/icons/openDark.svg';
import OpenLight from '../assets/icons/openLight.svg';
import Profil from '../assets/icons/profil.svg';
import SwitchIconDark from '../assets/switchIconDark.svg';
import SwitchIconLight from '../assets/switchIconLight.svg';
import Tradr from '../assets/icons/tradrboard.svg';
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
        <Text style={styles.navbarText}>Menu</Text>
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

function Menu() {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <View style={styles.profil}>
        <Profil width={74} height={74} position="absolute" />
      </View>
      <View style={styles.rectangle283} />
      <View style={styles.menuNav}>
        <Tradr />
        <Text style={styles.tradrText}>Tradrboard</Text>
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
  },
  buttonOpen: {
    height: 22,
    width: Dimensions.get('window').width - 345 - 15,
    border: 5,
    marginTop: 5,
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
});

export default Menu;
