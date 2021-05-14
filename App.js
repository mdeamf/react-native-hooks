import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UseEffectCleaningComponent } from './src/components/UseEffectCleaningComponent';
import { UseEffectComponent } from './src/components/UseEffectComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <UseEffectComponent />

      <UseEffectCleaningComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
