"use client";
import styled from "styled-components";

const AllPostWrap = styled.div`
  width: 90%;
  max-width: 80rem;
  margin: var(--size-8) auto;
  background-color: var(--color-teal);
  border-radius: 8px;
  padding: var(--size-6);

  h1 {
    color: var(--color-beige);
  }

  h2 {
    font-size: var(--size-8);
    color: var(--color-beige);
    text-align: center;

    @media (min-width: 768px) {
      font-size: var(--size-16);
    }
  }
`;

export default AllPostWrap;
