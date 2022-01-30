import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTFAMILY, FONTS} from '../../constants/theme';

const PageTitle = ({title, rightAccessory}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      {rightAccessory}
    </View>
  );
};

export default PageTitle;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    paddingHorizontal: 8,
  },
  title: {
    ...FONTS.title,
    color: COLORS.black,
    fontFamily: FONTFAMILY[600],
  },
});
