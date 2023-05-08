import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import SwitchIconDark from '../assets/switchIconDark.svg';
import SwitchIconLight from '../assets/switchIconLight.svg';

function Navbar({children, title}) {
  const dispatch = useDispatch();
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const [option, setOption] = useState(colorScheme);
  console.log('state', option);

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
      <View style={{flex: 1, minWidth: 71}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            changeTheme(option);
          }}>
          {option === 'light' ? (
            <SwitchIconLight width={71} height={36} />
          ) : (
            <SwitchIconDark width={71} height={36} />
          )}
        </TouchableOpacity>
      </View>
      <View style={{flex: 8}}>
        <Text style={styles.navbarText}>{children}</Text>
      </View>
      <View style={{flex: 1, minWidth: 71}} />
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
    flexDirection: 'row',
    width: '100%',
    height: '20%',
  },
  navbarText: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    color: '#1A2442',
    marginTop: 10,
  },
  button: {
    marginLeft: 10,
    marginTop: 5,
  },
});

export default Menu;
