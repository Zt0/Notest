import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff'}}>Hello world!</Text>
      <Image source={require('./assets/favicon.png')} style={styles.image}/>
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
  image: {
    width: 30,
    height: 30,
    borderRadius: 18,
  },
});