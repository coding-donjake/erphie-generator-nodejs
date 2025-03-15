import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/renderer/store';
import { increment, decrement } from '@/renderer/modules/generator-spreadsheet/slice';

const GeneratorSpreadsheet = () => {
  const count = useSelector((state: RootState) => state.generatorSpreadsheet.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Generator Spreadsheet</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default GeneratorSpreadsheet
