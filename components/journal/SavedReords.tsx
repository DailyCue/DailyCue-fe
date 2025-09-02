import { STRESS_STYLE } from "@/constants/journalColors";
import { COLORS, FONTS, SIZES } from '@/constants/theme';
import { Record } from '@/types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


type SavedRecordsProps = {
  records: Record[];
  onRecordPress?: (index: number) => void;
}

const RecordItem = ({ record, index, onPress }: { record: Record, index: number, onPress?: (i: number) => void }) => (
  <TouchableOpacity style={styles.card} onPress={() => onPress?.(index)}>
    <View style = {styles.rowContainer}>
      {record.stress !== undefined && (
        <Text style={[
          styles.stressText,
          STRESS_STYLE[record.stress]
        ]}>{record.stress}</Text>
      )}
      <Text style={styles.contentText} numberOfLines={1}>{record.content}</Text>
    </View>
  </TouchableOpacity>
);

export const SavedRecords: React.FC<SavedRecordsProps> = ({ records, onRecordPress }) => {
  if (!records.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>아직 기록이 없어요.</Text>
      </View>
    );
  }

  return (
    <View style={styles.listContainer}>
      <Text style={styles.listText}>최근 3일</Text>
      {records.map((record, index) => (
        <RecordItem 
          key={record.id} 
          record={record} 
          index={index}
          onPress={onRecordPress}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.small,
    marginHorizontal: 10,
  },
  createdAtText: {
    ...FONTS.h4,
    textAlign: 'right',
    marginVertical: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    marginVertical: SIZES.small,
  },
  contentText: {
    ...FONTS.body,
    marginRight: 50,
  },
  stressText: {
    ...FONTS.h2,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 40,
    height: '100%',
    borderRadius: SIZES.small,
    marginRight: 15,
    color: COLORS.darkGray,
  },
  listContainer: {
    height: 264,
    backgroundColor: COLORS.white,
    marginHorizontal: 35,
    paddingVertical: 10,
    borderTopLeftRadius: SIZES.large,
    borderTopRightRadius: SIZES.large,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  listText: {
    ...FONTS.h3,
    fontWeight: 'bold',
    marginHorizontal: 25,
    marginVertical: 15,
  },
  emptyContainer: {
    height: 264,
    backgroundColor: COLORS.white,
    marginHorizontal: 35,
    borderTopLeftRadius: SIZES.large,
    borderTopRightRadius: SIZES.large,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  emptyText: {
    fontSize: SIZES.h3,
    color: COLORS.darkGray
  },
});

export default SavedRecords;
