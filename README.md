# 아잇나우

**해외주식은 아잇나우와 함께!**<br>
해외 주식 뉴스 실시간 번역과 AI 애널리스트가 알려주는 어려운 해외주식 리포트
<br>
**사이트 바로가기** 👉 [클릭!](https://8b-test.vercel.app/ko)
<br>

**테스트 계정**
|아이디|비밀번호|
|------|---|
|test1234|a123123!|

# 📖 Contents

- [아잇나우](#아잇나우)
- [📖 Contents](#-contents)
- [프로젝트 소개](#프로젝트-소개)
  - [기획 동기](#기획-동기)
  - [해결방안](#해결방안)
  - [Architecture](#architecture)
  - [Stcak](#stcak)
- [팀원 소개](#팀원-소개)
- [협업 방식](#협업-방식)
  - [🗂️ 브랜치 전략](#️-브랜치-전략)
  - [📋 개발 일정 관리](#-개발-일정-관리)
  - [그 외](#그-외)
- [주요기능](#주요기능)
  - [🚪 회원가입](#-회원가입)
  - [🔑 로그인](#-로그인)
  - [📰 뉴스](#-뉴스)
  - [📈 실시간 주식](#-실시간-주식)
  - [💻 AI Report \& Chart](#-ai-report--chart)
  - [🔍 검색](#-검색)
  - [🤖 챗봇](#-챗봇)
- [추가기능](#추가기능)
  - [🌐 i18n](#-i18n)
  - [📈 주식페이지](#-주식페이지)
  - [💀 스켈레톤 UI](#-스켈레톤-ui)
- [프롬프팅](#프롬프팅)
  - [📰 뉴스 요약(llama3)](#-뉴스-요약llama3)
  - [💻 AI Report(OpenAI)](#-ai-reportopenai)
  - [🤖 챗봇(OpenAI)](#-챗봇openai)
- [최적화](#최적화)
  - [🖱️ 무한스크롤](#️-무한스크롤)
  - [💡 Lighthouse](#-lighthouse)
    - [폰트](#폰트)
    - [이미지](#이미지)
    - [접근성](#접근성)
    - [종합](#종합)

# 프로젝트 소개

## 기획 동기

![image (1)](https://github.com/user-attachments/assets/5fda1d5c-a8cb-42a7-918f-15f8a9c34d2d)

- **해외주식 투자 수익률 증가**
  - `23년도 기중 해외주식 수익률(25%) 국내주식 수익률(9%)보다 약 3배 높으며 개인 투자자들의 해외 주식투자가 증가하고 있습니다.
    <br/><br/><br/><br/>

![image (3)](https://github.com/user-attachments/assets/0e7e5c41-2a73-4324-9b6e-2b01319d925f)

- **정보의 제한**
  - 국내투자자들은 금융감독원, 한국거래소 기업공시시스템을 통해 국내 기업의 정보를 쉽게 얻을 수 있지만, 해외 주식 공시정보는 언어의 장벽 및 다른 공시체계로 정보 접근이 어렵습니다.
    <br/><br/><br/><br/>

![image (2)](https://github.com/user-attachments/assets/89dff8f6-419e-4223-8d5b-ba1f0899619d)

- **신속한 정보 접근성 결여**
  - 네이버, 다음 등 포털, 그리고 해외주식거래서비스를 제공하는 증권사 등에서 해외 주식 관련 정보에 대해 작게는 반나절, 늦게는 2-3일 늦게 공시가 되며, 비주류 종목에 대해서는 자료를 제공하고 있지 않는 어려움이 있습니다.

## 해결방안

![image](https://github.com/user-attachments/assets/c8a15efd-4919-4de1-b865-e17b5f2e46b9)

## Architecture

![architecture](https://github.com/user-attachments/assets/fb8db3b4-b0eb-4475-a055-311c2319f660)

## Stcak

![8b-sf-stack-readme](https://github.com/user-attachments/assets/9f108fec-812b-4f87-bc4e-6ca728f1b6cb)

# 팀원 소개

![image](https://github.com/user-attachments/assets/ec9bb832-dff4-4cff-aa06-4067aec4c26c)

# 협업 방식

## 🗂️ 브랜치 전략

![git-branch-strategy](https://github.com/user-attachments/assets/d82306eb-6b55-4b7a-b01f-95e74f226ebf)

- `develop`을 베이스로하여 작업단위마다 `feature`, `fix` 등의 브랜치를 생성해 작업했습니다.
- 작업 완료 후, `develop` 브랜치에 `merge` 기록을 남기지 않고 깔끔하게 관리하기 위해 `rebase merge` 방식을 사용했습니다.
- `main` 브랜치는 배포를 위한 브랜치로 `develop` 브랜치 작업을 `squash merge` 방식으로 관리함으로써 하나의 커밋으로 배포단위마다 어떤 이슈를 해결했는지 빠르게 파악할 수 있습니다.

## 📋 개발 일정 관리

![image](https://github.com/user-attachments/assets/ba1ae754-894a-4c28-b784-46b6e3bab507)

- Github Issues를 이용해 개발 일정을 관리했습니다.
- 프로젝트 진행 단계마다 Milestone을 만들어 총 4개의 Milestone단위로 프로젝트를 관리했습니다.
- 커밋 시 Close 또는 Fix 태그를 적으면 자동으로 작업이 완료되기 때문에 이용했습니다.
  <br/><br/><br/><br/>
  ![image](https://github.com/user-attachments/assets/f80fb63a-6da9-42b8-b644-6f141a6b82e4)
- 이슈 템플릿과 커밋 템플릿을 사용해 팀원들 간 이슈 관리 및 커밋 작성에서 통일성을 높였습니다.

## 그 외

![image](https://github.com/user-attachments/assets/fa66ab9e-15c3-46d8-a50b-1d3fa5834d16)

- 개발 일정외 디스코드에서 진행한 회의는 Notion 회의록에 기록하여 관리했습니다.
- 팀원과 공유하고 싶었던 트러블 슈팅 또는 구현하면서 겪고있는 어려움을 개발 고민거리를 이용해 공유했습니다.

# 주요기능

## 🚪 회원가입

![회원가입 플로우차트](https://github.com/user-attachments/assets/6c9b2f31-a3fe-4774-bbde-6df6c92587e7)

## 🔑 로그인

![로그인및메인](https://github.com/user-attachments/assets/169f9d1e-e2d4-4a27-96a9-483574cdbc01)

![로그인 플로우차트](https://github.com/user-attachments/assets/2d4096fb-5870-43a2-a2c5-d05048c34d21)

## 📰 뉴스

https://github.com/user-attachments/assets/7f61e5f8-466a-4f6b-b653-8586f34dea4f

![뉴스 플로우차트](https://github.com/user-attachments/assets/52e59d18-574a-481c-bc65-981ab4e8024e)

## 📈 실시간 주식

![주식상세](https://github.com/user-attachments/assets/d9393d7a-9d6b-4188-9b67-6063aabc5f23)

![실시간 주식](https://github.com/user-attachments/assets/cdda8fc9-df2c-4f44-b873-59402837ded2)

## 💻 AI Report & Chart

![AI 리포트](https://github.com/user-attachments/assets/43f9578c-48ca-4847-8e2a-2caa82de55cd)

## 🔍 검색

![검색 플로우차트-2](https://github.com/user-attachments/assets/6aecb7cb-8af1-4430-b085-a8185a63878d)

## 🤖 챗봇

https://github.com/user-attachments/assets/50aa845e-3a5e-4af6-9aa0-2dda1a6ae456

![챗봇 플로우차트](https://github.com/user-attachments/assets/714218ef-3b43-4032-8930-b4be6a403e04)

# 추가기능

## 🌐 i18n

![image (1)](https://github.com/user-attachments/assets/ef6dd925-fbac-4973-9d77-1226f2a7f9ab)

- 뉴스 5개 국어 번역외에도 페이지 번역도 지원하면서 국내 뿐만 아니라 해외 사용자도 사용할 수 있도록 환경을 구성했습니다.

## 📈 주식페이지

![image (2)](https://github.com/user-attachments/assets/5fbc38de-3549-4e57-ba10-6db56563582b)
![주식](https://github.com/user-attachments/assets/c9bda277-c389-47e0-a680-e4050841ac8f)

- 개인화된 정보 외에도 일반적으로 관심이 있을 법한 급상승, 급하락 종목, 전체 종목을 포함한 페이지를 구성했습니다.

## 💀 스켈레톤 UI

![image (3)](https://github.com/user-attachments/assets/2d3dc7d2-39df-46bb-a77a-758afe0c162e)

- 로딩 시간동안 사용자가 불편함을 느끼지 않고, CLS를 줄이기 위해 스켈레톤 UI를 도입했습니다.

# 프롬프팅

## 📰 뉴스 요약\(llama3\)

![image (1)](https://github.com/user-attachments/assets/53285c92-8194-4be0-a2ba-159c5cae7f88)

- `Restriction` 기법을 사용해 답변을 제한했습니다.
- `Few-Shot Prompting` 기법을 이용해 뉴스를 3줄 이내로 요약 받을 수 있도록 유도했습니다.
- 그 결과 200개 뉴스 중 3개를 제외한 뉴스가 3문장으로 요약되었습니다. **성공률 98.5%**

## 💻 AI Report\(OpenAI\)

![image (3)](https://github.com/user-attachments/assets/efeaa2b3-b017-4b04-a7e7-479b8bbb309c)

- `Role Based`, `Formatting`, `Restriction` 기법을 사용했습니다.
- OpenAI에게 다음과 같은 기준으로 평가하도록 지시했습니다.
- 주가
  - 현재 주가, 52주 최고가, 52주 최저가, 주가 분석
- 투자지수
  - 투자 지수 등급, 투자 지수 분석
- 관심도
  - 기관 소유 비율, 관심도 분석
- 성장성
  - 매출 성장률, 수익 성장률, 회사 성장 가능성 분석
- 수익성
  - 이익률, 자기자본이익률, 회사 수익성 분석

## 🤖 챗봇\(OpenAI\)

![image (2)](https://github.com/user-attachments/assets/66120739-fabc-4d10-b166-661d3e0735f8)

- `Role Based`, `Formatting`, `Restriction` 기법을 사용했습니다.
- 분석에 참고할 상세보고서 제공했습니다. 또한 상세 보고서의 데이터가 불완전한 경우 자체적으로 응답하도록 설계했습니다. 그 결과 응답 통일성 증가하는 결과를 얻었습니다.
- `temperature = 0.3`으로 설정해 챗봇의 응답 일관되고 중립적 답변을 얻을 수 있었습니다.
- `top_p = 0.5` 토큰의 분포를 좁히고 응답 품질 유지하도록 했씁니다.
- `frequency_penalty = 1` 동일 단어 반복을 억제하고, 응답을 다양화 시켰습니다.
- `max_tokens = 600` 한 문장 당 20토큰 이내로 답변 제한함으로써 간결한 문장으로 답할 수 있게 유도했습니다.

# 최적화

## 🖱️ 무한스크롤

| before                                                                                           | after                                                                                            |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| ![memo 적용 전](https://github.com/user-attachments/assets/020dc402-f685-4b27-b01b-32fb1e851691) | ![memo 적용 후](https://github.com/user-attachments/assets/4c16136b-490d-4b42-8769-0ca1a7141a3b) |

- 무한스크롤 20개씩 3번 진행 후, 성능을 측정했습니다.
- `React.memo`를 `ListItem` 적용했고, 그 결과 새롭게 무한스크롤 작업이 진행될 때마다 이전 요소들을 리렌더링 하지 않게 되었습니다.
- 이로인해 렌더링 시간이 64.9ms -> 43.8ms **약 32.5%** 단축되었습니다.

## 💡 Lighthouse

### 폰트

| before                                                                                             | after                                                                                              |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| ![폰트 최적화 전](https://github.com/user-attachments/assets/92187af9-2bb6-4667-b12c-a6b6d0a9417c) | ![폰트 최적화 후](https://github.com/user-attachments/assets/80f6663e-6686-4a77-b025-bc031f8e29f9) |

- `next/font`에서 `pretendard`를 지원하지 않아 로컬 폰트를 사용했습니다.
- `1.96MB`로 라이트하우스 성능 측정 시 로드 지연의 가장 큰 원인이었습니다.
- 폰트를 subset 폰트로 전환하면서 용량을 `165KB`로 **약 92%** 감소했습니다.
- 그 결과, 로드 지연이 `2000ms` 에서 `140ms`로 줄어 성능을 크게 개선할 수 있었습니다.

### 이미지

| before                                                                                               | after                                                                                                |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![이미지 최적화 전](https://github.com/user-attachments/assets/5da064f9-889b-4823-a655-1922cda50fb1) | ![이미지 최적화 후](https://github.com/user-attachments/assets/d98f2872-2e5a-4258-987b-ed29208a3d00) |

- 이미지 크기가 렌더링된 크기보다 불필하게 크게 렌더링 되는 문제가 있었습니다.
- 그래서 `Next`에서 제공하는 `<Image>`태그의 sizes 옵션을 주어 리사이징 되도록 했습니다.
- 또한 `next.config.mjs` 옵션에서 avif를 우선 지원할 수 있도록 설정해 webp 보다 20% 높게 압축해 제공했습니다.
- 그 결과, 23.7KB -> 3.6KB로 **약 85%** 감소했습니다.

### 접근성

| -                                                                                         | -                                                                                         |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![image](https://github.com/user-attachments/assets/aa583e0e-3e6c-4c3b-a8ab-bf620f607645) | ![image](https://github.com/user-attachments/assets/1b7d7eba-29b0-4b76-96ad-79b9ae9383f7) |

- button 태그와 Link 태그에 aria-label속성을 추가하여 접근성을 개선했습니다.

### 종합

| before                                                                                           | after                                                                                            |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| ![홈 최적화 전](https://github.com/user-attachments/assets/e7d6f9a4-2fb5-4aae-a0a9-8dae3b9e957f) | ![홈 최적화 후](https://github.com/user-attachments/assets/deaeaed2-3c12-43a9-a25a-ab9a28b852e2) |

- 모든 페이지에서 Lighthouse 테스트 결과, 성능 95점, 접근성 90점 이상을 달성했습니다.
