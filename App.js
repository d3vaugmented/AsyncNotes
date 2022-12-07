/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';

import Navigation from './src/navigation';
import {WithSplashScreen} from './src/components/';
import {NoteProvider} from './src/context/NoteContext';

const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setIsAppReady(true);
  }, []);

  return (
    <NoteProvider>
      <WithSplashScreen isAppReady={isAppReady}>
        <NativeBaseProvider>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </WithSplashScreen>
    </NoteProvider>
  );
};
export default App;
