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
import {ProgressBar} from 'react-native-paper';

import ChevronLeft from '../assets/icons/chevronLeft.svg';
import PoliceCarLight from '../assets/icons/policeCarLight.svg';
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
        <TouchableOpacity
          onPress={() => navigation.navigate('IntroductionQuiz')}>
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

function StepQuizContent(props) {
  const navigation = useNavigation();
  return (
    <View style={[styles.stepQuizContent, styles.shadowProp]}>
      <View style={[styles.titleContainer]}>
        <Text style={styles.title}>
          Question 8
          <PoliceCarLight width={18} height={18} style={{marginLeft: 6}} />
        </Text>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressContent}>
          <ProgressBar
            style={styles.progress}
            progress={0.33}
            color="#9154FD"
          />
        </View>
        <View style={styles.progressDuration}>
          <Text style={styles.progressText}>3s</Text>
        </View>
      </View>
      <View style={[styles.quizListContainer]}></View>

      <View style={[styles.titleContainer]}>
        <Text style={styles.title}>
          Résumé
          <BarChart width={18} height={18} style={{marginLeft: 6}} />
        </Text>
      </View>
      <View style={[styles.resultContainer]}>
        <Text style={styles.numberTitle}>Actuellement</Text>
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
      </View>
    </View>
  );
}

function StepQuizContainer() {
  return (
    <ScrollView>
      <StepQuizContent />
    </ScrollView>
  );
}

function StepQuiz() {
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
      <StepQuizContainer />
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
  stepQuizContent: {
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
    marginLeft: 5,
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
    height: 134,
    width: '100%',
    borderRadius: 20,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  numberTitle: {
    marginTop: 15,
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
    top: 40,
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
  quizListContainer: {
    backgroundColor: '#E9EDFC',
    height: 341,
    width: '100%',
    borderRadius: 20,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
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
  progress: {
    backgroundColor: '#D2D6E1',
    height: 8,
    borderRadius: 6.5,
    marginTop: 8,
    shadowColor: 'rgba(145, 84, 253, 0.8)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 1,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(145, 84, 253, 0.6)',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 14,
      },
      android: {
        elevation: 3,
      },
    }),
  },
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
    color: '#1A2442',
    textAlign: 'right',
  },
});

export default StepQuiz;
