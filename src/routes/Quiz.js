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
import Menu, {NavbarMenu} from './Menu';
import React, {useRef, useState} from 'react';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import SmilingFaceWithHorns from '../assets/icons/smilingFaceWithHorns.svg';
import WinkingFace from '../assets/icons/winkingFace.svg';
import {formStyles} from '../assets/css/form';
import theme from '../assets/theme';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

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
        <TouchableOpacity onPress={() => props.handleScrollToRight()}>
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

function MyQuiz(props) {
  const navigation = useNavigation();
  return (
    <View style={[props.classes.quizContent, styles.shadowProp]}>
      <View style={props.classes.quizTitleContainer}>
        <Text style={props.classes.quizTitle}>
          Entraîne tes compétences pour être meilleur !
          <WinkingFace width={26} height={26} />
        </Text>
      </View>
      <ScrollView>
        <Text style={styles.cardTitle}>Réussi</Text>
        <ScrollView horizontal style={[styles.cardContainer]}>
          <TouchableOpacity
            style={props.classes.myQuizCardContent}
            onPress={() => navigation.navigate('SummaryQuiz')}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={props.classes.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={props.classes.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={props.classes.myQuizCardBottomLeftNumber}>20</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.orangeTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>
                  Intermédiaire
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={props.classes.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/maxime.jpg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={props.classes.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={props.classes.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={props.classes.myQuizCardBottomLeftNumber}>15</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.greenTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Débutant</Text>
              </View>
            </View>
          </View>

          <View style={props.classes.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/maxime.jpg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={props.classes.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={props.classes.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={props.classes.myQuizCardBottomLeftNumber}>16</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.redTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Confirmé</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <Text style={styles.cardTitle}>Échoué</Text>
        <ScrollView horizontal style={[styles.cardContainer]}>
          <View style={props.classes.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={props.classes.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={props.classes.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={props.classes.myQuizCardBottomLeftNumber}>10</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.redTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Confirmé</Text>
              </View>
            </View>
          </View>

          <View style={props.classes.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/maxime.jpg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={props.classes.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={props.classes.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={props.classes.myQuizCardBottomLeftNumber}>15</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.greenTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Débutant</Text>
              </View>
            </View>
          </View>

          <View style={props.classes.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/maxime.jpg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={props.classes.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={props.classes.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={props.classes.myQuizCardBottomLeftNumber}>20</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.redTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Confirmé</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <Text style={styles.cardTitle}>À refaire</Text>
        <ScrollView horizontal style={[styles.cardContainer]}>
          <View style={props.classes.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={props.classes.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={props.classes.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={props.classes.myQuizCardBottomLeftNumber}>10</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.orangeTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>
                  Intermédiaire
                </Text>
              </View>
            </View>
          </View>

          <View style={props.classes.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/maxime.jpg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={props.classes.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={props.classes.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={props.classes.myQuizCardBottomLeftNumber}>15</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.redTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Confirmé</Text>
              </View>
            </View>
          </View>

          <View style={props.classes.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/emoji.png')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={props.classes.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={props.classes.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={props.classes.myQuizCardBottomLeftNumber}>20</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.greenTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Débutant</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

function InprogressQuiz(props) {
  return (
    <View style={[props.classes.quizContent, styles.shadowProp]}>
      <View style={props.classes.quizTitleContainer}>
        <Text style={props.classes.quizTitle}>
          Entraîne tes compétences pour être meilleur !
          <WinkingFace width={26} height={26} />
        </Text>
      </View>
      <ScrollView>
        <Text style={styles.cardTitle}>Débutant</Text>
        <ScrollView horizontal style={[styles.cardContainer]}>
          <View style={props.classes.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/maxime.jpg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={props.classes.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={props.classes.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={props.classes.myQuizCardBottomLeftNumber}>10</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.greenTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Débutant</Text>
              </View>
            </View>
          </View>
          <View style={props.classes.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/maxime.jpg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={props.classes.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={props.classes.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={props.classes.myQuizCardBottomLeftNumber}>15</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.greenTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Débutant</Text>
              </View>
            </View>
          </View>
          <View style={props.classes.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={props.classes.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={props.classes.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={props.classes.myQuizCardBottomLeftNumber}>20</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.greenTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Débutant</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <Text style={styles.cardTitle}>Intermédiaire</Text>
        <ScrollView horizontal style={[styles.cardContainer]}>
          <View style={props.classes.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={props.classes.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={props.classes.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={props.classes.myQuizCardBottomLeftNumber}>10</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.orangeTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>
                  Intermédiaire
                </Text>
              </View>
            </View>
          </View>
          <View style={props.classes.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={props.classes.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={props.classes.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={props.classes.myQuizCardBottomLeftNumber}>20</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.orangeTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>
                  Intermédiaire
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <Text style={styles.cardTitle}>À refaire</Text>
        <ScrollView horizontal style={[styles.cardContainer]}>
          <View style={props.classes.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={props.classes.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={props.classes.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={props.classes.myQuizCardBottomLeftNumber}>10</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.orangeTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>
                  Intermédiaire
                </Text>
              </View>
            </View>
          </View>

          <View style={props.classes.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/maxime.jpg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={props.classes.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={props.classes.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={props.classes.myQuizCardBottomLeftNumber}>15</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.redTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Confirmé</Text>
              </View>
            </View>
          </View>

          <View style={props.classes.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={props.classes.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={props.classes.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={props.classes.myQuizCardBottomLeftNumber}>20</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.greenTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Débutant</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

function PremiumQuiz(props) {
  return (
    <View style={[props.classes.quizContent, styles.shadowProp]}>
      <View style={props.classes.quizTitleContainer}>
        <Text style={props.classes.quizTitle}>
          Met à l’épreuve tes connaissances !
          <SmilingFaceWithHorns width={26} height={26} />
        </Text>
      </View>
      <ScrollView>
        <Text style={styles.cardTitle}>Niveau Pro</Text>
        <ScrollView horizontal style={[styles.cardContainer]}>
          <View style={props.classes.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/maxime.jpg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={props.classes.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={props.classes.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={props.classes.myQuizCardBottomLeftNumber}>16</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.redTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Confirmé</Text>
              </View>
            </View>
          </View>
          <View style={props.classes.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={props.classes.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={props.classes.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={props.classes.myQuizCardBottomLeftNumber}>20</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.redTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Confirmé</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <Text style={styles.cardTitle}>Réessayer</Text>
        <ScrollView horizontal style={[styles.cardContainer]}>
          <View style={props.classes.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/maxime.jpg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={props.classes.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={props.classes.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={props.classes.myQuizCardBottomLeftNumber}>12</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.redTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Confirmé</Text>
              </View>
            </View>
          </View>
          <View style={props.classes.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={props.classes.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={props.classes.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={props.classes.myQuizCardBottomLeftNumber}>10</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.redTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Confirmé</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

function QuizContainer({classes, selectedFooter}) {
  if (selectedFooter === 'inprogress') {
    return (
      <ScrollView>
        <InprogressQuiz classes={classes} />
      </ScrollView>
    );
  } else if (selectedFooter === 'premium') {
    return (
      <ScrollView>
        <PremiumQuiz classes={classes} />
      </ScrollView>
    );
  }
  return (
    <ScrollView>
      <MyQuiz classes={classes} />
    </ScrollView>
  );
}

function Quiz() {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const classes = {
    footer: [styles.footer, colorScheme === 'dark' && styles.footerDark],
    quizContent: [
      styles.quizContent,
      colorScheme === 'dark' && styles.quizContentDark,
    ],
    quizTitle: [
      styles.quizTitle,
      colorScheme === 'dark' && styles.quizTitleDark,
    ],
    myQuizCardContent: [
      styles.myQuizCardContent,
      colorScheme === 'dark' && styles.myQuizCardContentDark,
    ],
    myQuizCardTitle: [
      styles.myQuizCardTitle,
      colorScheme === 'dark' && styles.myQuizCardTitleDark,
    ],
    myQuizCardBottom: [
      styles.myQuizCardBottom,
      colorScheme === 'dark' && styles.myQuizCardBottomDark,
    ],
    myQuizCardBottomLeftNumber: [
      styles.myQuizCardBottomLeftNumber,
      colorScheme === 'dark' && styles.myQuizCardBottomLeftNumberDark,
    ],
  };
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedFooter, setSelectedFooter] = useState('my_quiz');
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
          title="Quiz"
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
        <QuizContainer classes={classes} selectedFooter={selectedFooter} />
      </ScrollView>
      {!scrollToMenu ? (
        <View style={classes.footer}>
          <TouchableOpacity
            style={
              selectedFooter === 'my_quiz'
                ? styles.selectedFooter
                : styles.unselectedFooter
            }
            onPress={() => setSelectedFooter('my_quiz')}>
            <Text
              style={
                selectedFooter === 'my_quiz'
                  ? styles.selectedFooterText
                  : styles.unselectedFooterText
              }>
              Mes quiz
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selectedFooter === 'inprogress'
                ? styles.selectedFooter
                : styles.unselectedFooterCenter
            }
            onPress={() => setSelectedFooter('inprogress')}>
            <Text
              style={
                selectedFooter === 'inprogress'
                  ? styles.selectedFooterText
                  : styles.unselectedFooterText
              }>
              Quiz
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selectedFooter === 'premium'
                ? styles.selectedFooter
                : styles.unselectedFooter
            }
            onPress={() => setSelectedFooter('premium')}>
            <Text
              style={
                selectedFooter === 'premium'
                  ? styles.selectedFooterText
                  : styles.unselectedFooterText
              }>
              Premium
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  quizContent: {
    width: Dimensions.get('window').width,
    height:
      Platform.OS === 'android'
        ? Dimensions.get('window').height + 130
        : Dimensions.get('window').height,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
    paddingBottom: 14,
  },
  quizContentDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
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
  greenTopPersonCardContentRight: {
    position: 'absolute',
    right: 8,
    top: 8,
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
    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 2,
  },
  orangeTopPersonCardContentRight: {
    position: 'absolute',
    right: 8,
    top: 8,
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
  redTopPersonCardContentRight: {
    position: 'absolute',
    right: 8,
    top: 8,
    width: 75,
    height: 21,
    backgroundColor: '#FF4141',
    borderRadius: 4,
    alignItems: 'center',
    shadowColor: '#FF4141',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 2,
  },
  bottomCardContentRightText: {
    marginTop: 2,
    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 17,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: 74,
    flexDirection: 'row',
    backgroundColor: theme.colors.component.$cardLight,
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
  footerDark: {
    backgroundColor: theme.colors.component.$cardDark,
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
  },
  unselectedFooterCenter: {
    width: '33%',
    alignItems: 'center',
    borderRightWidth: 1,
    height: 16,
    marginTop: 6,
    borderColor: '#9BA5BF',
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
    marginTop: 6,
  },
  unselectedFooterText: {
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
    color: '#9BA5BF',
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
    marginRight: 5,
  },
  quizTitleDark: {
    color: theme.colors.text.$textDark,
  },
  cardTitle: {
    color: '#9BA5BF',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
    marginTop: 25,
    marginLeft: 5,
  },
  cardContainer: {
    flexDirection: 'row',
    overflowX: 'scroll',
    width: Dimensions.get('window').width,
    marginTop: 10,
  },
  myQuizCardContent: {
    width: 251,
    height: 243,
    backgroundColor: theme.colors.component.$cardLight,
    borderRadius: 20,
    // shadowColor: 'rgba(9, 13, 109, 0.4)',
    // shadowOffset: {width: 0, height: 30},
    // shadowOpacity: 1,
    // shadowRadius: 40,
    // elevation: 8,
    marginRight: 15,
  },
  myQuizCardContentDark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  myQuizCardImgContainer: {
    maxWidth: 251,
    maxHeight: 130,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  myQuizCardImg: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
  myQuizCardTitle: {
    color: theme.colors.text.$textLight,
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 24,
    marginTop: 5,
    marginLeft: 15,
  },
  myQuizCardTitleDark: {
    color: theme.colors.text.$textDark,
  },
  myQuizCardBottom: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    borderRadius: 10,
    width: 231,
    height: 37,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    // shadowOffset: {
    //   width: 0,
    //   height: 15,
    // },
    // shadowColor: 'rgba(9, 13, 109, 0.4)',
    // shadowOpacity: 1,
    shadowRadius: 20,
  },
  myQuizCardBottomDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  myQuizCardBottomLeft: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 9,
  },
  myQuizCardBottomLeftNumber: {
    color: theme.colors.text.$textLight,
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 22,
    lineHeight: 27,
    marginRight: 2,
  },
  myQuizCardBottomLeftNumberDark: {
    color: theme.colors.text.$textDark,
  },
  myQuizCardBottomLeftText: {
    color: '#9BA5BF',
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12,
    marginLeft: 3,
    marginTop: 8,
  },
});

export default Quiz;
