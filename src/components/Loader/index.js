import {View, Text, Modal} from 'react-native';
import React from 'react';
import {styles} from './styles';
import LottieView from 'lottie-react-native';
import animations from '../../assets/animations';
import {useSelector} from 'react-redux';

const Loader = () => {
  const {loader} = useSelector(state => state.globalReducer);
  return (
    <Modal transparent visible={loader}>
      <View style={styles.conatiner}>
        <LottieView
          resizeMode="contain"
          style={styles.animation}
          source={animations.loader}
          autoPlay={true}
          loop={true}
        />
        {/* <Text style={styles.loadingTxt}>Fetching Loaction....</Text> */}
      </View>
    </Modal>
  );
};

export default Loader;
