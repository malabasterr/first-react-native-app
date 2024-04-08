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
      width: "40%",
      height: "10%",
      marginTop: "15%",
      margin: "3%",
    },
    bgImage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'white',
      width: "85%",
      padding: "3%",
      fontSize: "18%",
      backgroundColor: '#8138d0',
      textAlign: 'center',
      margin: "6%",
    },
    carousel: {
      height: "36.8%",
    },
    question: {
      color: 'black',
      width: "75%",
      padding: "3%",
      fontSize: "18%",
      backgroundColor: '#ff88ae',
      textAlign: 'center',
      margin: "6%",
    },
    input: {
      height: "25%",
      width: "40%",
      margin: "3%",
      marginLeft: "10%",
      borderWidth: "2%",
      padding: "3%",
      backgroundColor: 'white',
      },
    submit: {
      width: "150%",
      height: "20%",
      marginTop: "70%",
      padding: "3%",
    },
    form: {
      flexDirection: 'row',
    },
  });