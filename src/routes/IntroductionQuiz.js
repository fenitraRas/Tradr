/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Dimensions,
  Image,
  NativeModules,
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
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import Fire from '../assets/icons/fire.svg';
import WhiteChevronLeft from '../assets/icons/whiteChevronLeft.svg';
import {formStyles} from '../assets/css/form';
import theme from '../assets/theme';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const {StatusBarManager} = NativeModules;

function Navbar(props) {
  const navigation = useNavigation();
  return (
    <View style={formStyles.navbarContainer}>
      <View style={formStyles.navbarIcon}>
        <TouchableOpacity onPress={() => navigation.navigate('SummaryQuiz')}>
          <WhiteChevronLeft width={30} height={20} />
        </TouchableOpacity>
      </View>
      <View style={formStyles.navbarTextContainer}>
        <Text style={[styles.navbarText]}>{props.title}</Text>
      </View>
      <View style={formStyles.navbarIcon}>
        <TouchableOpacity onPress={() => navigation.navigate('Tradrboard')}>
          <DotThreeVerticalLight width={30} height={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function IntroductionQuizContent(props) {
  const navigation = useNavigation();
  return (
    <View style={[styles.quizContent, styles.shadowProp]}>
      <View style={styles.quizTitleContainer}>
        <Text style={props.classes.quizTitle}>
          Est-ce que tu es prêt ?
          <Fire width={26} height={26} />
        </Text>
      </View>
      <View style={[props.classes.descriptionContainer]}>
        <View style={props.classes.myQuizCardBottom}>
          <View style={styles.myQuizCardBottomLeft}>
            <Text style={styles.myQuizCardBottomLeftNumber}>20</Text>
            <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
          </View>
          <View style={[styles.orangeTopPersonCardContentRight]}>
            <Text style={styles.bottomCardContentRightText}>Intermédiaire</Text>
          </View>
        </View>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={props.classes.description}>
          Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus.
        </Text>
        <TouchableOpacity
          style={styles.beginButton}
          onPress={() => navigation.navigate('StepQuiz')}>
          <Text style={styles.beginButtonText}>Commencer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function IntroductionQuizContainer(props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <IntroductionQuizContent classes={props.classes} />
    </ScrollView>
  );
}

function IntroductionQuiz() {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const classes = {
    content: [styles.content, colorScheme === 'dark' && styles.contentDark],
    container: [
      styles.container,
      colorScheme === 'dark' && styles.containerDark,
    ],
    quizTitle: [
      styles.quizTitle,
      colorScheme === 'dark' && styles.quizTitleDark,
    ],
    descriptionContainer: [
      styles.descriptionContainer,
      colorScheme === 'dark' && styles.descriptionContainerDark,
    ],
    description: [
      styles.description,
      colorScheme === 'dark' && styles.descriptionDark,
    ],
    myQuizCardBottom: [
      styles.myQuizCardBottom,
      colorScheme === 'dark' && styles.myQuizCardBottomDark,
    ],
  };
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={classes.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.imgContainer}>
        <Image
          source={require('../assets/formationBg.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.fixedNavbar}>
        <Navbar title="Titre du quiz" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={classes.content}>
        <IntroductionQuizContainer classes={classes} />
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
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
  },
  containerDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  imgContainer: {
    width: '100%',
    height: 377,
  },
  image: {
    width: '100%',
    height: 742,
    marginTop: Platform.OS === 'android' ? 0 : -StatusBarManager.HEIGHT - 5,
  },
  fixedNavbar: {
    width: '100%',
    position: 'absolute',
    top: Platform.OS === 'android' ? 10 : 52,
    left: 0,
  },
  content: {
    width: '100%',
    height: 898,
    left: 0,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  contentDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  quizTitleContainer: {
    width: 'auto',
  },
  quizTitle: {
    color: theme.colors.text.$textLight,
    marginTop: 30,
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 32,
    marginLeft: 5,
    marginRight: 15,
  },
  quizTitleDark: {
    color: theme.colors.text.$textDark,
  },
  descriptionContainer: {
    backgroundColor: theme.colors.component.$cardLight,
    height: 364,
    width: '100%',
    borderRadius: 20,
    marginTop: 20,
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
    marginBottom: 20,
  },
  descriptionContainerDark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  myQuizCardBottom: {
    position: 'absolute',
    top: 10,
    left: 10,
    borderRadius: 10,
    width: '100%',
    height: 51,
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
    flexDirection: 'row',
  },
  myQuizCardBottomDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
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
    color: theme.colors.text.$textLight,
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 16,
  },
  descriptionDark: {
    color: theme.colors.text.$textDark,
  },
  beginButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#9154FD',
    borderRadius: 10,
    height: 38,
    width: 134,
    shadowColor: 'rgba(145, 84, 253, 0.6)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 8,
  },
  beginButtonText: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default IntroductionQuiz;
