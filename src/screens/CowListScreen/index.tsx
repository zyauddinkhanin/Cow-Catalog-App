import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import {
  applyFilters,
  setPenFilter,
  setSearch,
  setStatusFilter,
} from '../../store/cowsSlice';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import CowCard from '../../components/CowCard';
import FilterModal from '../../components/FilterModal';
import { loadCows } from '../../services/cowStorage';
import CustomTextInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { navigate } from '../../navigation';
import { Screens } from '../../utils/constants';
import styles from './styles';

const CowListScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredCows, loading, search, statusFilter, penFilter } =
    useSelector((state: RootState) => state.cows);

  const [filterVisible, setFilterVisible] = useState(false);

  useEffect(() => {
    dispatch(loadCows());
  }, [dispatch]);

  const handleSearch = (text: string) => {
    dispatch(setSearch(text));
    dispatch(applyFilters());
  };

  const handleApplyFilters = (filters: {
    status: string | null;
    pen: string | null;
  }) => {
    dispatch(setStatusFilter(filters.status));
    dispatch(setPenFilter(filters.pen));
    dispatch(applyFilters());
    setFilterVisible(false);
  };

  const handleAdd = () => navigate(Screens.CowForm);

  if (loading) return <ActivityIndicator style={styles.activityStyle} />;

  return (
    <View style={styles.container}>
      <CustomTextInput
        placeholder="Search by ear tag..."
        value={search}
        onChangeText={handleSearch}
        style={styles.searchContainer}
        inputStyle={styles.searchInput}
        leftIcon={<MaterialIcons name="search" size={22} color="#666" />}
        rightIcon={
          <TouchableOpacity onPress={() => setFilterVisible(true)}>
            <MaterialIcons name="filter-list" size={24} color="#666" />
          </TouchableOpacity>
        }
      />

      <CustomButton
        title="+ Add Cow"
        onPress={handleAdd}
        style={styles.addButton}
        textStyle={styles.addButtonText}
      />

      <FlatList
        data={filteredCows}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CowCard
            cow={item}
            onPress={() => navigate(Screens.CowDetail, { cowId: item.id })}
          />
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No cows found</Text>}
      />

      <FilterModal
        visible={filterVisible}
        onClose={() => setFilterVisible(false)}
        onApply={handleApplyFilters}
        defaultStatus={statusFilter}
        defaultPen={penFilter}
      />
    </View>
  );
};

export default CowListScreen;
