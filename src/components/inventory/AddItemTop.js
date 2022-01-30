/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {FONTS, COLORS, FONTFAMILY} from '../../constants/theme';

const AddItemTop = ({mainButtonText, mainButtonAction, mainButtonDisabled}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.actionButtons} overScrollMode>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.actionButtonText}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={mainButtonAction}
        disabled={mainButtonDisabled}>
        <Text
          style={[
            styles.actionButtonText,
            mainButtonDisabled && {color: COLORS.gray, opacity: 0.5},
          ]}>
          {mainButtonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItemTop;

const styles = StyleSheet.create({
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButtonText: {
    ...FONTS.body_14,
    color: COLORS.blue,
    fontFamily: FONTFAMILY[600],
  },
});
