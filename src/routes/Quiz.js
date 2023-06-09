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

import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import SmilingFaceWithHorns from '../assets/icons/smilingFaceWithHorns.svg';
import WinkingFace from '../assets/icons/winkingFace.svg';

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

function MyQuiz() {
  const navigation = useNavigation();
  return (
    <View style={[styles.quizContent, styles.shadowProp]}>
      <View style={styles.quizTitleContainer}>
        <Text style={styles.quizTitle}>
          Entraîne tes compétences pour être meilleur !
          <WinkingFace width={26} height={26} />
        </Text>
      </View>
      <ScrollView>
        <Text style={styles.cardTitle}>Réussi</Text>
        <ScrollView horizontal style={[styles.cardContainer]}>
          <TouchableOpacity
            style={styles.myQuizCardContent}
            onPress={() => navigation.navigate('SummaryQuiz')}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={styles.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={styles.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={styles.myQuizCardBottomLeftNumber}>20</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.orangeTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>
                  Intermédiaire
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/maxime.jpg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={styles.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={styles.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={styles.myQuizCardBottomLeftNumber}>15</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.greenTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Débutant</Text>
              </View>
            </View>
          </View>

          <View style={styles.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/maxime.jpg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={styles.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={styles.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={styles.myQuizCardBottomLeftNumber}>16</Text>
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
          <View style={styles.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={styles.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={styles.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={styles.myQuizCardBottomLeftNumber}>10</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.redTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Confirmé</Text>
              </View>
            </View>
          </View>

          <View style={styles.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/maxime.jpg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={styles.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={styles.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={styles.myQuizCardBottomLeftNumber}>15</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.greenTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Débutant</Text>
              </View>
            </View>
          </View>

          <View style={styles.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/maxime.jpg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={styles.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={styles.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={styles.myQuizCardBottomLeftNumber}>20</Text>
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
          <View style={styles.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={styles.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={styles.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={styles.myQuizCardBottomLeftNumber}>10</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.orangeTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>
                  Intermédiaire
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/maxime.jpg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={styles.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={styles.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={styles.myQuizCardBottomLeftNumber}>15</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.redTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Confirmé</Text>
              </View>
            </View>
          </View>

          <View style={styles.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/emoji.png')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={styles.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={styles.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={styles.myQuizCardBottomLeftNumber}>20</Text>
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

function InprogressQuiz() {
  return (
    <View style={[styles.quizContent, styles.shadowProp]}>
      <View style={styles.quizTitleContainer}>
        <Text style={styles.quizTitle}>
          Entraîne tes compétences pour être meilleur !
          <WinkingFace width={26} height={26} />
        </Text>
      </View>
      <ScrollView>
        <Text style={styles.cardTitle}>Débutant</Text>
        <ScrollView horizontal style={[styles.cardContainer]}>
          <View style={styles.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/maxime.jpg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={styles.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={styles.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={styles.myQuizCardBottomLeftNumber}>10</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.greenTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Débutant</Text>
              </View>
            </View>
          </View>
          <View style={styles.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/maxime.jpg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={styles.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={styles.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={styles.myQuizCardBottomLeftNumber}>15</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.greenTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Débutant</Text>
              </View>
            </View>
          </View>
          <View style={styles.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={styles.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={styles.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={styles.myQuizCardBottomLeftNumber}>20</Text>
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
          <View style={styles.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={styles.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={styles.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={styles.myQuizCardBottomLeftNumber}>10</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.orangeTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>
                  Intermédiaire
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={styles.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={styles.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={styles.myQuizCardBottomLeftNumber}>20</Text>
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
          <View style={styles.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={styles.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={styles.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={styles.myQuizCardBottomLeftNumber}>10</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.orangeTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>
                  Intermédiaire
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/maxime.jpg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={styles.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={styles.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={styles.myQuizCardBottomLeftNumber}>15</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.redTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Confirmé</Text>
              </View>
            </View>
          </View>

          <View style={styles.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={styles.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={styles.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={styles.myQuizCardBottomLeftNumber}>20</Text>
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

function PremiumQuiz() {
  return (
    <View style={[styles.quizContent, styles.shadowProp]}>
      <View style={styles.quizTitleContainer}>
        <Text style={styles.quizTitle}>
          Met à l’épreuve tes connaissances !
          <SmilingFaceWithHorns width={26} height={26} />
        </Text>
      </View>
      <ScrollView>
        <Text style={styles.cardTitle}>Niveau Pro</Text>
        <ScrollView horizontal style={[styles.cardContainer]}>
          <View style={styles.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/maxime.jpg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={styles.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={styles.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={styles.myQuizCardBottomLeftNumber}>16</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.redTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Confirmé</Text>
              </View>
            </View>
          </View>
          <View style={styles.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={styles.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={styles.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={styles.myQuizCardBottomLeftNumber}>20</Text>
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
          <View style={styles.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/maxime.jpg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={styles.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={styles.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={styles.myQuizCardBottomLeftNumber}>12</Text>
                <Text style={styles.myQuizCardBottomLeftText}>Questions</Text>
              </View>
              <View style={[styles.redTopPersonCardContentRight]}>
                <Text style={styles.bottomCardContentRightText}>Confirmé</Text>
              </View>
            </View>
          </View>
          <View style={styles.myQuizCardContent}>
            <View style={styles.myQuizCardImgContainer}>
              <Image
                source={require('../assets/video/images.jpeg')}
                style={styles.myQuizCardImg}
              />
            </View>
            <Text style={styles.myQuizCardTitle}>TITRE DU QUIZ</Text>
            <View style={styles.myQuizCardBottom}>
              <View style={styles.myQuizCardBottomLeft}>
                <Text style={styles.myQuizCardBottomLeftNumber}>10</Text>
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

function QuizContainer({selectedFooter}) {
  if (selectedFooter === 'inprogress') {
    return (
      <ScrollView>
        <InprogressQuiz />
      </ScrollView>
    );
  } else if (selectedFooter === 'premium') {
    return (
      <ScrollView>
        <PremiumQuiz />
      </ScrollView>
    );
  }
  return (
    <ScrollView>
      <MyQuiz />
    </ScrollView>
  );
}

function Quiz() {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedFooter, setSelectedFooter] = useState('my_quiz');
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={{height: Dimensions.get('window').height}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Navbar title="Quiz" />
      <ScrollView>
        <QuizContainer selectedFooter={selectedFooter} />
      </ScrollView>
      <View style={styles.footer}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  quizContent: {
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
    color: '#1A2442',
    marginTop: 30,
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 32,
    marginLeft: 15,
    marginRight: 15,
  },
  cardTitle: {
    color: '#9BA5BF',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
    marginTop: 25,
    marginLeft: 15,
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
    backgroundColor: '#E9EDFC',
    borderRadius: 20,
    // shadowColor: 'rgba(9, 13, 109, 0.4)',
    // shadowOffset: {width: 0, height: 30},
    // shadowOpacity: 1,
    // shadowRadius: 40,
    // elevation: 8,
    marginRight: 15,
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
    color: '#1A2442',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 24,
    marginTop: 5,
    marginLeft: 15,
  },
  myQuizCardBottom: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    borderRadius: 10,
    width: 231,
    height: 37,
    backgroundColor: '#FFFFFF',
    // shadowOffset: {
    //   width: 0,
    //   height: 15,
    // },
    // shadowColor: 'rgba(9, 13, 109, 0.4)',
    // shadowOpacity: 1,
    shadowRadius: 20,
  },
  myQuizCardBottomLeft: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 9,
  },
  myQuizCardBottomLeftNumber: {
    color: '#1A2442',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 22,
    lineHeight: 27,
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