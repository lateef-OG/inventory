/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Image, Pressable, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS, FONTFAMILY, FONTS} from '../../constants/theme';
import {useToggle} from '../../hooks/usetoggle';
import Camera from '../Camera';

const UploadPhoto = ({photoUrl, setPhotoUrl}) => {
  const {isOpen, onOpen, onClose} = useToggle();
  return (
    <View style={styles.photoContainer}>
      {photoUrl ? (
        <View>
          <Image
            source={{uri: photoUrl}}
            style={[styles.photoView, {borderWidth: 0}]}
          />
          <Pressable style={styles.removePhoto} onPress={() => setPhotoUrl('')}>
            <Icon name="trash" size={14} color={COLORS.white} />
          </Pressable>
        </View>
      ) : (
        <Pressable style={styles.photoView} onPress={onOpen}>
          <Icon name="camera" size={40} color={COLORS.blue} />
          <Text style={styles.photoText}>Add Photo</Text>
        </Pressable>
      )}
      <Modal animationType="fade" visible={isOpen} onRequestClose={onClose}>
        <Camera cancel={onClose} setPhotoUrl={setPhotoUrl} />
      </Modal>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  photoContainer: {
    alignItems: 'center',
  },
  photoView: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoText: {
    ...FONTS.body_14,
    color: COLORS.black,
    fontFamily: FONTFAMILY[600],
    marginTop: 5,
  },
  removePhoto: {
    backgroundColor: COLORS.error,
    height: 20,
    width: 20,
    borderRadius: 10,
    position: 'absolute',
    right: -5,
    bottom: 20,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
