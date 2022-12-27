import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppWrapper from '../../components/AppWrapper';
import {FIRitem, HomeHeader} from '../../components';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import GetLocation from 'react-native-get-location';
import Geolocation from 'react-native-geolocation-service';
import {getCurrentLocation, hasLocationPermission} from '../../helpers';
import {setLoader} from '../../Redux/Reducers/globalReducer';
const Home = () => {
  const dispatch = useDispatch();
  const {firList} = useSelector(state => state.globalReducer);
  const {user} = useSelector(state => state.authReducer);
  const [cordinates, setCordinates] = useState({latitude: '', longitude: ''});
  useEffect(() => {
    getLocation();
    console.log('FIRLIST=====', user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firList]);
  const data = [
    {
      Internalid: 157276,
      firno: '05/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157308,
      firno: '23/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157310,
      firno: '17/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157276,
      firno: '05/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157308,
      firno: '23/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157310,
      firno: '17/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157276,
      firno: '05/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157308,
      firno: '23/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157310,
      firno: '17/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157276,
      firno: '05/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157308,
      firno: '23/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157310,
      firno: '17/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157276,
      firno: '05/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157308,
      firno: '23/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
    {
      Internalid: 157310,
      firno: '17/2017',
      token: 'b5f4a8f31d754754bd715aab068d5413',
    },
  ];
  const getLocation = async () => {
    dispatch(setLoader(true));
    const permission = await hasLocationPermission();
    if (permission) {
      let location = await getCurrentLocation();
      console.log(location, 'LOCATION=====');
      if (location) {
        setTimeout(() => {
          dispatch(setLoader(false));
        }, 1000);
        setCordinates({
          latitude: location?.latitude,
          longitude: location?.longitude,
        });
      }
    }
  };
  const firItem = ({item}) => {
    return (
      <FIRitem
        updateLocation={() => getLocation()}
        coordinates={cordinates}
        data={item}
      />
    );
  };
  return (
    <AppWrapper>
      <HomeHeader />
      <FlatList
        contentContainerStyle={styles.container}
        data={firList}
        renderItem={firItem}
        keyExtractor={item => item?.Internalid}
      />
    </AppWrapper>
  );
};

export default Home;
