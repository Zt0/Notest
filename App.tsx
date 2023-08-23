import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageViewer from './components/ImageViewer';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#25292e', alignItems: 'center', justifyContent: 'center' },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff' }}>Hello world!</Text>
      <ImageViewer
        placeholderImageSource={{
          uri: `https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg`,
        }}
      />
    </View>
  );
}
