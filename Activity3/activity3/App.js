import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const BoldAndBeautiful = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>
        Charles Kevin
        <Text style={styles.innerText1}> Telin</Text>
      </Text>
      <Text>
        I am
        <Text style={styles.innerText2}> BSIT</Text>
      </Text>
      <Text>
        Live in
        <Text style={styles.innerText3}> Caloocan</Text>
      </Text>
      <Text>
        My favorite color
        <Text style={styles.innerText4}> BLUE</Text>
      </Text>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontWeight: 'bold',
    color: 'blue'
  },
  innerText1: {
    color: 'red',
  },
  innerText2: {
    color: 'lightblue',
  },
  innerText3: {
    color: 'orange',
  },
  innerText4: {
    color: 'blue',
  },
});

export default BoldAndBeautiful;