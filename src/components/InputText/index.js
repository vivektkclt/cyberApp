import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import appColors from '../../Theme/Colors';
import Icon from 'react-native-vector-icons/Feather';
const InputText = props => {
  const {label = 'Sample Label', placeholder = 'Enter value'} = props;
  const [fieldValue, setValue] = useState('');
  const [isFocus, setFocus] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          height: '69%',
          width: '100%',
          backgroundColor: 'rgba(56,48,76, 0.8)',
          justifyContent: 'center',
          borderRadius: 20,
        }}>
        {isFocus || fieldValue ? (
          <Text style={styles.labelText}>{label}</Text>
        ) : null}
        <View style={styles.inputConatiner}>
          <Icon
            name="user"
            size={25}
            color={
              isFocus || fieldValue
                ? appColors.white
                : appColors.placeHolderWhite
            }
          />
          <TextInput
            onChangeText={value => {
              setValue(value);
            }}
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
            value={fieldValue}
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
