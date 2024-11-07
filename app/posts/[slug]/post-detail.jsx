"use client";

import { useEffect } from "react";
import PostContent from "@/components/posts/post-detail/post-content";
import usePostStore from "@/store/posts-store";

export default function PostDetail({ slug }) {
  const { currentPost, fetchPostData } = usePostStore();

  useEffect(() => {
    fetchPostData(slug);
  }, [slug, fetchPostData]);

  useEffect(() => {
    if (currentPost) {
      document.title = currentPost.title;

      const metaDescription = document.querySelector(
        "meta[name='description']"
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", currentPost.excerpt);
      } else {
        const newMetaDescription = document.createElement("meta");
        newMetaDescription.name = "description";
        newMetaDescription.content = currentPost.excerpt;
        document.head.appendChild(newMetaDescription);
      }
    }
  }, [currentPost]);

  return currentPost ? (
    <PostContent post={currentPost} />
  ) : (
    <p>불러오는 중...</p>
  );
}
