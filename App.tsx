import { Image, StyleSheet, Text, View } from 'react-native';
import ImageViewer from './components/ImageViewer';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff'}}>Hello world!</Text>
      <ImageViewer placeholderImageSource={require('./assets/favicon.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});