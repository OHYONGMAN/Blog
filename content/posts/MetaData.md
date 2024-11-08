---
image: NEXTJS.svg
title: 메타데이터
date: "2024-11-07"
excerpt: 동적 메타데이터와 정적 메타데이터
---

# 1. 메타데이터란?

- 데이터를 더 잘 설명하고 관리 할 수 있도록 돕는 정보
- 웹, 데이터베이스, 파일 시스템 등 여러 분야에서 유용하게 사용
- 검색 엔진 최적화, 데이터 관리, 데이터의 효율적 탐색 등에 중요한 역할

# 2. 동적 메타데이터 vs 정적 메타데이터

- 동적 메타데이터
  - 페이지의 내용이나 상태에 따라 자동으로 변경
  - 사용자가 보는 페이지의 내용이나 특정 URL에 따라 타이틀, 설명, 키워드 등의 메타데이터가 다르게 설정
  - 장점
    - SEO 개선: 검색 엔진에 더 많은 정보를 제공할 수 있어 페이지별로 적절한 키워드가 반영
    - 유저 경험 향상: 각 페이지에 적합한 제목과 설명이 표시되므로, 사용자나 검색 엔진에서 페이지 내용을 쉽게 파악

```js
// Nextjs 예시
export async function generateMetadata({ params }) {
  const { slug } = params;
  const res = await fetch(`https://example.com/api/posts/${slug}`);
  const post = await res.json();

  return {
    title: post.title,
    description: post.excerpt,
  };
}
```

- 정적 메타데이터
  - 페이지 로드 시 변하지 않음
- 장점
  - 간편함: 유지보수가 쉬움
  - 일관성: 페이지의 주제나 브랜드 이미지가 일관되게 유지

```js
// Nextjs 예시
export const metadata = {
  title: "회사 소개",
  description: "우리 회사에 대해 알아보세요.",
};
```

![요약](image.png)
