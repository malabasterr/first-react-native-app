import { StyleSheet, View, ImageBackground, Image, Pressable } from 'react-native';
import React from 'react';

export default function Level9Screen({navigation}) {
    return (
      <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/background.jpg')} 
        resizeMode="cover" 
        style={styles.bgImage}>
        <Image source={require('../assets/level9.png')}
            style={styles.levelTitle} />

        <Pressable onPress={() =>
            navigation.navigate('ButtonA')} >
            <Image source={require('../assets/buttons/A.png')}
                style={styles.button} />
        </Pressable>
        <Pressable onPress={() =>
            navigation.navigate('ButtonB')} >
            <Image source={require('../assets/buttons/B.png')}
                style={styles.button} />
        </Pressable>
        <Pressable onPress={() =>
            navigation.navigate('ButtonC')} >
            <Image source={require('../assets/buttons/C.png')}
                style={styles.button} />
        </Pressable>
        <Pressable onPress={() =>
            navigation.navigate('ButtonD')} >
            <Image source={require('../assets/buttons/D.png')}
                style={styles.button} />
        </Pressable>
        <Pressable onPress={() =>
            navigation.navigate('ButtonE')} >
            <Image source={require('../assets/buttons/E.png')}
                style={styles.button} />
        </Pressable>
        <Pressable onPress={() =>
            navigation.navigate('ButtonF')} >
            <Image source={require('../assets/buttons/F.png')}
                style={styles.button} />
        </Pressable>
        <Pressable onPress={() =>
            navigation.navigate('ButtonG')} >
            <Image source={require('../assets/buttons/G.png')}
                style={styles.button} />
        </Pressable>
        <Pressable onPress={() =>
            navigation.navigate('ButtonH')} >
            <Image source={require('../assets/buttons/H.png')}
                style={styles.button} />
        </Pressable>
        <Pressable onPress={() =>
            navigation.navigate('ButtonI')} >
            <Image source={require('../assets/buttons/I.png')}
                style={styles.button} />
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
    bgImage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    levelTitle: {
      width: 150,
      height: 80,
      marginBottom: 40,
    },
    button: {
      width: 33,
      height: 44,
      margin: 6,
    },
  });