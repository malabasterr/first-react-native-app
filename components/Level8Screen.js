import { StyleSheet, Image, View, ImageBackground, Text, TextInput, Pressable } from 'react-native';
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
        
        <Text style={styles.heading}>String together the last character (letter or digit) of each of these answers to get the final code</Text>

        <View style={styles.questions}>
          <Text style={styles.text}>Number of stars opposite Caldey</Text>
          <Text style={styles.text}>Man at 6 Vane Street</Text>
          <Text style={styles.text}>Year the visiting prince at 55 Fitzroy House died</Text>
          <Text style={styles.text}>Greek mythological character on Pulteney Bridge</Text>
          <Text style={styles.text}>1972 award given to the site of Javert’s death</Text>
          <Text style={styles.text}>Year the Guidhall memorial stone was laid</Text>
          <Text style={styles.text}>Number of humanoid faces above the King’s and Queen’s Baths</Text>
          <Pressable onPress={() =>
              navigation.navigate('DoorButton')} ><Text style={styles.text}>Number of pillars surrounding <Text style={styles.doorText}>this door</Text></Text></Pressable>
          <Text style={styles.text}>The liquid half of the show at the Theatre Royal tonight</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={setAnswer}
            value={answer}
            placeholder="ANSWER"
            keyboardType="default"
            autoCapitalize='characters'
            enterKeyHint='enter'
            maxLength={9}
            textAlign='center'
          />
          <Pressable onPress={checkAnswer} >
            <Image source={require('../assets/submitButton.png')}
              style={styles.submit} />
          </Pressable>
        </View>
        
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
    },
    bgImage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      color: 'white',
      width: 325,
      padding: 5,
      fontSize: 19,
      fontFamily: 'Oswald_700Bold',
      backgroundColor: '#8138d0',
      textAlign: 'center',
      margin: 20,
    },
    text: {
      color: 'black',
      width: 325,
      padding: 5,
      fontSize: 16,
      fontFamily: 'Oswald_700Bold',
      backgroundColor: '#ff88ae',
      textAlign: 'left',
    },
    doorText: {
      color: 'blue',
      fontSize: 16,
      fontFamily: 'Oswald_700Bold',
      backgroundColor: '#ff88ae',
      textAlign: 'left',
    },
    questions: {
      margin: 20,
    },
    input: {
      height: 40,
      width: 150,
      margin: 20,
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'white',
    },
    submit: {
      width: 40,
      height: 40,
      marginTop: 20,
      padding: 10,
    },
    form: {
      flexDirection: 'row',
      marginBottom: 40,
    },
  });