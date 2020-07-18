import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {Button} from '../components/Buttons';
import Certificate from '../components/Certificate';

function CertificatesPage({navigation, route}) {
    const sampleTrainingCompleted = "Spotting Scams";
    const sampleDateCompleted = "18 Jul 2020"
    const LearnButton = {
            text: "Continue Learning!!!",
            onpress: () => {navigation.navigate('LearnPage', {})}
    };
    const HomeButton = {
        text: "Back to Home Page",
        onpress: () => {navigation.navigate('HomePage')}
    };
    if (typeof route.params !== "undefined") {
        const {trainingCompleted} = route.params;
        const {dateCompleted} = route.params;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Your Certificates!!!!</Text>
                <Certificate 
                    trainingCompleted={sampleTrainingCompleted} 
                    dateCompleted={sampleDateCompleted}
                />
                <Certificate 
                    trainingCompleted={trainingCompleted} 
                    dateCompleted={dateCompleted}
                />
                <Button button={LearnButton}/>
                <Button button={HomeButton}/>
            </View>
        );
    }
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Your Certificates!!!!</Text>
        <Certificate 
            trainingCompleted={sampleTrainingCompleted} 
            dateCompleted={sampleDateCompleted}
        />
        <Button button={LearnButton}/>
        <Button button={HomeButton}/>
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


export default CertificatesPage;