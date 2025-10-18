import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Cow } from '../../types/Cow';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import styles from './styles';

interface Props {
  cow: Cow;
  onPress?: () => void;
}

export const statusColors: Record<string, string> = {
  Active: '#4CAF50',
  'In Treatment': '#FFA726',
  Deceased: '#EF5350',
};

const CowCard = ({ cow, onPress }: Props) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={styles.header}>
      <Text style={styles.tag}>#{cow.id}</Text>
      <View
        style={[
          styles.badge,
          { backgroundColor: statusColors[cow.status] || '#bbb' },
        ]}
      >
        <Text style={styles.badgeText}>{cow.status}</Text>
      </View>
    </View>

    <View style={styles.row}>
      <MaterialIcons
        name={cow.sex === 'Male' ? 'male' : 'female'}
        size={18}
        color="#555"
      />
      <Text style={styles.infoText}>{cow.sex}</Text>
    </View>

    <View style={styles.row}>
      <MaterialIcons name="home" size={18} color="#555" />
      <Text style={styles.infoText}>Pen: {cow.pen}</Text>
    </View>

    <View style={styles.row}>
      <MaterialIcons name="edit-calendar" size={18} color="#555" />
      <Text style={styles.infoText}>
        Last Event: {cow.lastEventDate || 'No events yet'}
      </Text>
    </View>
  </TouchableOpacity>
);

export default CowCard;
