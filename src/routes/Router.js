import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {ImageBackground, StyleSheet, useColorScheme} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Home from './Home';
import Menu from './Menu';
import Tradrboard from './Tradrboard';
import Connection from './Connection';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

function Router() {
  const scheme = useColorScheme();
  const dispatch = useDispatch();
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const [img, setImg] = useState(getImageBackground(scheme));

  function getImageBackground(s) {
    if (s === 'dark') {
      return require('../assets/backgroundDark.png');
    }
    return require('../assets/backgroundLight.png');
  }
  useEffect(() => {
    if (!colorScheme) {
      dispatch({type: 'SET_THEME', theme: scheme});
    } else {
      setImg(getImageBackground(colorScheme));
    }
  }, [scheme, dispatch, colorScheme, setImg]);

  return (
    <ImageBackground source={img} resizeMode="cover" style={styles.image}>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Tradrboard"
            component={Tradrboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Connection"
            component={Connection}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default Router;
