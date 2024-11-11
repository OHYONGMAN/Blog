"use client";

import styled from "styled-components";

const Content = styled.div`
  width: 95%;
  max-width: 60rem;
  margin: var(--size-8) auto;
  font-size: var(--size-5);
  line-height: var(--size-8);
  background-color: var(--color-beige);
  border-radius: 8px;
  padding: var(--size-4);
  color: var(--color-navy);

  p {
    color: var(--color-navy);
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
