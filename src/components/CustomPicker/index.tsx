import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import RNPickerSelect, { Item } from 'react-native-picker-select';
import { Picker } from '@react-native-picker/picker';
import styles, { pickerSelectStyles } from './styles';

interface CustomPickerProps<T> {
  label: string;
  placeholder: string;
  value: T | null;
  onValueChange: (value: T | null) => void;
  items: Item[];
  returnType?: string;
  required?: boolean;
}

const CustomPicker = <T extends string | number>({
  label,
  placeholder,
  value,
  onValueChange,
  items,
  returnType = 'Done',
  required = false,
}: CustomPickerProps<T>) => {
  const pickerRef = useRef<RNPickerSelect>(null);
  const getTextColor = (val: T | null) => (val ? '#000' : '#888');

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>
        {label}
        {required && <Text style={styles.requiredStyle}> *</Text>}
      </Text>

      {Platform.OS === 'ios' ? (
        <>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => pickerRef.current?.togglePicker(true)}
            activeOpacity={0.8}
          >
            <Text style={{ color: getTextColor(value) }}>
              {value || placeholder}
            </Text>
          </TouchableOpacity>

          <RNPickerSelect
            ref={pickerRef}
            onValueChange={onValueChange}
            value={value}
            items={items}
            placeholder={{}}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
            doneText={returnType}
          />
        </>
      ) : (
        <View style={[styles.dropdown, styles.androidDropdown]}>
          <Picker
            selectedValue={value}
            onValueChange={onValueChange}
            mode="dropdown"
          >
            <Picker.Item label={placeholder} value={null} color="#888" />
            {items.map(item => (
              <Picker.Item
                key={item.value?.toString()}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </View>
      )}
    </View>
  );
};

export default CustomPicker;
