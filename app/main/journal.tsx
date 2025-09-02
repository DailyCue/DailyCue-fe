import Button from '@/components/journal/Button';
import CardSection from '@/components/journal/CardSection';
import HeadScreen from '@/components/journal/HeadScreen';
import SavedRecords from '@/components/journal/SavedReords';
import { COLORS } from '@/constants/theme';
import { useRecords } from '@/hooks/useRecords';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from 'react-native';


export default function JournalScreen() {
  const { records } = useRecords();
  
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openRecordModal = (index: number) => {
    setSelectedIndex(index);
    setModalVisible(true);
  };

  const closeRecordModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[COLORS.secondary, COLORS.pageBackground]} 
        locations={[0.55, 0.45]}
        style={StyleSheet.absoluteFill}
      />

      {/* <ShowDate /> */}
      <View style={styles.head}>
        <HeadScreen />
      </View>
      <View style={styles.body}>
        <Button />
        <SavedRecords 
          records={records} 
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