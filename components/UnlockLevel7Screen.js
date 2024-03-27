import { Text, View, TextInput, StyleSheet, ImageBackground, Button, Pressable, Image } from 'react-native';
import React from 'react';

export default function UnlockLevel7Screen({navigation}) {

  const [answer, setAnswer] = React.useState('');

  const checkAnswer = () => {
    if (answer.toUpperCase() === 'CALDEY') {
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

          <Text style={styles.text}>To reach Level 7, enter the name of where you have left the cars...</Text>

          <View style={styles.form}>
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
            <Pressable onPress={checkAnswer} >
              <Image source={require('../assets/submitButton.png')}
                style={styles.submit} />
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
      alignItems: 'center',
    },
    input: {
      height: 40,
      width: 150,
      margin: 10,
      marginTop: 20,
      marginLeft: 50,
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'white',
    },
    text: {
      color: 'white',
      width: 280,
      padding: 10,
      fontSize: 25,
      fontFamily: 'Oswald_700Bold',
      backgroundColor: '#8138d0',
      marginTop: 100,
      marginBottom: 300,
    },
    submit: {
      width: 40,
      height: 40,
      marginTop: 20,
      padding: 10,
    },
    form: {
      flexDirection: 'row',
    },
  });