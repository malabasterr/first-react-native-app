import { StyleSheet, Image, Text, View, ImageBackground, Button } from 'react-native';
import { useFonts } from 'expo-font';

export default function HomeScreen({navigation}) {

    const [] = useFonts({
      'ArcadeClassic': require('../assets/fonts/ArcadeClassic.ttf'),
    });

    return (

      <View style={styles.container}>
        <ImageBackground 
          source={require('../assets/celesteBg.jpg')} 
          resizeMode="cover" 
          style={styles.image}>
  
          <Text style={styles.text}>HOME PAGE</Text>
          <Button title="Press Me" />
          <Image source={require('../assets/fullHeart.png')}
            style={styles.heart} />
          <Image source={require('../assets/emptyHeart.png')}
            style={styles.heart} />
  
          <Button
            title="Go to Jane's profile"
            onPress={() =>
              navigation.navigate('Profile') //This is how to navigate to another page
            } />

        </ImageBackground>
      </View>

    );
  };

// Styles
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
    heart: {
      width: 100,
      height: 100,
    },
  });