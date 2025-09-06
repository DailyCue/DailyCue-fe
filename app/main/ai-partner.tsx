import MessagePart from '@/components/ai-partner/MessagePart';
import { COLORS, FONTS, SIZES } from '@/constants/theme';
import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AiPartnerScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}> 
      <View style={styles.header}>
        
        <Text style={styles.headerTitle}>챗봇 이름 넣을 칸</Text>
      </View>
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <MessagePart />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.pageBackground
  },
  header: {
    padding: SIZES.medium,
    alignItems: 'center',
  },
  headerTitle: { 
    ...FONTS.h3, 
    fontWeight: 'bold' 
  },
});