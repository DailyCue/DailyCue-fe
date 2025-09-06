import EmotionRecord from "@/components/journal/EmotionRecord";
import { COLORS } from "@/constants/theme";
import { useRecords } from "@/hooks/useRecords";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Recording() {
  const { addRecord } = useRecords();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.secondary, COLORS.pageBackground]} 
        locations={[0.3, 0.7]}
        style={StyleSheet.absoluteFill}
      />
      <EmotionRecord onRecordAdded={addRecord} />
      <TouchableOpacity style={styles.closeButton} onPress={() => router.push('/main/journal')}>
        <Text style={styles.closeText}>나가기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  closeText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
})
