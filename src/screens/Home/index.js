import {FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppWrapper from '../../components/AppWrapper';
import {FIRitem, HomeHeader} from '../../components';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentLocation, hasLocationPermission} from '../../helpers';
import {setLoader} from '../../Redux/Reducers/globalReducer';
const Home = () => {
  const dispatch = useDispatch();
  const {firList} = useSelector(state => state.globalReducer);
  const [cordinates, setCordinates] = useState({latitude: '', longitude: ''});
  useEffect(() => {
    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firList]);
  const getLocation = async () => {
    dispatch(setLoader(true));
    const permission = await hasLocationPermission();
    if (permission) {
      let location = await getCurrentLocation();
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
