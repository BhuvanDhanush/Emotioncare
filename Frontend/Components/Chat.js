import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList } from 'react-native';
import axios from 'axios';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    const response = await axios.post('http://localhost:5000/api/chat', { message });
    setMessages([...messages, { text: message, sender: 'user' }, { text: response.data.reply, sender: 'ai' }]);
    setMessage('');
  };

  return (
    <View>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Text style={{ color: item.sender === 'user' ? 'blue' : 'green' }}>{item.text}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <TextInput value={message} onChangeText={setMessage} placeholder="Type a message..." />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

export default Chat;