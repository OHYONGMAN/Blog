"use client";

import { useEffect, useMemo, useState } from "react";
import MainImage from "@/components/home-page/main-image";
import AllPosts from "../components/home-page/all-posts";
import Pagination from "@/components/posts/pagination";
import usePostStore from "@/store/posts-store";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  const fetchAllPosts = usePostStore((state) => state.fetchAllPosts);
  const searchQuery = usePostStore((state) => state.searchQuery);
  const posts = usePostStore((state) => state.posts);

  const postsPerPage = 6;
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL의 `page` 파라미터에서 현재 페이지 가져오기
  const pageFromUrl = parseInt(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  // 검색어에 따라 필터링된 포스트 목록 계산
  const filteredPosts = useMemo(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerCaseQuery) ||
        (post.content && post.content.toLowerCase().includes(lowerCaseQuery)) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(lowerCaseQuery))
    );
  }, [posts, searchQuery]);

  // 현재 페이지에 표시할 포스트 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    router.push(`/?page=${pageNumber}`); // 페이지 번호를 URL에 반영
  };

  useEffect(() => {
    fetchAllPosts();
  }, [fetchAllPosts]);

  useEffect(() => {
    if (pageFromUrl !== currentPage) {
      setCurrentPage(pageFromUrl); // URL 파라미터에 따른 페이지 번호 설정
    }
  }, [pageFromUrl, currentPage]);

  return (
    <>
      <MainImage />
      <AllPosts posts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filteredPosts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
}
