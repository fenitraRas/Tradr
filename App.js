import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {ImageBackground, StyleSheet} from 'react-native';

import Home from './src/routes/Home';
import Menu from './src/routes/Menu';
import React from 'react';
import Tradrboard from './src/routes/Tradrboard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

function App() {
  return (
    <ImageBackground
      source={require('./src/assets/backgroundLight.png')}
      resizeMode="cover"
      style={styles.image}>
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

export default App;
