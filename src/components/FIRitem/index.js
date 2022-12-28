import {View, Text, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import {styles} from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import appColors from '../../Theme/Colors';
import {updateFir} from '../../api/methods/FirUpadte';
import {loginHelper} from '../../api/helper/loginHelper';
import {useDispatch, useSelector} from 'react-redux';
import {setLoader} from '../../Redux/Reducers/globalReducer';
import Toast from 'react-native-simple-toast';
const FIRitem = ({data, coordinates, updateLocation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.authReducer);
  const openGps = () => {
    Linking.openURL(
      'https://www.google.com/maps?q=' +
        coordinates?.latitude +
        ',' +
        coordinates.longitude,
    );
  };

  const onConfirm = async () => {
    dispatch(setLoader(true));
    let param = {
      Internalid: data?.Internalid,
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
    };
    try {
      console.log(param);
      let res = await updateFir(param);
      if (res[0] === 'Success..') {
        Toast.show('Update success..', Toast.SHORT, Toast.TOP);
        loginHelper(user);
      } else {
        dispatch(setLoader(false));
        if (res?.Message) {
          Toast.show(res?.Message, Toast.SHORT, Toast.TOP);
        } else {
          Toast.show('Something went wrong', Toast.SHORT, Toast.TOP);
        }
      }
    } catch (error) {
      if (error?.Message) {
        Toast.show(error?.Message, Toast.SHORT, Toast.TOP);
      } else {
        Toast.show('Something went wrong', Toast.SHORT, Toast.TOP);
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.txtContainer}>
        <Text style={styles.firNo}>FIR No : {data?.firno}</Text>
        <TouchableOpacity
          onPress={() => updateLocation()}
          style={styles.gpsButton}>
          <Icon name="gps-fixed" size={25} color={appColors.background} />
        </TouchableOpacity>
      </View>
      <Text style={styles.latLngTxt}>
        Latitude :{coordinates?.latitude},{'   '} Longitude :{' '}
        {coordinates?.longitude}
      </Text>
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          onPress={() => onConfirm()}
          style={styles.btnContainer}>
          <Text style={styles.btnTxt}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            openGps();
          }}
          style={styles.btnContainer}>
          <Text style={styles.btnTxt}>Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FIRitem;
