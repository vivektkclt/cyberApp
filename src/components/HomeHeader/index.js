import {View, StatusBar, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import appColors from '../../Theme/Colors';
import {useNavigation} from '@react-navigation/native';
import images from '../../assets/Images';
const HomeHeader = ({children}) => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar animated={true} backgroundColor={'#201A30'} />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => navigation.openDrawer()}>
          <Icon color={appColors.white} name="menu" size={35} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image
            resizeMode="contain"
            style={styles.titleTxt}
            source={images.titleName}
          />
        </View>
      </View>
    </>
  );
};

export default HomeHeader;
