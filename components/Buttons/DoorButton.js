import { View, StyleSheet, ImageBackground, Pressable, Image } from 'react-native';
import React from 'react';

export default function DoorButton({navigation}) {

    return (
      <View style={styles.container}>
        <ImageBackground 
            source={require('../../assets/background.jpg')} 
            resizeMode="cover" 
            style={styles.bgImage}>

          <Pressable onPress={() =>
            navigation.navigate('Level8')} >
            <Image source={require('../../assets/exitCross.png')}
              style={styles.exit} />
          </Pressable>

          <Image source={require('../../assets/buttons/A.png')} //This will need to be replaced with the actual clue/photo
            style={styles.popUp} />

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
      width: 30,
      height: 40,
      margin: 5,
    },
    exit: {
      width: 30,
      height: 40,
      margin: 5,
    },
  });