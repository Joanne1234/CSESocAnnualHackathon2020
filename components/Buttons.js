import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity
 } from 'react-native';

function ModuleButton({button}) {
  return (
    <View 
    style={customStyles.container} 
    >
        <TouchableOpacity
            onPress={() => {button.onpress()}}
        >
        <Text style={customStyles.text}>{button.text}</Text>
        </TouchableOpacity>
    </View>
  );
}

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
    margin: 10,
    borderRadius: 30,
    overflow: "hidden"
  },

  text: {
    alignSelf: 'center',
    fontSize: 20
  }
});

const customStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
    overflow: "hidden"
  },

  text: {
    alignSelf: 'center',
    fontSize: 20
  }
});


export {Button, ModuleButton};