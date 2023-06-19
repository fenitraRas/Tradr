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
  TextInput as RNTextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Menu, {NavbarMenu} from './Menu';
import MyTextInput from '../Components/TextInput';

import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import Rocket from '../assets/icons/rocket.svg';
import ComponentRemove from '../assets/icons/componentRemove.svg';
import ComponentAdd from '../assets/icons/componentAdd.svg';

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
        <Text style={styles.toolsTitle2}>
          À faire avant chaque session
        </Text>
      </View>
      <View style={styles.tendencyCard}>
        <Text style={styles.tendencyCardTitle}>
          Déterminer une tendance
        </Text>
        <View style={styles.tendencyContainer}>
          <View
            style={[styles.inputContainer]}>
            <RNTextInput
              style={styles.inputStyle}
              placeholder="Déterminer la tendance de fond"
              placeholderTextColor="#9BA5BF"
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          <TouchableOpacity>
            <ComponentAdd width={48} height={48} style={styles.addItem} />
          </TouchableOpacity>
        </View>
        <Text style={styles.tendencyCardTitle}>Vos tendances</Text>
        <View style={styles.tendencyContainer}>
          <View style={styles.tendencyItem}>
            <Text style={styles.tendencyItemText}>Déterminer la tendance de fond</Text>
          </View>
          <TouchableOpacity>
            <ComponentRemove width={35} height={35} style={styles.removeItem} />
          </TouchableOpacity>
        </View>
        <View style={styles.tendencyContainer}>
          <View style={styles.tendencyItem}>
            <Text style={styles.tendencyItemText}>Déterminer la tendance de fond</Text>
          </View>
          <TouchableOpacity>
            <ComponentRemove width={35} height={35} style={styles.removeItem} />
          </TouchableOpacity>
        </View>
      </View>
        <View style={styles.stepTitleContainer}>
          <View style={styles.stepTitle}>
            <Text style={styles.stepTitleText}>Étape 1</Text>
          </View>
        </View>
        <Text style={styles.toolsTitle2}>
          Votre objectif de gestion de risque
        </Text>
        <View style={styles.objectiveCard}>
          <View style={styles.objectiveItemContainer}>
            <View style={styles.objectiveItemLeft}>
              <Text style={styles.objectiveItemLeftTopText}>
                Objectif de gains journalier
              </Text>
              <Text style={styles.objectiveItemLeftBottomText}>(1% de mon capital, 20 pips ...)</Text>
            </View>
            <View style={styles.percentageItemContainer}>
              <Text style={styles.percentageItemText}>1%</Text>
            </View>
          </View>
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
    marginTop: 5,
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
  toolsTitle2: {
    color: '#1A2442',
    marginTop: 15,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    marginLeft: 5,
    marginRight: 5,
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
  tendencyCard: {
    width: '100%',
    height: 215,
    backgroundColor: '#E9EDFC',
    borderRadius: 20,
    // elevation: 8,
    // shadowColor: "rgba(9, 13, 109, 0.4)",
    // shadowOffset: {
    //   width: 0,
    //   height: 30,
    // },
    // shadowRadius: 40,
    // shadowOpacity: 1,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  tendencyCardTitle: {
    marginLeft: 5,
    marginTop: 15,
    color: '#1A2442',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
    fontFamily: 'Montserrat',

  },
  tendencyContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 46,
  },
  inputContainer: {
    width: Dimensions.get('window').width - 76,
    height: 36,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#9154FD',
    borderStyle: 'solid',
    elevation: 8,
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  inputStyle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 16,
    color: '#9BA5BF',
    marginLeft: 10,
  },
  addItem: {
    marginTop: 5,
  },
  tendencyItem: {
    width: Dimensions.get('window').width - 76,
    height: 36,
    marginTop: 10,
    backgroundColor: '#9154FD',
    borderRadius: 10,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 8,
  },
  removeItem: {
    marginTop: 17,
    marginLeft: 8,
  },
  tendencyItemText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
    marginLeft: 10,
  },
  stepTitleContainer: {
    marginTop: 44,
    width: '100%',
    height: 29,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepTitle: {
    width: 78,
    height: 29,
    backgroundColor: '#9154FD',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepTitleText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 21, 
  },
  objectiveCard: {
    height: 370,
    width: '100%',
    backgroundColor: '#E9EDFC',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    // elevation: 8,
    // shadowColor: "rgba(9, 13, 109, 0.4)",
    // shadowOffset: {
    //   width: 0,
    //   height: 30,
    // },
    // shadowRadius: 40,
    // shadowOpacity: 1,
  },
  objectiveItemContainer: {
    flexDirection: 'row',
  },
  objectiveItemLeft: {
    width: Dimensions.get('window').width - 160,
    marginTop: 15,
    height: 36,
    marginLeft: 15,
    justifyContent: 'center',

  },
  objectiveItemLeftTopText: {
    color: '#1A2442',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16, 
  },
  objectiveItemLeftBottomText: {
    color: '#9154FD',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12,
  },
  percentageItemContainer: {
   width: 100,
   backgroundColor: '#FFFFFF',
   marginLeft: 15,
   marginTop: 15,
   height: 36,
   borderRadius: 10,
   shadowOffset: {
    width: 0,
    height: 15,
  },
  shadowColor: 'rgba(9, 13, 109, 0.4)',
  shadowOpacity: 1,
  shadowRadius: 20,
  justifyContent: 'center',
  paddingRight: 10,
  paddingLeft: 10,
  },
  percentageItemText: {
    color: '#1A2442',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
    textAlign: 'right',

  }
});

export default Tools;
