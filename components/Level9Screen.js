import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import React from 'react';
import { Button } from 'react-native-elements';

export default function Level9Screen({navigation}) {
    return (
      <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/background.jpg')} 
        resizeMode="cover" 
        style={styles.bgImage}>
        
        <Text>Here is some example text.</Text>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
        <Button>E</Button>
        <Button>F</Button>
        <Button>G</Button>
        <Button>H</Button>
        <Button>I</Button>

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
  });