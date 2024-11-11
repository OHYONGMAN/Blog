---
image: zustand.png
title: Zustand
date: "2024-11-10"
excerpt: Zustand 심화
---

# 1. 미들웨어 사용하기

- Zustand는 미들웨어를 활용해 상태 관리의 기능을 확장
  - 로그, 지속성(persistence),immer와 같은 기능

1. Logger 미들웨어
   - 상태 변화가 발생할 때 콘솔에 기록하는 Logger 미들웨어를 추가할 수 있음
   - 상태 디버깅에 유용
   - devtools 미들웨어를 사용하면 상태 변경이 개발 도구에서 기록되고, 개발자 도구와 함께 사용할 때 더 많은 정보를 제공

```js
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useStore = create(
  devtools((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
  }))
);
```

2. Persist 미들웨어
   - 상태를 로컬 스토리지에 저장
     - 상태가 변경될 때마다 로컬 스토리지에 저장되므로, 페이지를 새로고침 해도 상태가 유지

```js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    {
      name: "count-storage", // 로컬 스토리지에 저장될 키 이름
    }
  )
);
```

# 2. 셀렉터 (Selectors)

- 상태 중 일부만 특정 컴포넌트에서 사용해야 할 때, 불필요한 리렌더링을 방지, 성능이 최적화
- 필요한 부분만 선택하여 사용하는 셀렉터는 상태 변화가 있을 때 선택된 상태만을 업데이트

```js
const useCount = () => useStore((state) => state.count);
const useIncrement = () => useStore((state) => state.increment);
```

# 3. Immer와 함께 상태 불변성 관리

- 불변성을 쉽게 유지

```js
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useStore = create(
  immer((set) => ({
    todos: [],
    addTodo: (todo) =>
      set((state) => {
        state.todos.push(todo);
      }),
  }))
);
```

# 4. 비동기 상태 관리

- 상태 업데이트에서 비동기 작업을 해야하는 경우 Zustand는 쉽게 처리

```js
const useStore = create((set) => ({
  data: null,
  fetchData: async () => {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    set({ data });
  },
}));
```

# 5. 상태의 선택적 리셋

- 상태를 초기 상태로 되돌리고 싶다면, 초기 상태를 저장한 다음 set 함수를 이용해 리셋

```js
const initialState = { count: 0 };

const useStore = create((set) => ({
  ...initialState,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set(initialState),
}));
```

# 6. Zustand의 컴포지션 패턴

- 여러 상태를 결합하거나 분리할 때 유용
- 여러 slice 를 조합해 모듈화된 상태 관리 구성

```js
const createCounterSlice = (set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
});

const createUserSlice = (set) => ({
  user: null,
  login: (user) => set({ user }),
});

const useStore = create((set) => ({
  ...createCounterSlice(set),
  ...createUserSlice(set),
}));

// createCounterSlice, createUserSlice 를 나눠서 정의한 후 결합하면,
// 상태 관리 코드를 모듈화하여 유지보수성이 높아짐
```
