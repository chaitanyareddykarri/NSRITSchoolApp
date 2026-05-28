import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/store';
import {colors, paperTheme} from './src/theme';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <Provider store={store}>
        <PaperProvider theme={paperTheme}>
          <SafeAreaProvider>
            <StatusBar
              barStyle="dark-content"
              backgroundColor={colors.background}
            />
            <AppNavigator />
            <Toast />
          </SafeAreaProvider>
        </PaperProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
