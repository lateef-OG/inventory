import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FlatList} from 'react-native-gesture-handler';
import {COLORS} from '../../constants/theme';
import PageTitle from '../../components/inventory/PageTitle';
import ItemCard from '../../components/inventory/ItemCard';
import {inventoryData} from '../../utils/data';

const Inventory = ({navigation}) => {
  const [data, setdata] = React.useState(inventoryData);
  return (
    <FlatList
      contentContainerStyle={styles.mainContainer}
      data={data}
      ListHeaderComponent={() => (
        <PageTitle
          title="Inventory"
          rightAccessory={
            <TouchableOpacity
              style={styles.circleButton}
              onPress={() => navigation.navigate('AddItem')}>
              <Icon name="plus" size={16} color={COLORS.white} />
            </TouchableOpacity>
          }
        />
      )}
      renderItem={({item}) => <ItemCard data={item} />}
      keyExtractor={(item, index) => `${item.name}_${index.toString()}`}
      numColumns={2}
      key={2}
    />
  );
};

export default Inventory;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.gray_50,
    paddingHorizontal: 8,
    paddingVertical: 24,
    flex: 1,
  },
  circleButton: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
