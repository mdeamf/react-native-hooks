import React, { useState, useEffect } from 'react';
import { Button, Text } from 'react-native';

const LOG = '[USE EFFECT CLEANING COMPONENT]';

export const UseEffectCleaningComponent = () => {
  const [isSad, setIsSad] = useState(0);

  const getSadness = () => {
    switch (isSad) {
      case 0:
        return 'NO';
      case 1:
        return 'BECOMING SAD...';
      case 2:
        return 'YES';
    }
  };

  useEffect(() => {
    console.log(LOG, 'mounted');

    return () => console.log(LOG, 'unmounted');
  }, []);

  useEffect(() => {
    console.log(LOG, 'updated');
  });

  useEffect(() => {
    console.log(LOG, 'isSad updated', isSad);

    // If it's becoming sad, dispatch an interval and clean it afterwards.
    if (isSad === 1) {
      const interval = setInterval(() => {
        console.log(LOG, 'isSad finished updating', isSad);
        setIsSad(2);
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [isSad]);

  return (
    <>
      <Text>Am I Sad? {getSadness()}</Text>
      <Button
        title="Change Sadness"
        onPress={() => setIsSad(isSad === 0 ? 1 : 0)}
        disabled={isSad === 1}
      />
    </>
  );
};
