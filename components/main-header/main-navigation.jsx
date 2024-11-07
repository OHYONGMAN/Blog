"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import usePostStore from "@/store/posts-store";
import {
  Header,
  SearchContainer,
  SearchInput,
} from "../../styled-components/main-navigation.styles";

export default function MainNavigation() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setSearchQuery = usePostStore((state) => state.setSearchQuery);
  const [query, setQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (query.trim()) {
      setSearchQuery(query);
      router.push(`/?search=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && query.trim()) {
      handleSearchSubmit();
    }
  };

  const handleHomeClick = () => {
    setSearchQuery("");
    setQuery("");
  };

  useEffect(() => {
    const searchParam = searchParams.get("search");
    if (searchParam) {
      setQuery(searchParam);
      setSearchQuery(searchParam);
    } else {
      setQuery("");
      setSearchQuery("");
    }
  }, [searchParams, setSearchQuery]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Header isScrolled={isScrolled}>
      <Link href="/" onClick={handleHomeClick}>
        <Logo />
      </Link>
      <nav>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="검색어를 입력하세요"
            value={query}
            onChange={handleSearchChange}
            onKeyDown={handleKeyPress}
          />
        </SearchContainer>
      </nav>
    </Header>
  );
}
