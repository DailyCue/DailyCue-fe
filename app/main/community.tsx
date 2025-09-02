import ChooseTag from "@/components/community/ChooseTag";
import CommunityPost from '@/components/community/CommunityPost';
import SearchBox from "@/components/community/SearchBox";
import { DUMMY_POSTS } from '@/constants/communityContents';
import { COLORS, FONTS, SIZES } from '@/constants/theme';
import { Post } from '@/types';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';


export default function CommunityScreen() {
  const [activeTag, setActiveTag] = useState<Post['tag'] | null>('전체');

  const filteredPosts = activeTag === "전체"
    ? DUMMY_POSTS
    : DUMMY_POSTS.filter(post => post.tag === activeTag);

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>커뮤니티</Text>
      </View>

      <SearchBox />
      <ChooseTag activeTag={activeTag} setActiveTag={setActiveTag} />

      <FlatList
        data={filteredPosts}
        renderItem={({ item }) => <CommunityPost post={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: SIZES.medium }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.pageBackground,
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    marginTop: 40,
    paddingHorizontal: SIZES.mega,
  },
  headerTitle: { 
    ...FONTS.h2,
    color: COLORS.black,
    fontWeight: 'bold',
  },
});