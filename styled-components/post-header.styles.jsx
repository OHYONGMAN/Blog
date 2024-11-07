"use client";

import styled from "styled-components";

const Header = styled.header`
  padding-bottom: var(--size-8);
  border-bottom: 8px solid var(--color-teal);
  margin: var(--size-4) 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: var(--size-8);
    color: var(--color-navy);
    margin: 0;
    line-height: initial;
    text-align: center;
  }

  img {
    object-fit: cover;
    width: 200px;
    height: 120px;
  }

  @media (min-width: 768px) {
    margin: var(--size-8) 0;
    flex-direction: row;
    align-items: flex-end;

    h1 {
      font-size: var(--size-16);
      text-align: left;
    }
  }
`;

export default Header;
