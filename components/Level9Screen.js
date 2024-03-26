import { StyleSheet, View, ImageBackground, Text, Button } from 'react-native';
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

        <Text>The final hurdle!</Text>

        <Pressable onPress={() =>
            navigation.navigate('ButtonA')} >
            <Image source={require('../assets/exitCross.png')} //This will be an image saying 'A'
                style={styles.button} />
        </Pressable>
        <Pressable onPress={() =>
            navigation.navigate('ButtonB')} >
            <Image source={require('../assets/exitCross.png')} //This will be an image saying 'B'
                style={styles.button} />
        </Pressable>
        <Pressable onPress={() =>
            navigation.navigate('ButtonC')} >
            <Image source={require('../assets/exitCross.png')} //This will be an image saying 'C'
                style={styles.button} />
        </Pressable>
        <Pressable onPress={() =>
            navigation.navigate('ButtonD')} >
            <Image source={require('../assets/exitCross.png')} //This will be an image saying 'D'
                style={styles.button} />
        </Pressable>
        <Pressable onPress={() =>
            navigation.navigate('ButtonE')} >
            <Image source={require('../assets/exitCross.png')} //This will be an image saying 'E'
                style={styles.button} />
        </Pressable>
        <Pressable onPress={() =>
            navigation.navigate('ButtonF')} >
            <Image source={require('../assets/exitCross.png')} //This will be an image saying 'F'
                style={styles.button} />
        </Pressable>
        <Pressable onPress={() =>
            navigation.navigate('ButtonG')} >
            <Image source={require('../assets/exitCross.png')} //This will be an image saying 'G'
                style={styles.button} />
        </Pressable>
        <Pressable onPress={() =>
            navigation.navigate('ButtonH')} >
            <Image source={require('../assets/exitCross.png')} //This will be an image saying 'H'
                style={styles.button} />
        </Pressable>
        <Pressable onPress={() =>
            navigation.navigate('ButtonI')} >
            <Image source={require('../assets/exitCross.png')} //This will be an image saying 'I'
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
      marginBottom: 50,
    },
    button: {
    },
  });