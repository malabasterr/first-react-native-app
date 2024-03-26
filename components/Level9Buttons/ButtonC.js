import { View, StyleSheet, ImageBackground, Pressable } from 'react-native';
import React from 'react';

export default function ButtonC({navigation}) {

    return (
      <View style={styles.container}>
        <ImageBackground 
            source={require('../assets/background.jpg')} 
            resizeMode="cover" 
            style={styles.bgImage}>

            <Image source={require('../assets/level7.png')} //This will need to be replaced with the actual clue/photo
                style={styles.popUp} />

            <Pressable onPress={() =>
              navigation.navigate('Level9')} >
              <Image source={require('../assets/exitCross.png')}
                style={styles.exit} />
            </Pressable>

        </ImageBackground>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    bgImage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    popUp: {
    },
    exit: {
    },
  });