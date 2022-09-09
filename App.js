import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  function callFunction(){
    setName(text);
  }

  function callChangeText(text){
    
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput 
        placeholder='input' 
        style={styles.TextInput}
        onChangeText = {callChangeText}
        >

        </TextInput>
      <Button title='Show' onPress={callFunction}></Button>
      <Text>{name}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
