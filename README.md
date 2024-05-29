# storyBook

## 1. 설치

1. `npx storybook@latest init`

2. 번들러마다 별도의 설정 필요 (https://storybook.js.org/docs/builders/vite)

## 2. tailwind 설정

- 테마 설정을 통해 기본적으로 자주 사용되는 부분을 정의하기

- fontsource를 사용하면 웹 폰트를 npm으로 받을 수 있음(번들 용량도 작다) + 별도의 폰트 다운 x

## 3. 컴포넌트 개발과 스토리 작성

### 3.1 Label 컴포넌트 , 메타데이터

- `meta`는 컴포넌트에 대한 설명을 정의

- 컴포넌트 자체의 주석 or `argType`의 필드를 통해 설명 문구를 넣을 수 있음

- `stoies` 안에는 스토리북과 관련된 요소만 넣고 컴포넌트는 폴더를 분리하는게 좋다

  - 배포할때 스토리에 관한 정보는 npm패키지로 한꺼번에 나가지 않아도 되기 때문이다

  - 별도의 배포된 스토리북 페이지나 크로마틱을 통해 확인이 가능하기 때문

  - 굳이 용량을 키우지 않고 관심사를 분리해라

- 스토리를 먼저 작성하고, 컴포넌트를 만들면 TDD 역할도 하는 것 같다고 하심

- preview.ts에 import했던 css 설정을 그대로 import 해야 폰트가 적용이 된다

- 확장성을 고려해 타입을 너무 제한하지 않는게 좋다. 예를들어 라벨의 경우에도 "username" | "password" 가 아니라, string

### 3.3 IconButton

- 이벤트 핸들러가 `optional`이 아니게되어서 `args`에 명시를 해야함

  - `fn`을 사용해 모킹하면 이벤트핸들러에 대한 빈 이밴트를 넘길 수 있다

- icon의 경우 Path를 넘기도록 처리함 (이미지 경로)

  - 1. public 경로에 아이콘을 넣고 가져오는 방법

       - 정적인 경로를 그냥 기입하면됨

  - 2. src/assets/

       - react 컴포넌트처럼 import 후 가져와야 함

  - 3. cdn처럼 배포된 이미지 가져오기

       - 경로 그냥 입력 가능

- 팀 내의 컨밴션을 보통 따라가는 듯 함

### 3.4 CLS 최소화 (에러 메세지)

- 현재 DefaultTextField의 에러필드가 나타나면 화면이 밀린다 (에러메세지가 나오면서 공간이 밀림)

- `absolute` 처리를 해서 공간이 밀리지않도록 처리해야한다

- `<div>` 태그로 에러컴포넌트를 감싸고 표현하는 방법?

  - <div>요소가 많아지면 불필요하게 태그를 하나 더 만들게된다

  - React의 `Reconciliation`을 할때 모든 트리노드를 탐색하는데 쌓이면 렌더링에 악영향을 미친다.

    - Reconciliation : 가상DOM, DOM사이의 차이를 갱신하는 과정

  - 따라서 css의 자식노드로 직접 지정하는 방법을 사용함

### 3.5 NavbarComponent

- Navbar 컴포넌트의 `width = 100%` 옵션은 결국 바깥에서 넓이를 지정해야한다.

  - 스토리북에서는 `decorators`를 사용해 컴포넌트를 감쌀 수 있다

  - 이때, 파일 확장자명은 `tsx`로 끝나야 한다.

### 3.6 PrimaryButton

- 테마 같은 경우 type을 별도로 지정 후 Record를 사용해 정의 가능

- 여러 샘플 정보를 보여주고 싶으면 각 상황에 맞는 샘플을 `export` 하기

### 3.7 TagList

-`onClick` 이벤트의 경우 각 `TagButton`이 아니라, `TagList`에서 호출되어야 맥락에 맞다

- 현재 선택된 태그 버튼을 알 수 있는 방법

- 이벤트 위임 방법 사용하자 (상위 요소에서 하위 요소를 처리하는 방법)

  - HTML에서는 이벤트가 발생하면 상위 요소에 전달되는데 이를 이용(이벤트 버블링)

  - 상위 `div`요소에서 이벤트 핸들러를 통해 버튼에 클릭된 값을 처리

- 코드상에서는 제네릭타입을 선언했지만 `string`으로 고정해도 문제는 안났다

  - 좀 더 유연한 타입 및 확장성을 고려한 방법인듯

## 4. 번외 (UI테스트)

### 4.1 크로마틱

- UI리뷰, UI테스트, 스토리북에 CI/CD 구동이 가능

- 설치 방법

  - github연동
  - `npm install --save-dev chromatic`
  - `npx chromatic --project-token=...`

- 빌드가 수행되면 각 컴포넌트들의 변경사항, 컴포넌트를 볼 수 있음

- 쉽게 배포할 수 있는 방법인듯하다

### 4.2 CI/CD 연결

- github Action을 사용해 처리하는 방법

- 공식문서 따라하기 https://www.chromatic.com/docs/github-actions/

  - CHROMATIC_PROJECT_TOKEN 시크릿키 github에서 관리하도록 설정

- ![image](https://github.com/teawon/storyBook/assets/78795820/2921f1ee-ccda-4799-8569-f7a037c07021)

  - 배포된 사이트를 통해 쉽게 UI를 확인하고 리뷰할 수 있다
  - 별도의 환경 구축 없이 UI를 확인할 수 있다는 부분이 이점인듯 (기존에는 직접 브랜치 옮기고 실행해야했음)

### 4.3 Accessibility(접근성) 테스트

- Accessibility 테스트 케이스를 돌려 접근성을 평가 할 수 있다

  - 만약 밝은 배경 + 밝은 텍스트로 눈에 잘 들어오지 않는 등

- 테스트 자동화 명령어 + CI/CD를 통해 테스트가 통과되면 배포될 수 있도록 할 수 있다

### 4.4 Interaction 테스트

- 사용자와 브라우저간의 테스트

  - 버튼을 클릭하고, 텍스트를 입력하는 등의 상호작용

  - Jest를 사용한다.

- 만약 유닛테스트에서 API테스트 할 필요가 없다면, Storybook의 테스트로 충분하다고 이야기

  - Jest에서는 번거로운 설정이 필요하다

  - 만약 cypress에서 이런 테스트를 진행하고 있다면, UI테스트는 Interaction으로 괜찮다.

  - 단순히 CanvasElement만 가져옴

- 결과물
  - ![May-30-2024 00-12-07](https://github.com/teawon/storyBook/assets/78795820/4621547d-0c90-4714-bc09-33f39190d111)

### 4.5 공식문서에는 제공하지만 자주 사용되지는 않는 항목들 (8.1기준)

#### 4.5.1 TestCoverage

- 웹 접근성 테스트(?), 굳이 스토리북으로 하는걸 권장하지 않는다.

- 공식문서의 표를 JSON으로 제공하고있음

#### 4.5.2 Snapshot

- 관리가 어렵고 현재 공식적으로 Deprecated됨

#### 4.5.3 여러 테스트

- End-to-End testing, Unit Test모두 굳이 스토리북으로 할 필요는 없음

### 5. npm 배포하기

1. `package.json`의 이름 수정 (단 누군가 사용중이면 안됨)

- private = "false" 하면 돈나감

2. 여기서는 컴포넌트만 export해주면된다. (스토리북을 굳이 함께 보낼 필요가 없음)

3. 한번에 사용하기 쉽게 index에서 묶어서 한번에 보냄

4. main에 `src/components/index.tsx` 를 넣어 별다른 경로 없이 접근가능하도록 설정

- files에도 컴포넌트 설정 + tailwind css 파일 넣어주기

5. 그런데 tailwind의 경우 index.css를 import해서 사용해야했다. 이 부분은?

- tailwind에서는 배포 명령어를 제공한다.

- `npx tailwindcss -i ./src/index.css -o ./index.css --watch`

- 우리가 사용했던 특정 className (border-primary)와 같은 부분에 대해 css파일을 빌드하며 만들어줌
  - 의존성 문제를 해결해준다.

6. 공용 스타일도 사용했기때문에 이부분도 보내야함

- `src/mixins` files에 추가

7. 배포

- `npm publish --publish`
