import { configureStore } from '@reduxjs/toolkit';
import GeneratorSpreadsheetSlice from '../modules/generator-spreadsheet/slice';

export const store = configureStore({
  reducer: {
    generatorSpreadsheet: GeneratorSpreadsheetSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
