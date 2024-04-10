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
            <Pressable style={styles.unlockContainer} onPress={() =>
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
      width: "77%",
      height: "21.5%",
      marginBottom: "12%",
    },
    bgImage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    unlockContainer: {
      width: "39%",
      height: "7%",
    },
    unlock: {
      width: "99%",
      height: "90%",
    },
  });