// 홈 화면
import Button from '@/components/journal/Button';
import CardSection from '@/components/journal/CardSection';
import HeadScreen from '@/components/journal/HeadScreen';
import SavedRecords from '@/components/journal/SavedReords';
import { COLORS } from '@/constants/theme';
import { STORAGE_KEY } from '@/hooks/useRecords';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from "react";
import { SafeAreaView, StyleSheet, View } from 'react-native';


export default function JournalScreen() {
  const [records, setRecords] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openRecordModal = (index: number) => {
    setSelectedIndex(index);
    setModalVisible(true);
  };

  const closeRecordModal = () => {
    setModalVisible(false);
  };

  useFocusEffect(
    useCallback(() => {
      const fetchRecords = async () => {
        try {
          const storedRecords = await AsyncStorage.getItem(STORAGE_KEY);
          if (storedRecords !== null) {
            setRecords(JSON.parse(storedRecords));
          }
        } catch (error) {
          console.error('기록을 가져오는데 실패했습니다.', error);
        }
      }

      fetchRecords();
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[COLORS.secondary, COLORS.pageBackground]} 
        locations={[0.3, 0.7]}
        style={StyleSheet.absoluteFill}
      />

      <View style={styles.head}>
        <HeadScreen />
      </View>
      <View style={styles.body}>
        <Button />
        <SavedRecords 
          records={[]} // records 배열 형식으로 데이터를 전해줌. 
          onRecordPress={openRecordModal} // 클릭 시 모달 열기
        />
      </View>
      
      {modalVisible && (
        <CardSection
          records={records}
          initialIndex={selectedIndex}
          onClose={closeRecordModal} // 버튼 누르면 닫기
        />
      )}
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  head: {
    flex: 1,
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});