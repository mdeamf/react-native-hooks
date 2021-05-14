import React, { useState, useEffect, useCallback } from 'react';
import { Button, Text } from 'react-native';

const LOG = '[USE CALLBACK COMPONENT]';

export const UseCallbackComponent = () => {
  const [number, setNumber] = useState(1);
  const [anotherNumber, setAnotherNumber] = useState(1);

  useEffect(() => {
    console.log(LOG, 'useEffect mounted');
  }, []);

  useEffect(() => {
    console.log(LOG, 'useEffect updated');
  });

  useEffect(() => {
    console.log(LOG, 'useEffect number updated', number);
  }, [number]);
  
  useCallback(() => {
    console.log(LOG, 'useCallback mounted', number);
  }, []);

  useCallback(() => {
    console.log(LOG, 'useCallback updated', number);
  });

  const memoizedNumber = useCallback(() => {
    console.log(LOG, 'useCallback number memoized', number);
    return number * 10;
  }, [number]);

  console.log(LOG, 'memoizedNumber', memoizedNumber);

  return (
    <>
      <Text>Another Number: {anotherNumber}</Text>
      <Text>Current Number: {number}</Text>
      <Button title="Add Another Number" onPress={() => setAnotherNumber(anotherNumber + 1)}/>
      <Button title="Add Number" onPress={() => setNumber(number + 1)}/>
    </>
  )
};
