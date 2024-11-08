---
image: zustand.png
title: Zustand
date: "2024-11-08"
excerpt: Zustand 개념 정리
---

# 1. Zustand란?

- 간단하고 효율적인 React 상태 관리 라이브러리
- 다른 상태 관리 라이브러리, Redux와 비교할 때 매우 가볍고 설정이 간단

# 2. Zustand의 주요 특징

- 간단한 설정
  - Redux와 같은 라이브러리는 미들웨어와 복잡한 설정이 필요하지만, Zustand는 단일 파일로 쉽게 설정이 가능
  - 보일러플레이트 코드가 적어 코드가 간결
- 직관적인 API
  - 상태를 관리하기 위해 create 함수 하나로 store를 정의하고 상태 업데이트 함수와 값을 쉽게 생성
  - 상태 정의와 관리가 단순하고 직관적
- 부분적 구독
  - 상태의 특정 부분만 구독할 수 있어 불필요한 컴포넌트 리렌더링을 최소화
  - 성능이 중요한 애플리케이션에서도 효율적으로 사용
- 비동기 지원
  - 상태 업데이트 함수 안에서 비동기 작업을 쉽게 처리할 수 있음
  - Redux 미들웨어 없이도 비동기 상태 관리를 간단히 할 수 있음
- 경량
- 매우 가벼운 라이브러리

# 3. Zustand 기본 사용법

1. 스토어 생성하기
   - Zustnad에서는 create 함수를 사용해 store를 정의

```js
import create from "zustand";

const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
```

2. 컴포넌트에서 사용하기
   - Zustand의 상태와 함수를 React 컴포넌트에서 간편하게 사용할 수 있음

```js
import useStore from './store';

function Counter() {
  const count = useStore((state) => state.count);
  const increase = useStore((state) => state.increase);
  const decrease = useStore((state) => state.decrease);

  return (
    <div>
    <h1>{count}</hi>
    <button onClick={increase}>증가</button>
    <button onClick={decrease}>감소</button>
    </div>
  )
}
```

3. 비동기 작업 지원
   - 비동기 작업은 상태 업데이트 함수 내에서 async/await를 사용하여 처리

```js
const useStore = create((set) => ({
  data: null,
  fetchData: async () => {
    const response = await fetch("/api/data");
    const data = await response.json();
    set({ data });
  },
}));
```

