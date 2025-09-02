import { COLORS, FONTS, SIZES } from "@/constants/theme";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button: React.FC = () => {

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => router.push('/recording')}>
      <Text style={styles.text}>{`기록을 하거라 하라`}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 100,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    marginHorizontal: 35,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  text: {
    ...FONTS.h2,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
})

export default Button;