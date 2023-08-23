import React from 'react';
import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

const styles = StyleSheet.create({ image: { width: 30, height: 30, borderRadius: 18 } });

export default function ImageViewer({ placeholderImageSource }: { placeholderImageSource: ImageSourcePropType }) {
  return <Image source={placeholderImageSource} style={styles.image} />;
}
