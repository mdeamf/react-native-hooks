import React, { useState, useEffect, useMemo } from 'react';
import { View, Button, Text } from 'react-native';

const LOG = '[USE MEMO COMPONENT]';

export const UseMemoComponent = () => {
  const [number, setNumber] = useState(1);
  const [anoterNumber, setAnoterNumber] = useState(1);

  useEffect(() => {
    console.log(LOG, 'useEffect mounted');
  }, []);

  useEffect(() => {
    console.log(LOG, 'useEffect updated');
  });

  const memoizedNumber = useMemo(() => {
    console.log(LOG, 'useMemo number memoized', number);
    let newNumber = number;
    for (let i = 0; i < 1000000000; i++) {
      newNumber++;
    }
    return newNumber;
  }, [number]);

  const randomNumber = Math.random().toFixed(5);

  const randomNumberMemo = useMemo(() => Math.random().toFixed(5), []);

  return (
    <>
      <View style={{ marginBottom: '32px' }}>
        <Text>Current Number: {number}</Text>
        <Text>Giant Number: {memoizedNumber}</Text>
        <Button title="Add Number" onPress={() => setNumber(number + 1)} />
      </View>

      <View>
        <Text>Another Number: {anoterNumber}</Text>
        <Text>Random Number Not Memoized: {randomNumber}</Text>
        <Text>Random Number Memoized: {randomNumberMemo}</Text>
        <Button
          title="Add Another Number"
          onPress={() => setAnoterNumber(anoterNumber + 1)}
        />
      </View>
    </>
  );
};
