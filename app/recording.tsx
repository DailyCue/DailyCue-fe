import EmotionRecord from "@/components/journal/EmotionRecord";
import { COLORS, SIZES } from "@/constants/theme";
import { useRecords } from "@/hooks/useRecords";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Recording() {
  const { records, addRecord } = useRecords();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <EmotionRecord onRecordAdded={addRecord} />
      </View>
      <TouchableOpacity style={styles.closeButton} onPress={() => router.push('/main/journal')}>
        <Text style={styles.closeText}>나가기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    paddingHorizontal: SIZES.small,
    marginHorizontal: 35,
    marginVertical: 5,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
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
