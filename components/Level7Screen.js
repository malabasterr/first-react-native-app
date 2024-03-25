import { StyleSheet, Image, View, ImageBackground, Text, TextInput } from 'react-native';

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

            <Text>There are 9 houses in a line, and in each house resides one of the players of this game.</Text>

            {/* Carousel to go here */}

            <Text>Who lives in the orange house?</Text>
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
    unlock: {
      width: 150,
      height: 48,
    },
  });