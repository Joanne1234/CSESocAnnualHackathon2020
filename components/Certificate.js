import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button.js';

function Certificate({name, trainingCompleted, dateCompleted}) {
    const name = "name";
    const trainingCompleted = "fraud training";
    const dateCompleted = "18 Jul 2020"
    const LearnButton = {
        text: "Continue Learning!!!",
        onpress: navigation.navigate('LearnPage')
    };
    const CertificatesButton = {
        text: "View other certificates",
        onpress: navigation.navigate('CertificatesPage')
    };
    return (
    <View style={styles.container}>
      <Text style={styles.heading}>Congragulations {name}!!!</Text>
      <Text> {"\n"}</Text>
      <Text style={styles.text}> You have completed the training for {trainingCompleted}</Text>
      <Text style={styles.text}> on {dateCompleted}  </Text>
      <Button button={LearnButton}/>
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
  heading: {
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    fontSize: 50
  },
  text: {
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    fontSize: 30
  }
});


export default Certificate;