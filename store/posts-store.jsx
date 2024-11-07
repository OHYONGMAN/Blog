"use client";

import { create } from "zustand";

const usePostStore = create((set, get) => ({
  posts: [],
  searchQuery: "",

  // 검색어 설정 함수
  setSearchQuery: (query) => set({ searchQuery: query }),

  // 검색어에 따른 필터링된 포스트 반환 함수 (제목과 내용 모두에서 검색)
  getFilteredPosts: () => {
    const { posts, searchQuery } = get();
    const lowerCaseQuery = searchQuery.toLowerCase();

    return posts.filter((post) => {
      const titleMatch = post.title.toLowerCase().includes(lowerCaseQuery);
      const contentMatch = post.content
        ? post.content.toLowerCase().includes(lowerCaseQuery)
        : false;
      return titleMatch || contentMatch;
    });
  },

  // 모든 포스트를 가져오는 함수
  fetchAllPosts: async () => {
    const response = await fetch("/api/posts");
    const data = await response.json();
    set({ posts: data }); // content 필드가 포함된 posts 설정
  },

  // 특정 포스트를 슬러그로 가져오는 함수
  fetchPostData: async (slug) => {
    const response = await fetch(`/api/posts`);
    const data = await response.json();
    const postData = data.find((post) => post.slug === slug);
    set({ currentPost: postData });
  },
}));

export default usePostStore;
