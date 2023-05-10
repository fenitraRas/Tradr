import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import OpenDark from '../assets/icons/openDark.svg';
import OpenLight from '../assets/icons/openLight.svg';
import SwitchIconDark from '../assets/switchIconDark.svg';
import SwitchIconLight from '../assets/switchIconLight.svg';
import {useNavigation} from '@react-navigation/native';

function Navbar({children, title}) {
  const navigation = useNavigation();
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
      <View>
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
          {children}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.buttonOpen}
        onPress={() => navigation.navigate('Tradrboard')}>
        {option === 'light' ? (
          <OpenLight width={30} height={22} position="absolute" />
        ) : (
          <OpenDark width={30} height={22} position="absolute" />
        )}
      </TouchableOpacity>
    </View>
  );
}

function Menu(props) {
  return (
    <SafeAreaView>
      <Navbar>Menu</Navbar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    width: 360,
    height: 27,
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 55 : 8,
    marginLeft: 15,
    marginRight: 15,
    position: 'absolute',
  },
  navbarText: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 20,
    color: '#1A2442',
    display: 'flex',
    alignItems: 'center',
    lineHeight: 24,
    fontStyle: 'normal',
    fontFamily: 'Montserrat',
    marginTop: 8,
    width: 59,
    marginLeft: 88,
    height: 24,
    position: 'absolute',
  },
  buttonSwitcher: {
    width: 71,
    height: 36,
    marginLeft: -5,
    margintop: 51,
  },
  buttonOpen: {
    height: 22,
    width: 30,
    border: 5,
    marginTop: 3,
  },
  navbarTextContainer: {
    flex: 1,
  },
});

export default Menu;
