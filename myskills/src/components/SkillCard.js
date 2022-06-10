import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export function SkillCard({skill}) {
  return (
    <View>
      <TouchableOpacity style={styles.buttonSkill}>
        <Text style={styles.textSkill}>{skill}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 12,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 10,
  },

  textSkill: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
