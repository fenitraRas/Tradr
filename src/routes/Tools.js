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
  TextInput as RNTextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Menu, {NavbarMenu} from './Menu';
import MyTextInput from '../Components/TextInput';

import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
import Rocket from '../assets/icons/rocket.svg';
import ComponentRemove from '../assets/icons/componentRemove.svg';
import ComponentAdd from '../assets/icons/componentAdd.svg';
import ArrowDesc from '../assets/icons/arrowDesc.svg';

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

function TradingPlan() {
  return (
    <ScrollView style={[styles.toolsContent, styles.shadowProp]}>
      <View style={styles.toolsTitleContainer}>
        <Text style={styles.toolsTitle2}>À faire avant chaque session</Text>
      </View>
      <View style={styles.tendencyCard}>
        <Text style={styles.tendencyCardTitle}>Déterminer une tendance</Text>
        <View style={styles.tendencyContainer}>
          <View style={[styles.inputContainer]}>
            <RNTextInput
              style={styles.inputStyle}
              placeholder="Déterminer la tendance de fond"
              placeholderTextColor="#9BA5BF"
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          <TouchableOpacity>
            <ComponentAdd width={48} height={48} style={styles.addItem} />
          </TouchableOpacity>
        </View>
        <Text style={styles.tendencyCardTitle}>Vos tendances</Text>
        <View style={styles.tendencyContainer}>
          <View style={styles.tendencyItem}>
            <Text style={styles.tendencyItemText}>
              Déterminer la tendance de fond
            </Text>
          </View>
          <TouchableOpacity>
            <ComponentRemove width={35} height={35} style={styles.removeItem} />
          </TouchableOpacity>
        </View>
        <View style={styles.tendencyContainer}>
          <View style={styles.tendencyItem}>
            <Text style={styles.tendencyItemText}>
              Déterminer la tendance de fond
            </Text>
          </View>
          <TouchableOpacity>
            <ComponentRemove width={35} height={35} style={styles.removeItem} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Etape 1 */}
      <View style={styles.stepTitleContainer}>
        <View style={styles.stepTitle}>
          <Text style={styles.stepTitleText}>Étape 1</Text>
        </View>
      </View>
      <Text style={styles.toolsTitle2}>
        Votre objectif de gestion de risque
      </Text>
      <View style={styles.objectiveCard}>
        <View style={styles.objectiveItemContainer}>
          <View style={styles.objectiveItemLeft}>
            <Text style={styles.objectiveItemLeftTopText}>
              Objectif de gains journalier
            </Text>
            <Text style={styles.objectiveItemLeftBottomText}>
              (1% de mon capital, 20 pips ...)
            </Text>
          </View>
          <View style={styles.percentageItemContainer}>
            <Text style={styles.percentageItemText}>1%</Text>
          </View>
        </View>
        <View style={styles.objectiveItemContainer}>
          <View style={styles.objectiveItemLeft}>
            <Text style={styles.objectiveItemLeftTopText}>
              Taille de position - Niveau de risque par trade
            </Text>
            <Text style={styles.objectiveItemLeftBottomText}>
              (0.5%, 1% du capital ...)
            </Text>
          </View>
          <View style={styles.percentageItemContainer}>
            <Text style={styles.percentageItemText}>0.5%</Text>
          </View>
        </View>
        <View style={styles.objectiveItemContainer}>
          <View style={styles.objectiveItemLeft}>
            <Text style={styles.objectiveItemLeftTopText}>
              Nombre de pertes consécutives acceptables
            </Text>
            <Text style={styles.objectiveItemLeftBottomText}>
              (entre 3 et 10)
            </Text>
          </View>
          <View style={styles.percentageItemContainer}>
            <Text style={styles.percentageItemText}>4%</Text>
          </View>
        </View>
        <View style={styles.objectiveItemContainer}>
          <View style={styles.objectiveItemLeft}>
            <Text style={styles.objectiveItemLeftTopText}>
              Arrêt de la session de trading si perte supérieur à X% du capital
            </Text>
          </View>
          <View style={styles.percentageItemContainer}>
            <Text style={styles.percentageItemText}>2%</Text>
          </View>
        </View>
      </View>

      {/* Etape 2 */}
      <View style={styles.stepTitleContainer}>
        <View style={styles.stepTitle}>
          <Text style={styles.stepTitleText}>Étape 2</Text>
        </View>
      </View>
      <Text style={styles.toolsTitle2}>Règle de votre stratégie gagnante</Text>
      <View style={styles.ruleCard}>
        <Text style={styles.tendencyCardTitle}>
          Quelle stratégie utilisez-vous?
        </Text>
        <View style={[styles.fullInputContainer]}>
          <RNTextInput
            style={styles.fullInputStyle}
            autoCapitalize="none"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            value="DAYTRADR PRO"
          />
        </View>

        <Text style={styles.tendencyCardTitle}>
          Quels indicaterr(s) technique(s) ?
        </Text>
        <View style={styles.tendencyContainer}>
          <View style={[styles.inputContainer]}>
            <RNTextInput
              style={styles.inputStyle}
              placeholder="DAYTRADR PRO"
              placeholderTextColor="#9BA5BF"
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          <TouchableOpacity>
            <ComponentAdd width={48} height={48} style={styles.addItem} />
          </TouchableOpacity>
        </View>
        <View style={styles.tendencyContainer}>
          <View style={styles.tendencyItem}>
            <Text style={styles.tendencyItemText}>DAYTRADR PRO</Text>
          </View>
          <TouchableOpacity>
            <ComponentRemove width={35} height={35} style={styles.removeItem} />
          </TouchableOpacity>
        </View>

        <Text style={styles.tendencyCardTitle}>
          Sur Quelle unité de temps allez-vous trader ?
        </Text>
        <Text style={styles.indication}>(M1, M15, H1, H4...)</Text>
        <View style={[styles.fullInputContainer]}>
          <RNTextInput
            style={styles.fullInputStyle}
            autoCapitalize="none"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            value="M15"
          />
        </View>

        <Text style={styles.tendencyCardTitle}>Valeur d'un Pips</Text>
        <View style={[styles.fullInputContainer]}>
          <RNTextInput
            style={styles.fullInputStyle}
            autoCapitalize="none"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            value="0.5€ ou 1€"
          />
        </View>

        <Text style={styles.tendencyCardTitle}>Horaires de session</Text>
        <View style={styles.timeRangeContainer}>
          <View style={[styles.litleInputContainer]}>
            <RNTextInput
              style={styles.litleInputStyle}
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              value="12h30"
            />
          </View>
          <Text
            style={[
              styles.tendencyCardTitle,
              {marginRight: 10, marginTop: 20},
            ]}>
            à
          </Text>
          <View style={[styles.litleInputContainer]}>
            <RNTextInput
              style={styles.litleInputStyle}
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              value="14h30"
            />
          </View>
          <TouchableOpacity>
            <ComponentAdd
              width={48}
              height={48}
              style={[styles.addItem, {marginLeft: -10}]}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tendencyContainer}>
          <View style={styles.litleTendencyItem}>
            <Text style={styles.litleTendencyItemText}>10h30-12h30</Text>
          </View>
          <TouchableOpacity>
            <ComponentRemove width={35} height={35} style={styles.removeItem} />
          </TouchableOpacity>
        </View>

        <Text style={styles.tendencyCardTitle}>Sens de vos trades</Text>
        <Text style={styles.indication}>(tendance ou contre-tendance)</Text>
        <View style={[styles.fullInputContainer]}>
          <RNTextInput
            style={styles.fullInputStyle}
            autoCapitalize="none"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            value="Toujours en tendance"
          />
        </View>

        <Text style={styles.tendencyCardTitle}>
          Utilisation d'un Stop Loss de Protection ?
        </Text>
        <View style={[styles.fullInputContainer]}>
          <RNTextInput
            style={styles.fullInputStyle}
            autoCapitalize="none"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            value="Qui a chaque position"
          />
        </View>
      </View>

      {/* Etape 3 */}
      <View style={styles.stepTitleContainer}>
        <View style={styles.stepTitle}>
          <Text style={styles.stepTitleText}>Étape 3</Text>
        </View>
      </View>
      <View style={styles.toolsTitleContainer}>
        <Text style={styles.toolsTitle2}>Règle d'ouverture d'un trade</Text>
      </View>
      <View style={styles.tendencyCard2}>
        <Text style={styles.tendencyCardTitle}>Conditions d'achats</Text>
        <View style={styles.tendencyContainer}>
          <View style={[styles.inputContainer]}>
            <RNTextInput
              style={styles.inputStyle}
              placeholder="Ajouter votre règle"
              placeholderTextColor="#9BA5BF"
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          <TouchableOpacity>
            <ComponentAdd width={48} height={48} style={styles.addItem} />
          </TouchableOpacity>
        </View>
        <View style={styles.tendencyContainer}>
          <View style={styles.tendencyItem}>
            <Text style={styles.tendencyItemText}>Une condition d'achat</Text>
          </View>
          <TouchableOpacity>
            <ComponentRemove width={35} height={35} style={styles.removeItem} />
          </TouchableOpacity>
        </View>

        <Text style={styles.tendencyCardTitle}>Conditions de ventes</Text>
        <View style={styles.tendencyContainer}>
          <View style={[styles.inputContainer]}>
            <RNTextInput
              style={styles.inputStyle}
              placeholder="Ajouter votre règle"
              placeholderTextColor="#9BA5BF"
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          <TouchableOpacity>
            <ComponentAdd width={48} height={48} style={styles.addItem} />
          </TouchableOpacity>
        </View>
        <View style={styles.tendencyContainer}>
          <View style={styles.tendencyItem}>
            <Text style={styles.tendencyItemText}>Une condition de vente</Text>
          </View>
          <TouchableOpacity>
            <ComponentRemove width={35} height={35} style={styles.removeItem} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Etape 4 */}
      <View style={styles.stepTitleContainer}>
        <View style={styles.stepTitle}>
          <Text style={styles.stepTitleText}>Étape 4</Text>
        </View>
      </View>
      <View style={styles.toolsTitleContainer}>
        <Text style={styles.toolsTitle2}>Règle de clôture d'un trade</Text>
      </View>
      <View style={styles.tendencyCard2}>
        <Text style={styles.tendencyCardTitle}>Type d'objectif</Text>
        <View style={styles.tendencyContainer}>
          <View style={[styles.inputContainer]}>
            <RNTextInput
              style={styles.inputStyle}
              placeholder="Ajouter votre règle"
              placeholderTextColor="#9BA5BF"
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          <TouchableOpacity>
            <ComponentAdd width={48} height={48} style={styles.addItem} />
          </TouchableOpacity>
        </View>
        <View style={styles.tendencyContainer}>
          <View style={styles.tendencyItem}>
            <Text style={styles.tendencyItemText}>Un type d'objectif</Text>
          </View>
          <TouchableOpacity>
            <ComponentRemove width={35} height={35} style={styles.removeItem} />
          </TouchableOpacity>
        </View>

        <Text style={styles.tendencyCardTitle}>Fermeture en perte</Text>
        <View style={styles.tendencyContainer}>
          <View style={[styles.inputContainer]}>
            <RNTextInput
              style={styles.inputStyle}
              placeholder="Ajouter votre règle"
              placeholderTextColor="#9BA5BF"
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          <TouchableOpacity>
            <ComponentAdd width={48} height={48} style={styles.addItem} />
          </TouchableOpacity>
        </View>
        <View style={styles.tendencyContainer}>
          <View style={styles.tendencyItem}>
            <Text style={styles.tendencyItemText}>Une fermeture en perte</Text>
          </View>
          <TouchableOpacity>
            <ComponentRemove width={35} height={35} style={styles.removeItem} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

function Calculator() {
  return (
    <ScrollView style={[styles.toolsContent, styles.shadowProp]}>
      <View style={styles.traderCard}>
        <View style={styles.traderTextContainer}>
          <Text style={styles.traderText}>TRADER</Text>
        </View>

        <View style={styles.traderCardContent}>
          <View style={styles.traderCardContentLeft}>
            <Text style={styles.traderSubtitle}>Courtier</Text>
            <View style={styles.litleTraderTextContainer}>
              <Text style={styles.litleTraderText}>FTMO</Text>
            </View>
          </View>
          <View style={styles.traderCardContentRight}>
            <Text style={styles.traderSubtitle}>Instrument</Text>
            <View style={styles.litleTraderTextContainer}>
              <Text style={styles.litleTraderText}>GER40</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.traderCard, {marginTop: 30}]}>
        <View style={styles.traderTextContainer}>
          <Text style={styles.traderText}>Mon Capital</Text>
        </View>
        <View style={styles.fullTraderCardContent}>
          <Text style={styles.traderSubtitle}>Montant du capital €</Text>
          <View style={styles.litleTraderTextContainer}>
            <Text style={styles.litleTraderText}>5000 €</Text>
          </View>
        </View>
      </View>

      <View style={[styles.traderCard, {marginTop: 30}]}>
        <View style={styles.traderTextContainer}>
          <Text style={styles.traderText}>Stop Loss de Protection</Text>
        </View>
        <View style={styles.fullTraderCardContent}>
          <Text style={styles.traderSubtitle}>Stop placé à X points/pips</Text>
          <View style={styles.litleTraderTextContainer}>
            <Text style={styles.litleTraderText}>11 points</Text>
          </View>
        </View>
      </View>

      <View style={[styles.traderCard, {marginTop: 30}]}>
        <View style={styles.traderTextContainer}>
          <Text style={styles.traderText}>Le Risque</Text>
        </View>
        <View style={styles.fullTraderCardContent}>
          <Text style={styles.traderSubtitle}>% du risque accepté</Text>
          <View style={styles.litleTraderTextContainer}>
            <Text style={styles.litleTraderText}>1 %</Text>
          </View>
        </View>
      </View>

      <View style={[styles.traderCard, {marginTop: 30, height: 213}]}>
        <View style={styles.traderTextContainer}>
          <Text style={styles.traderText}>Nombre de Micro Lots</Text>
        </View>
        <View style={styles.fullTraderCardContent}>
          <Text style={styles.traderSubtitle}>Valeur du points/pip €</Text>
          <View style={styles.litleTraderTextContainer}>
            <Text style={styles.litleTraderText}>0.10 €</Text>
          </View>
        </View>
        <View style={styles.fullTraderCardContent}>
          <Text style={styles.traderSubtitle}>
            Nombre de micro lots à prendre
          </Text>
          <View style={styles.litleTraderTextContainer}>
            <Text style={styles.litleTraderText}>45.5</Text>
          </View>
        </View>
      </View>

      <View style={[styles.traderCard, {marginTop: 30, height: 213}]}>
        <View style={styles.traderTextContainer}>
          <Text style={styles.traderText}>Objectif</Text>
        </View>
        <View style={styles.fullTraderCardContent}>
          <Text style={styles.traderSubtitle}>Objectif à (en points)</Text>
          <View style={styles.litleTraderTextContainer}>
            <Text style={styles.litleTraderText}>95 points</Text>
          </View>
        </View>
        <View style={styles.fullTraderCardContent}>
          <Text style={styles.traderSubtitle}>Présantant / € le point</Text>
          <View style={styles.litleTraderTextContainer}>
            <Text style={styles.litleTraderText}>4.545</Text>
          </View>
        </View>
      </View>

      <Text style={styles.traderBigText}>Impact / Performances</Text>
      <View style={[styles.traderCard, {marginTop: 10, height: 195}]}>
        <View style={styles.impactSectionContainer}>
          <Text style={styles.impactTextLeft}>Gain prévisionnel €</Text>
          <View style={styles.impactSectionContainerRight}>
            <Text style={styles.percentageItemText}>500.00 €</Text>
          </View>
        </View>
        <View style={styles.impactSectionContainer}>
          <Text style={styles.impactTextLeft}>Perte prévisionnel €</Text>
          <View style={styles.impactSectionContainerRight}>
            <Text style={styles.percentageItemText}>-50.00 €</Text>
          </View>
        </View>
        <View style={styles.impactSectionContainer}>
          <Text style={styles.impactTextLeft}>Niveau de Risk Rendement</Text>
          <View style={styles.impactSectionContainerRight}>
            <Text style={styles.percentageItemText}>8.6</Text>
          </View>
        </View>
        <View style={styles.impactSectionContainer}>
          <Text style={styles.impactTextLeft}>Évolution Capital %</Text>
          <View style={styles.impactSectionContainerRight}>
            <Text style={styles.percentageItemText}>8.6 %</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Sauvegarder</Text>
      </TouchableOpacity>

      <Text style={styles.traderBigText}>Placement du Stop</Text>
      <View style={[styles.traderCard, {marginTop: 10, height: 295}]}></View>
    </ScrollView>
  );
}

function Simulator() {
  return (
    <ScrollView style={[styles.toolsContent, styles.shadowProp]}>
      {/* Etape 1 */}
      <View style={[styles.stepTitleContainer, {marginTop: 30}]}>
        <View style={styles.stepTitle}>
          <Text style={styles.stepTitleText}>Étape 1</Text>
        </View>
      </View>
      <Text style={styles.toolsTitle2}>
        Configurez votre projection de gains sur les marchés financiers
      </Text>
      <View style={[styles.traderCard, {height: 150}]}>
        <View style={styles.cardSection}>
          <View style={styles.cardContentLeft}>
            <Text style={styles.objectiveItemLeftTopText}>
              Montant de votre capital €
            </Text>
          </View>
          <View style={styles.percentageItemContainer}>
            <Text style={styles.percentageItemText}>3000 €</Text>
          </View>
        </View>
        <Text style={styles.sectionText}>
          Augmentation prévisionnelle du capital*
        </Text>
        <Text style={styles.sectionInfo}>
          *Par jour : veuillez entrer une valeur comprise entre 0.5 et 5 %
        </Text>
        <View style={[styles.cardSection, {marginTop: 11}]}>
          <View style={styles.cardContentBottomLeft}>
            <Text style={styles.cardContentBottomLeftText}>1.00</Text>
          </View>
          <View style={styles.cardContentBottomRight}>
            <Text style={styles.cardContentBottomRightText}>
              /jour
              <ArrowDesc width={10} height={4} style={{marginLeft: 15}} />
            </Text>
          </View>
        </View>
      </View>

      {/* Etape 2 */}
      <View style={[styles.stepTitleContainer, {marginTop: 30}]}>
        <View style={styles.stepTitle}>
          <Text style={styles.stepTitleText}>Étape 2</Text>
        </View>
      </View>
      <Text style={styles.toolsTitle2}>
        Tes revenues potentiels grâce aux marchés financiers
      </Text>
      <View style={[styles.traderCard, styles.simulator]}>
        <View style={styles.cardSubtitleSection}>
          <View style={styles.subtitleSectionLeft}>
            <Text style={styles.subtitleSectionLeftText}>
              Voici ce que les marchés vous rapporteraient en seulement
            </Text>
          </View>
          <View style={styles.cardSubtitleSectionRight}>
            <Text style={styles.cardSubtitleSectionRightText}>1 an</Text>
          </View>
        </View>
        <View style={styles.innerCardSection}>
          <View style={styles.innerCardSubtitleContainer}>
            <Text style={styles.innerCardSubtitleText}>Marchés financiers</Text>
          </View>
          <View style={styles.innerCardContent}>
            <View style={styles.innerCardContentLeft}>
              <Text style={[styles.innerCardNumber, {color: '#9154FD'}]}>
                150€
              </Text>
              <Text style={[styles.innerCardText]}>tes gains</Text>
            </View>
            <View style={styles.innerCardContentRight}>
              <Text style={[styles.innerCardNumber, {color: '#9154FD'}]}>
                5%
              </Text>
              <Text style={[styles.innerCardText]}>ta rentabilité</Text>
            </View>
          </View>
        </View>
        <View style={[styles.innerCardSection, {marginTop: 10}]}>
          <View style={styles.innerCardSubtitleContainer}>
            <Text style={styles.innerCardSubtitleText}>Marchés financiers</Text>
          </View>
          <View style={styles.innerCardContent}>
            <View style={styles.innerCardContentLeft}>
              <Text style={[styles.innerCardNumber, {color: '#7AC84A'}]}>
                14 987.38€
              </Text>
              <Text style={[styles.innerCardText]}>tes gains</Text>
            </View>
            <View style={styles.innerCardContentRight}>
              <Text style={[styles.innerCardNumber, {color: '#7AC84A'}]}>
                498.45%
              </Text>
              <Text style={styles.innerCardText}>ta rentabilité</Text>
            </View>
          </View>
        </View>

        <View style={[styles.innerCardSection, styles.graphSection]}>
          <Text>GRAPHIQUE A INSERER</Text>
        </View>

        {/* 2 ans */}
        <View style={[styles.cardSubtitleSection, {marginTop: 30}]}>
          <View style={styles.subtitleSectionLeft2}>
            <Text style={styles.subtitleSectionLeftText}>
              Voici ce que les marchés vous rapporteraient en seulement
            </Text>
          </View>
          <View style={[styles.cardSubtitleSectionRight, {width: 48}]}>
            <Text style={styles.cardSubtitleSectionRightText}>2 ans</Text>
          </View>
        </View>
        <View style={styles.innerCardSection}>
          <View style={styles.innerCardSubtitleContainer}>
            <Text style={styles.innerCardSubtitleText}>Marchés financiers</Text>
          </View>
          <View style={styles.innerCardContent}>
            <View style={styles.innerCardContentLeft}>
              <Text style={[styles.innerCardNumber, {color: '#9154FD'}]}>
                300€
              </Text>
              <Text style={[styles.innerCardText]}>tes gains</Text>
            </View>
            <View style={styles.innerCardContentRight}>
              <Text style={[styles.innerCardNumber, {color: '#9154FD'}]}>
                10%
              </Text>
              <Text style={[styles.innerCardText]}>ta rentabilité</Text>
            </View>
          </View>
        </View>
        <View style={[styles.innerCardSection, {marginTop: 10}]}>
          <View style={styles.innerCardSubtitleContainer}>
            <Text style={styles.innerCardSubtitleText}>Marchés financiers</Text>
          </View>
          <View style={styles.innerCardContent}>
            <View style={styles.innerCardContentLeft}>
              <Text style={[styles.innerCardNumber, {color: '#7AC84A'}]}>
                104 848.96€
              </Text>
              <Text style={[styles.innerCardText]}>tes gains</Text>
            </View>
            <View style={styles.innerCardContentRight}>
              <Text style={[styles.innerCardNumber, {color: '#7AC84A'}]}>
                3 494.97%
              </Text>
              <Text style={styles.innerCardText}>ta rentabilité</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function ToolsContainer({selectedFooter}) {
  if (selectedFooter === 'calculator') {
    return (
      <ScrollView style={styles.tabContent}>
        <Calculator />
      </ScrollView>
    );
  } else if (selectedFooter === 'simulator') {
    return (
      <ScrollView style={styles.tabContent}>
        <Simulator />
      </ScrollView>
    );
  }
  return (
    <ScrollView style={styles.tabContent}>
      <TradingPlan />
    </ScrollView>
  );
}

function Tools() {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedFooter, setSelectedFooter] = useState('trading_plan');
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
          title="Outils"
        />
      )}
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        scrollEnabled={false}
        onContentSizeChange={handleContentSizeChange}
        contentOffset={{x: 0, y: 0}}>
        <Menu
          currentScreen="Outils"
          handleScrollToLeft={() => handleScrollToLeft()}
        />
        <ToolsContainer selectedFooter={selectedFooter} />
      </ScrollView>
      {!scrollToMenu ? (
        <View style={styles.footer}>
          <TouchableOpacity
            style={
              selectedFooter === 'trading_plan'
                ? styles.selectedFooter
                : styles.unselectedFooter
            }
            onPress={() => setSelectedFooter('trading_plan')}>
            <Text
              style={
                selectedFooter === 'trading_plan'
                  ? styles.selectedFooterText
                  : styles.unselectedFooterText
              }>
              Plan Trading
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selectedFooter === 'calculator'
                ? styles.selectedFooterCenter
                : styles.unselectedFooterCenter
            }
            onPress={() => setSelectedFooter('calculator')}>
            <Text
              style={
                selectedFooter === 'calculator'
                  ? styles.selectedFooterText
                  : styles.unselectedFooterText
              }>
              Calculatrice
            </Text>
            <Text
              style={
                selectedFooter === 'calculator'
                  ? styles.selectedFooterText
                  : styles.unselectedFooterText
              }>
              Forex/Indices
            </Text>
          </TouchableOpacity>
          <Text style={styles.separator}>|</Text>
          <TouchableOpacity
            style={
              selectedFooter === 'simulator'
                ? styles.selectedFooter
                : styles.unselectedFooter
            }
            onPress={() => setSelectedFooter('simulator')}>
            <Text
              style={
                selectedFooter === 'simulator'
                  ? styles.selectedFooterText
                  : styles.unselectedFooterText
              }>
              Simulateur
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  toolsContent: {
    width: Dimensions.get('window').width,
    height: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
    paddingBottom: 14,
  },
  tabContent: {
    height:
      Platform.OS === 'android'
        ? Dimensions.get('window').height - 120
        : Dimensions.get('window').height - 170,
  },
  simulator: {
    height: Platform.OS === 'android' ? 920 : 940,
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
  toolsTitleContainer: {
    width: 'auto',
    marginTop: 5,
  },
  toolsTitle: {
    color: '#1A2442',
    marginTop: 30,
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 32,
    marginLeft: 5,
    marginRight: 15,
  },
  toolsTitle2: {
    color: '#1A2442',
    marginTop: 15,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    marginLeft: 5,
    marginRight: 5,
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
    paddingTop: 6,
  },
  selectedFooterCenter: {
    width: '33%',
    alignItems: 'center',
    backgroundColor: '#9154FD',
    height: 44,
    borderRadius: 4,
    shadowColor: '#9154fd',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 14,
    elevation: 5,
    paddingTop: 6,
  },
  unselectedFooterCenter: {
    width: '33%',
    alignItems: 'center',
    // borderRightWidth: 1,
    // height: 16,
    height: 44,
    marginTop: 6,
    // borderColor: '#9BA5BF',
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
    // marginTop: 6,
  },
  unselectedFooterText: {
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
    color: '#9BA5BF',
  },
  separator: {
    marginTop: 12,
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
    color: '#9BA5BF',
  },
  tendencyCard: {
    width: '100%',
    height: 215,
    backgroundColor: '#E9EDFC',
    borderRadius: 20,
    // elevation: 8,
    // shadowColor: "rgba(9, 13, 109, 0.4)",
    // shadowOffset: {
    //   width: 0,
    //   height: 30,
    // },
    // shadowRadius: 40,
    // shadowOpacity: 1,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  tendencyCardTitle: {
    marginLeft: 5,
    marginTop: 15,
    color: '#1A2442',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
    fontFamily: 'Montserrat',
  },
  tendencyContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 46,
  },
  inputContainer: {
    width: Dimensions.get('window').width - 78,
    height: 36,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#9154FD',
    borderStyle: 'solid',
    elevation: 8,
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  fullInputContainer: {
    width: Dimensions.get('window').width - 40,
    height: 36,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#9154FD',
    borderStyle: 'solid',
    elevation: 8,
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  inputStyle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 16,
    color: '#9BA5BF',
    marginLeft: 10,
  },
  fullInputStyle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 16,
    color: '#1A2442',
    marginLeft: 10,
  },
  addItem: {
    marginTop: 5,
  },
  tendencyItem: {
    width: Dimensions.get('window').width - 78,
    height: 36,
    marginTop: 10,
    backgroundColor: '#9154FD',
    borderRadius: 10,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 8,
  },
  litleTendencyItem: {
    width: 130,
    height: 36,
    marginTop: 10,
    backgroundColor: '#9154FD',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 8,
  },
  removeItem: {
    marginTop: 17,
    marginLeft: 8,
  },
  tendencyItemText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
    marginLeft: 10,
  },
  litleTendencyItemText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
  },
  stepTitleContainer: {
    marginTop: 44,
    width: '100%',
    height: 29,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepTitle: {
    width: 78,
    height: 29,
    backgroundColor: '#9154FD',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepTitleText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 21,
  },
  objectiveCard: {
    height: 220,
    width: '100%',
    backgroundColor: '#E9EDFC',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    // elevation: 8,
    // shadowColor: "rgba(9, 13, 109, 0.4)",
    // shadowOffset: {
    //   width: 0,
    //   height: 30,
    // },
    // shadowRadius: 40,
    // shadowOpacity: 1,
  },
  objectiveItemContainer: {
    flexDirection: 'row',
  },
  objectiveItemLeft: {
    width: Dimensions.get('window').width - 160,
    marginTop: 15,
    height: 36,
    marginLeft: 15,
    justifyContent: 'center',
  },
  objectiveItemLeftTopText: {
    color: '#1A2442',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
  },
  objectiveItemLeftBottomText: {
    color: '#9154FD',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12,
  },
  percentageItemContainer: {
    width: 100,
    backgroundColor: '#FFFFFF',
    marginLeft: 15,
    marginTop: 15,
    height: 36,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOpacity: 1,
    shadowRadius: 20,
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#9154FD',
    borderStyle: 'solid',
  },
  percentageItemText: {
    color: '#1A2442',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
    textAlign: 'right',
  },
  ruleCard: {
    height: 684,
    width: '100%',
    backgroundColor: '#E9EDFC',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    // elevation: 8,
    // shadowColor: "rgba(9, 13, 109, 0.4)",
    // shadowOffset: {
    //   width: 0,
    //   height: 30,
    // },
    // shadowRadius: 40,
    // shadowOpacity: 1,
  },
  indication: {
    color: '#9154FD',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 15,
    marginLeft: 5,
  },
  timeRangeContainer: {
    flexDirection: 'row',
  },
  litleInputContainer: {
    width: 68,
    height: 36,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#9154FD',
    borderStyle: 'solid',
    elevation: 8,
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    marginRight: 10,
  },
  litleInputStyle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 16,
    color: '#1A2442',
  },
  tendencyCard2: {
    height: 260,
    width: '100%',
    backgroundColor: '#E9EDFC',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    // elevation: 8,
    // shadowColor: "rgba(9, 13, 109, 0.4)",
    // shadowOffset: {
    //   width: 0,
    //   height: 30,
    // },
    // shadowRadius: 40,
    // shadowOpacity: 1,
  },
  traderCard: {
    backgroundColor: '#E9EDFC',
    borderRadius: 20,
    height: 138,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    // elevation: 8,
    // shadowColor: "rgba(9, 13, 109, 0.4)",
    // shadowOffset: {
    //   width: 0,
    //   height: 30,
    // },
    // shadowRadius: 40,
    // shadowOpacity: 1,
  },
  traderTextContainer: {
    width: Dimensions.get('window').width - 40,
    height: 43,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowColor: 'rgba(9, 13, 109, 0.45)',
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: 0,
  },
  traderText: {
    color: '#1A2442',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 22,
    lineHeight: 27,
    marginTop: 8,
    marginLeft: 10,
  },
  traderBigText: {
    color: '#1A2442',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 28,
    lineHeight: 31,
    marginTop: 30,
    marginLeft: 10,
  },
  traderCardContent: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 40,
    marginTop: 17,
  },
  traderCardContentLeft: {
    width: '50%',
    paddingRight: 20,
  },
  traderCardContentRight: {
    width: '50%',
    paddingLeft: 20,
  },
  fullTraderCardContent: {
    width: Dimensions.get('window').width - 40,
    marginTop: 17,
  },
  traderSubtitle: {
    color: '#9154FD',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
    marginLeft: 5,
  },
  impactSectionContainer: {
    flexDirection: 'row',
    paddingTop: 0,
  },
  impactTextLeft: {
    width: Dimensions.get('window').width - 180,
    marginTop: 18,
    height: 16,
    marginLeft: 5,
    justifyContent: 'center',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
  },
  impactSectionContainerRight: {
    width: 120,
    backgroundColor: '#FFFFFF',
    marginLeft: 15,
    marginTop: 10,
    height: 36,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOpacity: 1,
    shadowRadius: 20,
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },
  litleTraderTextContainer: {
    width: '100%',
    height: 36,
    marginTop: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowColor: 'rgba(9, 13, 109, 0.45)',
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: 0,
    borderWidth: 1,
    borderColor: '#9154FD',
    borderStyle: 'solid',
  },
  litleTraderText: {
    color: '#1A2442',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
    marginLeft: 10,
    marginTop: 10,
  },
  saveButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#9154FD',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#9154fd',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 14,
    elevation: 5,
    paddingTop: 6,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 21,
    marginTop: 10,
  },
  cardSection: {
    flexDirection: 'row',
  },
  cardContentLeft: {
    width: Dimensions.get('window').width - 160,
    marginTop: 15,
    height: 36,
    marginLeft: 5,
    justifyContent: 'center',
  },
  cardContentRight: {
    width: 100,
  },
  sectionText: {
    color: '#1A2442',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 15,
    marginLeft: 5,
    marginTop: 15,
  },
  sectionInfo: {
    color: '#9154FD',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 10,
    lineHeight: 12,
    marginLeft: 5,
  },
  cardContentBottomLeft: {
    width: Dimensions.get('window').width - 155,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#9154FD',
    borderWidth: 1,
    border: 'solod',
    marginRight: 15,
  },
  cardContentBottomLeftText: {
    color: '#1A2442',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 15,
    textAlign: 'right',
    marginRight: 10,
    marginTop: 10,
  },
  cardContentBottomRight: {
    width: 100,
    height: 36,
    backgroundColor: '#9154FD',
    borderRadius: 10,
    shadowColor: 'rgba(145, 84, 253, 0.60)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 4,
    paddingTop: 10,
  },
  cardContentBottomRightText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 15,
    textAlign: 'right',
    marginLeft: 15,
  },
  cardSubtitleSection: {
    flexDirection: 'row',
    width: '100%',
    paddingRight: 5,
    paddingLeft: 5,
    marginTop: 15,
  },
  subtitleSectionLeft: {
    width: Dimensions.get('window').width - 85,
  },
  subtitleSectionLeft2: {
    width: Dimensions.get('window').width - 98,
  },
  subtitleSectionLeftText: {
    color: '#1A2442',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
  },
  cardSubtitleSectionRight: {
    width: 35,
    height: 21,
    backgroundColor: '#9154FD',
    borderRadius: 4,
    shadowColor: 'rgba(145, 84, 253, 0.60)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 4,
  },
  cardSubtitleSectionRightText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    marginTop: 2,
  },
  innerCardSection: {
    width: '100%',
    height: 120,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: 15,
    elevation: 8,
    shadowColor: 'rgba(9, 13, 109, 0.45)',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 40,
  },
  innerCardSubtitleContainer: {
    width: '100%',
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  innerCardSubtitleText: {
    color: '#1A2442',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
  },
  innerCardContent: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
  },
  innerCardContentLeft: {
    width: '50%',
    alignItems: 'center',
  },
  innerCardNumber: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 30,
  },
  innerCardText: {
    color: '#9BA5BF',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 18,
  },
  innerCardContentRight: {
    width: '50%',
    alignItems: 'center',
  },
  graphSection: {
    marginTop: 30,
    height: 260,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Tools;
