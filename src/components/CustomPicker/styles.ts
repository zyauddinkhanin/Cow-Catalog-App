import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 4,
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  requiredStyle: { color: 'red' },
  androidDropdown: {
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    height: 48,
    marginBottom: 10,
  },
  androidPicker: {
    height: '100%',
    color: '#000',
  },
});

export const pickerSelectStyles = {
  inputIOS: {
    color: 'transparent',
    height: 0,
  },
  inputAndroid: {
    color: 'transparent',
    height: 0,
  },
};
