//APIKEY = AIzaSyAu35r2TAj8ewMVvQjrVz80o8k1X0K0LOE
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button.js';
import LearningModule from '../components/LearningModule';

function LearningModulesPage({route, navigation}) {
    const CertificatesButton = {
        text: "Finish",
        onpress: () => {
            navigation.navigate('CertificatesPage')
        }
    };
    const {videoId} = route.params;
    return (
    <View style={styles.container}>
      <Text style={styles.text}>Scams</Text>
      <LearningModule videoId={videoId}/>
      <Button button={CertificatesButton}/>
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


export default LearningModulesPage;