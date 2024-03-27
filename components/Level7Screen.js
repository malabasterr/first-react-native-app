import { StyleSheet, Image, View, ImageBackground, Text, TextInput, Pressable } from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './Carousel/CarouselCardItem'
import data from './Carousel/data'

export default function Level7Screen({navigation}) {

    const [answer, setAnswer] = React.useState('');
  
    const checkAnswer = () => {
      if (answer.toUpperCase() === 'ALICE') {
        navigation.navigate('Level8');
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
  
            <Image source={require('../assets/level7.png')}
            style={styles.levelTitle} />

            <Text style={styles.text}>There are 9 houses in a line, and in each house resides one of the players of this game.</Text>

            <View style={styles.carousel}>
            <Carousel
                layout="stack"
                layoutCardOffset={12}
                data={data}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideShift={0}
                useScrollView={true}
            />
            </View>

            <Text style={styles.question}>Who lives in the orange house?</Text>

            <View style={styles.form}>
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
    text: {
      color: 'white',
      width: 325,
      padding: 10,
      fontSize: 20,
      fontFamily: 'Oswald_700Bold',
      backgroundColor: '#8138d0',
      textAlign: 'center',
      margin: 30,
    },
    carousel: {
      height: 274,
    },
    question: {
      color: 'black',
      width: 295,
      padding: 10,
      fontSize: 20,
      fontFamily: 'Oswald_700Bold',
      backgroundColor: '#ff88ae',
      textAlign: 'center',
      margin: 20,
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