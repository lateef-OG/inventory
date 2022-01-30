/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import UploadPhoto from '../../components/inventory/UploadPhoto';
import {DropDown, InputField} from '../../components/Inputs';
import {COLORS} from '../../constants/theme';
import AddItemTop from '../../components/inventory/AddItemTop';
import {addItem} from '../../redux/inventory';
import {categories} from '../../utils/data';

const AddItem = ({navigation}) => {
  const {items} = useSelector(state => state.inventory);
  const dispatch = useDispatch();

  const [photo, setPhoto] = React.useState('');
  const [name, setName] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [purchasePrice, setPurchasePrice] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);
  const [valueError, setValueError] = React.useState('');

  React.useEffect(() => {
    const canSubmit = () => {
      const getTotalValue = () => {
        const totalValue = items.reduce((a, b) => ({
          purchasePrice: Number(a.purchasePrice) + Number(b.purchasePrice),
        }));
        return totalValue.purchasePrice;
      };
      const totalValue = getTotalValue() + Number(purchasePrice);
      if (Number(purchasePrice) && totalValue > 40000) {
        console.log('1');
        setDisabled(true);
        setValueError(
          `You have exceeded the total value limit by ${totalValue - 40000}`,
        );
      } else if (name && category && photo && purchasePrice) {
        console.log('2');
        setDisabled(false);
        setValueError('');
      } else {
        console.log('3');
        setDisabled(true);
        setValueError('');
      }
    };
    canSubmit();
  }, [name, category, photo, purchasePrice, items]);

  const submit = () => {
    const payload = {
      name,
      category,
      purchasePrice,
      description,
      photo,
    };
    dispatch(addItem(payload));
    navigation.goBack();
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
        <AddItemTop
          mainButtonText="Add"
          mainButtonDisabled={disabled}
          mainButtonAction={submit}
        />
        <UploadPhoto photoUrl={photo} setPhotoUrl={setPhoto} />
        <View style={{height: 30}} />
        <InputField
          label="Name"
          placeholder="Bracelet"
          value={name}
          onChange={setName}
        />
        <DropDown
          label="Category"
          placeholder="Select a category..."
          items={categories}
          category={category}
          setCategory={item => setCategory(item.value)}
          value={category}
          onChange={setCategory}
        />
        <InputField
          label="Value"
          placeholder="7000"
          rightAccessory={<Text>€</Text>}
          value={purchasePrice}
          onChange={setPurchasePrice}
          error={valueError}
          type="number-pad"
        />
        <InputField
          label="Description"
          placeholder="Optional"
          multiline
          value={description}
          onChange={setDescription}
        />
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
