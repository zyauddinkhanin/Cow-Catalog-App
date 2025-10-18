import React, { ReactNode } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardTypeOptions,
  ViewStyle,
  TextStyle,
} from 'react-native';
import styles from './styles';

interface CustomTextInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  required?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  style?: ViewStyle | ViewStyle[];
  inputStyle?: ViewStyle | ViewStyle[];
  labelStyle?: TextStyle | TextStyle[];
  placeholderColor?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label = '',
  placeholder = '',
  value,
  onChangeText,
  keyboardType = 'default',
  required = false,
  leftIcon = null,
  rightIcon = null,
  style = {},
  inputStyle = {},
  labelStyle = {},
  placeholderColor = '#888',
}) => {
  return (
    <View style={[styles.wrapper, style]}>
      {label ? (
        <Text style={[styles.label, labelStyle]}>
          {label}
          {required && <Text style={styles.requiredStyle}> *</Text>}
        </Text>
      ) : null}
      {leftIcon ? leftIcon : null}
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
      {rightIcon ? rightIcon : null}
    </View>
  );
};

export default CustomTextInput;
