"use client";

import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 6rem;
  background-color: ${(props) =>
    props.isScrolled ? "var(--color-black)" : "var(--color-navy)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid var(--color-teal);
  border-radius: 8px;
  background-color: var(--color-beige);
  color: var(--color-black);
  outline: none;

  &:focus {
    border-color: var(--color-sky-blue);
  }
`;

export { Header, SearchContainer, SearchInput };
