import React from 'react';
import { StyleSheet, View } from 'react-native';
import CertificateInfo from './CertificateInfo';

function Certificate({trainingCompleted, dateCompleted}) {
    return (
    <View style={styles.container}>
      <CertificateInfo trainingCompleted={trainingCompleted} dateCompleted={dateCompleted}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'white',
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