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
import {BlurView} from '@react-native-community/blur';
import ChevronLeft from '../assets/icons/chevronLeft.svg';
import ChevronLeftDark from '../assets/icons/chevronLeftDark.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import PoliceCarLight from '../assets/icons/policeCarLight.svg';
import {ProgressBar} from 'react-native-paper';
import {formStyles} from '../assets/css/form';
import {indexStyles} from '../assets/css';
import theme from '../assets/theme';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

function Navbar(props) {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const [option] = useState(colorScheme);
  return (
    <View style={formStyles.navbarContainer}>
      <View style={formStyles.navbarIcon}>
        <TouchableOpacity onPress={() => props.setShowPopup(true)}>
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

function StepQuizContent(props) {
  const navigation = useNavigation();
  return (
    <View style={[props.classes.stepQuizContent, indexStyles.shadowProp]}>
      <View style={[styles.topTitleContainer]}>
        <Text style={props.classes.topTitle}>
          Question 8
          <PoliceCarLight width={18} height={18} style={{marginLeft: 6}} />
        </Text>
        <View style={[styles.greenTopPersonCardContentRight]}>
          <Text style={styles.topPersonCardContentRightText}>Débutant</Text>
        </View>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressContent}>
          <View style={styles.progressbar} />
          <View style={styles.progress} />
          {/* <ProgressBar
            style={props.classes.progress}
            progress={0.33}
            color="#9154FD"
          /> */}
        </View>
        <View style={styles.progressDuration}>
          <Text style={props.classes.progressText}>3s</Text>
        </View>
      </View>
      <View style={[props.classes.quizListContainer]}>
        <Text style={props.classes.quizListTitle}>
          La Pratique du Trading consiste à Acheter ou Vendre :
        </Text>
        <View style={props.classes.materialGoodCard}>
          <Text style={props.classes.materialGoodText}>
            Des biens matériels
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('SummaryEndQuiz', {id: props.quizId})
          }
          style={styles.selectedMaterialGoodCard}>
          <Text style={styles.selectedMaterialGoodText}>
            Des produits financiers
          </Text>
        </TouchableOpacity>
        <View style={props.classes.materialGoodCard}>
          <Text style={props.classes.materialGoodText}>Des services</Text>
        </View>
        <View style={props.classes.materialGoodCard}>
          <Text style={props.classes.materialGoodText}>
            Uniquement des biens immobiliers
          </Text>
        </View>
      </View>

      <View style={[styles.titleContainer]}>
        <Text style={props.classes.title}>
          Résumé
          <BarChart width={18} height={18} style={{marginLeft: 6}} />
        </Text>
      </View>
      <View style={[props.classes.resultContainer]}>
        <Text style={props.classes.numberTitle}>Actuellement</Text>
        <View style={props.classes.numberContainer}>
          <View style={styles.numberContent}>
            <Text style={[styles.numberText, styles.greenNumberText]}>1</Text>
            <Text style={[styles.numberText, styles.greenNumberText]}>2</Text>
            <Text style={[styles.numberText, styles.redNumberText]}>3</Text>
            <Text style={[styles.numberText, styles.greenNumberText]}>4</Text>
            <Text style={[styles.numberText, styles.redNumberText]}>5</Text>
            <Text style={[styles.numberText, styles.redNumberText]}>6</Text>
            <Text style={[styles.numberText, styles.greenNumberText]}>7</Text>
            <View style={styles.selectedNumberTextContainer}>
              <Text style={[styles.selectedNumberText]}>8</Text>
            </View>
            <Text style={[styles.numberText, styles.grayNumberText]}>9</Text>
            <Text style={[styles.numberText, styles.grayNumberText]}>10</Text>
            <Text style={[styles.numberText, styles.grayNumberText]}>11</Text>
            <Text style={[styles.numberText, styles.grayNumberText]}>12</Text>
            <Text style={[styles.numberText, styles.grayNumberText]}>13</Text>
            <Text style={[styles.numberText, styles.grayNumberText]}>14</Text>
            <Text style={[styles.numberText, styles.grayNumberText]}>15</Text>
            <Text style={[styles.numberText, styles.grayNumberText]}>16</Text>
            <Text style={[styles.numberText, styles.grayNumberText]}>17</Text>
            <Text style={[styles.numberText, styles.grayNumberText]}>18</Text>
            <Text style={[styles.numberText, styles.grayNumberText]}>19</Text>
            <Text style={[styles.numberText, styles.grayNumberText]}>20</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function StepQuizContainer(props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StepQuizContent classes={props.classes} quizId={props.quizId} />
    </ScrollView>
  );
}

function StepQuiz({route}) {
  const {id} = route.params;
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const classes = {
    stepQuizContent: [
      styles.stepQuizContent,
      colorScheme === 'dark' && styles.stepQuizContentDark,
    ],
    quizListContainer: [
      styles.quizListContainer,
      colorScheme === 'dark' && styles.quizListContainerDark,
    ],
    materialGoodCard: [
      styles.materialGoodCard,
      colorScheme === 'dark' && styles.materialGoodCardDark,
    ],
    resultContainer: [
      styles.resultContainer,
      colorScheme === 'dark' && styles.resultContainerDark,
    ],
    numberContainer: [
      styles.numberContainer,
      colorScheme === 'dark' && styles.numberContainerDark,
    ],
    topTitle: [styles.topTitle, colorScheme === 'dark' && styles.topTitleDark],
    progress: [styles.progress, colorScheme === 'dark' && styles.progressDark],
    progressText: [
      styles.progressText,
      colorScheme === 'dark' && styles.progressTextDark,
    ],
    quizListTitle: [
      styles.quizListTitle,
      colorScheme === 'dark' && styles.quizListTitleDark,
    ],
    materialGoodText: [
      styles.materialGoodText,
      colorScheme === 'dark' && styles.materialGoodTextDark,
    ],
    title: [styles.title, colorScheme === 'dark' && styles.titleDark],
    numberTitle: [
      styles.numberTitle,
      colorScheme === 'dark' && styles.numberTitleDark,
    ],
    popupContainer: [
      styles.popupContainer,
      colorScheme === 'dark' && styles.popupContainerDark,
    ],
    popupTitle: [
      styles.popupTitle,
      colorScheme === 'dark' && styles.popupTitleDark,
    ],
  };
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const scrollViewRef = useRef(null);
  const [scrollToMenu, setScrollToMenu] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigation = useNavigation();

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
          setShowPopup={v => setShowPopup(v)}
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
          currentScreen="Tradrboard"
          handleScrollToLeft={() => handleScrollToLeft()}
        />
        <StepQuizContainer classes={classes} quizId={id} />
      </ScrollView>
      {showPopup ? (
        <BlurView
          style={styles.blurViewStyle}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white">
          <View style={classes.popupContainer}>
            <View style={styles.popupTitleContainer}>
              <Text style={classes.popupTitle}>
                Veux-tu vraiment quitter le quiz ?
              </Text>
              <Text style={styles.popupSubtitle}>
                Le résultat en cours ne sera pas enregistré et le quiz devra
                être refait dans son intégralité
              </Text>
            </View>

            <View style={styles.popupButtonContainer}>
              <TouchableOpacity
                style={styles.buttonPopupReturn}
                onPress={() => setShowPopup(false)}>
                <Text style={styles.textButtonReturn}>Retour</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonPopupExit}
                onPress={() => navigation.navigate('Quiz')}>
                <Text style={styles.textButtonExit}>Quitter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BlurView>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  popupTitleContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    gap: 3,
    width: 300,
    height: 75,
    flex: 0,
    order: 0,
    flexGrow: 0,
    top: 25,
  },
  popupSubtitle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'center',
    color: '#9BA5BF',
  },
  popupTitle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    color: theme.colors.text.$textLight,
  },
  popupTitleDark: {
    color: theme.colors.text.$textDark,
  },
  textButtonExit: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  textButtonReturn: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    color: '#9154FD',
  },
  buttonPopupExit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 6,
    width: 95,
    height: 38,
    backgroundColor: '#9154FD',
    shadowColor: '#9154FD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    borderRadius: 10,
    flex: 0,
    order: 1,
    flexGrow: 0,
  },
  buttonPopupReturn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 6,
    width: 91,
    height: 38,
    borderRadius: 10,
    flex: 0,
    order: 0,
    flexGrow: 0,
  },
  popupButtonContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    paddingHorizontal: 0,
    gap: 20,
    width: '100%',
    height: 38,
    flex: 0,
    order: 1,
    flexGrow: 0,
    top: 115,
  },
  popupContainerDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  popupContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    paddingBottom: 15,
    gap: 15,
    position: 'absolute',
    width: Dimensions.get('window').width - 60,
    height: 168,
    left: 30,
    top: 338,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    shadowColor: '#090D6D',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: -35,
    borderRadius: 30,
  },
  blurViewStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  navbarText: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Montserrat',
    color: '#1A2442',
  },
  stepQuizContent: {
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
  stepQuizContentDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  topTitleContainer: {
    marginLeft: 5,
    marginTop: 15,
    flexDirection: 'row',
  },
  titleContainer: {
    marginLeft: 5,
    marginTop: 15,
  },
  topTitle: {
    marginTop: 10,
    color: theme.colors.text.$textLight,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
  },
  topTitleDark: {
    color: theme.colors.text.$textDark,
  },
  title: {
    color: theme.colors.text.$textLight,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
  },
  titleDark: {
    color: theme.colors.text.$textDark,
  },
  resultContainer: {
    backgroundColor: theme.colors.component.$cardLight,
    height: 134,
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
  numberTitle: {
    marginTop: 15,
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
    top: 40,
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
  grayNumberText: {
    color: '#D2D6E1',
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
    textAlign: 'center',
  },
  selectedNumberTextContainer: {
    backgroundColor: '#9154FD',
    borderRadius: 5,
    marginTop: 12,
    marginLeft: 10,
    marginRight: 0,
    height: 27,
    width: 27,
  },
  selectedNumberText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 20,
    minWidth: 7.48,
    height: 20,
    marginLeft: 9,
    marginRight: 9,
    marginTop: 4,
    textAlign: 'center',
  },
  quizListContainer: {
    backgroundColor: theme.colors.component.$cardLight,
    height: 341,
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
  quizListContainerDark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  quizListTitle: {
    color: theme.colors.text.$textLight,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
    marginTop: 20,
    marginLeft: 5,
    marginBottom: 18,
  },
  quizListTitleDark: {
    color: theme.colors.text.$textDark,
  },
  materialGoodCard: {
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderRadius: 10,
    height: 53,
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
    marginBottom: 15,
  },
  materialGoodCardDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  materialGoodText: {
    color: theme.colors.text.$textLight,
    marginLeft: 12,
    marginTop: 18,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 17,
  },
  materialGoodTextDark: {
    color: theme.colors.text.$textDark,
  },
  selectedMaterialGoodCard: {
    backgroundColor: '#9154FD',
    borderRadius: 10,
    height: 53,
    width: '100%',
    borderWidth: 2,
    borderColor: '#9154FD',
    shadowColor: 'rgba(145, 84, 253, 0.8)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 30,
    marginBottom: 15,
  },
  selectedMaterialGoodText: {
    color: '#FFFFFF',
    marginLeft: 12,
    marginTop: 15,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 17,
  },
  progressContainer: {
    width: '100%',
    height: 18,
    flexDirection: 'row',
    marginTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 5,
  },
  progressContent: {
    flex: 2,
  },
  progressDark: {
    backgroundColor: theme.colors.text.$placeholderDark,
  },
  // progress: {
  //   backgroundColor: theme.colors.text.$placeholderLight,
  //   height: 8,
  //   borderRadius: 6.5,
  //   marginTop: 8,
  //   shadowColor: 'rgba(145, 84, 253, 0.8)',
  //   shadowOffset: {
  //     width: 0,
  //     height: 0,
  //   },
  //   shadowOpacity: 1,
  //   shadowRadius: 4,
  //   elevation: 1,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: 'rgba(145, 84, 253, 0.8)',
  //       shadowOffset: {
  //         width: 0,
  //         height: 0,
  //       },
  //       shadowOpacity: 0.6,
  //       shadowRadius: 14,
  //     },
  //     android: {
  //       elevation: 4,
  //     },
  //   }),
  // },
  progressDuration: {
    flex: 1,
    maxWidth: 36,
    minWidth: 36,
  },
  progressText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 22,
    color: theme.colors.text.$textLight,
    textAlign: 'right',
  },
  progressTextDark: {
    color: theme.colors.text.$textDark,
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
  progressbar: {
    position: 'absolute',
    width: '100%',
    height: 8,
    marginTop: 8,
    borderRadius: 6.5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    shadowColor: 'rgba(9, 13, 109, 0.50)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 5,
  },
  progress: {
    position: 'absolute',
    width: '66.66%',
    height: 8,
    marginTop: 8,
    borderRadius: 6.5,
    backgroundColor: '#9154FD',
    shadowColor: '#9154FD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default StepQuiz;
