import { StyleSheet, Image, View, ImageBackground, Pressable } from 'react-native';

export default function HomeScreen({navigation}) {
    return (

      <View style={styles.container}>
        <ImageBackground 
          source={require('../assets/background.jpg')} 
          resizeMode="cover" 
          style={styles.bgImage}>
  
          <Image source={require('../assets/level7.png')}
            style={styles.level} />
            <Pressable onPress={() =>
              navigation.navigate('UnlockLevel7')} >
              <Image source={require('../assets/unlockButton.png')}
                style={styles.unlock} />
            </Pressable>

        </ImageBackground>
      </View>

    );
  };

// Styles
    const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    level: {
      width: 300,
      height: 160,
      marginBottom: 100,
    },
    bgImage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    unlock: {
      width: 150,
      height: 48,
    },
  });