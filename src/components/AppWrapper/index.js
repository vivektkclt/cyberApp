import {SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
const AppWrapper = ({children}) => {
  return (
    <LinearGradient
      // start={{x: 0.0, y: 0.25}}
      // end={{x: 0.5, y: 1.0}}
      // locations={[0, 0.5, 0.6]}
      style={styles.conatiner}
      // colors={['#7F5A83', '#351b63', '#0D324D']}>
      colors={['#201A30', '#201A30', '#201A30']}>
      <SafeAreaView style={styles.conentContainer}>{children}</SafeAreaView>
    </LinearGradient>
  );
};

export default AppWrapper;
