import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserProfile = () => {
  const [name, setName] = useState('');
  const [emotion, setEmotion] = useState('');
  const [emotionalHistory, setEmotionalHistory] = useState([]);

  useEffect(() => {
    // Load user profile from AsyncStorage
    const loadProfile = async () => {
      try {
        const storedName = await AsyncStorage.getItem('userName');
        const storedEmotions = await AsyncStorage.getItem('emotionalHistory');
        if (storedName) setName(storedName);
        if (storedEmotions) setEmotionalHistory(JSON.parse(storedEmotions));
      } catch (error) {
        console.error('Failed to load profile:', error);
      }
    };

    loadProfile();
  }, []);

  const handleSaveProfile = async () => {
    try {
      await AsyncStorage.setItem('userName', name);
      const updatedHistory = [...emotionalHistory, emotion];
      setEmotionalHistory(updatedHistory);
      await AsyncStorage.setItem('emotionalHistory', JSON.stringify(updatedHistory));
      setEmotion(''); // Clear the emotion input
    } catch (error) {
      console.error('Failed to save profile:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User  Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="How are you feeling?"
        value={emotion}
        onChangeText={setEmotion}
      />
      <Button title="Save Profile" onPress={handleSaveProfile} />
      <Text style={styles.historyTitle}>Emotional History:</Text>
      <FlatList
        data={emotionalHistory}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.historyItem}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  historyTitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  historyItem: {
    fontSize: 16,
    paddingVertical: 5,
  },
});

export default UserProfile;