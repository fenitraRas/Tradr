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
import React, {useRef, useState} from 'react';

import ChevronLeft from '../assets/icons/chevronLeft.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import {formStyles} from '../assets/css/form';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import BarChart from '../assets/icons/barChart.svg';

function Navbar(props) {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const [option] = useState(colorScheme);
  const navigation = useNavigation();
  return (
    <View style={formStyles.navbarContainer}>
      <View style={formStyles.navbarIcon}>
        <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
          <ChevronLeft width={30} height={20} />
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

function SummaryQuizContent(props) {
  return (
    <View style={[styles.summaryQuizContent, styles.shadowProp]}>
      <View style={[styles.titleContainer]}>
        <Text style={styles.title}>
          Résumé
          <BarChart width={18} height={18} style={{marginLeft: 6}} />
        </Text>
      </View>
      <View style={[styles.resultContainer]}>
        <View style={styles.stateNumberContainer}>
          <Text style={styles.stateText}>Nombre total de question</Text>
          <View style={styles.stateNumber}>
            <Text style={styles.stateNumberText}>20</Text>
          </View>
        </View>
        <Text style={styles.numberTitle}>Vos réponses</Text>
        <View style={styles.numberContainer}>
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
              <View style={styles.cardState}>
                <Text style={styles.cardStateLeft}>12</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardStateContent}>
            <Text style={styles.cardStateText}>Incorrect</Text>
            <View style={{paddingLeft: 5, width: '100%'}}>
              <View style={styles.cardState}>
                <Text style={styles.cardStateRight}>8</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.resultTitle}>Votre résultat</Text>
        <View style={styles.resultContent}>
          <Text style={styles.resultText}>Vous avez réussi !</Text>
        </View>
      </View>
      <View style={[styles.descriptionContainer]}>
        <View style={styles.myQuizCardBottom}>
          <View style={styles.myQuizCardBottomLeft}>
            <Text style={styles.myQuizCardBottomLeftNumber}>20</Text>
            <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
          </View>
          <View style={[styles.orangeTopPersonCardContentRight]}>
            <Text style={styles.bottomCardContentRightText}>Intermédiaire</Text>
          </View>
        </View>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.description}>
          Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus.
        </Text>
        <TouchableOpacity style={styles.redoButton}>
          <Text style={styles.redoButtonText}>Refaire</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function SummaryQuizContainer() {
  return (
    <ScrollView>
      <SummaryQuizContent />
    </ScrollView>
  );
}

function SummaryQuiz() {
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
      <Navbar title="Titre du quiz" />
      <SummaryQuizContainer />
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
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
    height:
      Platform.OS === 'android'
        ? Dimensions.get('window').height - 74
        : Dimensions.get('window').height - 109,
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
  titleContainer: {
    marginLeft: 15,
    marginTop: 15,
  },
  title: {
    color: '#1A2442',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
  },
  resultContainer: {
    backgroundColor: '#E9EDFC',
    height: 369,
    width: '100%',
    borderRadius: 20,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
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
  stateNumber: {
    position: 'absolute',
    top: 10,
    right: 0,
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
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
    color: '#1A2442',
  },
  numberTitle: {
    marginTop: 70,
    marginLeft: 5,
    color: '#1A2442',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
  },
  numberContainer: {
    position: 'absolute',
    left: 10,
    top: 98,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: 84,
    width: '100%',
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
    width: 18.4,
    minWidth: 7.48,
    height: 20,
    marginLeft: 18,
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
  cardState: {
    width: '100%',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
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
    color: '#1A2442',
  },
  resultContent: {
    position: 'absolute',
    left: 10,
    top: 307,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: '100%',
    height: 52,
    alignItems: 'center',
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
    shadowOpacity: 1,
    shadowRadius: 14,
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
    bottom: 10,
    right: 10,
    backgroundColor: '#9154FD',
    borderRadius: 10,
    height: 38,
    width: 94,
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
});

export default SummaryQuiz;
