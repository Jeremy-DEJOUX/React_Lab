import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

import TasksScreen from './src/screens/Tasks';

const App = ({children, title}) => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <TasksScreen />
    </SafeAreaView>
      
  )
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});

export default App;