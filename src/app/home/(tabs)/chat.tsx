import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; 
import EmojiSelector from "react-native-emoji-selector"; 
import { useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';

function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const flatListRef = useRef(null);
  const [isEmojiSelectorVisible, setEmojiSelectorVisible] = useState(false); // Estado para controlar a visibilidade do seletor de emojis

  const router = useRouter();

  const sendMessage = () => {
    if (message.trim() === "") return;

    const newMessage = { text: message, id: messages.length + 1, isUser: true };
    setMessages([...messages, newMessage]);
    setMessage("");

    flatListRef.current.scrollToEnd({ animated: true });
  };

  const deleteMessage = (id) => {
    const updatedMessages = messages.filter((message) => message.id !== id);
    setMessages(updatedMessages);
  };

  const addEmojiToMessage = (emoji) => {
    setMessage(message + emoji);
    setEmojiSelectorVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mulheres Conectadas</Text>
      </View>
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{item.text}</Text>
            {item.isUser && (
              <TouchableOpacity onPress={() => deleteMessage(item.id)}>
                <FontAwesome5 name="trash-alt" size={20} color="black" />
              </TouchableOpacity>
            )}
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
        <TouchableOpacity
          onPress={() => setEmojiSelectorVisible(true)}
          style={styles.emojiButton}
        >
          <FontAwesome5 name="smile" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
      {isEmojiSelectorVisible && (
        <EmojiSelector onEmojiSelected={addEmojiToMessage} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "#E86687",
    padding: 15,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    color: "white",
  },
  messageContainer: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 10,
  },
  messageText: {
    backgroundColor: "#FFD4DF",
    color: "black",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#F59CB7",
    borderRadius: 20,
    padding: 10,
  },
  sendButtonText: {
    color: "black",
  },
  emojiButton: {
    marginLeft: 10,
  },
  emoji: {
    fontSize: 30,
  },
});

export default ChatScreen;