/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';

function Navbar({children, title}) {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navbarIcon} />
      <View style={styles.navbarTextContainer}>
        <Text style={styles.navbarText}>{children}</Text>
      </View>
      <View style={styles.navbarIcon} />
      {/* </View> */}
    </View>
  );
}

function Tradrboard() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView>
        <View>
          <Navbar>Tradrboard</Navbar>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    width: '100%',
    height: 27,
    flexDirection: 'row',
  },
  navbarIcon: {
    flex: 1,
    // backgroundColor: 'green',
    maxWidth: 24,
    minWidth: 24,
  },
  navbarTextContainer: {
    flex: 1,
  },
  navbarText: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    // fontFamily: 'Montserrat',
    color: '#1A2442',
  },
});

export default Tradrboard;
