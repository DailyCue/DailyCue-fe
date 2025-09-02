import { COLORS, FONTS } from '@/constants/theme';
import { format } from "date-fns";
import { StyleSheet, Text, View } from "react-native";

const ShowDate = () => { 
  const currentDate = format(new Date(), 'yyy-MM-dd');

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>
        {currentDate}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  headerTitle: { 
    ...FONTS.h2,
    color: COLORS.black,
    fontWeight: 'bold',
  },
})

export default ShowDate;