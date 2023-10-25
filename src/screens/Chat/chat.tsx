import React, { useState, useRef } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o ícone de sua escolha

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const flatListRef = useRef(null);

  const sendMessage = () => {
    if (message.trim() === '') return;

    setMessages([...messages, { text: message, id: messages.length, deletable: true }]);
    setMessage('');
    flatListRef.current.scrollToEnd({ animated: true });
  };

  const deleteMessage = (messageId) => {
    const updatedMessages = messages.filter((msg) => msg.id !== messageId);
    setMessages(updatedMessages);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            {item.deletable && (
              <TouchableOpacity
                onPress={() => deleteMessage(item.id)}
                style={styles.deleteButton}
              >
                <Icon name="trash" size={20} color="red" />
              </TouchableOpacity>
            )}
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
     
      <View style={styles.inputContainer}>
        <TextInput
          value={message}
          onChangeText={(text) => setMessage(text)}
          placeholder="Digite sua mensagem"
          style={styles.input}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    alignSelf: 'flex-start', // Alinhe a mensagem à esquerda
    margin: 5,
    backgroundColor: '#FFD4DF',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: '5%', // Alinhe a margem à esquerda
    marginTop: '5%',
    position: 'relative',
  },
  messageText: {
    color: 'black',
  },
  deleteButton: {
    position: 'absolute',
    left: 1, // Posicione o ícone da lixeira à esquerda
    top: 1,
    zIndex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    bottom: 0,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
  },
  sendButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#E6A1C6',
    borderRadius: 20,
  },
  sendButtonText: {
    color: 'black',
  },
});

export default ChatScreen;
