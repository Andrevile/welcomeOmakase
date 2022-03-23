<h1 align="center">이랏샤이 오마카세 :sushi:</h1>
<p>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/html-E34F26?style=flat&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=flat&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white">
</p>


## :snowflake: 이랏샤이 오마카세란?

<p>유튜버들이 추천하는 음식점들을 종합해서 네이버 지도에 표시해주고,</p>
<p>원하는 음식점을 필터링하여, 정보를 제공하는 서비스입니다.</p>
<p>또한, 글 목록 탭에서 후기를 남기고 다른 사용자와 소통 할 수 있습니다.</p>


## :house: 배포 URL
https://welcomeomakase.com/

## :pushpin: 배운점
- 제대로 된 설계 없이, 기능을 구현하다 보니, 구조가 복잡해 질 수록 유지보수가 어려워졌습니다. 특히 서버와 클라이언트간의 데이터를 주고받는 형식 차이에 의한 문제점을 마주했고, 이를 해결함으로써, 현업에서 설계와 의사소통이 매우 중요하다는 것을 직접 느낄 수 있었습니다.
- 사용자 인증 기능을 구현하면서, session 쿠키 기반과 jwt를 이용한 인증방법들을 공부 할 수 있었고, jwt를 이용한 인증과정에서, 보안에 관한 많은 점들을 알 수 있었습니다.
- SNS 기능을 구현하면서 redux 의 비동기 처리를 이해할 수 있었고 특히, 인피니티 스크롤링을 구현하면서 생기는 중복요청에 대한 이슈를 redux toolkit의 condition을 통해 해결 할 수 있었습니다.
- redux를 사용하지 않고 local state에 비동기로 데이터를 불러올 때, 요청이 완전히 수행되기 전, 컴포넌트가 언마운트가 되면서 생기는 문제점에 대하여 abortController라는 개념을 통해 해결 할 수 있었습니다.
- 개발 과정에서, 프론트 서버와 백엔드 서버간의 데이터 교환중에 생기는 cors 문제를 어떻게 해결해야 하는지, 또한 배포를 하면서 생기는 cors 관련 문제에 대하여 지식을 얻을 수 있었습니다.
- AWS EC2에 배포를 하면서, 매우많은 시행착오를 겪었습니다. 특히, nginx에 관한 설정, http -> https 설정, cors 문제, 네이버 지도 api를 불러올 때 생기는 CSP(Content-Security-Policy)에 관해서 어려움을 겪었지만, 끝까지 포기하지 않고 배포에 성공하였습니다. 또한 배포에 성공하고, 모바일 환경으로 확인을 해보니 개발할 때와는 다른 문제점을 겪었고, 이 또한, 추후에 유지보수에 관한 어려움이 될테니, 개발 과정 중 테스팅의 필요성도 느꼈습니다.



## :clapper: 구현내용
###  소개 페이지
```
- 유튜버들의 프로필이 보이며 클릭시 맛집 페이지로 이동하고, 해당 유튜버가 추천하는 맛집들이 지도에 표시가 됩니다.
- 페이지에 접속 할 때마다, 쿠키에 저장되어있는 Access Token을 이용해 유저가 로그인 되어있는지 확인합니다.
- 로그인 되어 있다면, 글 목록 페이지로 이동이 가능하고, 로그인 되어 있지 않다면 로그인 혹은 회원가입을 권유하는 모달창이 나타납니다.
```

|<img src="https://user-images.githubusercontent.com/65812122/159697923-959ce419-bd59-47df-9fac-4477b088fcbc.gif" width=45%>|
<img src="https://user-images.githubusercontent.com/65812122/159698838-13894417-3860-49a0-a49f-bb53ba1b93f8.gif" align=right width=45%>|


### 맛집 페이지
```
- 맛집 목록 들이 지도에 표시됩니다.
- 맛집을 클릭하면 해당 맛집의 정보가 표시됩니다.
- 검색어를 입력하거나, 유튜버 혹은 지역의 조건으로 검색을 하면 해당 조건에 맞는 맛집이 표시됩니다.
```
|<img src="https://user-images.githubusercontent.com/65812122/159700288-ec854a8f-d761-4df2-902a-9d19fdd060b5.gif" width=45%>|
<img src="https://user-images.githubusercontent.com/65812122/159700773-b960085d-af42-416d-a6a3-c1da3a240442.gif" align=right width=45%>|


### 글목록 페이지
```
- 사진을 여러장 올리고 글을 포스팅 할 수 있습니다.
- 댓글을 쓸 수 있으며, 글에 `좋아요`를 할 수 있습니다.
- 댓글 삭제가 가능하며, 글 수정과 삭제 또한 가능합니다.
- 이미지를 클릭시, 확대가 가능하며, 나머지 사진들도 확인 가능합니다.
```

|<img src="https://user-images.githubusercontent.com/65812122/159702821-e64a2f0c-5942-4712-8c3f-404bafe2b76d.gif" width=45%>|
<img src="https://user-images.githubusercontent.com/65812122/159703323-2d0088e0-93fb-4f06-a67a-fd6c8eeaccb2.gif" align=right width=45%>|

### 로그인/회원가입
```
- 이미 존재하는 계정과, 이메일, 잘못된 비밀번호에 대한 경고문을 출력합니다.
- 성공시에 메인페이지로 이동합니다.
```


## :pencil: 폴더구조
### client
```
├─components
│  ├─Auth
│  │  ├─InputBox
│  │  └─SignLogo
│  ├─Common
│  │  ├─Layout
│  │  ├─Loading
│  │  ├─Modal
│  │  └─PageTitle
│  ├─IntroInfo
│  ├─NavBar
│  ├─NaverMap
│  ├─Post
│  │  ├─CommentArea
│  │  ├─EditForm
│  │  ├─PostCard
│  │  ├─PostForm
│  │  └─Posts
│  └─Profile
├─config
├─hooks
├─pages
├─redux
│  ├─actions
│  ├─reducers
│  └─stores
├─static
│  ├─assets
│  │  └─img
│  │      ├─jumbo
│  │      └─youtuber
│  ├─constants
│  └─styles
└─utils
```

### server 
```
server.js
├─db
│  └─schemas
├─middlewares
├─passport
├─routes
└─util
```
