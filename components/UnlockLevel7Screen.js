import { Text, View, TextInput, StyleSheet, ImageBackground, Button } from 'react-native';
import React from 'react';

export default function UnlockLevel7Screen({navigation}) {

  const [answer, setAnswer] = React.useState('');

  const checkAnswer = () => {
    if (answer.toUpperCase() === 'CADLEY') {
      navigation.navigate('Level7');
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

          <Text>To reach Level 7, enter the name of where you have left the cars...</Text>
          <TextInput
            style={styles.input}
            onChangeText={setAnswer}
            value={answer}
            placeholder="ANSWER"
            keyboardType="default"
            autoCapitalize='characters'
            enterKeyHint='enter'
            maxLength={6}
            textAlign='center'
          />
        <Button title="Submit" onPress={checkAnswer} />

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
    input: {
      height: 40,
      width: 150,
      margin: 50,
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'white',
    },
  });