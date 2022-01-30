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
import AddItemTop from '../../components/inventory/AddItemTop';

const AddItem = ({navigation}) => {
  const [photoUrl, setPhotoUrl] = React.useState('');
  const [name, setName] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [purchasePrice, setPurchasePrice] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [disabled, setDisabled] = React.useState(false);

  const [categories] = React.useState([
    {label: 'Art', value: 'Art'},
    {label: 'Electronics', value: 'Electronics'},
    {label: 'Jewelry', value: 'Jewelry'},
    {label: 'Musical instruments', value: 'Musical instruments'},
  ]);
  const canSubmit = () => {
    // if(name && category && photoUrl && purchasePrice) {
    // }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      contentContainerStyle={[styles.containerWrapper]}
      enabled
      keyboardVerticalOffset={80}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps={'handled'}>
        <AddItemTop mainButtonText="Add" mainButtonDisabled={true} />
        <UploadPhoto photoUrl={photoUrl} setPhotoUrl={setPhotoUrl} />
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
});
