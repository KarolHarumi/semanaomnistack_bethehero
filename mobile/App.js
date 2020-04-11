import 'intl';
import 'intl/locale-data/jsonp/pt-BR'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import React from 'react';

import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
}