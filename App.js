import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UseCallbackComponent } from './src/components/UseCallbackComponent';
import { UseContextChildComponent } from './src/components/UseContextChildComponent';
import { UseContextComponent } from './src/components/UseContextComponent';
import { UseEffectCleaningComponent } from './src/components/UseEffectCleaningComponent';
import { UseEffectComponent } from './src/components/UseEffectComponent';
import { UseMemoComponent } from './src/components/UseMemoComponent';
import { UseRefComponent } from './src/components/UseRefComponent';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <UseEffectComponent /> */}

      {/* <UseEffectCleaningComponent /> */}

      {/* <UseMemoComponent /> */}

      {/* <UseCallbackComponent /> */}
      
      {/* <UseRefComponent /> */}

      <UseContextComponent>
        <UseContextChildComponent />
      </UseContextComponent>
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
