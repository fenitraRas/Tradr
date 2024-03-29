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

import Calendar from '../assets/icons/calendar.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import WinkingFace from '../assets/icons/winkingFace.svg';
import {formStyles} from '../assets/css/form';
import {indexStyles} from '../assets/css';
import theme from '../assets/theme';
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

function buttonByType(type) {
  switch (type) {
    case 'beginner':
      return (
        <View style={[styles.greenTopPersonCardContentRight]}>
          <Text style={styles.topPersonCardContentRightText}>Débutant</Text>
        </View>
      );
      break;
    case 'intermediate':
      return (
        <View style={[styles.orangeTopPersonCardContentRight]}>
          <Text style={styles.topPersonCardContentRightText}>
            Intermédiaire
          </Text>
        </View>
      );
      break;
    case 'confirmed':
      return (
        <View style={[styles.redTopPersonCardContentRight]}>
          <Text style={styles.topPersonCardContentRightText}>Confirmé</Text>
        </View>
      );
      break;
    default:
      return (
        <View style={[styles.greenTopPersonCardContentRight]}>
          <Text style={styles.topPersonCardContentRightText}>Débutant</Text>
        </View>
      );
  }
}

function subtitleByType(type) {
  switch (type) {
    case 'beginner':
      return "Plan d'action simplifié";
      break;
    case 'intermediate':
      return "Plan d'action avancé";
      break;
    case 'confirmed':
      return "Plan d'action personnalisé";
      break;
    default:
      return "Plan d'action simplifié";
  }
}

function getSelectedAccompaniement(list, id) {
  return list.find(el => el.id === id);
}

function InProgressAccompaniementContent(props) {
  const [selectedAccompaniementId, setAccompaniementId] = useState(1);
  const accompaniements = [
    {
      id: 1,
      owner_id: 1,
      owner: 'Maxime Legrand',
      name: 'TRADING',
      type: 'beginner',
      description: 'Session individuelle de 45 minutes.',
      at: {date: '23.03.2023', time: '10h00'},
      next_session: {date: '25.03.2023', time: '10h'},
      current_exercise: 2,
      remaining_session: 1,
      finished_session: 4,
    },
    {
      id: 2,
      owner_id: 2,
      owner: 'Léna Forelle',
      name: 'ECONOMIE',
      type: 'intermediate',
      description: 'Session individuelle de 1 heure.',
      at: {date: '26.03.2023', time: '11h00'},
      next_session: {date: '27.03.2023', time: '12h'},
      current_exercise: 3,
      remaining_session: 2,
      finished_session: 3,
    },
    {
      id: 3,
      owner_id: 3,
      owner: 'Inès Dore',
      name: 'PLACEMENT',
      type: 'confirmed',
      description: 'Session individuelle de 1 heure et 30 minutes.',
      at: {date: '24.03.2023', time: '12h00'},
      next_session: {date: '27.03.2023', time: '14h'},
      current_exercise: 1,
      remaining_session: 4,
      finished_session: 1,
    },
  ];

  const selectedAccompaniement = getSelectedAccompaniement(
    accompaniements,
    selectedAccompaniementId,
  );
  return (
    <View style={[props.classes.accompaniementContent, indexStyles.shadowProp]}>
      <View style={[styles.imgContainer]}>
        <Image
          source={require('../assets/video/maxime.png')}
          style={styles.image}
        />
        <Text style={styles.imgName}>{selectedAccompaniement.owner}</Text>
        <Image source={require('../assets/emoji.png')} style={styles.emoji} />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={[styles.stateCardContainer]}>
        <View style={[props.classes.stateCard]}>
          <Text style={props.classes.stateTitle}>Prochaine séance</Text>
          <View style={[styles.stateCardContent]}>
            <View style={[props.classes.stateCardTimeContainer]}>
              <Text style={styles.stateCardTime}>
                {selectedAccompaniement.next_session.time}
              </Text>
            </View>
            <Text style={styles.stateCardDate}>
              {selectedAccompaniement.next_session.date}
            </Text>
          </View>
        </View>
        <View style={[props.classes.stateCard]}>
          <Text style={props.classes.stateTitle}>Exercice en cours</Text>
          <View style={[styles.stateCardContent]}>
            {[1, 2, 3, 4, 5].map(i => {
              return (
                <View
                  key={i}
                  style={
                    selectedAccompaniement.current_exercise === i
                      ? props.classes.selectedStateCardNumberContainer
                      : styles.stateCardNumberContainer
                  }>
                  <Text
                    style={
                      selectedAccompaniement.current_exercise === i
                        ? styles.selectedStateCardNumber
                        : styles.stateCardNumber
                    }>
                    {i}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={[props.classes.stateCard]}>
          <Text style={props.classes.stateTitle}>Séances restantes</Text>
          <View style={[props.classes.stateCardRContainer]}>
            <Text style={styles.stateCardTime}>
              {selectedAccompaniement.remaining_session}
            </Text>
          </View>
        </View>
        <View style={[props.classes.stateCard]}>
          <Text style={props.classes.stateTitle}>Séances terminées</Text>
          <View style={[props.classes.stateCardRContainer]}>
            <Text style={styles.stateCardTime}>
              {selectedAccompaniement.finished_session}
            </Text>
          </View>
        </View>
      </ScrollView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={[styles.personCardContainer]}>
        {accompaniements.map(a => {
          return (
            <TouchableOpacity
              key={a.id}
              onPress={() => setAccompaniementId(a.id)}
              style={
                selectedAccompaniementId === a.id
                  ? props.classes.selectedPersonCard
                  : props.classes.personCard
              }>
              <View style={[props.classes.topPersonCardContainer]}>
                <View style={[styles.topPersonCardContent]}>
                  <Text style={props.classes.topPersonCardContentLeft}>
                    {a.name}
                  </Text>
                  {buttonByType(a.type)}
                  <Text style={styles.topPersonCardContentName}>{a.owner}</Text>
                </View>
              </View>
              <Text style={props.classes.infoPersonCard}>{a.description}</Text>
              <View style={[styles.bottomPersonCard]}>
                <Text style={props.classes.bottomPersonCardLeft}>
                  {subtitleByType(a.type)}
                </Text>
                <View style={[props.classes.bottomPersonCardRight]}>
                  <Text style={styles.bottomPersonCardDate}>{a.at.date}</Text>
                  <Text style={styles.bottomPersonCardDate}> à </Text>
                  <Text style={styles.bottomPersonCardTime}>{a.at.time}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

function getAccompaniementsByType(list, type) {
  return list.filter(elm => elm.type === type);
}

function ToBookAccompaniementContent(props) {
  const toBookAccompaniements = [
    {
      id: 1,
      name: 'TRADING',
      type: 'beginner',
      description: 'Session individuelle de 45 minutes avec un coach.',
      session_number: 4,
    },
    {
      id: 2,
      name: 'TRADING',
      type: 'beginner',
      description: 'Session individuelle de 45 minutes avec un coach.',
      session_number: 6,
    },
    {
      id: 3,
      name: 'ECONOMIE',
      type: 'intermediate',
      description: 'Session individuelle de 1 heure avec un coach.',
      session_number: 5,
    },
    {
      id: 4,
      name: 'PLACEMENT',
      type: 'intermediate',
      description: 'Session individuelle de 1 heure avec un coach.',
      session_number: 5,
    },
    {
      id: 5,
      name: 'TRADING',
      type: 'intermediate',
      description: 'Session individuelle de 1 heure avec un coach.',
      session_number: 8,
    },
    {
      id: 6,
      name: 'FOREX',
      type: 'confirmed',
      description: 'Session individuelle de 1 heure avec un coach.',
      session_number: 4,
    },
    {
      id: 7,
      name: 'FTMO TRADER',
      type: 'confirmed',
      description: 'Session individuelle de 1 heure avec un coach.',
      session_number: 3,
    },
    {
      id: 8,
      name: 'PLACEMENT',
      type: 'confirmed',
      description: 'Session individuelle de 1 heure avec un coach.',
      session_number: 6,
    },
  ];
  return (
    <View style={[props.classes.accompaniementContent, indexStyles.shadowProp]}>
      <View style={styles.toBookTitleContainer}>
        <Text style={props.classes.toBookTitle}>
          N'hésite plus et réserve ta séance !
          <Calendar width={26} height={26} style={{marginLeft: 10}} />
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.tradingCardTitle}>Pour bien commencer</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[styles.toBookCardContainer]}>
          {getAccompaniementsByType(toBookAccompaniements, 'beginner').map(
            e => {
              return (
                <View key={e.id} style={[props.classes.personCard]}>
                  <View
                    style={[props.classes.topPersonCardContainerWithoutName]}>
                    <View style={[styles.topPersonCardContent]}>
                      <Text style={props.classes.topPersonCardContentLeft}>
                        {e.name}
                      </Text>
                      <View style={[styles.greenTopPersonCardContentRight]}>
                        <Text style={styles.topPersonCardContentRightText}>
                          Débutant
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Text style={props.classes.infoPersonCard}>
                    {e.description}
                  </Text>
                  <View style={[styles.bottomPersonCard]}>
                    <View style={[props.classes.sessionNumberContainer]}>
                      <Text style={styles.sessionNumber}>
                        {e.session_number} séances
                      </Text>
                    </View>
                    <TouchableOpacity style={[styles.toBookButton]}>
                      <Text style={styles.toBookButtonText}>Réserver</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            },
          )}
        </ScrollView>

        {/* intermediaire */}

        <Text style={styles.tradingCardTitle}>Des séances avancées</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[styles.toBookCardContainer]}>
          {getAccompaniementsByType(toBookAccompaniements, 'intermediate').map(
            e => {
              return (
                <View key={e.id} style={[props.classes.personCard]}>
                  <View
                    style={[props.classes.topPersonCardContainerWithoutName]}>
                    <View style={[styles.topPersonCardContent]}>
                      <Text style={props.classes.topPersonCardContentLeft}>
                        {e.name}
                      </Text>
                      <View style={[styles.orangeTopPersonCardContentRight]}>
                        <Text style={styles.topPersonCardContentRightText}>
                          Intermédiaire
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Text style={props.classes.infoPersonCard}>
                    {e.description}
                  </Text>
                  <View style={[styles.bottomPersonCard]}>
                    <View style={[props.classes.sessionNumberContainer]}>
                      <Text style={styles.sessionNumber}>
                        {e.session_number} séances
                      </Text>
                    </View>
                    <TouchableOpacity style={[styles.toBookButton]}>
                      <Text style={styles.toBookButtonText}>Réserver</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            },
          )}
        </ScrollView>

        {/* Confirmé */}

        <Text style={styles.tradingCardTitle}>Pour les plus compétiteurs</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[styles.toBookCardContainer]}>
          {getAccompaniementsByType(toBookAccompaniements, 'confirmed').map(
            e => {
              return (
                <View key={e.id} style={[props.classes.personCard]}>
                  <View
                    style={[props.classes.topPersonCardContainerWithoutName]}>
                    <View style={[styles.topPersonCardContent]}>
                      <Text style={props.classes.topPersonCardContentLeft}>
                        {e.name}
                      </Text>
                      <View style={[styles.redTopPersonCardContentRight]}>
                        <Text style={styles.topPersonCardContentRightText}>
                          Confirmé
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Text style={props.classes.infoPersonCard}>
                    {e.description}
                  </Text>
                  <View style={[styles.bottomPersonCard]}>
                    <View style={[props.classes.sessionNumberContainer]}>
                      <Text style={styles.sessionNumber}>
                        {e.session_number} séances
                      </Text>
                    </View>
                    <TouchableOpacity style={[styles.toBookButton]}>
                      <Text style={styles.toBookButtonText}>Premium</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            },
          )}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

function getAccompaniementsByOwner(list, owner_id) {
  return list.filter(elm => elm.owner_id === owner_id);
}

function CompletedAccompaniementContent(props) {
  const completedAccompaniements = [
    {
      id: 1,
      owner_id: 1,
      name: 'TRADING',
      type: 'beginner',
      description: 'Session individuelle de 45 minutes avec un coach.',
      session_number: 4,
      current_session: 2,
      date: '12.03.2023',
    },
    {
      id: 2,
      owner_id: 1,
      name: 'TRADING',
      type: 'beginner',
      description: 'Session individuelle de 45 minutes avec un coach.',
      session_number: 6,
      current_session: 1,
      date: '22.03.2023',
    },
    {
      id: 3,
      owner_id: 2,
      name: 'ECONOMIE',
      type: 'intermediate',
      description: 'Session individuelle de 1 heure',
      session_number: 5,
      current_session: 4,
      date: '22.03.2023',
    },
    {
      id: 4,
      owner_id: 2,
      name: 'ECONOMIE',
      type: 'intermediate',
      description: 'Session individuelle de 1 heure',
      session_number: 6,
      current_session: 1,
      date: '11.03.2023',
    },
    {
      id: 5,
      owner_id: 3,
      name: 'PLACEMENT',
      type: 'confirmed',
      description: 'Session individuelle de 1 heure',
      session_number: 5,
      current_session: 2,
      date: '18.03.2023',
    },
    {
      id: 6,
      owner_id: 3,
      name: 'PLACEMENT',
      type: 'confirmed',
      description: 'Session individuelle de 1 heure',
      session_number: 5,
      current_session: 1,
      date: '10.03.2023',
    },
  ];
  return (
    <View style={[props.classes.accompaniementContent, indexStyles.shadowProp]}>
      <View style={styles.toBookTitleContainer}>
        <Text style={props.classes.toBookTitle}>
          Un historique de tes super cours !
          <WinkingFace width={26} height={26} style={{marginLeft: 10}} />
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{maxHeight: 260}}>
        <Text style={styles.tradingCardTitle}>Maxime Legrand</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[styles.toBookCardContainer]}>
          {getAccompaniementsByOwner(completedAccompaniements, 1).map(e => {
            return (
              <View key={e.id} style={[props.classes.personCard]}>
                <View style={[props.classes.topPersonCardContainerWithoutName]}>
                  <View style={[styles.topPersonCardContent]}>
                    <Text style={props.classes.topPersonCardContentLeft}>
                      {e.name}
                    </Text>
                    {buttonByType(e.type)}
                  </View>
                </View>
                <Text style={props.classes.infoPersonCard}>
                  {e.description}
                </Text>
                <View style={[styles.bottomPersonCard]}>
                  <View style={[props.classes.sessionNumberContainer]}>
                    <Text style={styles.sessionNumber}>Séances </Text>
                    <Text style={styles.boldSessionNumber}>
                      {e.current_session}
                    </Text>
                    <Text style={styles.sessionNumber}>
                      {' '}
                      /{e.session_number}
                    </Text>
                  </View>
                  <View style={[props.classes.sessionDateContainer]}>
                    <Text style={styles.sessionDate}>{e.date}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false} style={{maxHeight: 260}}>
        <Text style={styles.tradingCardTitle}>Léna Forelle</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[styles.toBookCardContainer]}>
          {getAccompaniementsByOwner(completedAccompaniements, 2).map(e => {
            return (
              <View key={e.id} style={[props.classes.personCard]}>
                <View style={[props.classes.topPersonCardContainerWithoutName]}>
                  <View style={[styles.topPersonCardContent]}>
                    <Text style={props.classes.topPersonCardContentLeft}>
                      {e.name}
                    </Text>
                    {buttonByType(e.type)}
                  </View>
                </View>
                <Text style={props.classes.infoPersonCard}>
                  {e.description}
                </Text>
                <View style={[styles.bottomPersonCard]}>
                  <View style={[props.classes.sessionNumberContainer]}>
                    <Text style={styles.sessionNumber}>Séances </Text>
                    <Text style={styles.boldSessionNumber}>
                      {e.current_session}
                    </Text>
                    <Text style={styles.sessionNumber}>
                      {' '}
                      /{e.session_number}
                    </Text>
                  </View>
                  <View style={[props.classes.sessionDateContainer]}>
                    <Text style={styles.sessionDate}>{e.date}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false} style={{maxHeight: 260}}>
        <Text style={styles.tradingCardTitle}>Inès Dore</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[styles.toBookCardContainer]}>
          {getAccompaniementsByOwner(completedAccompaniements, 3).map(e => {
            return (
              <View key={e.id} style={[props.classes.personCard]}>
                <View style={[props.classes.topPersonCardContainerWithoutName]}>
                  <View style={[styles.topPersonCardContent]}>
                    <Text style={props.classes.topPersonCardContentLeft}>
                      {e.name}
                    </Text>
                    {buttonByType(e.type)}
                  </View>
                </View>
                <Text style={props.classes.infoPersonCard}>
                  {e.description}
                </Text>
                <View style={[styles.bottomPersonCard]}>
                  <View style={[props.classes.sessionNumberContainer]}>
                    <Text style={styles.sessionNumber}>Séances </Text>
                    <Text style={styles.boldSessionNumber}>
                      {e.current_session}
                    </Text>
                    <Text style={styles.sessionNumber}>
                      {' '}
                      /{e.session_number}
                    </Text>
                  </View>
                  <View style={[props.classes.sessionDateContainer]}>
                    <Text style={styles.sessionDate}>{e.date}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

function AccompaniementContainer({classes, selectedFooter}) {
  if (selectedFooter === 'tobook') {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <ToBookAccompaniementContent classes={classes} />
      </ScrollView>
    );
  } else if (selectedFooter === 'completed') {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <CompletedAccompaniementContent classes={classes} />
      </ScrollView>
    );
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <InProgressAccompaniementContent classes={classes} />
    </ScrollView>
  );
}

function Accompaniement() {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const classes = {
    footer: [styles.footer, colorScheme === 'dark' && styles.footerDark],
    accompaniementContent: [
      styles.accompaniementContent,
      colorScheme === 'dark' && styles.accompaniementContentDark,
    ],
    stateCard: [
      styles.stateCard,
      colorScheme === 'dark' && styles.stateCardDark,
    ],
    stateCardTimeContainer: [
      styles.stateCardTimeContainer,
      colorScheme === 'dark' && styles.stateCardTimeContainerDark,
    ],
    stateTitle: [
      styles.stateTitle,
      colorScheme === 'dark' && styles.stateTitleDark,
    ],
    selectedStateCardNumberContainer: [
      styles.selectedStateCardNumberContainer,
      colorScheme === 'dark' && styles.selectedStateCardNumberContainerDark,
    ],
    stateCardRContainer: [
      styles.stateCardRContainer,
      colorScheme === 'dark' && styles.stateCardRContainerDark,
    ],
    topPersonCardContainer: [
      styles.topPersonCardContainer,
      colorScheme === 'dark' && styles.topPersonCardContainerDark,
    ],
    selectedPersonCard: [
      styles.selectedPersonCard,
      colorScheme === 'dark' && styles.selectedPersonCardDark,
    ],
    personCard: [
      styles.personCard,
      colorScheme === 'dark' && styles.personCardDark,
    ],
    topPersonCardContentLeft: [
      styles.topPersonCardContentLeft,
      colorScheme === 'dark' && styles.topPersonCardContentLeftDark,
    ],
    infoPersonCard: [
      styles.infoPersonCard,
      colorScheme === 'dark' && styles.infoPersonCardDark,
    ],
    bottomPersonCardLeft: [
      styles.bottomPersonCardLeft,
      colorScheme === 'dark' && styles.bottomPersonCardLeftDark,
    ],
    bottomPersonCardRight: [
      styles.bottomPersonCardRight,
      colorScheme === 'dark' && styles.bottomPersonCardRightDark,
    ],
    toBookTitle: [
      styles.toBookTitle,
      colorScheme === 'dark' && styles.toBookTitleDark,
    ],
    topPersonCardContainerWithoutName: [
      styles.topPersonCardContainerWithoutName,
      colorScheme === 'dark' && styles.topPersonCardContainerWithoutNameDark,
    ],
    sessionNumberContainer: [
      styles.sessionNumberContainer,
      colorScheme === 'dark' && styles.sessionNumberContainerDark,
    ],
    sessionDateContainer: [
      styles.sessionDateContainer,
      colorScheme === 'dark' && styles.sessionDateContainerDark,
    ],
  };
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedFooter, setSelectedFooter] = useState('inprogress');
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
          title="Accompagnement"
        />
      )}
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        onContentSizeChange={handleContentSizeChange}
        contentOffset={{x: 0, y: 0}}>
        <Menu
          currentScreen="Accompaniement"
          handleScrollToLeft={() => handleScrollToLeft()}
        />
        <AccompaniementContainer
          classes={classes}
          selectedFooter={selectedFooter}
        />
      </ScrollView>
      {!scrollToMenu ? (
        <View style={classes.footer}>
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
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  accompaniementContent: {
    width: Dimensions.get('window').width,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
    paddingBottom: 14,
    height:
      Platform.OS === 'android'
        ? Dimensions.get('window').height + 130
        : Dimensions.get('window').height + 180,
  },
  accompaniementContentDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
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
    maxHeight: 102,
    paddingBottom: 10,
  },
  stateCard: {
    width: 179,
    height: 92,
    backgroundColor: theme.colors.component.$cardLight,
    borderRadius: 20,
    marginRight: 12,
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
  stateCardDark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  stateTitle: {
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 15,
    fontFamily: 'Montserrat',
    color: theme.colors.text.$textLight,
    textAlign: 'center',
    marginTop: 8,
  },
  stateTitleDark: {
    color: theme.colors.text.$textDark,
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
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
  },
  stateCardTimeContainerDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
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
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
  },
  stateCardRContainerDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
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
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
  },
  selectedStateCardNumberContainerDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
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
    marginTop: 25,
    width: Dimensions.get('window').width,
  },
  toBookCardContainer: {
    flexDirection: 'row',
    overflowX: 'scroll',
    width: Dimensions.get('window').width,
    marginTop: 10,
    paddingBottom: 10,
  },
  selectedPersonCard: {
    width: 350,
    height: 209,
    backgroundColor: theme.colors.component.$cardLight,
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
  selectedPersonCardDark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  personCard: {
    width: 350,
    height: 209,
    backgroundColor: theme.colors.component.$cardLight,
    borderRadius: 20,
    marginRight: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#090d6d',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  personCardDark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  topPersonCardContainer: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    width: 326,
    height: 72,
    elevation: 5,
    shadowColor: '#090d6d',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
  },
  topPersonCardContainerDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  topPersonCardContent: {
    flexDirection: 'row',
    marginTop: 12,
  },
  topPersonCardContentLeft: {
    position: 'absolute',
    left: 15,
    color: theme.colors.text.$textLight,
    fontWeight: 600,
    fontSize: 28,
    lineHeight: 28,
    textTransform: 'uppercase',
  },
  topPersonCardContentLeftDark: {
    color: theme.colors.text.$textDark,
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
    shadowOpacity: 0.6,
    shadowRadius: 3,
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
    shadowOpacity: 0.6,
    shadowRadius: 3,
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
    color: theme.colors.text.$textLight,
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
  },
  infoPersonCardDark: {
    color: theme.colors.text.$textDark,
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
    color: theme.colors.text.$textLight,
  },
  bottomPersonCardLeftDark: {
    color: theme.colors.text.$textDark,
  },
  bottomPersonCardRight: {
    position: 'absolute',
    right: 10,
    bottom: 1,
    elevation: 5,
    shadowColor: '#090d6d',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    height: 42,
    width: 198,
    flexDirection: 'row',
    paddingLeft: 12,
  },
  bottomPersonCardRightDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
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
  toBookTitleContainer: {
    width: 'auto',
  },
  toBookTitle: {
    color: theme.colors.text.$textLight,
    marginTop: 30,
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 32,
    marginLeft: 15,
    marginRight: 15,
  },
  toBookTitleDark: {
    color: theme.colors.text.$textDark,
  },
  tradingCardTitle: {
    color: '#9BA5BF',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
    marginTop: 15,
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
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
  },
  topPersonCardContainerWithoutNameDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  sessionNumberContainer: {
    flexDirection: 'row',
    width: 101,
    height: 38,
    borderRadius: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    position: 'absolute',
    left: 10,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  sessionNumberContainerDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  sessionNumber: {
    color: '#9154FD',
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
  },
  boldSessionNumber: {
    color: '#9154FD',
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
  },
  sessionDateContainer: {
    width: 110,
    height: 38,
    borderRadius: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    position: 'absolute',
    right: 10,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
  sessionDateContainerDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  sessionDate: {
    // marginTop: 9,
    color: '#9154FD',
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
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
    shadowOpacity: 0.8,
    shadowRadius: 4,
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
