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
  TextInput as RNTextInput,
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

import ArrowDesc from '../assets/icons/arrowDesc.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DotThreeVertical from '../assets/icons/dots-three-vertical.svg';
import DotThreeVerticalLight from '../assets/icons/dots-three-vertical-light.svg';
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

function TradingPlan(props) {
  return (
    <View style={[props.classes.toolsContent, indexStyles.shadowProp]}>
      <View style={styles.toolsTitleContainer}>
        <Text style={props.classes.toolsTitle2}>
          À faire avant chaque session
        </Text>
      </View>
      <View style={props.classes.tendencyCard}>
        <Text style={props.classes.tendencyCardTitle}>
          Déterminer une tendance
        </Text>
        <View style={styles.tendencyContainer}>
          <View style={[props.classes.inputContainer]}>
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
          <TouchableOpacity style={styles.addDocumentRight}>
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={props.classes.tendencyCardTitle}>Vos tendances</Text>
        <View style={styles.tendencyContainer}>
          <View style={styles.tendencyItem}>
            <Text style={styles.tendencyItemText}>
              Déterminer la tendance de fond
            </Text>
          </View>
          <TouchableOpacity style={styles.addDocumentRight}>
            <View style={props.classes.removeButton}>
              <Text style={styles.removeButtonText}>-</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.tendencyContainer}>
          <View style={styles.tendencyItem}>
            <Text style={styles.tendencyItemText}>
              Déterminer la tendance de fond
            </Text>
          </View>
          <TouchableOpacity style={styles.addDocumentRight}>
            <View style={props.classes.removeButton}>
              <Text style={styles.removeButtonText}>-</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* Etape 1 */}
      <View style={styles.stepTitleContainer}>
        <View style={styles.stepTitle}>
          <Text style={styles.stepTitleText}>Étape 1</Text>
        </View>
      </View>
      <Text style={props.classes.toolsTitle2}>
        Votre objectif de gestion de risque
      </Text>
      <View style={props.classes.objectiveCard}>
        <View style={styles.objectiveItemContainer}>
          <View style={styles.objectiveItemLeft}>
            <Text style={props.classes.objectiveItemLeftTopText}>
              Objectif de gains journalier
            </Text>
            <Text style={styles.objectiveItemLeftBottomText}>
              (1% de mon capital, 20 pips ...)
            </Text>
          </View>
          <View style={props.classes.percentageItemContainer}>
            <Text style={props.classes.percentageItemText}>1%</Text>
          </View>
        </View>
        <View style={styles.objectiveItemContainer}>
          <View style={styles.objectiveItemLeft}>
            <Text style={props.classes.objectiveItemLeftTopText}>
              Taille de position - Niveau de risque par trade
            </Text>
            <Text style={styles.objectiveItemLeftBottomText}>
              (0.5%, 1% du capital ...)
            </Text>
          </View>
          <View style={props.classes.percentageItemContainer}>
            <Text style={props.classes.percentageItemText}>0.5%</Text>
          </View>
        </View>
        <View style={styles.objectiveItemContainer}>
          <View style={styles.objectiveItemLeft}>
            <Text style={props.classes.objectiveItemLeftTopText}>
              Nombre de pertes consécutives acceptables
            </Text>
            <Text style={styles.objectiveItemLeftBottomText}>
              (entre 3 et 10)
            </Text>
          </View>
          <View style={props.classes.percentageItemContainer}>
            <Text style={props.classes.percentageItemText}>4%</Text>
          </View>
        </View>
        <View style={styles.objectiveItemContainer}>
          <View style={styles.objectiveItemLeft}>
            <Text style={props.classes.objectiveItemLeftTopText}>
              Arrêt de la session de trading si perte supérieur à X% du capital
            </Text>
          </View>
          <View style={props.classes.percentageItemContainer}>
            <Text style={props.classes.percentageItemText}>2%</Text>
          </View>
        </View>
      </View>

      {/* Etape 2 */}
      <View style={styles.stepTitleContainer}>
        <View style={styles.stepTitle}>
          <Text style={styles.stepTitleText}>Étape 2</Text>
        </View>
      </View>
      <Text style={props.classes.toolsTitle2}>
        Règle de votre stratégie gagnante
      </Text>
      <View style={props.classes.ruleCard}>
        <Text style={props.classes.tendencyCardTitle}>
          Quelle stratégie utilisez-vous?
        </Text>
        <View style={[props.classes.fullInputContainer]}>
          <RNTextInput
            style={props.classes.fullInputStyle}
            autoCapitalize="none"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            value="DAYTRADR PRO"
          />
        </View>

        <Text style={props.classes.tendencyCardTitle}>
          Quels indicaterr(s) technique(s) ?
        </Text>
        <View style={styles.tendencyContainer}>
          <View style={[props.classes.inputContainer]}>
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
          <TouchableOpacity style={styles.addDocumentRight}>
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.tendencyContainer}>
          <View style={styles.tendencyItem}>
            <Text style={styles.tendencyItemText}>DAYTRADR PRO</Text>
          </View>
          <TouchableOpacity style={styles.addDocumentRight}>
            <View style={props.classes.removeButton}>
              <Text style={styles.removeButtonText}>-</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={props.classes.tendencyCardTitle}>
          Sur Quelle unité de temps allez-vous trader ?
        </Text>
        <Text style={styles.indication}>(M1, M15, H1, H4...)</Text>
        <View style={[props.classes.fullInputContainer]}>
          <RNTextInput
            style={props.classes.fullInputStyle}
            autoCapitalize="none"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            value="M15"
          />
        </View>

        <Text style={props.classes.tendencyCardTitle}>Valeur d'un Pips</Text>
        <View style={[props.classes.fullInputContainer]}>
          <RNTextInput
            style={props.classes.fullInputStyle}
            autoCapitalize="none"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            value="0.5€ ou 1€"
          />
        </View>

        <Text style={props.classes.tendencyCardTitle}>Horaires de session</Text>
        <View style={styles.timeRangeContainer}>
          <View style={[props.classes.litleInputContainer]}>
            <RNTextInput
              style={props.classes.litleInputStyle}
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              value="12h30"
            />
          </View>
          <Text
            style={[
              props.classes.tendencyCardTitle,
              {marginRight: 10, marginTop: 20},
            ]}>
            à
          </Text>
          <View style={[props.classes.litleInputContainer]}>
            <RNTextInput
              style={props.classes.litleInputStyle}
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              value="14h30"
            />
          </View>
          <TouchableOpacity style={[styles.addDocumentRight, {marginLeft: 2}]}>
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.tendencyContainer}>
          <View style={styles.litleTendencyItem}>
            <Text style={styles.litleTendencyItemText}>10h30-12h30</Text>
          </View>
          <TouchableOpacity style={styles.addDocumentRight}>
            <View style={props.classes.removeButton}>
              <Text style={styles.removeButtonText}>-</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={props.classes.tendencyCardTitle}>Sens de vos trades</Text>
        <Text style={styles.indication}>(tendance ou contre-tendance)</Text>
        <View style={[props.classes.fullInputContainer]}>
          <RNTextInput
            style={props.classes.fullInputStyle}
            autoCapitalize="none"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            value="Toujours en tendance"
          />
        </View>

        <Text style={props.classes.tendencyCardTitle}>
          Utilisation d'un Stop Loss de Protection ?
        </Text>
        <View style={[props.classes.fullInputContainer]}>
          <RNTextInput
            style={props.classes.fullInputStyle}
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
        <Text style={props.classes.toolsTitle2}>
          Règle d'ouverture d'un trade
        </Text>
      </View>
      <View style={props.classes.tendencyCard2}>
        <Text style={props.classes.tendencyCardTitle}>Conditions d'achats</Text>
        <View style={styles.tendencyContainer}>
          <View style={[props.classes.inputContainer]}>
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
          <TouchableOpacity style={styles.addDocumentRight}>
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.tendencyContainer}>
          <View style={styles.tendencyItem}>
            <Text style={styles.tendencyItemText}>Une condition d'achat</Text>
          </View>
          <TouchableOpacity style={styles.addDocumentRight}>
            <View style={props.classes.removeButton}>
              <Text style={styles.removeButtonText}>-</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={props.classes.tendencyCardTitle}>
          Conditions de ventes
        </Text>
        <View style={styles.tendencyContainer}>
          <View style={[props.classes.inputContainer]}>
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
          <TouchableOpacity style={styles.addDocumentRight}>
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.tendencyContainer}>
          <View style={styles.tendencyItem}>
            <Text style={styles.tendencyItemText}>Une condition de vente</Text>
          </View>
          <TouchableOpacity style={styles.addDocumentRight}>
            <View style={props.classes.removeButton}>
              <Text style={styles.removeButtonText}>-</Text>
            </View>
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
        <Text style={props.classes.toolsTitle2}>
          Règle de clôture d'un trade
        </Text>
      </View>
      <View style={props.classes.tendencyCard2}>
        <Text style={props.classes.tendencyCardTitle}>Type d'objectif</Text>
        <View style={styles.tendencyContainer}>
          <View style={[props.classes.inputContainer]}>
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
          <TouchableOpacity style={styles.addDocumentRight}>
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.tendencyContainer}>
          <View style={styles.tendencyItem}>
            <Text style={styles.tendencyItemText}>Un type d'objectif</Text>
          </View>
          <TouchableOpacity style={styles.addDocumentRight}>
            <View style={props.classes.removeButton}>
              <Text style={styles.removeButtonText}>-</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={props.classes.tendencyCardTitle}>Fermeture en perte</Text>
        <View style={styles.tendencyContainer}>
          <View style={[props.classes.inputContainer]}>
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
          <TouchableOpacity style={styles.addDocumentRight}>
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.tendencyContainer}>
          <View style={styles.tendencyItem}>
            <Text style={styles.tendencyItemText}>Une fermeture en perte</Text>
          </View>
          <TouchableOpacity style={styles.addDocumentRight}>
            <View style={props.classes.removeButton}>
              <Text style={styles.removeButtonText}>-</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function Calculator(props) {
  return (
    <View style={[props.classes.toolsContent, indexStyles.shadowProp]}>
      <View style={props.classes.traderCard}>
        <View style={props.classes.traderTextContainer}>
          <Text style={props.classes.traderText}>TRADER</Text>
        </View>

        <View style={styles.traderCardContent}>
          <View style={styles.traderCardContentLeft}>
            <Text style={styles.traderSubtitle}>Courtier</Text>
            <View style={props.classes.litleTraderTextContainer}>
              <Text style={props.classes.litleTraderText}>FTMO</Text>
            </View>
          </View>
          <View style={styles.traderCardContentRight}>
            <Text style={styles.traderSubtitle}>Instrument</Text>
            <View style={props.classes.litleTraderTextContainer}>
              <Text style={props.classes.litleTraderText}>GER40</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={[props.classes.traderCard, {marginTop: 30}]}>
        <View style={props.classes.traderTextContainer}>
          <Text style={props.classes.traderText}>Mon Capital</Text>
        </View>
        <View style={styles.fullTraderCardContent}>
          <Text style={styles.traderSubtitle}>Montant du capital €</Text>
          <View style={props.classes.litleTraderTextContainer}>
            <Text style={props.classes.litleTraderText}>5000 €</Text>
          </View>
        </View>
      </View>

      <View style={[props.classes.traderCard, {marginTop: 30}]}>
        <View style={props.classes.traderTextContainer}>
          <Text style={props.classes.traderText}>Stop Loss de Protection</Text>
        </View>
        <View style={styles.fullTraderCardContent}>
          <Text style={styles.traderSubtitle}>Stop placé à X points/pips</Text>
          <View style={props.classes.litleTraderTextContainer}>
            <Text style={props.classes.litleTraderText}>11 points</Text>
          </View>
        </View>
      </View>

      <View style={[props.classes.traderCard, {marginTop: 30}]}>
        <View style={props.classes.traderTextContainer}>
          <Text style={props.classes.traderText}>Le Risque</Text>
        </View>
        <View style={styles.fullTraderCardContent}>
          <Text style={styles.traderSubtitle}>% du risque accepté</Text>
          <View style={props.classes.litleTraderTextContainer}>
            <Text style={props.classes.litleTraderText}>1 %</Text>
          </View>
        </View>
      </View>

      <View style={[props.classes.traderCard, {marginTop: 30, height: 213}]}>
        <View style={props.classes.traderTextContainer}>
          <Text style={props.classes.traderText}>Nombre de Micro Lots</Text>
        </View>
        <View style={styles.fullTraderCardContent}>
          <Text style={styles.traderSubtitle}>Valeur du points/pip €</Text>
          <View style={props.classes.litleTraderTextContainer}>
            <Text style={props.classes.litleTraderText}>0.10 €</Text>
          </View>
        </View>
        <View style={styles.fullTraderCardContent}>
          <Text style={styles.traderSubtitle}>
            Nombre de micro lots à prendre
          </Text>
          <View style={props.classes.litleTraderTextContainer}>
            <Text style={props.classes.litleTraderText}>45.5</Text>
          </View>
        </View>
      </View>

      <View style={[props.classes.traderCard, {marginTop: 30, height: 213}]}>
        <View style={props.classes.traderTextContainer}>
          <Text style={props.classes.traderText}>Objectif</Text>
        </View>
        <View style={styles.fullTraderCardContent}>
          <Text style={styles.traderSubtitle}>Objectif à (en points)</Text>
          <View style={props.classes.litleTraderTextContainer}>
            <Text style={props.classes.litleTraderText}>95 points</Text>
          </View>
        </View>
        <View style={styles.fullTraderCardContent}>
          <Text style={styles.traderSubtitle}>Présantant / € le point</Text>
          <View style={props.classes.litleTraderTextContainer}>
            <Text style={props.classes.litleTraderText}>4.545</Text>
          </View>
        </View>
      </View>

      <Text style={props.classes.traderBigText}>Impact / Performances</Text>
      <View style={[props.classes.traderCard, {marginTop: 10, height: 195}]}>
        <View style={styles.impactSectionContainer}>
          <Text style={props.classes.impactTextLeft}>Gain prévisionnel €</Text>
          <View style={props.classes.impactSectionContainerRight}>
            <Text style={props.classes.percentageItemText}>500.00 €</Text>
          </View>
        </View>
        <View style={styles.impactSectionContainer}>
          <Text style={props.classes.impactTextLeft}>Perte prévisionnel €</Text>
          <View style={props.classes.impactSectionContainerRight}>
            <Text style={props.classes.percentageItemText}>-50.00 €</Text>
          </View>
        </View>
        <View style={styles.impactSectionContainer}>
          <Text style={props.classes.impactTextLeft}>
            Niveau de Risk Rendement
          </Text>
          <View style={props.classes.impactSectionContainerRight}>
            <Text style={props.classes.percentageItemText}>8.6</Text>
          </View>
        </View>
        <View style={styles.impactSectionContainer}>
          <Text style={props.classes.impactTextLeft}>Évolution Capital %</Text>
          <View style={props.classes.impactSectionContainerRight}>
            <Text style={props.classes.percentageItemText}>8.6 %</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Sauvegarder</Text>
      </TouchableOpacity>

      <Text style={props.classes.traderBigText}>Placement du Stop</Text>
      <View
        style={[props.classes.traderCard, {marginTop: 10, height: 295}]}></View>
    </View>
  );
}

function Simulator(props) {
  return (
    <View style={[props.classes.toolsContent, indexStyles.shadowProp]}>
      {/* Etape 1 */}
      <View style={[styles.stepTitleContainer, {marginTop: 30}]}>
        <View style={styles.stepTitle}>
          <Text style={styles.stepTitleText}>Étape 1</Text>
        </View>
      </View>
      <Text style={props.classes.toolsTitle2}>
        Configurez votre projection de gains sur les marchés financiers
      </Text>
      <View style={[props.classes.traderCard, {height: 150}]}>
        <View style={styles.cardSection}>
          <View style={styles.cardContentLeft}>
            <Text style={props.classes.objectiveItemLeftTopText}>
              Montant de votre capital €
            </Text>
          </View>
          <View style={props.classes.percentageItemContainer}>
            <Text style={props.classes.percentageItemText}>3000 €</Text>
          </View>
        </View>
        <Text style={props.classes.sectionText}>
          Augmentation prévisionnelle du capital*
        </Text>
        <Text style={styles.sectionInfo}>
          *Par jour : veuillez entrer une valeur comprise entre 0.5 et 5 %
        </Text>
        <View style={[styles.cardSection, {marginTop: 11}]}>
          <View style={props.classes.cardContentBottomLeft}>
            <Text style={props.classes.cardContentBottomLeftText}>1.00</Text>
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
      <Text style={props.classes.toolsTitle2}>
        Tes revenues potentiels grâce aux marchés financiers
      </Text>
      <View style={[props.classes.traderCard, styles.simulator]}>
        <View style={styles.cardSubtitleSection}>
          <View style={styles.subtitleSectionLeft}>
            <Text style={props.classes.subtitleSectionLeftText}>
              Voici ce que les marchés vous rapporteraient en seulement
            </Text>
          </View>
          <View style={styles.cardSubtitleSectionRight}>
            <Text style={styles.cardSubtitleSectionRightText}>1 an</Text>
          </View>
        </View>
        <View style={props.classes.innerCardSection}>
          <View style={styles.innerCardSubtitleContainer}>
            <Text style={props.classes.innerCardSubtitleText}>
              Marchés financiers
            </Text>
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
        <View style={[props.classes.innerCardSection, {marginTop: 10}]}>
          <View style={styles.innerCardSubtitleContainer}>
            <Text style={props.classes.innerCardSubtitleText}>
              Marchés financiers
            </Text>
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

        <View style={[props.classes.innerCardSection, styles.graphSection]}>
          <Text style={props.classes.innerCardSubtitleText}>
            GRAPHIQUE A INSERER
          </Text>
        </View>

        {/* 2 ans */}
        <View style={[styles.cardSubtitleSection, {marginTop: 30}]}>
          <View style={styles.subtitleSectionLeft2}>
            <Text style={props.classes.subtitleSectionLeftText}>
              Voici ce que les marchés vous rapporteraient en seulement
            </Text>
          </View>
          <View style={[styles.cardSubtitleSectionRight, {width: 48}]}>
            <Text style={styles.cardSubtitleSectionRightText}>2 ans</Text>
          </View>
        </View>
        <View style={props.classes.innerCardSection}>
          <View style={styles.innerCardSubtitleContainer}>
            <Text style={props.classes.innerCardSubtitleText}>
              Marchés financiers
            </Text>
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
        <View style={[props.classes.innerCardSection, {marginTop: 10}]}>
          <View style={styles.innerCardSubtitleContainer}>
            <Text style={props.classes.innerCardSubtitleText}>
              Marchés financiers
            </Text>
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
    </View>
  );
}

function ToolsContainer({classes, selectedFooter}) {
  if (selectedFooter === 'calculator') {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.tabContent}>
        <Calculator classes={classes} />
      </ScrollView>
    );
  } else if (selectedFooter === 'simulator') {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.tabContent}>
        <Simulator classes={classes} />
      </ScrollView>
    );
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.tabContent}>
      <TradingPlan classes={classes} />
    </ScrollView>
  );
}

function Tools() {
  const colorScheme = useSelector(state => state.themeReducer.colorScheme);
  const classes = {
    footer: [styles.footer, colorScheme === 'dark' && styles.footerDark],
    separator: [
      styles.separator,
      colorScheme === 'dark' && styles.separatorDark,
    ],
    toolsContent: [
      styles.toolsContent,
      colorScheme === 'dark' && styles.toolsContentDark,
    ],
    toolsTitle2: [
      styles.toolsTitle2,
      colorScheme === 'dark' && styles.toolsTitle2Dark,
    ],
    tendencyCard: [
      styles.tendencyCard,
      colorScheme === 'dark' && styles.tendencyCardDark,
    ],
    tendencyCardTitle: [
      styles.tendencyCardTitle,
      colorScheme === 'dark' && styles.tendencyCardTitleDark,
    ],
    inputContainer: [
      styles.inputContainer,
      colorScheme === 'dark' && styles.inputContainerDark,
    ],
    removeButton: [
      styles.removeButton,
      colorScheme === 'dark' && styles.removeButtonDark,
    ],
    objectiveCard: [
      styles.objectiveCard,
      colorScheme === 'dark' && styles.objectiveCardDark,
    ],
    objectiveItemLeftTopText: [
      styles.objectiveItemLeftTopText,
      colorScheme === 'dark' && styles.objectiveItemLeftTopTextDark,
    ],
    percentageItemContainer: [
      styles.percentageItemContainer,
      colorScheme === 'dark' && styles.percentageItemContainerDark,
    ],
    percentageItemText: [
      styles.percentageItemText,
      colorScheme === 'dark' && styles.percentageItemTextDark,
    ],
    ruleCard: [styles.ruleCard, colorScheme === 'dark' && styles.ruleCardDark],
    fullInputContainer: [
      styles.fullInputContainer,
      colorScheme === 'dark' && styles.fullInputContainerDark,
    ],
    fullInputStyle: [
      styles.fullInputStyle,
      colorScheme === 'dark' && styles.fullInputStyleDark,
    ],
    litleInputContainer: [
      styles.litleInputContainer,
      colorScheme === 'dark' && styles.litleInputContainerDark,
    ],
    litleInputStyle: [
      styles.litleInputStyle,
      colorScheme === 'dark' && styles.litleInputStyleDark,
    ],
    tendencyCard2: [
      styles.tendencyCard2,
      colorScheme === 'dark' && styles.tendencyCard2Dark,
    ],
    traderCard: [
      styles.traderCard,
      colorScheme === 'dark' && styles.traderCardDark,
    ],
    litleTraderTextContainer: [
      styles.litleTraderTextContainer,
      colorScheme === 'dark' && styles.litleTraderTextContainerDark,
    ],
    traderTextContainer: [
      styles.traderTextContainer,
      colorScheme === 'dark' && styles.traderTextContainerDark,
    ],
    litleTraderText: [
      styles.litleTraderText,
      colorScheme === 'dark' && styles.litleTraderTextDark,
    ],
    traderText: [
      styles.traderText,
      colorScheme === 'dark' && styles.traderTextDark,
    ],
    traderBigText: [
      styles.traderBigText,
      colorScheme === 'dark' && styles.traderBigTextDark,
    ],
    impactTextLeft: [
      styles.impactTextLeft,
      colorScheme === 'dark' && styles.impactTextLeftDark,
    ],
    impactSectionContainerRight: [
      styles.impactSectionContainerRight,
      colorScheme === 'dark' && styles.impactSectionContainerRightDark,
    ],
    sectionText: [
      styles.sectionText,
      colorScheme === 'dark' && styles.sectionTextDark,
    ],
    cardContentBottomLeft: [
      styles.cardContentBottomLeft,
      colorScheme === 'dark' && styles.cardContentBottomLeftDark,
    ],
    cardContentBottomLeftText: [
      styles.cardContentBottomLeftText,
      colorScheme === 'dark' && styles.cardContentBottomLeftTextDark,
    ],
    subtitleSectionLeftText: [
      styles.subtitleSectionLeftText,
      colorScheme === 'dark' && styles.subtitleSectionLeftTextDark,
    ],
    innerCardSection: [
      styles.innerCardSection,
      colorScheme === 'dark' && styles.innerCardSectionDark,
    ],
    innerCardSubtitleText: [
      styles.innerCardSubtitleText,
      colorScheme === 'dark' && styles.innerCardSubtitleTextDark,
    ],
  };
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
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        onContentSizeChange={handleContentSizeChange}
        contentOffset={{x: 0, y: 0}}>
        <Menu
          currentScreen="Tools"
          handleScrollToLeft={() => handleScrollToLeft()}
        />
        <ToolsContainer classes={classes} selectedFooter={selectedFooter} />
      </ScrollView>
      {!scrollToMenu ? (
        <View style={classes.footer}>
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
          <Text style={classes.separator}>|</Text>
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
  toolsContentDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  toolsContent: {
    width: Dimensions.get('window').width,
    height: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
    paddingBottom: 14,
  },
  tabContent: {
    height:
      Platform.OS === 'android'
        ? Dimensions.get('window').height - 120
        : Dimensions.get('window').height - 150,
  },
  simulator: {
    height: Platform.OS === 'android' ? 920 : 940,
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
  toolsTitle2Dark: {
    color: theme.colors.text.$textDark,
  },
  toolsTitle2: {
    color: theme.colors.text.$textLight,
    marginTop: 15,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 24,
    marginLeft: 5,
    marginRight: 5,
  },
  footerDark: {
    backgroundColor: theme.colors.component.$cardDark,
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
  selectedFooter: {
    width: '33%',
    alignItems: 'center',
    backgroundColor: '#9154FD',
    height: 28,
    borderRadius: 4,
    shadowColor: '#9154fd',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 4,
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
    height: 44,
    marginTop: 6,
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
  separatorDark: {
    color: '#545458',
  },
  separator: {
    marginTop: 12,
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
    color: '#9BA5BF',
  },
  tendencyCardDark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  tendencyCard: {
    width: '100%',
    height: 215,
    backgroundColor: theme.colors.component.$cardLight,
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(9, 13, 109, 0.4)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  tendencyCardTitleDark: {
    color: theme.colors.text.$textDark,
  },
  tendencyCardTitle: {
    marginLeft: 5,
    marginTop: 15,
    color: theme.colors.text.$textLight,
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
  inputContainerDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  inputContainer: {
    width: Dimensions.get('window').width - 78,
    height: 36,
    marginTop: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderRadius: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#9154FD',
    borderStyle: 'solid',
    elevation: 4,
    shadowColor: 'rgba(145, 84, 253, 0.8)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  fullInputContainerDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  fullInputContainer: {
    width: Dimensions.get('window').width - 40,
    height: 36,
    marginTop: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderRadius: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#9154FD',
    borderStyle: 'solid',
    elevation: 4,
    shadowColor: 'rgba(145, 84, 253, 0.8)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  inputStyle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 16,
    color: '#9BA5BF',
    marginLeft: 10,
  },
  fullInputStyleDark: {
    color: theme.colors.text.$textDark,
  },
  fullInputStyle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 16,
    color: theme.colors.text.$textLight,
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
      height: 2,
    },
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 3,
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
      height: 2,
    },
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 3,
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
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(145, 84, 253, 0.7)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  stepTitleText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 21,
  },
  objectiveCardDark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  objectiveCard: {
    height: 220,
    width: '100%',
    backgroundColor: theme.colors.component.$cardLight,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(9, 13, 109, 0.4)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
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
  objectiveItemLeftTopTextDark: {
    color: theme.colors.text.$textDark,
  },
  objectiveItemLeftTopText: {
    color: theme.colors.text.$textLight,
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
  percentageItemContainerDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  percentageItemContainer: {
    width: 100,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    marginLeft: 15,
    marginTop: 15,
    height: 36,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: 'rgba(9, 13, 109, 0.45)',
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 0,
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#9154FD',
    borderStyle: 'solid',
  },
  percentageItemTextDark: {
    color: theme.colors.text.$textDark,
  },
  percentageItemText: {
    color: theme.colors.text.$textLight,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
    textAlign: 'right',
  },
  ruleCardDark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  ruleCard: {
    height: 684,
    width: '100%',
    backgroundColor: theme.colors.component.$cardLight,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(9, 13, 109, 0.4)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
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
  litleInputContainerDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  litleInputContainer: {
    width: 68,
    height: 36,
    marginTop: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#9154FD',
    borderStyle: 'solid',
    elevation: 4,
    shadowColor: 'rgba(145, 84, 253, 0.8)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginRight: 10,
  },
  litleInputStyleDark: {
    color: theme.colors.text.$textDark,
  },
  litleInputStyle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 16,
    color: theme.colors.text.$textLight,
  },
  tendencyCard2Dark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  tendencyCard2: {
    height: 260,
    width: '100%',
    backgroundColor: theme.colors.component.$cardLight,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(9, 13, 109, 0.4)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  traderCardDark: {
    backgroundColor: theme.colors.component.$cardDark,
  },
  traderCard: {
    backgroundColor: theme.colors.component.$cardLight,
    borderRadius: 20,
    height: 138,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(9, 13, 109, 0.4)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  traderTextContainerDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  traderTextContainer: {
    width: Dimensions.get('window').width - 40,
    height: 43,
    marginTop: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: 'rgba(9, 13, 109, 0.45)',
    shadowOpacity: 0.8,
    shadowRadius: 13,
    elevation: 0,
  },
  traderTextDark: {
    color: theme.colors.text.$textDark,
  },
  traderText: {
    color: theme.colors.text.$textLight,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 22,
    lineHeight: 27,
    marginTop: 8,
    marginLeft: 10,
  },
  traderBigTextDark: {
    color: theme.colors.text.$textDark,
  },
  traderBigText: {
    color: theme.colors.text.$textLight,
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
  impactTextLeftDark: {
    color: theme.colors.text.$textDark,
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
    color: theme.colors.text.$textLight,
  },
  impactSectionContainerRightDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  impactSectionContainerRight: {
    width: 120,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    marginLeft: 15,
    marginTop: 10,
    height: 36,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(9, 13, 109, 0.4)',
    shadowOpacity: 0.6,
    shadowRadius: 3,
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },
  litleTraderTextContainerDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  litleTraderTextContainer: {
    width: '100%',
    height: 36,
    marginTop: 6,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: 'rgba(9, 13, 109, 0.45)',
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 0,
    borderWidth: 1,
    borderColor: '#9154FD',
    borderStyle: 'solid',
  },
  litleTraderTextDark: {
    color: theme.colors.text.$textDark,
  },
  litleTraderText: {
    color: theme.colors.text.$textLight,
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
  sectionTextDark: {
    color: theme.colors.text.$textDark,
  },
  sectionText: {
    color: theme.colors.text.$textLight,
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
  cardContentBottomLeftDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  cardContentBottomLeft: {
    width: Dimensions.get('window').width - 155,
    height: 36,
    borderRadius: 10,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderColor: '#9154FD',
    borderWidth: 1,
    marginRight: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: 'rgba(9, 13, 109, 0.45)',
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 0,
  },
  cardContentBottomLeftTextDark: {
    color: theme.colors.text.$textDark,
  },
  cardContentBottomLeftText: {
    color: theme.colors.text.$textLight,
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
    shadowOpacity: 0.8,
    shadowRadius: 13,
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
  subtitleSectionLeftTextDark: {
    color: theme.colors.text.$textDark,
  },
  subtitleSectionLeftText: {
    color: theme.colors.text.$textLight,
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
  innerCardSectionDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  innerCardSection: {
    width: '100%',
    height: 120,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderRadius: 10,
    marginTop: 15,
    elevation: 8,
    shadowColor: 'rgba(9, 13, 109, 0.45)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  innerCardSubtitleContainer: {
    width: '100%',
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  innerCardSubtitleTextDark: {
    color: theme.colors.text.$textDark,
  },
  innerCardSubtitleText: {
    color: theme.colors.text.$textLight,
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
  addDocumentRight: {
    marginLeft: 12,
    marginTop: 15,
  },
  addButton: {
    width: 26,
    height: 26,
    alignItems: 'center',
    marginRight: 6,
    backgroundColor: '#9154FD',
    borderRadius: 10,
    elevation: 8,
    shadowColor: '#9154FD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 600,
    fontSize: 18,
    marginTop: 1,
  },
  removeButtonDark: {
    backgroundColor: theme.colors.background.$backgroundDarkSecondaire,
  },
  removeButton: {
    width: 26,
    height: 26,
    alignItems: 'center',
    marginRight: 6,
    backgroundColor: theme.colors.background.$backgroundLightSecondaire,
    borderRadius: 10,
  },
  removeButtonText: {
    color: '#9154FD',
    fontWeight: 600,
    fontSize: 20,
  },
});

export default Tools;
