import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { Cow } from '../../types/Cow';
import styles from './styles';
import { AppDispatch } from '../../store/store';
import { saveCow } from '../../services/cowStorage';
import CustomPicker from '../../components/CustomPicker';
import CustomTextInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import moment from 'moment';
import { DateFormat } from '../../utils/formatDate';
import { mockEvents } from '../../store/cowsSlice';
import { goBack } from '../../navigation';

const CowFormScreen = () => {
  const [id, setId] = useState('');
  const [sex, setSex] = useState<string | null>(null);
  const [pen, setPen] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [weight, setWeight] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSave = () => {
    if (!id || !sex || !pen || !status) {
      Alert.alert('Error', 'Please fill all required fields.');
      return;
    }

    const cow: Cow = {
      id,
      sex,
      pen,
      status,
      weight: weight ? Number(weight) : undefined,
      lastEventDate: moment().format(DateFormat.YYYY_MM_DD),
      events: mockEvents,
      dailyGain: 1,
    };

    dispatch(saveCow(cow));
    goBack();
  };

  return (
    <View style={styles.container}>
      <CustomTextInput
        label="Ear Tag"
        placeholder="Enter ear tag ID"
        value={id}
        onChangeText={setId}
        keyboardType="numeric"
        required
      />

      <CustomPicker
        label="Sex"
        placeholder="Select Gender"
        value={sex}
        onValueChange={setSex}
        items={[
          { label: 'Male', value: 'Male' },
          { label: 'Female', value: 'Female' },
        ]}
        required
      />

      <CustomPicker
        label="Pen"
        placeholder="Select Pen"
        value={pen}
        onValueChange={setPen}
        items={[
          { label: 'Pen A', value: 'Pen A' },
          { label: 'Pen B', value: 'Pen B' },
          { label: 'Pen C', value: 'Pen C' },
        ]}
        required
      />

      <CustomPicker
        label="Status"
        placeholder="Select Status"
        value={status}
        onValueChange={setStatus}
        items={[
          { label: 'Active', value: 'Active' },
          { label: 'In Treatment', value: 'In Treatment' },
          { label: 'Deceased', value: 'Deceased' },
        ]}
        required
      />

      <CustomTextInput
        label="Weight (optional)"
        placeholder="Enter weight"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />

      <CustomButton
        title="Save"
        onPress={handleSave}
        style={styles.addButton}
        textStyle={styles.addButtonText}
      />
    </View>
  );
};

export default CowFormScreen;
