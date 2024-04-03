import { View, StyleSheet, ImageBackground, Pressable, Image } from 'react-native';
import React from 'react';

export default function ButtonI({navigation}) {

    return (
      <View style={styles.container}>
        <ImageBackground 
            source={require('../../assets/background.jpg')} 
            resizeMode="cover" 
            style={styles.bgImage}>

          <View style={styles.imgContainer}>
            <Pressable onPress={() =>
              navigation.navigate('Level9')} >
              <Image source={require('../../assets/exitCross.png')}
                style={styles.exit} />
            </Pressable>
            <Image source={require('../../assets/lasIguanas/LI9.png')} //This will need to be replaced with the actual clue/photo
              style={styles.popUp} />
            </View>

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
      width: 340,
      height: 205,
      margin: 5,
    },
    exit: {
      width: 30,
      height: 40,
      margin: 5,
      marginLeft: 300,
    },
    imgContainer: {
        padding: 1,
        paddingLeft: 0,
    },
  });