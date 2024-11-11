---
image: nextjs.png
title: CORS 에러
date: "2024-11-11"
excerpt: CORS 에러 기초
---

# 1. CORS(Cross-Origin Resource Sharing) 에러

- 웹 브라우저가 보안 목적으로 도메인 간 리소스 요청을 제한하면서 발생하는 에러
- 웹 페이지가 다른 도메인에서 리소스를 요청할 때, 그 요청이 허용되었는지를 확인하기 위해 서버로부터 CORS 헤더를 확인
- 서버가 해당 도메인에서의 접근을 허용하지 않았다면, 브라우저는 CORS 에러를 발생시키고 요청을 차단

## CORS가 발생하는 상황

- 예를 들어 https://example.com에서 https://api.example2.com의 데이터를 요청할 때, 서버 api.example2.com이 example.com의 요청을 허용하지 않으면 CORS 에러가 발생

## CORS 에러 해결 방법

- 서버 설정 변경
  - 서버의 CORS 정책을 설정하여 특정 도메인의 요청을 허용하도록 할 수 있음
- 프록시 서버 사용
  - 서버가 CORS를 허용하지 않는 경우, 같은 도메인으로 요청을 중계할 수 있는 프록시 서버를 사용해 CORS 제한을 우회
- 브라우저 설정
  - 개발 중 Chrome 확장 프로그램 등을 사용할 수 있지만, 보안 문제로 배포 환경에서는 권장하지 않음
- 응답 헤더 추가
  - 서버 응답 헤더에 Access-Control-Allow-Oring을 추가하여 요청을 허용할 수 있음
