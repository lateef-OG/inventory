import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {FONTS, COLORS, FONTFAMILY} from '../../constants/theme';

const ItemCard = ({data}) => {
  const {name, purchasePrice, photo} = data;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Image source={{uri: photo}} style={styles.photo} />
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>€{purchasePrice}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 8,
    width: '50%',
  },
  card: {
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
    backgroundColor: COLORS.white,
    borderRadius: 12,
  },
  photo: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  details: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    height: 90,
  },
  name: {
    ...FONTS.heading,
    color: COLORS.black,
    fontFamily: FONTFAMILY[500],
    marginBottom: 6,
    flex: 1,
  },
  price: {
    ...FONTS.body_14,
    color: COLORS.gray,
    fontFamily: FONTFAMILY[500],
  },
});
