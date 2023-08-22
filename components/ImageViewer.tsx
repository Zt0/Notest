import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

export default function ImageViewer({placeholderImageSource}: {placeholderImageSource: ImageSourcePropType}) {
  return (
    <Image source={placeholderImageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    borderRadius: 18,
  },
});