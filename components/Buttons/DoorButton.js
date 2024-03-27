import { View, StyleSheet, ImageBackground, Pressable, Image } from 'react-native';
import React from 'react';

export default function DoorButton({navigation}) {

    return (
      <View style={styles.container}>
        <ImageBackground 
            source={require('../../assets/background.jpg')} 
            resizeMode="cover" 
            style={styles.bgImage}>

        <View style={styles.imgContainer}>

        <Image source={require('../../assets/door.jpg')}
            style={styles.popUp} />

          <Pressable onPress={() =>
            navigation.navigate('Level8')} >
            <Image source={require('../../assets/exitCross.png')}
              style={styles.exit} />
          </Pressable>

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
      width: 145,
      height: 700,
      margin: 5,
    },
    exit: {
      width: 30,
      height: 30,
      margin: 5,
    },
    imgContainer: {
        flexDirection: 'row',
        backgroundColor: '#ffffc3',
        padding: 10,
        paddingLeft: 47,
    },
  });