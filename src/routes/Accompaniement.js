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
import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import {formStyles} from '../assets/css/form';
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

function AccompaniementContent() {
  return (
    <View style={[styles.accompaniementContent, styles.shadowProp]}>
      <View style={[styles.imgContainer]}>
        <Image
          source={require('../assets/video/maxime.jpg')}
          style={styles.image}
        />
        <Text style={styles.imgName}>Maxime</Text>
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
        <View style={[styles.selectedPersonCard]}>
          <View style={[styles.topPersonCardContainer]}>
            <View style={[styles.topPersonCardContent]}>
              <Text style={styles.topPersonCardContentLeft}>TRADING</Text>
              <View style={[styles.topPersonCardContentRight]}>
                <Text>Débutant</Text>
              </View>
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
              <Text>23 . 03 . 2023</Text>
              <Text> à </Text>
              <Text>10h00</Text>
            </View>
          </View>
        </View>
        <View style={[styles.personCard]}>
          <Text>test</Text>
        </View>
      </ScrollView>
    </View>
  );
}

function AccompaniementContainer() {
  return (
    <ScrollView>
      <AccompaniementContent />
    </ScrollView>
  );
}

function Accompaniement() {
  const isDarkMode = useColorScheme() === 'dark';
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
        <AccompaniementContainer />
      </ScrollView>
      <View style={styles.footer}>
        <Text>footer</Text>
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
  },
  topPersonCardContentRight: {
    position: 'absolute',
    right: 10,
  },
  topPersonCardName: {},
  infoPersonCard: {},
  bottomPersonCard: {
    flexDirection: 'row',
    position: 'absolute',
    // left: 10,
    bottom: 10,
    // right: 10,
    width: '100%',
    height: 30,
  },
  bottomPersonCardLeft: {
    position: 'absolute',
    left: 14,
    bottom: 4,
    width: 100,
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
    width: 210,
    flexDirection: 'row',
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
  },
});

export default Accompaniement;
