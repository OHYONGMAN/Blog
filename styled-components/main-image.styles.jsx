"use client";

import styled from "styled-components";

const MainWrap = styled.section`
  width: 100%;
  background-color: var(--color-navy);
`;

const ImageWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  /* align-items: center; // 수직 가운데 정렬 */
  width: 100%;
  height: 500px;
  overflow: hidden;
  margin: auto;
`;

export { MainWrap, ImageWrap };
