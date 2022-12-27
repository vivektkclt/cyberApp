import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import appColors from '../../Theme/Colors';
import Icon from 'react-native-vector-icons/Feather';
const InputText = props => {
  const {label = 'Sample Label', value} = props;
  const [isFocus, setFocus] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        {isFocus || value ? (
          <Text style={styles.labelText}>{label}</Text>
        ) : null}
        <View style={styles.inputConatiner}>
          <Icon
            name="user"
            size={25}
            color={
              isFocus || value ? appColors.white : appColors.placeHolderWhite
            }
          />
          <TextInput
            onChangeText={text => {
              props.onChangeText(text);
            }}
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
            value={value}
            placeholderTextColor={appColors.placeHolderWhite}
            placeholder={label}
            style={styles.inputBox}
          />
        </View>
      </View>
    </View>
  );
};

export default InputText;
