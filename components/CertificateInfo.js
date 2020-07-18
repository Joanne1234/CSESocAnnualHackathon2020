import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

function CertificateInfo({trainingCompleted, dateCompleted}) {
    return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image 
                style={styles.image}
                source={require('../images/medal.png')}
            />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.text}>Congragulations!!!</Text>
            <Text style={styles.text}> 
                You have completed the training for {trainingCompleted} on {dateCompleted}
            </Text>
        </View>
    </View>
  );
}
const textSize = Dimensions.get('window').width/30;
const textWidth = Dimensions.get('window').width/2;
const height = Dimensions.get('window').height/4;
const badgeWidth = Dimensions.get('window').width/4;

const containerHeight = height + 20;
const containerWidth = textWidth + badgeWidth + 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    margin: 10,
    padding: 20,
    flexDirection: 'row',
    width: containerWidth,
    height: containerHeight,
    alignItems: 'center'
  },
  text: {
    alignSelf: 'center',
    padding: 10,
    fontSize: textSize
  },
  imageContainer: {
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: badgeWidth,
    height: height,
  },
  image: {
    resizeMode: 'contain',
    flex:1,
    width: badgeWidth,
    height: height,
    alignSelf: 'flex-start',
    backgroundColor: 'transparent'
  },
  textContainer: {
      flexDirection: 'column',
      backgroundColor: 'white',
      width: textWidth
  }
});


export default CertificateInfo;