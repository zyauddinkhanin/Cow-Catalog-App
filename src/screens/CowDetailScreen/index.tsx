import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './styles';
import MaterialIcons, {
  MaterialIconsIconName,
} from '@react-native-vector-icons/material-icons';
import { statusColors } from '../../components/CowCard';

type CowDetailScreenRouteProp = RouteProp<RootStackParamList, 'CowDetail'>;

const CowDetailScreen = () => {
  const route = useRoute<CowDetailScreenRouteProp>();
  const { cowId } = route.params;
  const cow = useSelector((state: RootState) =>
    state.cows.cows.find(c => c.id === cowId),
  );

  if (!cow) {
    return (
      <View style={styles.centered}>
        <Text style={styles.notFoundStyle}>Cow not found</Text>
      </View>
    );
  }

  const iconByEventType: Record<string, MaterialIconsIconName> = {
    WeightCheck: 'line-weight',
    Treatment: 'personal-injury',
    Moved: 'home',
    Death: 'dangerous',
  };

  const colorByEventType: Record<string, string> = {
    WeightCheck: '#4CAF50',
    Treatment: '#FFA726',
    Moved: '#42A5F5',
    Death: '#EF5350',
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Cow #{cow.id}</Text>
        <View style={styles.header}>
          <Text style={styles.subtitle}>Status</Text>
          <View
            style={[
              styles.badge,
              { backgroundColor: statusColors[cow.status] || '#bbb' },
            ]}
          >
            <Text style={styles.badgeText}>{cow.status}</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <MaterialIcons
            name={cow.sex === 'Male' ? 'male' : 'female'}
            size={20}
            color="#555"
          />
          <Text style={styles.infoText}>{cow.sex}</Text>
        </View>

        <View style={styles.infoRow}>
          <MaterialIcons name="home" size={20} color="#555" />
          <Text style={styles.infoText}>Pen: {cow.pen}</Text>
        </View>

        {cow.weight ? (
          <View style={styles.infoRow}>
            <MaterialIcons name="line-weight" size={20} color="#555" />
            <Text style={styles.infoText}>Weight: {cow.weight} kg</Text>
          </View>
        ) : null}

        {cow.dailyGain ? (
          <View style={styles.infoRow}>
            <MaterialIcons name="trending-up" size={20} color="#555" />
            <Text style={styles.infoText}>
              Daily Gain: {cow.dailyGain} kg/day
            </Text>
          </View>
        ) : null}
      </View>

      <View style={styles.timelineCard}>
        <Text style={styles.timelineTitle}>Recent Events</Text>
        {cow?.events?.map((event, index) => (
          <View key={event.id} style={styles.eventRow}>
            <View style={styles.timeline}>
              <View
                style={[
                  styles.dot,
                  { backgroundColor: colorByEventType[event.type] || '#999' },
                ]}
              />
              {index !== (cow?.events?.length ?? 0) - 1 && (
                <View style={styles.line} />
              )}
            </View>
            <View style={styles.eventContent}>
              <View style={styles.row}>
                <MaterialIcons
                  name={iconByEventType[event.type] || 'check-circle-outline'}
                  size={18}
                  color={colorByEventType[event.type] || '#999'}
                />
                <Text style={styles.eventType}>{event.type}</Text>
              </View>
              <Text style={styles.eventDate}>{event.date}</Text>
              {event?.details && (
                <Text style={styles.eventDetails}>
                  {event?.type === 'WeightCheck'
                    ? `${event?.details}: ${cow?.weight || 0} kg`
                    : event?.details}
                </Text>
              )}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default CowDetailScreen;
