import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from './presentation/navigation'

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
