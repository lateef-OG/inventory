import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
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
    flex: 1,
  },
  card: {
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
    fontWeight: FONTFAMILY[600],
    marginBottom: 6,
    flex: 1,
  },
  price: {
    ...FONTS.body_14,
    color: COLORS.gray,
    fontFamily: FONTFAMILY[500],
  },
});
