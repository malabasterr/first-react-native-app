import { View, StyleSheet, ImageBackground, Pressable, Image } from 'react-native';
import React from 'react';

export default function ButtonH({navigation}) {

    return (
      <View style={styles.container}>
        <ImageBackground 
            source={require('../../assets/background.jpg')} 
            resizeMode="cover" 
            style={styles.bgImage}>

          <View style={styles.imgContainer}>
            <Image source={require('../../assets/lasIguanas/LI6.png')} //This will need to be replaced with the actual clue/photo
                style={styles.popUp} />
            <Pressable onPress={() =>
              navigation.navigate('Level9')} >
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
      width: "69%",
      height: "80%",
      marginBottom: "100%",
    },
    exit: {
      width: "100%",
      height: "10%",
      margin: "5%",
    },
    imgContainer: {
        flexDirection: 'row',
        padding: "3%",
        paddingLeft: "6%",
    },
  });