// styled-components 파일 (hero.styles.js)
"use client";

import styled from "styled-components";

const HeroWrap = styled.section`
  width: 100%;
  background-color: var(--color-navy);
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center; // 수평 가운데 정렬
  /* align-items: center; // 수직 가운데 정렬 */
  width: 100%;
  height: 500px;
  overflow: hidden;
  margin: auto;
`;

export { HeroWrap, ImageWrapper };
