import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppWrapper from '../../components/AppWrapper';
import {FIRitem, HomeHeader} from '../../components';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentLocation, hasLocationPermission} from '../../helpers';
import {setLoader} from '../../Redux/Reducers/globalReducer';
import LottieView from 'lottie-react-native';
import {getFIRhelper} from '../../api/helper/getFIRhelper';
import animations from '../../assets/animations';
const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {firList, loader} = useSelector(state => state.globalReducer);
  const [cordinates, setCordinates] = useState({latitude: '', longitude: ''});
  useEffect(() => {
    getFIRhelper(navigation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
      {firList && firList?.length > 0 ? (
        <FlatList
          contentContainerStyle={styles.container}
          data={firList}
          renderItem={firItem}
          keyExtractor={item => item?.Internalid}
        />
      ) : (
        <View style={styles.emptyContainer}>
          {loader ? null : (
            <LottieView
              resizeMode="contain"
              style={styles.animation}
              source={animations.emptyDocs}
              autoPlay={true}
              loop={true}
            />
          )}
        </View>
      )}
    </AppWrapper>
  );
};

export default Home;
