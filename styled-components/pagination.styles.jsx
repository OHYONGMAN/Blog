"use client";

import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

const PageButton = styled.button`
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-beige);
  background-color: ${(props) =>
    props.active ? "var(--color-navy)" : "transparent"};
  border: 1px solid var(--color-navy);
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  min-width: 40px;
  min-height: 40px;

  &:hover {
    background-color: var(--color-sky-blue);
    color: var(--color-navy);
  }

  &:disabled {
    background-color: var(--color-teal); /* 비활성화 색상 */
    color: var(--color-teal);
    border: none;
    cursor: default;
  }

  &:disabled:hover {
    background-color: var(--color-teal); /* 비활성화 시 호버 스타일 고정 */
    color: var(--color-teal);
  }
`;

export { PaginationWrapper, PageButton };
