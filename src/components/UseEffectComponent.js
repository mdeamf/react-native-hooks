import React, { useState, useEffect } from 'react';
import { Button, Text } from 'react-native';

const LOG = '[USE EFFECT COMPONENT]';

export const UseEffectComponent = () => {
  const [isHappy, setIsHappy] = useState(false);

  useEffect(() => {
    console.log(LOG, 'mounted');
  }, []);

  useEffect(() => {
    console.log(LOG, 'updated');
  });

  useEffect(() => {
    console.log(LOG, 'isHappy updated', isHappy);
  }, [isHappy]);

  return (
    <>
      <Text>Am I Happy? {isHappy ? 'YES' : 'NO'}</Text>
      <Button title="Change Happiness" onPress={() => setIsHappy(!isHappy)}/>
    </>
  )
};
