import React, { useState, useEffect, useMemo } from 'react';
import { Button, Text } from 'react-native';

const LOG = '[USE MEMO COMPONENT]';

export const UseMemoComponent = () => {
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
  
  useMemo(() => {
    console.log(LOG, 'useMemo mounted', number);
  }, []);

  useMemo(() => {
    console.log(LOG, 'useMemo updated', number);
  });

  const memoizedNumber = useMemo(() => {
    console.log(LOG, 'useMemo number memoized', number);
    return number * 10;
  }, [number]);

  return (
    <>
      <Text>Another Number: {anotherNumber}</Text>
      <Text>Current Number: {number}</Text>
      <Text>Memoized Number: {memoizedNumber}</Text>
      <Button title="Add Another Number" onPress={() => setAnotherNumber(anotherNumber + 1)}/>
      <Button title="Add Number" onPress={() => setNumber(number + 1)}/>
    </>
  )
};
