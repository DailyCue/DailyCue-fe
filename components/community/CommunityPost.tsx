// components/CommunityPost.tsx
import { COLORS, FONTS, SIZES } from '@/constants/theme';
import { Post } from '@/types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CommunityPostProps {
  post: Post;
}

const CommunityPost: React.FC<CommunityPostProps> = ({ post }) => {
  const getTagColor = (tag: Post['tag']) => {
    switch (tag) {
      case '전체': return COLORS.black;
      case '공유해요': return COLORS.secondary;
      case '공감원해요': return COLORS.orange;
      case '함께해요': return COLORS.green;
      case '고수찾아요': return COLORS.darkBlue;
      default: return COLORS.gray;
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.tag, { backgroundColor: getTagColor(post.tag) }]}>
        <Text style={styles.tagText}>{post.tag}</Text>
      </View>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.content} numberOfLines={2}>{post.content}</Text>
      <Text style={styles.author}>by {post.author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: SIZES.medium,
    borderRadius: SIZES.medium,
    marginBottom: SIZES.medium,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  tag: {
    alignSelf: 'flex-start',
    paddingHorizontal: SIZES.small,
    paddingVertical: SIZES.base / 2,
    borderRadius: SIZES.base,
    marginBottom: SIZES.small,
  },
  tagText: {
    ...FONTS.body,
    fontSize: SIZES.small,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  title: {
    ...FONTS.h3,
    fontWeight: 'bold',
    color: COLORS.darkGray,
  },
  content: {
    ...FONTS.body,
    color: COLORS.gray,
    marginVertical: SIZES.base,
  },
  author: {
      ...FONTS.body,
      fontSize: SIZES.small,
      color: COLORS.gray,
      textAlign: 'right',
  }
});

export default CommunityPost;