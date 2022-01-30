/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import UploadPhoto from '../../components/inventory/UploadPhoto';
import {DropDown, InputField} from '../../components/Inputs';
import {COLORS, FONTFAMILY, FONTS} from '../../constants/theme';

const AddItem = ({navigation}) => {
  const [photoUrl, setPhotoUrl] = React.useState(
    'https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg',
  );
  const [category, setCategory] = React.useState(null);
  const [categories, setItems] = React.useState([
    {label: 'Art', value: 'Art'},
    {label: 'Electronics', value: 'Electronics'},
    {label: 'Jewelry', value: 'Jewelry'},
    {label: 'Musical instruments', value: 'Musical instruments'},
  ]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      contentContainerStyle={[styles.containerWrapper]}
      enabled
      keyboardVerticalOffset={80}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps={'handled'}>
        <View style={styles.actionButtons} overScrollMode>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.actionButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.actionButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <UploadPhoto photoUrl={photoUrl} />
        <View style={{height: 30}} />
        <InputField label="Name" placeholder="Bracelet" />
        <DropDown
          label="Category"
          placeholder="Select a category..."
          items={categories}
          category={category}
          setCategory={item => setCategory(item.value)}
        />
        <InputField
          label="Value"
          placeholder="7000"
          rightAccessory={<Text>€</Text>}
        />
        <InputField label="Description" placeholder="Optional" multiline />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: COLORS.gray_50,
  },
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: COLORS.gray_50,
  },
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
