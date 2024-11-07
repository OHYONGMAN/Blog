"use client";

import { useEffect } from "react";
import PostContent from "@/components/posts/post-detail/post-content";
import usePostStore from '@/store/posts-store';

export default function PostDetailPage({ params }) {
  const { slug } = params;
  const { currentPost, fetchPostData } = usePostStore();

  useEffect(() => {
    fetchPostData(slug);
  }, [slug, fetchPostData]);

  return currentPost ? <PostContent post={currentPost} /> : <p>불러오는 중...</p>;
}
