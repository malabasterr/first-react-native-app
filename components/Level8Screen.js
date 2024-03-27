import { StyleSheet, Image, View, ImageBackground, Text, TextInput, Button } from 'react-native';
import React from 'react';

export default function Level8Screen({navigation}) {

  const [answer, setAnswer] = React.useState('');
  
  const checkAnswer = () => {
    if (answer.toUpperCase() === '5D3SD334D') {
      navigation.navigate('Level9');
    } else {
      alert('Incorrect answer. Please try again. Remember to use the last digit/letter from each of your answers');
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
        
        <Text>Number of stars opposite Caldey</Text>
        <Text>Man at 6 Vane Street</Text>
        <Text>Year the visiting prince at 55 Fitzroy House died</Text>
        <Text>Greek mythological character on Pulteney Bridge</Text>
        <Text>1972 award given to the site of Javert’s death</Text>
        <Text>Year the Guidhall memorial stone was laid</Text>
        <Text>Number of humanoid faces above the King’s and Queen’s Baths</Text>
        <Text>Number of pillars surrounding this door</Text>
        <Text>The liquid half of the show at the Theatre Royal tonight</Text>
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