import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [greetings, setGreetings] = useState('');

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }
  // O '...' É para pegar os itens que tem dentro, se eu colocasse sem
  // Ele retornaria o seguinte [[], new skill], com os spreads "...", ele retorna
  // assim => [state1, state2, state3, newSkill], retorna os itens de dentro do array antigo

  useEffect(() => {
    const currentHour = new Date().getHours();
    console.log(currentHour);

    if (currentHour < 12) {
      setGreetings('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreetings('Good Afternoon');
    } else {
      setGreetings('Good Night');
    }
  }, [mySkills]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Robin</Text>
      <Text style={styles.greetings}>{greetings}</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => <SkillCard skill={item} />}
      />
    </View>
  );

  // As chaves dentro do mySkills é para poder juntar jsx com js
  // caso não fizesse isso, não rodaria como desejado.
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },

  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },

  input: {
    marginTop: 25,
    borderRadius: 5,
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
  },
  greetings: {
    color: '#FFF',
    marginTop: 5,
  },
});
