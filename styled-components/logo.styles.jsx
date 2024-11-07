"use client";
import styled from "styled-components";

const LogoWrap = styled.div`
  text-transform: uppercase;
  font-size: var(--size-5);
  font-weight: bold;
  font-family: "Galmuri11", sans-serif;
  color: var(--color-beige);

  @media (min-width: 768px) {
    font-size: var(--size-8);
  }
`;

export default LogoWrap;
