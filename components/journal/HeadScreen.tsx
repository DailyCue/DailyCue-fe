import { COLORS, FONTS, SIZES } from "@/constants/theme";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import type { DrawerNavigationProp } from '@react-navigation/drawer';
import { router, useNavigation } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const HeadScreen = () => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.text1}>DailyCue</Text>
        <TouchableOpacity style={styles.hamburger} onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={35} />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.leftBody}>
          <Text style={styles.text2}>{`데일리큐로\n기록하고\n마음을 공유해요!`}</Text>
          <TouchableOpacity style={styles.goChat} onPress={() => router.push('/main/ai-partner')}>
            <Ionicons name="chatbubbles-outline" size={SIZES.medium} color={COLORS.secondary} />
            <Text style={styles.text3}>ai 채팅가기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightBody}>
          <FontAwesome6 name='people-roof' size={50} color={COLORS.white}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginTop: 60,
    marginBottom: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text1: {
    ...FONTS.h2,
    // fontWeight: 'bold',
    color: COLORS.white,
  },
  hamburger: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftBody: {
    marginLeft: 30,
  },
  rightBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text2: {
    fontSize: 30,
    fontWeight: '500',
    color: COLORS.white,
  },
  goChat: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: SIZES.large,
    backgroundColor: COLORS.white,
    gap: 5,
  },
  text3: {
    ...FONTS.body,
    fontWeight: '600',
    color: COLORS.secondary,
  },
  modal: {
  },
  modalClose: {
    width: 40,
    height: 40,
    backgroundColor: '#333',
  },
});

export default HeadScreen;