"use client";

import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: var(--color-black);
  padding: var(--size-6) var(--size-4);
  text-align: center;
  color: var(--color-beige);
  font-size: var(--size-4);
  margin-top: var(--size-40);
`;

const FooterLink = styled.a`
  font-size: var(--size-6);
  color: var(--color-beige);
  margin-left: var(--size-2);

  &:hover {
    color: var(--color-sky-blue);
  }
`;

export { FooterWrapper, FooterLink };
