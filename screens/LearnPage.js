//APIKEY = AIzaSyAu35r2TAj8ewMVvQjrVz80o8k1X0K0LOE
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button.js';
import LearningModulesPage from './LearningModulesPage.js';

function LearnPage({navigation, route}) {
    const CertificatesButton = {
        text: "View Certificates",
        onpress: () => {navigation.navigate('CertificatesPage')}
    };
    const Module1Button = {
        text: "What are Phishing Attacks?",
        onpress: () => {
            navigation.navigate('LearningModulesPage', 
            {videoId: "PTE2oqMcfSw"})
        }
    }
    const Module2Button = {
        text: "Spotting Scams",
        onpress: () => {
            navigation.navigate('LearningModulesPage', 
            {videoId: "KAbp_ajsCco"})
        }
    }
    const Module3Button = {
        text: "How to look for secure websites?",
        onpress: () => {
            navigation.navigate('LearningModulesPage', 
            {videoId: "sdQ8WDWwS6M"})
        }
    }
    return (
    <View style={styles.container}>
      <Text style={styles.text}>What do you want to learn about today?</Text>
      <Button button={Module1Button}/>
      <Button button={Module2Button}/>
      <Button button={Module3Button}/>
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


export default LearnPage;