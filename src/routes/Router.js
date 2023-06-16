import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {ImageBackground, StyleSheet, useColorScheme} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Accompaniement from './Accompaniement';
import Connection from './Connection';
import EditProfile from './EditProfile';
import ForgetPassword from './ForgetPassword';
import ForgetPasswordCode from './ForgetPasswordCode';
import Formation from './Formation';
import FormationPlayer from './FormationPlayer';
import Home from './Home';
import Inscription from './Inscription';
import IntroductionQuiz from './IntroductionQuiz';
import Menu from './Menu';
import NewPassword from './NewPassword';
import Profile from './Profile';
import Quiz from './Quiz';
import StepQuiz from './StepQuiz';
import SummaryEndQuiz from './SummaryEndQuiz';
import SummaryQuiz from './SummaryQuiz';
import Tradrboard from './Tradrboard';
import TradrboxFolder from './TradrboxFolder';
import TradrboxFile from './TradrboxFile';
import Replay from './Replay';
import LiveReplay from './LiveReplay';
import Sponsor from './Sponsor';
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
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{animation: 'none'}}>
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
          <Stack.Screen
            name="Inscription"
            component={Inscription}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgetPassword"
            component={ForgetPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgetPasswordCode"
            component={ForgetPasswordCode}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NewPassword"
            component={NewPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Formation"
            component={Formation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FormationPlayer"
            component={FormationPlayer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Accompaniement"
            component={Accompaniement}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Quiz"
            component={Quiz}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SummaryQuiz"
            component={SummaryQuiz}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="IntroductionQuiz"
            component={IntroductionQuiz}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="StepQuiz"
            component={StepQuiz}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SummaryEndQuiz"
            component={SummaryEndQuiz}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TradrboxFolder"
            component={TradrboxFolder}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TradrboxFile"
            component={TradrboxFile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Replay"
            component={Replay}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LiveReplay"
            component={LiveReplay}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Sponsor"
            component={Sponsor}
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
