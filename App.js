/** 
 *  Installation
 *    npm install @react-navigation/native
 *    npm install react-native-screens react-native-safe-area-context
 * 
 *  Installing dependencies into an Expo managed project
 *    npx expo install react-native-screens react-native-safe-area-context
 * 
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
