import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity
 } from 'react-native';

function Button({button}) {
  return (
    <View 
    style={styles.container} 
    >
        <TouchableOpacity
            onPress={() => {button.onpress()}}
        >
        <Text style={styles.text}>{button.text}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    margin: 10
  },

  text: {
    alignSelf: 'center',
    fontSize: 20
  }
});


export default Button;