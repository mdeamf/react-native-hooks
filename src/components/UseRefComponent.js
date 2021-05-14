import React, { useState, useEffect, useRef } from 'react';
import { Button, Text } from 'react-native';

const LOG = '[USE REF COMPONENT]';

export const UseRefComponent = () => {
  const [stateNumber, setStateNumber] = useState(0);
  const refNumber = useRef(0)
  const setRefNumber = () => {
    refNumber.current += 1
    console.log(LOG, 'refNumber updated', refNumber)
  }

  const refText = useRef();

  useEffect(() => {
    console.log(LOG, 'mounted');
  }, []);

  useEffect(() => {
    console.log(LOG, 'updated');
    console.log(LOG, 'refText', refText);
  });

  useEffect(() => {
    console.log(LOG, 'stateNumber updated', stateNumber);
  }, [stateNumber]);

  return (
    <>
      <Text ref={refText}>State Number: {stateNumber}</Text>
      <Text>State Number: {stateNumber}</Text>
      <Text>Ref Number: {refNumber.current}</Text>
      <Button title="Add State Number" onPress={() => setStateNumber(stateNumber + 1)}/>
      <Button title="Add Ref Number" onPress={() => setRefNumber() }/>
    </>
  )
};
