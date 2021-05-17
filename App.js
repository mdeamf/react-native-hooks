import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { UseCallbackComponent } from './src/components/UseCallbackComponent';
import { UseContextChildComponent } from './src/components/UseContextChildComponent';
import { UseContextComponent } from './src/components/UseContextComponent';
import { UseEffectCleaningComponent } from './src/components/UseEffectCleaningComponent';
import { UseEffectComponent } from './src/components/UseEffectComponent';
import { UseMemoComponent } from './src/components/UseMemoComponent';
import { UseReducerComponent } from './src/components/UseReducerComponent';
import { UseRefComponent } from './src/components/UseRefComponent';

export default function App() {
  const [showUseEffectCleaning, setShowUseEffectCleaning] = useState(true);
  return (
    <View style={styles.container}>
      {/* <UseEffectComponent /> */}

      {showUseEffectCleaning && <UseEffectCleaningComponent />}
      <Button
        title={showUseEffectCleaning ? 'Remover Comp' : 'Exibir Comp'}
        onPress={() => setShowUseEffectCleaning(!showUseEffectCleaning)}
      />

      {/* <UseMemoComponent /> */}

      {/* <UseCallbackComponent /> */}

      {/* <UseRefComponent /> */}

      {/* <UseContextComponent>
        <UseContextChildComponent />
      </UseContextComponent> */}

      {/* <UseReducerComponent /> */}
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
