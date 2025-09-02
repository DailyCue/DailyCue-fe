import { COLORS, FONTS, SIZES } from '@/constants/theme';
import { Message } from '@/types';
import { Feather } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react';
import { FlatList, KeyboardAvoidingView, ListRenderItem, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AiPartnerScreen() {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      text: '준이님의 기록을 보니 지난주보다 스트레스 관리를 더 잘하고 계시네요!', 
      user: false 
    },
    { 
      id: '2', 
      text: '안녕하세요, 오늘 하루는 어떠셨나요?', 
      user: false 
    },
  ]);
  const [input, setInput] = useState<string>('');

  const onSend = useCallback(() => {
    if (input.trim().length > 0) {
      const newMessage: Message = { 
        id: Date.now().toString(), 
        text: input, 
        user: true 
      };
      setMessages(prev => [newMessage, ...prev]);
      setInput('');
      
      setTimeout(() => {
        const aiResponse: Message = { 
          id: (Date.now() + 1).toString(), 
          text: '그렇군요. 조금 더 자세히 말씀해주시겠어요?', 
          user: false 
        };
        setMessages(prev => [aiResponse, ...prev]);
      }, 1000);
    }
  }, [input]);

  const renderItem: ListRenderItem<Message> = ({ item }) => (
    <View style={[styles.messageContainer, item.user ? styles.userMessageContainer : styles.aiMessageContainer]}>
      <Text style={[styles.userMessageText, item.user ? styles.userMessageContainer : styles.aiMessageText]}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AI 챗봇</Text>
      </View>
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          inverted
          contentContainerStyle={{ padding: SIZES.medium, flexGrow: 1, justifyContent: 'flex-end' }}
          style={{ flex: 1 }}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={input}
            onChangeText={setInput}
            placeholder="메시지를 입력하세요..."
            placeholderTextColor={COLORS.gray}
          />
          <TouchableOpacity style={styles.sendButton} onPress={onSend}>
            <Feather name="send" size={25} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.primary 
  },
  header: {
    backgroundColor: COLORS.white,
    padding: SIZES.medium,
    alignItems: 'center',
  },
  headerTitle: { 
    ...FONTS.h3, 
    fontWeight: 'bold' 
  },
  messageContainer: {
    padding: SIZES.medium,
    borderRadius: SIZES.medium,
    marginBottom: SIZES.small,
    maxWidth: '80%',
  },
  userMessageContainer: {
    backgroundColor: COLORS.white,
    alignSelf: 'flex-end',
    borderBottomRightRadius: 0,
  },
  aiMessageContainer: {
    backgroundColor: COLORS.secondary,
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0,
  },
  userMessageText: { 
    ...FONTS.body, 
    color: COLORS.black,
  },
  aiMessageText: { 
    ...FONTS.body, 
    color: COLORS.white,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: SIZES.small,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  textInput: {
    flex: 1,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.small,
    ...FONTS.body,
    height: 50,
  },
  sendButton: {
    backgroundColor: COLORS.darkBlueGray,
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: SIZES.small,
  },
});