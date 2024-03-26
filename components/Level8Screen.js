import { StyleSheet, Image, View, ImageBackground, Text, TextInput, Button } from 'react-native';
import React from 'react';

export default function Level8Screen({navigation}) {

  const [answer, setAnswer] = React.useState('');
  
  const checkAnswer = () => {
    if (answer.toUpperCase() === 'DUNNO') {
      navigation.navigate('Level9');
    } else {
      alert('Incorrect answer. Please try again.');
    }
  };

    return (
      <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/background.jpg')} 
        resizeMode="cover" 
        style={styles.bgImage}>
        <Image source={require('../assets/level8.png')}
            style={styles.levelTitle} />
        
        <Text>This will be full of all of the many scavenger hunt questions. For example 
        1. Who lives at whatever whenever and when did they die?
        2. How long does it take for whatever whenever?
        3. How ridiculous is all of this fake writing because I think it is very silly?</Text>

        <Text>What is the final answer?</Text>
            <TextInput
                style={styles.input}
                onChangeText={setAnswer}
                value={answer}
                placeholder="ANSWER"
                keyboardType="default"
                autoCapitalize='words'
                enterKeyHint='enter'
                maxLength={8}
                textAlign='center'
          />
        <Button title="Submit" onPress={checkAnswer} />

      </ImageBackground>
    </View>
    );
  };

  // Styles
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    levelTitle: {
      width: 150,
      height: 80,
      marginBottom: 50,
    },
    bgImage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      height: 40,
      width: 150,
      margin: 50,
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'white',
    },
  });