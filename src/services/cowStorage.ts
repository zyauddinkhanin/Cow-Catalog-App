import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppDispatch } from '../store/store';
import {
  addCow,
  applyFilters,
  mockCows,
  setCows,
  setLoading,
} from '../store/cowsSlice';
import { Cow } from '../types/Cow';

export const loadCows = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const storedData = await AsyncStorage.getItem('cows');
    if (storedData) {
      const parsed = JSON.parse(storedData);
      dispatch(setCows(parsed));
    } else {
      await AsyncStorage.setItem('cows', JSON.stringify(mockCows));
      dispatch(setCows(mockCows));
    }
  } catch (e) {
    console.error('Failed to load cows:', e);
  } finally {
    dispatch(setLoading(false));
  }
};

export const saveCow = (newCow: Cow) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const storedData = await AsyncStorage.getItem('cows');
    var updated: Cow[] = [];
    if (storedData) {
      const parsed = JSON.parse(storedData);
      updated = [...parsed, newCow];
    } else {
      updated = [newCow];
    }
    await AsyncStorage.setItem('cows', JSON.stringify(updated));
    dispatch(addCow(newCow));
    dispatch(applyFilters());
  } catch (e) {
    console.error('Failed to save cow:', e);
  } finally {
    dispatch(setLoading(false));
  }
};
