import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS} from '../constants/theme';

const DummyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>This is a dummy screen.</Text>
    </View>
  );
};

export default DummyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dummyText: {
    ...FONTS.heading,
    color: COLORS.gray,
  },
});
