import React, { useState } from 'react';
import { Modal, View, Text } from 'react-native';
import styles from './styles';
import CustomPicker from '../CustomPicker';
import CustomButton from '../CustomButton';

interface Props {
  visible: boolean;
  onClose: () => void;
  onApply: (filters: { status: string | null; pen: string | null }) => void;
  defaultStatus?: string | null;
  defaultPen?: string | null;
}

const FilterModal = ({
  visible,
  onClose,
  onApply,
  defaultStatus,
  defaultPen,
}: Props) => {
  const [pen, setPen] = useState<string | null>(defaultPen || null);
  const [status, setStatus] = useState<string | null>(defaultStatus || null);

  const handleReset = () => {
    setPen(null);
    setStatus(null);
  };

  const handleApply = () => onApply({ status, pen });

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>Filters</Text>
            <CustomButton
              title={'Reset'}
              onPress={handleReset}
              style={styles.addButton}
              textStyle={styles.addButtonText}
              backgroundColor={'transparent'}
              textColor={'#EF5350'}
            />
          </View>

          <CustomPicker
            label={'Pen'}
            placeholder={'Select Pen'}
            value={pen}
            onValueChange={setPen}
            items={[
              { label: 'Pen A', value: 'Pen A' },
              { label: 'Pen B', value: 'Pen B' },
              { label: 'Pen C', value: 'Pen C' },
            ]}
          />

          <CustomPicker
            label={'Status'}
            placeholder={'Select Status'}
            value={status}
            onValueChange={setStatus}
            items={[
              { label: 'Active', value: 'Active' },
              { label: 'In Treatment', value: 'In Treatment' },
              { label: 'Deceased', value: 'Deceased' },
            ]}
          />

          <View style={styles.buttonRow}>
            <CustomButton
              title={'Apply'}
              onPress={handleApply}
              style={styles.addButton}
            />
            <CustomButton
              title={'Close'}
              onPress={onClose}
              backgroundColor={'#999'}
              style={styles.addButton}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
