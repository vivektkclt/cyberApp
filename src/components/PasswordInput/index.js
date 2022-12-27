import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import appColors from '../../Theme/Colors';
import Icon from 'react-native-vector-icons/Feather';
const PasswordInput = props => {
  const {
    label = 'Sample Label',
    placeholder = 'Enter value',
    value = '',
  } = props;
  const [fieldValue, setValue] = useState('');
  const [isFocus, setFocus] = useState(false);
  const [isSecured, setSecured] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.fieldConatiner}>
        <View style={{width: '85%'}}>
          {isFocus || fieldValue ? (
            <Text style={styles.labelText}>{label}</Text>
          ) : null}
          <View style={styles.inputConatiner}>
            <Icon
              name="lock"
              size={25}
              color={
                isFocus || fieldValue
                  ? appColors.white
                  : appColors.placeHolderWhite
              }
            />
            <TextInput
              onChangeText={value => {
                props?.onChangeText(value);
              }}
              onBlur={() => {
                setFocus(false);
              }}
              secureTextEntry={isSecured}
              onFocus={() => setFocus(true)}
              value={value}
              placeholderTextColor={appColors.placeHolderWhite}
              placeholder={label}
              style={styles.inputBox}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.eyeContainer}
          onPress={() => {
            setSecured(!isSecured);
          }}>
          <Icon
            name={isSecured ? 'eye-off' : 'eye'}
            size={20}
            color={
              isFocus || fieldValue
                ? appColors.white
                : appColors.placeHolderWhite
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordInput;
