"use client";

import Link from "next/link";
import styled from "styled-components";

const Post = styled.li`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  background-color: var(--color-navy);
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
`;

const NavLink = styled(Link)`
  color: var(--color-beige);
`;

const ImageWrap = styled.div`
  width: 100%;
  max-height: 20rem;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

const ContentWrap = styled.div`
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

export { Post, NavLink, ImageWrap, ContentWrap };
