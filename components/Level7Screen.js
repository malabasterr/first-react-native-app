import { StyleSheet, Image, View, ImageBackground, Pressable, Text, TextInput } from 'react-native';

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

<Text>To reach Level 7, enter the name of where you have left the cars...</Text>
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
            <Pressable onPress={() =>
              navigation.navigate('UnlockLevel7')} >
              <Image source={require('../assets/unlockButton.png')}
                style={styles.unlock} />
            </Pressable>

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