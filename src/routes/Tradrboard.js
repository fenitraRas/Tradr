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
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import React from 'react';
import WavingHand from '../assets/wavingHand.svg';
import {useNavigation} from '@react-navigation/native';

function Navbar({children, title}) {
  const navigation = useNavigation();
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navbarIcon} />
      <View style={styles.navbarTextContainer}>
        <Text style={styles.navbarText}>{children}</Text>
      </View>
      <View style={styles.navbarIcon}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Menu')}>
          <DotThreeVertical width={30} height={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function TradrboardContent({children, title}) {
  return (
    <View style={[styles.tradrboardContent, styles.shadowProp]}>
      <TouchableOpacity style={styles.connectButton}>
        <Text style={styles.connectButtonText}>{children}</Text>
      </TouchableOpacity>
      <View style={styles.holaContainer}>
        <Hola>Holà !</Hola>
        <WavingHand width={26} height={26} style={styles.holaImage} />
      </View>
    </View>
  );
}

function Hola({children, title}) {
  return (
    <View style={styles.holaContent}>
      <Text style={styles.holaText}>{children}</Text>
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
          <TradrboardContent>Se connecter</TradrboardContent>
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
    marginTop: 12,
    marginBottom: 10,
  },
  navbarIcon: {
    flex: 1,
    // backgroundColor: 'green',
    paddingTop: 2,
    maxWidth: 32,
    minWidth: 32,
  },
  navbarTextContainer: {
    flex: 2,
  },
  navbarText: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 20,
    // lineHeight: 24,
    // fontFamily: 'Montserrat',
    color: '#1A2442',
  },
  tradrboardContent: {
    height: 742,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  shadowProp: {
    shadowOffset: {width: -2, height: 4},
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  connectButton: {
    width: 100,
    height: 21,
    borderRadius: 4,
    paddingTop: 2,
    // paddingRight: 4,
    // paddingBottom: 2,
    // paddingLeft: 4,
    backgroundColor: '#9154FD',
    marginTop: 15,
    marginLeft: 15,
  },
  connectButtonText: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 17,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  holaContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  holaContent: {
    width: 96,
    height: 41,
    marginLeft: 15,
    marginTop: 15,
  },
  holaText: {
    width: 96,
    height: 41,
    fontWeight: 600,
    fontSize: 34,
    lineHeight: 42,
  },
  holaImage: {
    marginTop: 22,
  },
});

export default Tradrboard;
