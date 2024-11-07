"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Galmuri11';
  font-weight: 700;
  font-display: swap;
  src: local(Galmuri11-Bold),
  url(/fonts/woff2/Galmuri11-Bold.woff2) format('woff2');
  font-style: normal;
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 900;
  font-display: swap;
  src:
    local('Pretendard Black'),
    url(/fonts/woff2/Pretendard-Black.woff2) format('woff2'),
    url(/fonts/woff/Pretendard-Black.woff) format('woff');
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 800;
  font-display: swap;
  src:
    local('Pretendard ExtraBold'),
    url(/fonts/woff2/Pretendard-ExtraBold.woff2) format('woff2'),
    url(/fonts/woff/Pretendard-ExtraBold.woff) format('woff');
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 700;
  font-display: swap;
  src:
    local('Pretendard Bold'),
    url(/fonts/woff2/Pretendard-Bold.woff2) format('woff2'),
    url(/fonts/woff/Pretendard-Bold.woff) format('woff');
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 600;
  font-display: swap;
  src:
    local('Pretendard SemiBold'),
    url(/fonts/woff2/Pretendard-SemiBold.woff2) format('woff2'),
    url(/fonts/woff/Pretendard-SemiBold.woff) format('woff');
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 500;
  font-display: swap;
  src:
    local('Pretendard Medium'),
    url(/fonts/woff2/Pretendard-Medium.woff2) format('woff2'),
    url(/fonts/woff/Pretendard-Medium.woff) format('woff');
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 400;
  font-display: swap;
  src:
    local('Pretendard Regular'),
    url(/fonts/woff2/Pretendard-Regular.woff2) format('woff2'),
    url(/fonts/woff/Pretendard-Regular.woff) format('woff');
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 300;
  font-display: swap;
  src:
    local('Pretendard Light'),
    url(/fonts/woff2/Pretendard-Light.woff2) format('woff2'),
    url(/fonts/woff/Pretendard-Light.woff) format('woff');
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 200;
  font-display: swap;
  src:
    local('Pretendard ExtraLight'),
    url(/fonts/woff2/Pretendard-ExtraLight.woff2) format('woff2'),
    url(/fonts/woff/Pretendard-ExtraLight.woff) format('woff');
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 100;
  font-display: swap;
  src:
    local('Pretendard Thin'),
    url(/fonts/woff2/Pretendard-Thin.woff2) format('woff2'),
    url(/fonts/woff/Pretendard-Thin.woff) format('woff');
}

:root {
  --color-navy: #2f4156;       
  --color-teal: #576c8d;       
  --color-sky-blue: #c8d9e6;   
  --color-beige: #f5efeb;      
  --color-white: #ffffff;
  --color-black: #252525;
}

* {
  box-sizing: border-box;
}

body {

  --size-1: 0.25rem;
  --size-2: 0.5rem;
  --size-3: 0.75rem;
  --size-4: 1rem;
  --size-5: 1.25rem;
  --size-6: 1.5rem;
  --size-8: 2rem;
  --size-16: 4rem;
  --size-20: 5rem;
  --size-40: 10rem;

  margin: 0;
  background-color: var(--color-teal);
  color: #252525;
  font-family: 'Pretendard', sans-serif;
}

h1,
h2,
h3 {
  font-family: "Pretendard", sans-serif;
}

a {
  text-decoration: none;
}

button {
  font: inherit;
  cursor: pointer;
}

`;

export default GlobalStyles;
