import * as React from 'react';
// import { useState } from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

export function Button({onPress}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={onPress}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A370F7',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
