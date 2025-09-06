// 타임라인 + 하얀 배경 뷰
import { COLORS, FONTS, SIZES } from '@/constants/theme';
import { Record } from '@/types';
import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Timeline from "react-native-timeline-flatlist";

// recording.tsx 만들 것인가 고민해보기
type SavedRecordsProps = {
  records: Record[];
  onRecordPress?: (index: number) => void;
}

export const SavedRecords: React.FC<SavedRecordsProps> = ({ records, onRecordPress }) => {
  if (!records.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>아직 작성된 기록이 없어요.</Text>
      </View>
    );
  }

  const data = records.map((record, index) => ({
    time: record.createdAt ? record.createdAt.slice(5, 10) : '',
    title: record.stress ? `나의 감정 지수: ${record.stress}` : '기록',
    description: record.content,
    lineColor: COLORS.gray,
    circleColor: COLORS.secondary,
    onPress: () => onRecordPress?.(index),
  }));

  return (
    <View style={styles.listContainer}>
      <Timeline
        style={{ marginHorizontal: 10, marginTop: 30 }}
        data={data}
        circleSize={15}
        innerCircle="dot"
        separator={true}
        timeStyle={{ ...FONTS.h4, color: COLORS.gray }}
        titleStyle={{ fontSize: 13, paddingTop: 5, color: COLORS.darkBlueGray }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    height: 265,
    backgroundColor: COLORS.white,
    marginHorizontal: 35,
    borderTopLeftRadius: SIZES.large,
    borderTopRightRadius: SIZES.large,
    elevation: 5,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  emptyContainer: {
    height: 265,
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
