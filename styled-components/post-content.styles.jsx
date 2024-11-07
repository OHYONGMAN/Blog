"use client";

import styled from "styled-components";

const Content = styled.div`
  width: 95%;
  max-width: 60rem;
  margin: var(--size-8) auto;
  font-size: var(--size-5);
  line-height: var(--size-8);
  background-color: var(--color-beige); /* 밝은 회색 배경 */
  border-radius: 6px;
  padding: var(--size-4);

  p {
    color: var(--color-navy); /* 텍스트 색상 */
  }

  .image {
    margin: var(--size-4) auto;
    width: 100%;
    max-width: 600px;
  }

  @media (min-width: 768px) {
    padding: var(--size-8);
  }
`;

export default Content;
