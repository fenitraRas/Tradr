/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Image,
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
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';

import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import Calendar from '../assets/icons/calendar.svg';
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

function InProgressAccompaniementContent() {
  return (
    <View style={[styles.accompaniementContent, styles.shadowProp]}>
      <View style={[styles.imgContainer]}>
        <Image
          source={require('../assets/video/maxime.jpg')}
          style={styles.image}
        />
        <Text style={styles.imgName}>Maxime Legrand</Text>
        <Image source={require('../assets/emoji.png')} style={styles.emoji} />
      </View>
      <ScrollView horizontal style={[styles.stateCardContainer]}>
        <View style={[styles.stateCard]}>
          <Text style={styles.stateTitle}>Prochaine séance</Text>
          <View style={[styles.stateCardContent]}>
            <View style={[styles.stateCardTimeContainer]}>
              <Text style={styles.stateCardTime}>10h</Text>
            </View>
            <Text style={styles.stateCardDate}>25 . 03 . 2023</Text>
          </View>
        </View>
        <View style={[styles.stateCard]}>
          <Text style={styles.stateTitle}>Exercice en cours</Text>
          <View style={[styles.stateCardContent]}>
            <View style={[styles.stateCardNumberContainer]}>
              <Text style={styles.stateCardNumber}>1</Text>
            </View>
            <View style={[styles.selectedStateCardNumberContainer]}>
              <Text style={styles.selectedStateCardNumber}>2</Text>
            </View>
            <View style={[styles.stateCardNumberContainer]}>
              <Text style={styles.stateCardNumber}>3</Text>
            </View>
            <View style={[styles.stateCardNumberContainer]}>
              <Text style={styles.stateCardNumber}>4</Text>
            </View>
            <View style={[styles.stateCardNumberContainer]}>
              <Text style={styles.stateCardNumber}>5</Text>
            </View>
          </View>
        </View>
        <View style={[styles.stateCard]}>
          <Text style={styles.stateTitle}>Séances restantes</Text>
          <View style={[styles.stateCardRContainer]}>
            <Text style={styles.stateCardTime}>1</Text>
          </View>
        </View>
        <View style={[styles.stateCard]}>
          <Text style={styles.stateTitle}>Séances terminées</Text>
          <View style={[styles.stateCardRContainer]}>
            <Text style={styles.stateCardTime}>4</Text>
          </View>
        </View>
      </ScrollView>
      <ScrollView horizontal style={[styles.personCardContainer]}>
        <TouchableOpacity style={[styles.selectedPersonCard]}>
          <View style={[styles.topPersonCardContainer]}>
            <View style={[styles.topPersonCardContent]}>
              <Text style={styles.topPersonCardContentLeft}>Trading</Text>
              <View style={[styles.greenTopPersonCardContentRight]}>
                <Text style={styles.topPersonCardContentRightText}>
                  Débutant
                </Text>
              </View>
              <Text style={styles.topPersonCardContentName}>
                Maxime Legrand
              </Text>
            </View>
          </View>
          <Text style={styles.infoPersonCard}>
            Session individuelle de 45 minutes.
          </Text>
          <View style={[styles.bottomPersonCard]}>
            <Text style={styles.bottomPersonCardLeft}>
              Plan d'action simplifié
            </Text>
            <View style={[styles.bottomPersonCardRight]}>
              <Text style={styles.bottomPersonCardDate}>23 . 03 . 2023</Text>
              <Text style={styles.bottomPersonCardDate}> à </Text>
              <Text style={styles.bottomPersonCardTime}>10h00</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.personCard]}>
          <View style={[styles.topPersonCardContainer]}>
            <View style={[styles.topPersonCardContent]}>
              <Text style={styles.topPersonCardContentLeft}>Économie</Text>
              <View style={[styles.orangeTopPersonCardContentRight]}>
                <Text style={styles.topPersonCardContentRightText}>
                  Intermédiaire
                </Text>
              </View>
              <Text style={styles.topPersonCardContentName}>Léna Forelle</Text>
            </View>
          </View>
          <Text style={styles.infoPersonCard}>
            Session individuelle de 1 heure.
          </Text>
          <View style={[styles.bottomPersonCard]}>
            <Text style={styles.bottomPersonCardLeft}>
              Plan d'action avancé
            </Text>
            <View style={[styles.bottomPersonCardRight]}>
              <Text style={styles.bottomPersonCardDate}>25 . 03 . 2023</Text>
              <Text style={styles.bottomPersonCardDate}> à </Text>
              <Text style={styles.bottomPersonCardTime}>15h00</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.personCard]}>
          <View style={[styles.topPersonCardContainer]}>
            <View style={[styles.topPersonCardContent]}>
              <Text style={styles.topPersonCardContentLeft}>Placement</Text>
              <View style={[styles.redTopPersonCardContentRight]}>
                <Text style={styles.topPersonCardContentRightText}>
                  Confirmé
                </Text>
              </View>
              <Text style={styles.topPersonCardContentName}>Inès Dore</Text>
            </View>
          </View>
          <Text style={styles.infoPersonCard}>
            Session individuelle de 1 heure et 30 minutes.
          </Text>
          <View style={[styles.bottomPersonCard]}>
            <Text style={styles.bottomPersonCardLeft}>
              Plan d'action personnalisé
            </Text>
            <View style={[styles.bottomPersonCardRight]}>
              <Text style={styles.bottomPersonCardDate}>26 . 03 . 2023</Text>
              <Text style={styles.bottomPersonCardDate}> à </Text>
              <Text style={styles.bottomPersonCardTime}>17h00</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function ToBookAccompaniementContent() {
  return (
    <View style={[styles.accompaniementContent, styles.shadowProp]}>
      <View style={styles.toBookTitleContainer}>
        <Text style={styles.toBookTitle}>
          N'hésite plus et réserve ta séance !
          <Calendar width={26} height={26} />
        </Text>
      </View>
      <ScrollView>
        <Text style={styles.tradingCardTitle}>Pour bien commencer</Text>
        <ScrollView horizontal style={[styles.toBookCardContainer]}>
          <View style={[styles.personCard]}>
            <View style={[styles.topPersonCardContainerWithoutName]}>
              <View style={[styles.topPersonCardContent]}>
                <Text style={styles.topPersonCardContentLeft}>Trading</Text>
                <View style={[styles.greenTopPersonCardContentRight]}>
                  <Text style={styles.topPersonCardContentRightText}>
                    Débutant
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.infoPersonCard}>
              Session individuelle de 45 minutes avec un coach.
            </Text>
            <View style={[styles.bottomPersonCard]}>
              <View style={[styles.sessionNumberContainer]}>
                <Text style={styles.sessionNumber}>4 séances</Text>
              </View>
              <TouchableOpacity style={[styles.toBookButton]}>
                <Text style={styles.toBookButtonText}>Réserver</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.personCard]}>
            <View style={[styles.topPersonCardContainerWithoutName]}>
              <View style={[styles.topPersonCardContent]}>
                <Text style={styles.topPersonCardContentLeft}>Trading</Text>
                <View style={[styles.greenTopPersonCardContentRight]}>
                  <Text style={styles.topPersonCardContentRightText}>
                    Débutant
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.infoPersonCard}>
              Session individuelle de 45 minutes avec un coach.
            </Text>
            <View style={[styles.bottomPersonCard]}>
              <View style={[styles.sessionNumberContainer]}>
                <Text style={styles.sessionNumber}>6 séances</Text>
              </View>
              <TouchableOpacity style={[styles.toBookButton]}>
                <Text style={styles.toBookButtonText}>Réserver</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* intermediaire */}

        <Text style={styles.tradingCardTitle}>Des séances avancées</Text>
        <ScrollView horizontal style={[styles.toBookCardContainer]}>
          <View style={[styles.personCard]}>
            <View style={[styles.topPersonCardContainerWithoutName]}>
              <View style={[styles.topPersonCardContent]}>
                <Text style={styles.topPersonCardContentLeft}>Économie</Text>
                <View style={[styles.orangeTopPersonCardContentRight]}>
                  <Text style={styles.topPersonCardContentRightText}>
                    Intermédiaire
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.infoPersonCard}>
              Session individuelle de 1 heure avec un coach.
            </Text>
            <View style={[styles.bottomPersonCard]}>
              <View style={[styles.sessionNumberContainer]}>
                <Text style={styles.sessionNumber}>5 séances</Text>
              </View>
              <TouchableOpacity style={[styles.toBookButton]}>
                <Text style={styles.toBookButtonText}>Réserver</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.personCard]}>
            <View style={[styles.topPersonCardContainerWithoutName]}>
              <View style={[styles.topPersonCardContent]}>
                <Text style={styles.topPersonCardContentLeft}>Placement</Text>
                <View style={[styles.orangeTopPersonCardContentRight]}>
                  <Text style={styles.topPersonCardContentRightText}>
                    Intermédiaire
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.infoPersonCard}>
              Session individuelle de 1 heure avec un coach.
            </Text>
            <View style={[styles.bottomPersonCard]}>
              <View style={[styles.sessionNumberContainer]}>
                <Text style={styles.sessionNumber}>5 séances</Text>
              </View>
              <TouchableOpacity style={[styles.toBookButton]}>
                <Text style={styles.toBookButtonText}>Réserver</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.personCard]}>
            <View style={[styles.topPersonCardContainerWithoutName]}>
              <View style={[styles.topPersonCardContent]}>
                <Text style={styles.topPersonCardContentLeft}>Trading</Text>
                <View style={[styles.orangeTopPersonCardContentRight]}>
                  <Text style={styles.topPersonCardContentRightText}>
                    Intermédiaire
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.infoPersonCard}>
              Session individuelle de 1 heure avec un coach.
            </Text>
            <View style={[styles.bottomPersonCard]}>
              <View style={[styles.sessionNumberContainer]}>
                <Text style={styles.sessionNumber}>8 séances</Text>
              </View>
              <TouchableOpacity style={[styles.toBookButton]}>
                <Text style={styles.toBookButtonText}>Réserver</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* Confirmé */}

        <Text style={styles.tradingCardTitle}>Pour les plus compétiteurs</Text>
        <ScrollView horizontal style={[styles.toBookCardContainer]}>
          <View style={[styles.personCard]}>
            <View style={[styles.topPersonCardContainerWithoutName]}>
              <View style={[styles.topPersonCardContent]}>
                <Text style={styles.topPersonCardContentLeft}>Forex</Text>
                <View style={[styles.redTopPersonCardContentRight]}>
                  <Text style={styles.topPersonCardContentRightText}>
                    Confirmé
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.infoPersonCard}>
              Session individuelle de 1 heure avec un coach.
            </Text>
            <View style={[styles.bottomPersonCard]}>
              <View style={[styles.sessionNumberContainer]}>
                <Text style={styles.sessionNumber}>4 séances</Text>
              </View>
              <TouchableOpacity style={[styles.toBookButton]}>
                <Text style={styles.toBookButtonText}>Premium</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.personCard]}>
            <View style={[styles.topPersonCardContainerWithoutName]}>
              <View style={[styles.topPersonCardContent]}>
                <Text style={styles.topPersonCardContentLeft}>Ftmo Trader</Text>
                <View style={[styles.redTopPersonCardContentRight]}>
                  <Text style={styles.topPersonCardContentRightText}>
                    Confirmé
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.infoPersonCard}>
              Session individuelle de 1 heure avec un coach.
            </Text>
            <View style={[styles.bottomPersonCard]}>
              <View style={[styles.sessionNumberContainer]}>
                <Text style={styles.sessionNumber}>3 séances</Text>
              </View>
              <TouchableOpacity style={[styles.toBookButton]}>
                <Text style={styles.toBookButtonText}>Premium</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.personCard]}>
            <View style={[styles.topPersonCardContainerWithoutName]}>
              <View style={[styles.topPersonCardContent]}>
                <Text style={styles.topPersonCardContentLeft}>Placement</Text>
                <View style={[styles.redTopPersonCardContentRight]}>
                  <Text style={styles.topPersonCardContentRightText}>
                    Confirmé
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.infoPersonCard}>
              Session individuelle de 1 heure avec un coach.
            </Text>
            <View style={[styles.bottomPersonCard]}>
              <View style={[styles.sessionNumberContainer]}>
                <Text style={styles.sessionNumber}>6 séances</Text>
              </View>
              <TouchableOpacity style={[styles.toBookButton]}>
                <Text style={styles.toBookButtonText}>Premium</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

function CompletedAccompaniementContent() {
  return (
    <View style={[styles.accompaniementContent, styles.shadowProp]}>
      <View style={styles.toBookTitleContainer}>
        <Text style={styles.toBookTitle}>
          Un historique de tes super cours !
          <WinkingFace width={26} height={26} />
        </Text>
      </View>
      <ScrollView>
        <Text style={styles.tradingCardTitle}>Maxime Legrand</Text>
        <ScrollView horizontal style={[styles.toBookCardContainer]}>
          <View style={[styles.personCard]}>
            <View style={[styles.topPersonCardContainerWithoutName]}>
              <View style={[styles.topPersonCardContent]}>
                <Text style={styles.topPersonCardContentLeft}>Trading</Text>
                <View style={[styles.greenTopPersonCardContentRight]}>
                  <Text style={styles.topPersonCardContentRightText}>
                    Débutant
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.infoPersonCard}>
              Session individuelle de 45 minutes avec un coach.
            </Text>
            <View style={[styles.bottomPersonCard]}>
              <View style={[styles.sessionNumberContainer]}>
                <Text style={styles.sessionNumber}>Séance 2 /6</Text>
              </View>
              <View style={[styles.sessionDateContainer]}>
                <Text style={styles.sessionNumber}>12 . 03 . 2023</Text>
              </View>
            </View>
          </View>
          <View style={[styles.personCard]}>
            <View style={[styles.topPersonCardContainerWithoutName]}>
              <View style={[styles.topPersonCardContent]}>
                <Text style={styles.topPersonCardContentLeft}>Trading</Text>
                <View style={[styles.greenTopPersonCardContentRight]}>
                  <Text style={styles.topPersonCardContentRightText}>
                    Débutant
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.infoPersonCard}>
              Session individuelle de 45 minutes avec un coach.
            </Text>
            <View style={[styles.bottomPersonCard]}>
              <View style={[styles.sessionNumberContainer]}>
                <Text style={styles.sessionNumber}>Séances 1 /6</Text>
              </View>
              <View style={[styles.sessionDateContainer]}>
                <Text style={styles.sessionNumber}>22 . 03 . 2023</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>

      <ScrollView>
        <Text style={styles.tradingCardTitle}>Léna Forelle</Text>
        <ScrollView horizontal style={[styles.toBookCardContainer]}>
          <View style={[styles.personCard]}>
            <View style={[styles.topPersonCardContainerWithoutName]}>
              <View style={[styles.topPersonCardContent]}>
                <Text style={styles.topPersonCardContentLeft}>Économie</Text>
                <View style={[styles.orangeTopPersonCardContentRight]}>
                  <Text style={styles.topPersonCardContentRightText}>
                    Intermédiaire
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.infoPersonCard}>
              Session individuelle de 1 heure.
            </Text>
            <View style={[styles.bottomPersonCard]}>
              <View style={[styles.sessionNumberContainer]}>
                <Text style={styles.sessionNumber}>Séance 4 /5</Text>
              </View>
              <View style={[styles.sessionDateContainer]}>
                <Text style={styles.sessionNumber}>22 . 03 . 2023</Text>
              </View>
            </View>
          </View>
          <View style={[styles.personCard]}>
            <View style={[styles.topPersonCardContainerWithoutName]}>
              <View style={[styles.topPersonCardContent]}>
                <Text style={styles.topPersonCardContentLeft}>Économie</Text>
                <View style={[styles.orangeTopPersonCardContentRight]}>
                  <Text style={styles.topPersonCardContentRightText}>
                    Intermédiaire
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.infoPersonCard}>
              Session individuelle de 1 heure.
            </Text>
            <View style={[styles.bottomPersonCard]}>
              <View style={[styles.sessionNumberContainer]}>
                <Text style={styles.sessionNumber}>Séances 1 /6</Text>
              </View>
              <View style={[styles.sessionDateContainer]}>
                <Text style={styles.sessionNumber}>11 . 03 . 2023</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>

      <ScrollView>
        <Text style={styles.tradingCardTitle}>Inès Dore</Text>
        <ScrollView horizontal style={[styles.toBookCardContainer]}>
          <View style={[styles.personCard]}>
            <View style={[styles.topPersonCardContainerWithoutName]}>
              <View style={[styles.topPersonCardContent]}>
                <Text style={styles.topPersonCardContentLeft}>Placement</Text>
                <View style={[styles.redTopPersonCardContentRight]}>
                  <Text style={styles.topPersonCardContentRightText}>
                    Confirmé
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.infoPersonCard}>
              Session individuelle de 1 heure et 30 minutes.
            </Text>
            <View style={[styles.bottomPersonCard]}>
              <View style={[styles.sessionNumberContainer]}>
                <Text style={styles.sessionNumber}>Séance 2 /5</Text>
              </View>
              <View style={[styles.sessionDateContainer]}>
                <Text style={styles.sessionNumber}>18 . 03 . 2023</Text>
              </View>
            </View>
          </View>
          <View style={[styles.personCard]}>
            <View style={[styles.topPersonCardContainerWithoutName]}>
              <View style={[styles.topPersonCardContent]}>
                <Text style={styles.topPersonCardContentLeft}>Placement</Text>
                <View style={[styles.orangeTopPersonCardContentRight]}>
                  <Text style={styles.topPersonCardContentRightText}>
                    Confirmé
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.infoPersonCard}>
              Session individuelle de 1 heure et 30 minutes.
            </Text>
            <View style={[styles.bottomPersonCard]}>
              <View style={[styles.sessionNumberContainer]}>
                <Text style={styles.sessionNumber}>Séances 1 /5</Text>
              </View>
              <View style={[styles.sessionDateContainer]}>
                <Text style={styles.sessionNumber}>10 . 03 . 2023</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

function AccompaniementContainer({selectedFooter}) {
  if (selectedFooter === 'tobook') {
    return (
      <ScrollView>
        <ToBookAccompaniementContent />
      </ScrollView>
    );
  } else if (selectedFooter === 'completed') {
    return (
      <ScrollView>
        <CompletedAccompaniementContent />
      </ScrollView>
    );
  }
  return (
    <ScrollView>
      <InProgressAccompaniementContent />
    </ScrollView>
  );
}

function Accompaniement() {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedFooter, setSelectedFooter] = useState('inprogress');
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={{height: Dimensions.get('window').height}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Navbar title="Accompagnement" />
      <ScrollView>
        <AccompaniementContainer selectedFooter={selectedFooter} />
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={
            selectedFooter === 'inprogress'
              ? styles.selectedFooter
              : styles.unselectedFooter
          }
          onPress={() => setSelectedFooter('inprogress')}>
          <Text
            style={
              selectedFooter === 'inprogress'
                ? styles.selectedFooterText
                : styles.unselectedFooterText
            }>
            En cours
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selectedFooter === 'tobook'
              ? styles.selectedFooter
              : styles.unselectedFooterCenter
          }
          onPress={() => setSelectedFooter('tobook')}>
          <Text
            style={
              selectedFooter === 'tobook'
                ? styles.selectedFooterText
                : styles.unselectedFooterText
            }>
            À réserver
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selectedFooter === 'completed'
              ? styles.selectedFooter
              : styles.unselectedFooter
          }
          onPress={() => setSelectedFooter('completed')}>
          <Text
            style={
              selectedFooter === 'completed'
                ? styles.selectedFooterText
                : styles.unselectedFooterText
            }>
            Terminées
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  accompaniementContent: {
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
  imgContainer: {
    width: '100%',
    height: 400,
    paddingTop: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  emoji: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  imgName: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    fontWeight: 600,
    fontSize: 28,
    lineHeight: 34,
    fontFamily: 'Montserrat',
    color: '#FFFFFF',
  },
  stateCardContainer: {
    flexDirection: 'row',
    overflowX: 'scroll',
    marginTop: 20,
    width: Dimensions.get('window').width,
  },
  stateCard: {
    width: 179,
    height: 92,
    backgroundColor: '#E9EDFC',
    borderRadius: 20,
    marginRight: 12,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(9, 13, 109, 0.4)',
        shadowOffset: {
          width: 0,
          height: 15,
        },
        shadowOpacity: 0.1,
        shadowRadius: 20,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  stateTitle: {
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 15,
    fontFamily: 'Montserrat',
    color: '#1A2442',
    textAlign: 'center',
    marginTop: 8,
  },
  stateCardContent: {
    flexDirection: 'row',
  },
  stateCardTimeContainer: {
    marginTop: 8,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    width: 72,
    height: 51,
    elevation: 5,
    shadowColor: '#090d6d',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  stateCardRContainer: {
    marginTop: 8,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    width: 158,
    height: 51,
    elevation: 5,
    shadowColor: '#090d6d',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  stateCardTime: {
    color: '#9154FD',
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 37,
    fontFamily: 'Montserrat',
    textAlign: 'center',
    marginTop: 7,
  },
  stateCardDate: {
    color: '#9154FD',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 15,
    fontFamily: 'Montserrat',
    textAlign: 'center',
    marginTop: 28,
  },
  selectedStateCardNumberContainer: {
    marginTop: 13,
    marginBottom: 17,
    width: 37,
    height: 37,
    elevation: 5,
    shadowColor: '#090d6d',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  selectedStateCardNumber: {
    color: '#9154FD',
    fontWeight: 500,
    fontSize: 22,
    lineHeight: 27,
    fontFamily: 'Montserrat',
    textAlign: 'center',
    marginTop: 4,
  },
  stateCardNumber: {
    color: '#9154FD',
    fontWeight: 500,
    fontSize: 22,
    lineHeight: 27,
    fontFamily: 'Montserrat',
    textAlign: 'center',
    opacity: 0.3,
  },
  stateCardNumberContainer: {
    marginTop: 18,
    width: 35,
    height: 37,
    marginBottom: 22,
  },
  personCardContainer: {
    flexDirection: 'row',
    overflowX: 'scroll',
    marginTop: 35,
    width: Dimensions.get('window').width,
  },
  toBookCardContainer: {
    flexDirection: 'row',
    overflowX: 'scroll',
    width: Dimensions.get('window').width,
    marginTop: 10,
  },
  selectedPersonCard: {
    width: 350,
    height: 209,
    backgroundColor: '#E9EDFC',
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#9154FD',
    borderStyle: 'solid',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(145, 84, 253, 0.4)',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  personCard: {
    width: 350,
    height: 209,
    backgroundColor: '#E9EDFC',
    borderRadius: 20,
    marginRight: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(145, 84, 253, 0.4)',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  topPersonCardContainer: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    width: 326,
    height: 72,
    elevation: 5,
    shadowColor: '#090d6d',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  topPersonCardContent: {
    flexDirection: 'row',
    marginTop: 12,
  },
  topPersonCardContentLeft: {
    position: 'absolute',
    left: 15,
    color: '#1A2442',
    fontWeight: 600,
    fontSize: 28,
    lineHeight: 28,
    textTransform: 'uppercase',
  },
  greenTopPersonCardContentRight: {
    position: 'absolute',
    right: 10,
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
    right: 10,
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
    right: 10,
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
  topPersonCardContentRightText: {
    marginTop: 2,
    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 17,
  },
  topPersonCardContentName: {
    marginTop: 30,
    marginLeft: 15,
    color: '#9BA5BF',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 20,
  },
  infoPersonCard: {
    marginTop: 15,
    marginLeft: 14,
    color: '#1A2442',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
  },
  bottomPersonCard: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    width: '100%',
    height: 30,
  },
  bottomPersonCardLeft: {
    position: 'absolute',
    left: 14,
    bottom: 6,
    width: 100,
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14,
    color: '#1A2442',
  },
  bottomPersonCardRight: {
    position: 'absolute',
    right: 10,
    bottom: 1,
    elevation: 5,
    shadowColor: '#090d6d',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    height: 42,
    width: 198,
    flexDirection: 'row',
    paddingLeft: 12,
  },
  bottomPersonCardDate: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 16,
    color: '#9154FD',
    marginTop: 15,
  },
  bottomPersonCardTime: {
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 18,
    color: '#9154FD',
    marginTop: 15,
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
  toBookTitleContainer: {
    width: 'auto',
  },
  toBookTitle: {
    color: '#1A2442',
    marginTop: 30,
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 32,
    marginLeft: 15,
    marginRight: 15,
  },
  tradingCardTitle: {
    color: '#9BA5BF',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
    marginTop: 25,
    marginLeft: 15,
  },
  topPersonCardContainerWithoutName: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    width: 330,
    height: 46,
    elevation: 5,
    shadowColor: '#090d6d',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  sessionNumberContainer: {
    width: 101,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    left: 10,
    bottom: 0,
    alignItems: 'center',
    elevation: 20,
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {width: 0, height: 15},
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  sessionNumber: {
    marginTop: 9,
    color: '#9154FD',
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 18,
  },
  sessionDateContainer: {
    width: 110,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    right: 10,
    bottom: 0,
    alignItems: 'center',
    elevation: 20,
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {width: 0, height: 15},
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  toBookButton: {
    position: 'absolute',
    right: 10,
    bottom: 0,
    backgroundColor: '#9154FD',
    width: 108,
    height: 38,
    borderRadius: 10,
    shadowColor: 'rgba(145, 84, 253, 0.6)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 6,
    alignItems: 'center',
  },
  toBookButtonText: {
    color: '#FFFFFF',
    marginTop: 9,
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 18,
  },
});

export default Accompaniement;
