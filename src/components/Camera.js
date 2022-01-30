/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import {COLORS, FONTS} from '../constants/theme';

const Camera = ({cancel, setPhotoUrl}) => {
  const [{cameraRef}, {takePicture}] = useCamera(null);
  const [loading, setLoading] = React.useState(false);

  const captureImage = async () => {
    setLoading(true);
    try {
      const data = await takePicture();
      const filePath = data.uri;
      setLoading(false);
      setPhotoUrl(filePath);
      cancel();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <View style={styles.cameraContainer}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}
        captureAudio={false}>
        <View style={styles.controls}>
          <Pressable onPress={cancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </Pressable>
          {loading ? (
            <ActivityIndicator
              size={70}
              color={COLORS.white}
              style={{marginVertical: 5}}
            />
          ) : (
            <TouchableOpacity onPress={() => captureImage()}>
              <View style={styles.shutterRing}>
                <View style={styles.shutter} />
              </View>
            </TouchableOpacity>
          )}
          <View style={{width: 60}} />
        </View>
      </RNCamera>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  controls: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  cancelText: {
    ...FONTS.body_16,
    color: COLORS.white,
    width: 60,
  },
  shutterRing: {
    backgroundColor: 'transparent',
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    borderWidth: 3,
    borderColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shutter: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    backgroundColor: COLORS.white,
  },
});
