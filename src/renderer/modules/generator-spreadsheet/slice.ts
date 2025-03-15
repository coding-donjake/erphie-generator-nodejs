import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GeneratorSpreadsheetState {
  count: number;
}

const initialState: GeneratorSpreadsheetState = {
  count: 0,
};

const GeneratorSpreadsheetSlice = createSlice({
  name: 'generatorSpreadsheet',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { increment, decrement, setCount } = GeneratorSpreadsheetSlice.actions;
export default GeneratorSpreadsheetSlice.reducer;
