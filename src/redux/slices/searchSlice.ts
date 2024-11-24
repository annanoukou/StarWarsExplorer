import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  query: string;
  entityType: string;
  results: any[];
  detailsCache: { [url: string]: any };
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  query: '',
  entityType: 'people',
  results: [],
  detailsCache: {},
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setEntityType(state, action: PayloadAction<string>) {
      state.entityType = action.payload;
    },
    setResults(state, action: PayloadAction<any[]>) {
      state.results = action.payload;
      state.loading = false;
    },
    setDetailsCache(state, action: PayloadAction<{ url: string; data: any }>) {
      state.detailsCache[action.payload.url] = action.payload.data;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const {
  setQuery,
  setEntityType,
  setResults,
  setDetailsCache,
  setLoading,
  setError,
} = searchSlice.actions;

export default searchSlice.reducer;