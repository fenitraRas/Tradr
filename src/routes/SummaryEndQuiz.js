/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Dimensions,
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
import Menu, {NavbarMenu} from './Menu';
import React, {useRef, useState} from 'react';

import BarChart from '../assets/icons/barChart.svg';
import ChevronLeft from '../assets/icons/chevronLeft.svg';
import ChevronLeftDark from '../assets/icons/chevronLeftDark.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import {formStyles} from '../assets/css/form';
import {indexStyles} from '../assets/css';
import theme from '../assets/theme';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

function Navbar(props) {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const [option] = useState(colorScheme);
  const navigation = useNavigation();
  return (
    <View style={formStyles.navbarContainer}>
      <View style={formStyles.navbarIcon}>
        <TouchableOpacity onPress={() => navigation.navigate('StepQuiz')}>
          {option === 'light' ? (
            <ChevronLeft width={30} height={20} />
          ) : (
            <ChevronLeftDark width={30} height={20} />
          )}
        </TouchableOpacity>
      </View>
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.handleScrollToRight()}>
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

function SummaryEndQuizContainer(props) {
  const navigation = useNavigation();
  return (
    <View style={[props.classes.summaryQuizContent, indexStyles.shadowProp]}>
      <View style={[styles.titleContainer]}>
        <View style={[styles.greenTopPersonCardContentRight]}>
          <Text style={styles.topPersonCardContentRightText}>Débutant</Text>
        </View>
        <Text style={props.classes.title}>
          Résumé
          <BarChart width={18} height={18} style={{marginLeft: 6}} />
        </Text>
      </View>
      <View style={[props.classes.resultContainer]}>
        <View style={styles.stateNumberContainer}>
          <Text style={styles.stateText}>Nombre total de question</Text>
          <View style={props.classes.stateNumber}>
            <Text style={props.classes.stateNumberText}>20</Text>
          </View>
        </View>
        <Text style={props.classes.numberTitle}>Vos réponses</Text>
        <View style={props.classes.numberContainer}>
          <View style={styles.numberContent}>
            <Text style={[styles.numberText, styles.greenNumberText]}>1</Text>
            <Text style={[styles.numberText, styles.greenNumberText]}>2</Text>
            <Text style={[styles.numberText, styles.redNumberText]}>3</Text>
            <Text style={[styles.numberText, styles.greenNumberText]}>4</Text>
            <Text style={[styles.numberText, styles.redNumberText]}>5</Text>
            <Text style={[styles.numberText, styles.redNumberText]}>6</Text>
            <Text style={[styles.numberText, styles.greenNumberText]}>7</Text>
            <Text style={[styles.numberText, styles.greenNumberText]}>8</Text>
            <Text style={[styles.numberText, styles.greenNumberText]}>9</Text>
            <Text style={[styles.numberText, styles.redNumberText]}>10</Text>
            <Text style={[styles.numberText, styles.redNumberText]}>11</Text>
            <Text style={[styles.numberText, styles.greenNumberText]}>12</Text>
            <Text style={[styles.numberText, styles.greenNumberText]}>13</Text>
            <Text style={[styles.numberText, styles.redNumberText]}>14</Text>
            <Text style={[styles.numberText, styles.greenNumberText]}>15</Text>
            <Text style={[styles.numberText, styles.greenNumberText]}>16</Text>
            <Text style={[styles.numberText, styles.redNumberText]}>17</Text>
            <Text style={[styles.numberText, styles.redNumberText]}>18</Text>
            <Text style={[styles.numberText, styles.greenNumberText]}>19</Text>
            <Text style={[styles.numberText, styles.greenNumberText]}>20</Text>
          </View>
        </View>
        <View style={styles.cardStateContainer}>
          <View style={styles.cardStateContent}>
            <Text style={styles.cardStateText}>Correct</Text>
            <View style={{paddingRight: 5, width: '100%'}}>
              <View style={props.classes.cardState}>
                <Text style={styles.cardStateLeft}>12</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardStateContent}>
            <Text style={styles.cardStateText}>Incorrect</Text>
            <View style={{paddingLeft: 5, width: '100%'}}>
              <View style={props.classes.cardState}>
                <Text style={styles.cardStateRight}>8</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={props.classes.resultTitle}>Votre résultat</Text>
        <View style={props.classes.resultContent}>
          <Text style={styles.resultText}>Vous avez réussi !</Text>
        </View>
      </View>
      {/* <TouchableOpacity
        style={styles.redoButton}
        onPress={() => navigation.navigate('IntroductionQuiz')}>
        <Text style={styles.redoButtonText}>Refaire</Text>
      </TouchableOpacity> */}
      <View style={styles.redoButtonContainer}>
        <TouchableOpacity
          style={styles.redoButton}
          onPress={() => navigation.navigate('Quiz')}>
          <Text style={styles.redoButtonText}>Terminé</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// function SummaryEndQuizContainer() {
//   return (
//     <ScrollView>
//       <SummaryEndQuizContent />
//     </ScrollView>
//   );
// }

function SummaryEndQuiz() {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const classes = {
    resultContainer: [
      styles.resultContainer,
      colorScheme === 'dark' && styles.resultContainerDark,
    ],
    summaryQuizContent: [
      styles.summaryQuizContent,
      colorScheme === 'dark' && styles.summaryQuizContentDark,
    ],
    numberContainer: [
      styles.numberContainer,
      colorScheme === 'dark' && styles.numberContainerDark,
    ],
    cardState: [
      styles.cardState,
      colorScheme === 'dark' && styles.cardStateDark,
    ],
    resultContent: [
      styles.resultContent,
      colorScheme === 'dark' && styles.resultContentDark,
    ],
    title: [styles.title, colorScheme === 'dark' && styles.titleDark],
    stateNumber: [
      styles.stateNumber,
      colorScheme === 'dark' && styles.stateNumberDark,
    ],
    stateNumberText: [
      styles.stateNumberText,
      colorScheme === 'dark' && styles.stateNumberTextDark,
    ],
    numberTitle: [
      styles.numberTitle,
      colorScheme === 'dark' && styles.numberTitleDark,
    ],
    resultTitle: [
      styles.resultTitle,
      colorScheme === 'dark' && styles.resultTitleDark,
    ],
  };
  const isDarkMode = useColorScheme() === 'dark';
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
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {scrollToMenu ? (
        <NavbarMenu handleScrollToLeft={() => handleScrollToLeft()} />
      ) : (
        <Navbar
          handleScrollToRight={() => handleScrollToRight()}
          title="Titre du quiz"
        />
      )}
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        scrollEnabled={false}
        onContentSizeChange={handleContentSizeChange}
        contentOffset={{x: 0, y: 0}}>
        <Menu
          currentScreen="Quiz"
          handleScrollToLeft={() => handleScrollToLeft()}
        />
        <SummaryEndQuizContainer classes={classes} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navbarText: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Montserrat',
    color: '#1A2442',
  },
  summaryQuizContent: {
    width: Dimensions.get('window').width,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
    height:
      Platform.OS === 'android'
        ? Dimensions.get('window').height - 74
        : Dimensions.get('window').height - 109,
  },
  summaryQuizContentDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  titleContainer: {
    marginLeft: 5,
    marginTop: 15,
  },
  titleDark: {
    color: theme.colors.text.$textDark,
  },
  title: {
    color: theme.colors.text.$textLight,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    marginTop: 30,
  },
  resultContainer: {
    backgroundColor: theme.colors.component.$cardLight,
    height: 369,
    width: '100%',
    borderRadius: 20,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(9, 13, 109, 0.4)',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  resultContainerDark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  stateNumberContainer: {
    flexDirection: 'row',
  },
  stateText: {
    position: 'absolute',
    left: 5,
    top: 26,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17,
    color: '#9BA5BF',
  },
  stateNumberDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  stateNumber: {
    position: 'absolute',
    top: 10,
    right: 0,
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    elevation: 2,
    shadowColor: '#7AC84A',
    shadowOffset: {width: -3, height: 3},
    shadowOpacity: 1,
    shadowRadius: 23,
  },
  stateNumberText: {
    position: 'absolute',
    top: 10,
    right: 10,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 25,
    lineHeight: 30,
    color: theme.colors.text.$textLight,
  },
  stateNumberTextDark: {
    color: theme.colors.text.$textDark,
  },
  numberTitle: {
    marginTop: 70,
    marginLeft: 5,
    color: theme.colors.text.$textLight,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
  },
  numberTitleDark: {
    color: theme.colors.text.$textDark,
  },
  numberContainer: {
    position: 'absolute',
    left: 10,
    top: 98,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderRadius: 10,
    height: 84,
    width: '100%',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(9, 13, 109, 0.4)',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  numberContainerDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  numberContent: {
    flexDirection: 'row',
    width: 'auto',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  greenNumberText: {
    color: '#7AC84A',
  },
  redNumberText: {
    color: '#FF4141',
  },
  numberText: {
    color: '#7AC84A',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 20,
    width: 18.8,
    minWidth: 7.48,
    height: 18,
    marginLeft: 15,
    marginTop: 17,
  },
  cardStateContainer: {
    position: 'absolute',
    left: 10,
    top: 192,
    flexDirection: 'row',
    width: '100%',
  },
  cardStateContent: {
    width: '50%',
    alignItems: 'center',
  },
  cardStateText: {
    color: '#9BA5BF',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 17,
    marginBottom: 5,
  },
  cardStateDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  cardState: {
    width: '100%',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(9, 13, 109, 0.4)',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  cardStateLeft: {
    color: '#7AC84A',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 25,
    lineHeight: 30,
    textAlign: 'center',
    marginTop: 10,
  },
  cardStateRight: {
    color: '#FF4141',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 25,
    lineHeight: 30,
    textAlign: 'center',
    marginTop: 10,
  },
  resultTitle: {
    position: 'absolute',
    left: 15,
    top: 279,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
    color: theme.colors.text.$textLight,
  },
  resultTitleDark: {
    color: theme.colors.text.$textDark,
  },
  resultContentDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  resultContent: {
    position: 'absolute',
    left: 10,
    top: 307,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderRadius: 10,
    width: '100%',
    height: 52,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(9, 13, 109, 0.4)',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  resultText: {
    color: '#9BA5BF',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 22,
    marginTop: 15,
  },
  descriptionContainer: {
    backgroundColor: '#E9EDFC',
    height: 364,
    width: '100%',
    borderRadius: 20,
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  myQuizCardBottom: {
    position: 'absolute',
    top: 10,
    left: 10,
    borderRadius: 10,
    width: '100%',
    height: 51,
    backgroundColor: '#FFFFFF',
    // shadowOffset: {
    //   width: 0,
    //   height: 15,
    // },
    // shadowColor: 'rgba(9, 13, 109, 0.4)',
    // shadowOpacity: 1,
    shadowRadius: 20,
    flexDirection: 'row',
  },
  myQuizCardBottomLeft: {
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 15,
  },
  myQuizCardBottomLeftNumber: {
    color: '#9154FD',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 32,
  },
  myQuizCardBottomLeftText: {
    color: '#9BA5BF',
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 15,
    marginLeft: 3,
    marginTop: 8,
  },
  orangeTopPersonCardContentRight: {
    position: 'absolute',
    right: 15,
    top: 15,
    width: 105,
    height: 21,
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#F8B940',
    elevation: 2,
    shadowColor: '#F8B940',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
  bottomCardContentRightText: {
    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 17,
  },
  descriptionTitle: {
    position: 'absolute',
    left: 15,
    top: 76,
    color: '#9BA5BF',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
  },
  description: {
    position: 'absolute',
    left: 15,
    top: 100,
    right: 15,
    color: '#1A2442',
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 16,
  },
  redoButton: {
    position: 'absolute',
    top: 20,
    right: 10,
    backgroundColor: '#9154FD',
    borderRadius: 10,
    height: 38,
    width: 104,
    shadowColor: 'rgba(145, 84, 253, 0.6)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 8,
  },
  redoButtonText: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
  },
  greenTopPersonCardContentRight: {
    position: 'absolute',
    right: 5,
    width: 77,
    height: 21,
    backgroundColor: '#7AC84A',
    borderRadius: 4,
    alignItems: 'center',
    shadowColor: '#7AC84A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 2,
  },
  topPersonCardContentRightText: {
    marginTop: 2,
    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 17,
  },
});

export default SummaryEndQuiz;
