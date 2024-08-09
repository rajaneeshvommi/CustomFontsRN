/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text>{'Normal Text Demo'}</Text>
        <Text style={styles.headingText}>{'React Native'}</Text>
        <Text style={styles.subHeadingText}>
          {'Learn once, write anywhere.'}
        </Text>
      </View>
      <View style={styles.mainContainer}>
        <Text>{'Custom Text Demo'}</Text>
        <Text style={styles.headingWithCustomText}>{'React Native'}</Text>
        <Text style={styles.subHeadingWithCustomText}>
          {'Learn once, write anywhere.'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {fontSize: 50},
  subHeadingText: {
    fontSize: 25,
  },
  headingWithCustomText: {
    fontSize: 50,
    fontFamily: 'Lora-Bold',
  },
  subHeadingWithCustomText: {
    fontSize: 25,
    fontFamily: 'Lora-Italic',
  },
});

export default App;
