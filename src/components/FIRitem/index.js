import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import GetLocation from 'react-native-get-location';
import {hasLocationPermission} from '../../helpers';
import {useDispatch, useSelector} from 'react-redux';
import {setLoader} from '../../Redux/Reducers/globalReducer';
const FIRitem = ({data}) => {
  const {loader} = useSelector(state => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(loader, 'LOADER======');
  }, [loader]);
  const getLocation = async () => {
    dispatch(setLoader(true));
    const permission = await hasLocationPermission();
    if (permission) {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      })
        .then(location => {
          setTimeout(() => {
            dispatch(setLoader(false));
          }, 1000);
          console.log(location, 'LOCATION======');
        })
        .catch(error => {
          const {code, message} = error;
          console.warn(code, message);
        });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.txtContainer}>
        <Text style={styles.firNo}>FIR No : {data?.firno}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          getLocation();
        }}
        style={styles.btnContainer}>
        <Text style={styles.btnTxt}>Update Location</Text>
        <Icon color={'black'} name="md-location-sharp" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default FIRitem;
