/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Menu, {NavbarMenu} from './Menu';

import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import Rocket from '../assets/icons/rocket.svg';

import {formStyles} from '../assets/css/form';

function Navbar(props) {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const [option] = useState(colorScheme);
  return (
    <View style={formStyles.navbarContainer}>
      <View style={formStyles.navbarIcon} />
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
        <TouchableOpacity>
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

function TradingPlan() {
  return (
    <View style={[styles.toolsContent, styles.shadowProp]}>
      <View style={styles.toolsTitleContainer}>
        <Text style={styles.toolsTitle}>
          Le succès les attend aussi !
          <Rocket width={26} height={26} />
        </Text>
      </View>
    </View>
  );
}

function Calculator() {
  return (
    <View style={[styles.toolsContent, styles.shadowProp]}>
      <View style={styles.toolsTitleContainer}>
        <Text style={styles.toolsTitle}>
          Le succès les attend aussi !
          <Rocket width={26} height={26} />
        </Text>
      </View>
    </View>
  );
}

function Simulator() {
  return (
    <View style={[styles.toolsContent, styles.shadowProp]}>
      <View style={styles.toolsTitleContainer}>
        <Text style={styles.toolsTitle}>
          Le succès les attend aussi !
          <Rocket width={26} height={26} />
        </Text>
      </View>
    </View>
  );
}

function ToolsContainer(selectedFooter) {
  if (selectedFooter === 'calculator') {
    return (
      <ScrollView>
        <Calculator />
      </ScrollView>
    );
  } else if (selectedFooter === 'simulator') {
    return (
      <ScrollView>
        <Simulator />
      </ScrollView>
    );
  }
  return (
    <ScrollView>
      <TradingPlan />
    </ScrollView>
  );
}

function Tools() {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedFooter, setSelectedFooter] = useState('trading_plan');
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
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
    <SafeAreaView
      style={!scrollToMenu ? {height: Dimensions.get('window').height} : {}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {scrollToMenu ? (
        <NavbarMenu handleScrollToLeft={() => handleScrollToLeft()} />
      ) : (
        <Navbar
          handleScrollToRight={() => handleScrollToRight()}
          title="Outils"
        />
      )}
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        scrollEnabled={false}
        onContentSizeChange={handleContentSizeChange}
        contentOffset={{x: 0, y: 0}}>
        <Menu
          currentScreen="Outils"
          handleScrollToLeft={() => handleScrollToLeft()}
        />
        <ToolsContainer selectedFooter={selectedFooter} />
      </ScrollView>
      {!scrollToMenu ? (
        <View style={styles.footer}>
          <TouchableOpacity
            style={
              selectedFooter === 'trading_plan'
                ? styles.selectedFooter
                : styles.unselectedFooter
            }
            onPress={() => setSelectedFooter('trading_plan')}>
            <Text
              style={
                selectedFooter === 'trading_plan'
                  ? styles.selectedFooterText
                  : styles.unselectedFooterText
              }>
              Plan Trading
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selectedFooter === 'calculator'
                ? styles.selectedFooterCenter
                : styles.unselectedFooterCenter
            }
            onPress={() => setSelectedFooter('calculator')}>
            <Text
              style={
                selectedFooter === 'calculator'
                  ? styles.selectedFooterText
                  : styles.unselectedFooterText
              }>
              Calculatrice
            </Text>
            <Text
              style={
                selectedFooter === 'calculator'
                  ? styles.selectedFooterText
                  : styles.unselectedFooterText
              }>
              Forex/Indices
            </Text>
          </TouchableOpacity>
          <Text style={styles.separator}>|</Text>
          <TouchableOpacity
            style={
              selectedFooter === 'simulator'
                ? styles.selectedFooter
                : styles.unselectedFooter
            }
            onPress={() => setSelectedFooter('simulator')}>
            <Text
              style={
                selectedFooter === 'simulator'
                  ? styles.selectedFooterText
                  : styles.unselectedFooterText
              }>
              Simulateur
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  toolsContent: {
    width: Dimensions.get('window').width,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
    paddingBottom: 14,
  },
  shadowProp: {
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 2,
  },
  navbarText: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Montserrat',
    color: '#1A2442',
  },
  toolsTitleContainer: {
    width: 'auto',
  },
  toolsTitle: {
    color: '#1A2442',
    marginTop: 30,
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 32,
    marginLeft: 5,
    marginRight: 15,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: 74,
    flexDirection: 'row',
    backgroundColor: '#E9EDFC',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(9, 13, 109, 0.3)',
        shadowOffset: {
          width: 0,
          height: -4,
        },
        shadowOpacity: 1,
        shadowRadius: 20,
      },
      android: {
        elevation: 1,
      },
    }),
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 6,
  },
  selectedFooter: {
    width: '33%',
    alignItems: 'center',
    backgroundColor: '#9154FD',
    height: 28,
    borderRadius: 4,
    shadowColor: '#9154fd',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 14,
    elevation: 5,
    paddingTop: 6,
  },
  selectedFooterCenter: {
    width: '33%',
    alignItems: 'center',
    backgroundColor: '#9154FD',
    height: 44,
    borderRadius: 4,
    shadowColor: '#9154fd',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 14,
    elevation: 5,
    paddingTop: 6,
  },
  unselectedFooterCenter: {
    width: '33%',
    alignItems: 'center',
    // borderRightWidth: 1,
    // height: 16,
    height: 44,
    marginTop: 6,
    // borderColor: '#9BA5BF',
  },
  unselectedFooter: {
    width: '33%',
    alignItems: 'center',
    height: 16,
    marginTop: 6,
  },
  selectedFooterText: {
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
    color: '#FFFFFF',
    // marginTop: 6,
  },
  unselectedFooterText: {
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
    color: '#9BA5BF',
  },
  separator: {
    marginTop: 12,
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
    color: '#9BA5BF',
  },
});

export default Tools;
