import React, { useEffect, useReducer } from 'react';
import { Button, Text } from 'react-native';

const LOG = '[USE REDUCER COMPONENT]';

const initialState = {
  number: 0,
  otherVal: 'test'
};

const numberReducer = (state, action) => {
  console.log(LOG, 'numberReducer', state, action);
  switch (action.type) {
    case 'INC':
      return { ...state, number: state.number + 1 }
      case 'DEC':
      return { ...state, number: state.number - 1 }
    default:
      return state;
  }
};

export const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(numberReducer, initialState);

  useEffect(() => {
    console.log(LOG, 'mounted');
  }, []);

  useEffect(() => {
    console.log(LOG, 'updated', state);
  });

  return (
    <>
      <Text>Number: {state.number}</Text>
      <Button title="Increment" onPress={() => dispatch({ type: 'INC' })} />
      <Button title="Decrement" onPress={() => dispatch({ type: 'DEC' })} />
    </>
  );
};
