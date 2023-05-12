import {Dimensions, Image, NativeModules, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const {StatusBarManager} = NativeModules;

// Splashscreen
function Home() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Connection');
    }, 3000);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/spalshscreen.png')}
        style={styles.image}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height + StatusBarManager.HEIGHT,
  },
});
export default Home;
