import { StyleSheet, Text, View } from "react-native";

export default function Setting() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>설정 화면</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    fontSize: 30,
  }
})