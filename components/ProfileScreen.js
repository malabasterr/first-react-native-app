import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import React from 'react';

export default function ProfileScreen() {
    return (
      <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/background.jpg')} 
        resizeMode="cover" 
        style={styles.bgImage}>
        
        <Text>Here is some example text.</Text>

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

// This page can be used as a boilerplate for new pages