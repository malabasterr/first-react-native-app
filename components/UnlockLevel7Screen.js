import { Text, View, TextInput, StyleSheet, ImageBackground, Pressable, Image } from 'react-native';
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
      height: "25%",
      width: "40%",
      margin: "3%",
      marginTop: "6%",
      marginLeft: "9%",
      borderWidth: "2%",
      padding: "3%",
      backgroundColor: 'white',
    },
    text: {
      color: 'white',
      width: "72%",
      padding: "3%",
      fontSize: "22%",
      backgroundColor: '#8138d0',
      marginTop: "25%",
      marginBottom: "85%",
      textAlign: 'center',
    },
    submit: {
      width: "150%",
      height: "20%",
      marginTop: "120%",
      padding: "3%",
    },
    form: {
      flexDirection: 'row',
    },
  });