import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button.js';

function CertificatesPage({navigation, route}) {
    const LearnButton = {
            text: "Continue Learning!!!",
            onpress: () => {navigation.navigate('LearnPage')}
    };
    const HomeButton = {
        text: "Back to Home Page",
        onpress: () => {navigation.navigate('HomePage')}
    };
    return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Certificates!!!!</Text>
      <StatusBar style="auto" />
      <Button button={LearnButton}/>
      <Button button={HomeButton}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'lavender',
    justifyContent: 'center',
    margin: 10,
    padding: 20
  },

  text: {
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    fontSize: 50
  }
});


export default CertificatesPage;