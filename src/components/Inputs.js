/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {COLORS, FONTFAMILY, FONTS} from '../constants/theme';

export const InputField = ({
  label,
  placeholder,
  type = 'default',
  rightAccessory,
  inputStyle,
  multiline,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={[styles.inputWrapper, {...inputStyle}]}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputFocused,
          {height: multiline ? 'auto' : 55},
        ]}>
        <TextInput
          placeholder={placeholder}
          style={[
            styles.input,
            {
              textAlignVertical: multiline ? 'top' : 'center',
            },
          ]}
          placeholderTextColor={COLORS.gray_3}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          selectionColor={COLORS.primary}
          keyboardType={type}
          multiline={multiline}
          numberOfLines={multiline ? 5 : 1}
        />
        {rightAccessory}
      </View>
    </View>
  );
};

export const DropDown = ({
  label,
  placeholder,
  items,
  category,
  setCategory,
}) => {
  const [open, setOpen] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.inputLabel}>{label}</Text>
      <DropDownPicker
        open={open}
        value={category}
        items={items}
        setOpen={setOpen}
        onChangeValue={value => console.log(value)}
        onSelectItem={item => {
          setCategory(item);
        }}
        // setItems={setItems}
        style={[styles.inputContainer, isFocused && styles.inputFocused]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: 22,
  },
  inputLabel: {
    ...FONTS.body4,
    color: COLORS.black,
    marginBottom: 4,
    fontFamily: FONTFAMILY[500],
  },
  inputContainer: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.gray,
    height: 55,
    width: '100%',
    borderRadius: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 5,
    color: COLORS.gray,
    ...FONTS.body_16,
  },
  inputFocused: {
    borderColor: COLORS.blue,
  },
  error: {
    borderColor: COLORS.error,
  },
});
