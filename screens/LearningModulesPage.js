import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {Button} from '../components/Buttons';
import LearningModule from '../components/LearningModule';

function LearningModulesPage({route, navigation}) {
    const {videoId} = route.params;
    const {topic} = route.params;
    const CertificatesButton = {
        text: "Finish",
        onpress: () => {
            navigation.navigate('CertificatesPage', {
              trainingCompleted: topic, 
              dateCompleted: "19 Jul 2020",
            })
        }
    };
    
    return (
    <View style={styles.container}>
      <Text style={styles.text}>{topic}</Text>
      <LearningModule videoId={videoId}/>
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


export default LearningModulesPage;