import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'ArcadeClassic': require('./assets/fonts/ArcadeClassic.ttf'),
  });
  return (
    <View style={styles.container}>
    <ImageBackground 
    source={require('./assets/celesteBg.jpg')} 
    resizeMode="cover" 
    style={styles.image}>
      <Text style={styles.text}>THIS IS MY TEST TEXT</Text>
      <Button title="Press Me" />
    </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'ArcadeClassic',
    fontSize: 50,
  },
});
