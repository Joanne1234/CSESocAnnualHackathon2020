import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {ModuleButton, Button} from '../components/Buttons';

function LearnPage({navigation, route}) {
    const CertificatesButton = {
        text: "View Certificates",
        onpress: () => {navigation.navigate('CertificatesPage')}
    };
    const Module1Button = {
        text: "What are Phishing Attacks?",
        onpress: () => {
            navigation.navigate('LearningModulesPage', 
            {videoId: "PTE2oqMcfSw", topic: "What are Phishing Attacks?"})
        }
    }
    const Module2Button = {
        text: "Spotting Scams",
        onpress: () => {
            navigation.navigate('LearningModulesPage', 
            {videoId: "KAbp_ajsCco", topic: "Spotting Scams"})
        }
    };
    const Module3Button = {
        text: "How to look for secure websites?",
        onpress: () => {
            navigation.navigate('LearningModulesPage', 
            {videoId: "sdQ8WDWwS6M", topic: "How to look for secure websites?"})
        }
    }
    return (
    <View style={styles.container}>
      <Text style={styles.text}>What do you want to learn about today?</Text>
      <ModuleButton button={Module1Button}/>
      <ModuleButton button={Module2Button}/>
      <ModuleButton button={Module3Button}/>
      <Button button={CertificatesButton}/>
    </View>
  );
}

const textSize = Dimensions.get('window').width/15;

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
    fontSize: textSize
  }
});


export default LearnPage;