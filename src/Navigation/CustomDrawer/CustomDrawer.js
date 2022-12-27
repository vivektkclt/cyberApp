import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {styles} from './styles';
import FIcon from 'react-native-vector-icons/Fontisto';
import images from '../../assets/Images';
import DeviceInfo from 'react-native-device-info';
import {logOut} from '../../Redux/Reducers/authReducer';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {loginHelper} from '../../api/helper/loginHelper';
const CustomDrawer = props => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.authReducer);
  const navigation = useNavigation();
  const onLogout = () => {
    dispatch(logOut());
    navigation.replace('Login');
  };
  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        showsVerticalScrollIndicator={false}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={styles.mainViewContainer}>
          <View style={styles.drawerHeaderView}>
            <Image source={images.rapidLogo} style={styles.drawerLogoImage} />
          </View>

          <DrawerItem
            label={'Log Off'}
            labelStyle={styles.drawerItemTextStyle}
            onPress={() => {
              props.navigation.closeDrawer();
              onLogout();
            }}
            icon={() => <FIcon color={'black'} name="key" size={25} />}
            style={styles.drawerLine}
          />
          <DrawerItem
            label={'Refresh Data'}
            labelStyle={styles.drawerItemTextStyle}
            onPress={() => {
              loginHelper(user);
              props.navigation.closeDrawer();
            }}
            icon={() => (
              <FIcon color={'black'} name="spinner-refresh" size={25} />
            )}
            style={styles.drawerLine}
          />
          <DrawerItem
            label={'Version ' + DeviceInfo.getVersion()}
            labelStyle={styles.drawerItemTextStyle}
          />
          <View style={styles.drawerLine} />
        </DrawerContentScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomDrawer;
