"use client";

import styled from "styled-components";
import Link from "next/link";

export const Post = styled.li`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  background-color: var(--color-navy);
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  height: 400px;
`;

export const NavLink = styled(Link)`
  color: var(--color-beige);
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: ${({ defaultImage }) =>
    defaultImage ? "transparent" : "var(--color-beige)"};

  img {
    /* width: 100%; */
    /* height: 100%; */
    object-fit: cover;
  }
`;

export const ContentWrap = styled.div`
  padding: var(--size-4);

  h3 {
    margin: var(--size-2) 0;
    font-size: var(--size-6);
    color: var(--color-beige);
  }

  time {
    font-style: italic;
    color: var(--color-beige);
  }

  p {
    line-height: var(--size-6);
    color: var(--color-beige);
  }
`;
