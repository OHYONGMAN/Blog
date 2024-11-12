---
image: vue.png
title: VueJS
date: "2024-11-11"
excerpt: VueJS 기초
---

# 1. 마운팅과 자식 요소 제어

- Vue 앱 제어
  - HTML 코드의 특정 부분을 제어할 수 있으며, 이 부분의 모든 자식 요소도 자동으로 관리
- 특수 기능
  - 보간법
    - {{ }}를 사용한 데이터 바인딩
  - 디렉티브
    - v-bind로 속성을 바인딩하거나 v-html로 HTML 콘텐츠를 렌더링하는 등의 기능을 제공

# 2. 데이터 바인딩

- Vue 앱의 데이터를 HTML에 바인딩하는 것을 의미
- Vue 인스턴스 내의 methods, computed 속성 및 data 옵션의 데이터를 HTML 요소에 바인딩

# 3. 옵션

- data
  - 데이터를 포함한 객체를 반환하는 함수를 가짐
  - 이 데이터는 Vue에서 제어하는 HTML에서 {{ dataProperty }} 또는 v-bind를 통해 액세스
- methods
  - 템플릿에서 함수를 호출할 수 있도록 하여 HTML 코드에서 직접 액세스할 수 있는 재사용 가능한 함수를 정의

```html
<div id="app">
  <p>{{ exampleC() }}</p>
</div>
```

```js
const app = createApp({
  data() {
    return {
      exampleA: "example1",
      exampleB: "example2",
    };
  },
  methods: {
    exampleC() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.exampleA;
      } else {
        return this.exampleB;
      }
    },
  },
});

app.mount("#app");
```

# 4. 선언형 접근 방식

- Vue와 같은 프레임워크는 선언형 접근 방식을 사용
- 즉, "어떻게" 구현할지보다는 "무엇"이 일어나는지를 설명하고, Vue가 이를 자동으로 처리
