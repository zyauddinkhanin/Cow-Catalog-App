import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cow, Event } from '../types/Cow';

interface CowsState {
  cows: Cow[];
  filteredCows: Cow[];
  loading: boolean;
  search: string;
  statusFilter: string | null;
  penFilter: string | null;
}

const initialState: CowsState = {
  cows: [],
  filteredCows: [],
  loading: false,
  search: '',
  statusFilter: null,
  penFilter: null,
};

export const mockEvents: Event[] = [
  {
    id: '1',
    type: 'WeightCheck',
    date: '2025-10-15',
    details: `Weight recorded`,
  },
  {
    id: '2',
    type: 'Treatment',
    date: '2025-10-10',
    details: 'Antibiotic treatment administered.',
  },
  {
    id: '3',
    type: 'Moved',
    date: '2025-09-28',
    details: 'Transferred to Pen B for monitoring.',
  },
];

export const mockCows: Cow[] = [
  {
    id: '1001',
    sex: 'Female',
    pen: 'Pen A',
    status: 'Active',
    weight: 450,
    lastEventDate: '2025-10-12',
    dailyGain: 1.2,
    events: mockEvents,
  },
  {
    id: '1002',
    sex: 'Male',
    pen: 'Pen B',
    status: 'In Treatment',
    weight: 380,
    lastEventDate: '2025-10-15',
    dailyGain: 0.8,
    events: mockEvents,
  },
  {
    id: '1003',
    sex: 'Female',
    pen: 'Pen C',
    status: 'Deceased',
    weight: 0,
    lastEventDate: '2025-09-05',
    dailyGain: 0,
    events: mockEvents,
  },
  {
    id: '1004',
    sex: 'Male',
    pen: 'Pen A',
    status: 'Active',
    weight: 500,
    lastEventDate: '2025-10-17',
    dailyGain: 1.4,
    events: mockEvents,
  },
];

const cowsSlice = createSlice({
  name: 'cows',
  initialState,
  reducers: {
    setCows: (state, action: PayloadAction<Cow[]>) => {
      state.cows = action.payload;
      state.filteredCows = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setStatusFilter: (state, action: PayloadAction<string | null>) => {
      state.statusFilter = action.payload;
    },
    setPenFilter: (state, action: PayloadAction<string | null>) => {
      state.penFilter = action.payload;
    },
    applyFilters: state => {
      let filtered = [...state.cows];

      if (state.search) {
        filtered = filtered.filter(cow =>
          cow.id.toLowerCase().includes(state.search.toLowerCase()),
        );
      }

      if (state.statusFilter) {
        filtered = filtered.filter(cow => cow.status === state.statusFilter);
      }

      if (state.penFilter) {
        filtered = filtered.filter(cow => cow.pen === state.penFilter);
      }

      state.filteredCows = filtered;
    },
    addCow: (state, action: PayloadAction<Cow>) => {
      state.cows.push(action.payload);
      state.filteredCows.push(action.payload);
    },
  },
});

export const {
  setCows,
  setLoading,
  setSearch,
  setStatusFilter,
  setPenFilter,
  applyFilters,
  addCow,
} = cowsSlice.actions;

export default cowsSlice.reducer;
