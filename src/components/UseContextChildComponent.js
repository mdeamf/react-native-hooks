import React, { useEffect, useContext } from 'react';
import { FlatList, Text } from 'react-native';
import { UseContext } from './UseContextComponent';

const LOG = '[USE CONTEXT CHILD COMPONENT]';

export const UseContextChildComponent = () => {
  useEffect(() => {
    console.log(LOG, 'mounted');
  }, []);

  useEffect(() => {
    console.log(LOG, 'updated');
  });

  const { numbers } = useContext(UseContext);

  return (
    <>
      <FlatList
        data={numbers}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item.toString()}
      />
    </>
  );
};
