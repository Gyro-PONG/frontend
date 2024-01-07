<div align="center" style="max-width: 100%;">
  <h1>Gyro PONG</h1>
  <img width="100%" style="max-width: 100%" src="https://github.com/dongtimes2/readme_image/assets/98700888/dd2e33b8-3cb6-40d2-9d12-1dea4f45326c" alt="title logo"/><br/>
</div>

<h1>실행 조건</h1>
<div align="left" style="max-width: 100%;">
  <h2>PC 브라우저</h2>

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari |
  | :---: | :---: | :---: |
  | 105 ~ latest | 105 ~ latest | 15.4 ~ latest|
  <ul>
    <li>브라우저 사이즈는 최소 1280px x 800px여야 합니다</li>
  </ul>
  <br />
  <h2>모바일 브라우저</h2>

 | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung|
  | :---: | :---: | :---: |
  | 18 ~ latest | 4.2 ~ latest| 1.0 ~ latest|
  <ul>
    <li>모바일 기기에는 orientation 센서가 탑재되어 있어야 합니다</li>
    <li>iPhone에서는 진동 기능을 사용할 수 없습니다</li>
  </ul>
</div>
<br />

# 개요

- 프로젝트 이름: 🕹️Gyro PONG🕹️
- 프로젝트 소개  
&nbsp;  모바일 기기의 자이로 센서를 이용하여 PONG 게임을 할 수 있는 웹 게임입니다.  
&nbsp;  모바일 기기를 기울임으로써 유닛을 움직일 수 있다는 특징을 가지고 있습니다.  
- 개발 기간
  - 최초 개발: 2022.07 ~ 2022.07 (기획 1주, 개발: 2주)
  - 리뉴얼: 2023.11 ~
- 제작 동기  
&nbsp;  웹은 탄생 이후 지금까지 획기적인 발전 과정을 거쳤습니다.  
&nbsp;  하지만 웹을 조작하는 방법은 예전과 크게 달라지지 않다는 것을 느꼈습니다.  
&nbsp;  버튼을 누르거나, 특정 디바이스를 이용하여 수평면으로만 움직이는게 전부였기 때문입니다.  
&nbsp;  
&nbsp;  물론 터치스크린의 등장으로 인해 손으로 직접 웹을 만지며 조작이 가능해졌지만,  
&nbsp;  누름, 그리고 평면으로 움직임이는 방법을 사용한다는 점에서  
&nbsp;  터치스크린 역시 웹을 조작하는데에는 기존과 크게 다르지 않다고 생각했습니다.  
&nbsp;  
&nbsp;  단순한 움직임으로 웹을 조작하는 기존의 패러다임에서 탈피하여  
&nbsp;  좀 더 다채롭고 역동적으로 웹을 조작하고 싶다는 생각이 들었고,  
&nbsp;  이런 발상을 기반으로 하여 이번 프로젝트를 기획하였습니다.  
&nbsp;  
&nbsp;  '역동적인 움직임', '누군가와 함께 즐기는 활동' 이라는 주제로 방향을 잡다보니 게임으로 가닥이 잡혔고,  
&nbsp;  '처음 선보이는 것', '새로운 것' 이라는 키워드에 초점을 맞추니 최초의 아케이드 게임인 PONG이 떠올랐습니다.  
&nbsp;  
&nbsp;  결과적으로 서로 다른 두 개의 소재가 만나 모션을 통해 움직이는 웹 게임 Gyro PONG을 개발하였습니다.

<br />

# 이용 방법

<details>
<summary>컨트롤러 등록하기</summary>
<div>

|메인 화면|설정 화면|
|:--:|:--:|
|![main](https://github.com/dongtimes2/readme_image/assets/98700888/8ab1312d-da42-4238-8aba-fd948c9403dc)|![settings](https://github.com/dongtimes2/readme_image/assets/98700888/9e51d94b-c54e-4945-bdd7-d30a8913cae3)|
|메인 화면에서 '설정' 버튼을 클릭해주세요.|설정 화면에서 '컨트롤러 연결 설정' 버튼을 클릭해주세요.|

|연결 모달|연동 영상|
|:--:|:--:|
|![settings_modal](https://github.com/dongtimes2/readme_image/assets/98700888/a8f1f549-619c-4594-aae7-9122342d66a6)|![settings_video](https://github.com/dongtimes2/readme_image/assets/98700888/e19feafd-7baf-4757-aad7-d237bbb53312)|
|연결 모달 내 QR코드가 뜨면, 모바일 기기로 QR 코드를 찍어 연결해주세요.<br />혹은 컨트롤러 전용 링크를 통해 접속할 수도 있습니다.|모바일 기기와 연동하는 모습입니다.<br />연동할 때, 유저가 모바일 기기를 기울이기 편한 각도를 등록해야 합니다.|
</div>
</details>

<details>
<summary>시작하기</summary>
<div>

|메인 화면|로비 화면|
|:--:|:--:|
|![main_activated](https://github.com/dongtimes2/readme_image/assets/98700888/f651dabd-7c73-4865-b6a4-d1a3bf3003cb)|![lobby](https://github.com/dongtimes2/readme_image/assets/98700888/724caeee-e475-46f1-a806-fcba47795b5d)|
|연동이 완료되면 메인 화면의 시작 버튼이 활성화 됩니다.<br />'시작' 버튼을 클릭해주세요.|로비 화면으로 진입한 모습입니다|
</div>
</details>

<details>
<summary>방 만들기</summary>
<div>

|로비 화면|게임 생성 모달|
|:--:|:--:|
|![lobby](https://github.com/dongtimes2/readme_image/assets/98700888/724caeee-e475-46f1-a806-fcba47795b5d)|![create_game_modal](https://github.com/dongtimes2/readme_image/assets/98700888/8c15b7af-7934-414e-a36a-74d93cdd973d)|
|로비 화면에서 '게임 생성' 버튼을 클릭해주세요 |모달이 뜨면, 생성할 게임의 난이도와 목표 점수를 설정할 수 있습니다.<br />'게임 생성' 버튼을 클릭해주세요.|

|유저 대기 화면||
|:--:|:--:|
|![host_waiting](https://github.com/dongtimes2/readme_image/assets/98700888/ff17d3fb-8d7a-4ac8-b1a0-fcf759ba8267)|![blank](https://github.com/dongtimes2/readme_image/assets/98700888/0d6cf067-5b12-4131-a2fe-a3104b6abf9f)|
|게임이 성공적으로 생성되었습니다.<br />유저가 참가할 때까지 기다려주세요||

</div>
</details>

<details>
<summary>게임에 참여하기</summary>
<div>

|로비 화면||
|:--:|:--:|
|![lobby_has_game_room](https://github.com/dongtimes2/readme_image/assets/98700888/190e6efb-0944-49fa-afde-0b85c2d5b737)|![guest_wait](https://github.com/dongtimes2/readme_image/assets/98700888/2452f14b-5d00-4874-91b2-046490557d54)|
|누군가 게임을 생성했을 경우, 로비 화면에 생성된 게임룸을 볼 수 있습니다.<br />생성된 게임을 클릭해주세요.|게임에 참여한 모습입니다.<br/>방장이 게임 시작 버튼을 누를 때까지 대기해주세요.|
</div>
</details>

<details>
<summary>게임 시작하기</summary>
<div>

|게임 시작하기||
|:--:|:--:|
|![host_ready](https://github.com/dongtimes2/readme_image/assets/98700888/4c54efc6-bba3-4055-8e51-43985af9ebfc)|![blank_800](https://github.com/dongtimes2/readme_image/assets/98700888/a7242d31-6b03-4f17-b06f-c3dcedfea97f)|
|유저가 참여하면 게임 시작 버튼이 화면에 나타납니다.<br />게임 진행을 위해 '게임 시작' 버튼을 눌러주세요. ||

https://github.com/dongtimes2/readme_image/assets/98700888/668f5c6e-a5cd-4628-ae6f-aa1d262f28a3

게임이 진행중인 모습입니다. (컨트롤러는 왼쪽의 paddle을 조종하고 있습니다)  
컨트롤러를 좌,우로 기울이면 paddle이 움직입니다.

</div>
</details>

<details>
<summary>컨트롤러 움직임으로 버튼 클릭 및 메뉴 이동하기</summary>
<div>

|설정 화면|활성화 되어 버튼에 화살표가 추가된 모습|
|:--:|:--:|
|![settings_activated](https://github.com/dongtimes2/readme_image/assets/98700888/a35ef939-0978-4309-bf11-89ea5aec65c0)|![arrow](https://github.com/dongtimes2/readme_image/assets/98700888/2b30c716-e80c-44bb-a338-6f700ea81032)|
|컨트롤러와 연동하면 설정 화면에 '컨트롤러 움직임으로 버튼 누르기' 버튼이 표시됩니다.<br />버튼을 클릭해주세요.|버튼 옆에 화살표 기호가 추가된 것을 볼 수 있습니다.|

|활성화 이후 컨트롤러 화면|실행 화면|
|:--:|:--:|
|![blank](https://github.com/dongtimes2/readme_image/assets/98700888/b30c044b-044b-439e-bc40-95f25df58dd0)|![arrow_play](https://github.com/dongtimes2/readme_image/blob/main/ezgif.com-optimize-min.gif?raw=true)|
|활성화 할 경우 컨트롤러에는 '모션 감지 시작' 버튼이 생성됩니다.<br />버튼을 클릭하면 컨트롤러의 움직임을 인식합니다.|컨트롤러의 '모션 감지 시작' 버튼을 누른 이후, PC 화면에 뜬 화살표 모양대로 컨트롤러를 움직여주세요.<br />인식에 성공할 경우 컨트롤러는 모션 인식을 중단합니다.<br />다시 한 번 모션 감지를 하고싶은 경우, 컨트롤러의 '모션 감지 시작' 버튼을 눌러주세요.|
</div>
</details>

<br />

# 기술스택

리뉴얼을 거치면서 기술 스택을 변경하였습니다.  
이전에 사용된 기술 스택은 취소선 처리하였습니다.

## 프론트엔드

### 핵심

- React
- TypeScript
- ~~Recoil~~ => Zustand
  - zustand는 recoil과 달리 provider로 감쌀 필요가 없다는 점, 각각의 atom 별로 일일이 key를 지정할 필요가 없다는 점, 그리고 리뉴얼 시점의 npm trend에서 zustand가 높은 점유율을 기록한 점을 근거로 zustand를 도입하였습니다.
- Canvas
- Socket.io-client
- Styled components
- Phaser3

### 그 외

- husky

### 테스트 환경

- vitest

### 배포

- ~~Netlify~~ => AWS
  - 프론트와 백엔드의 배포 환경을 한 가지로 통일하기 위해 aws로 이전하였습니다.

## 백엔드

### 핵심

- Express
- Socket.io
- Matter.js

### 그 외

- husky

### 테스트 환경

- supertest
- jest

### 배포

- AWS

<br />

# 기술 및 구현 상세 내용

## paddle이 움직이는 범위 컨트롤하기

모바일 기기를 가로로 쥔 상태로 왼쪽, 혹은 오른쪽으로 돌리면, 기울인 각도 만큼 게임 내 paddle이 좌 우로 움직이도록 기획하였습니다.

하지만 기울이는 각도에 따라 paddle이 얼만큼 움직여야 하는지 기준을 세우는 것이 애매하였습니다.  
가장 쉬운 방법은 개발자의 임의대로 기울임 값을 지정하는 것이지만, 사람마다 신체구조가 달라 최대로 기기를 기울일 수 있는 활동 범위가 다르기 때문에, 유저의 편의성을 위해 다른 방법을 찾아야 했습니다.  

긴 고민 끝에 사람마다 최대로 기기를 기울일 수 있는 범위를 조사한 뒤, 이를 기반으로 paddle이 움직이는 기준을 세우기로 하였습니다.  
따라서 맨 처음 게임에 접속했을 때, 컨트롤러를 연결하는 과정에서, 유저가 최대한 기울일 수 있는 각도의 범위도 함께 지정할 수 있도록 구현했습니다.  

이런 고민을 거치며, 웹을 이용하는 사용자의 경험에 대해 더욱 생각해볼 수 있는 경험이 되었습니다.  

<br>

## 움직임 범위에 맞추어 paddle 표시하기

앞 단락에서 언급하였듯, 유저마다 모바일 기기를 움직일 수 있는 각도의 범위가 다르기 때문에, 여러 대의 모바일 기기로부터 동일한 각도 값을 받아도, 화면에는 유저별로 paddle의 위치를 다르게 표현해야 됩니다.  
(예를 들어 기기를 움직이는 각도의 범위가 짧은 유저는, 그렇지 않은 유저에 비해, 기기를 조금만 움직여도 paddle이 빠르게 이동해야 합니다)

이를 해결하기 위해 paddle의 위치를 계산하는 일차 방정식을 도입하여 util 함수에 적용하였습니다.  
방정식은 다음과 같습니다. (이때 β는 센서로부터 얻은 기울임 값을 의미합니다)  
&nbsp;  
$\text{Paddle의 y좌표 시작점} = \frac{\beta\text{ - }\text{왼쪽 기울임 최대 각도}}{\text{오른쪽 기울임 최대 각도}\text{ - }\text{왼쪽 기울임 최대 각도}} \times \text{(canvas 높이 - Paddle 높이)}$

<br>

## 모니터 사양에 관계 없이 동일한 결과물 출력하기

이 게임은 원격으로 접속한 두 명의 유저가 실시간으로 동일한 그래픽을 보면서 참여한다는 특징을 가지고 있습니다.  
이를 위해서는 모니터의 사이즈와 픽셀 밀도에 관계없이 항상 동일한 결과를 화면에 출력해야 합니다.  
환경에 관계없이 동일한 결과가 출력되도록 구현한 내역은 아래와 같습니다.  

<br>

### 브라우저의 최소 한계 크기 지정

게임이 표시되는 화면의 사이즈를 1280 x 800(16:10) 로 고정한 뒤, CSS의 Media Query를 이용하여 브라우저 사이즈가 1280 x 800 이상인지를 감지하도록 하여, 브라우저의 사이즈가 정해진 한계보다 작을 경우, '더 넓은 사이즈의 화면에서 이용해주세요' 라는 문구가 뜨도록 하였습니다.  
이를 통해 온전한 크기로 게임 화면을 볼 수 있도록 유저의 행동을 유도하였습니다.  

|브라우저 사이즈 감지||
|:--:|:--:|
|![resize](https://github.com/dongtimes2/readme_image/assets/98700888/25006756-745f-467b-80a3-59d809e96714)|![blank_800](https://github.com/dongtimes2/readme_image/assets/98700888/a7242d31-6b03-4f17-b06f-c3dcedfea97f)|
|브라우저의 사이즈가 1280 x 800보다 작을 경우 Media Query에 의해 문구가 출력됩니다.||

<br>

### 픽셀 밀도 고려

모니터의 픽셀 밀도가 다르다면, 같은 크기의 요소를 그려도 사이즈가 이상하거나 흐릿하게 나타나는 문제점이 발생할 수 있습니다.  
따라서 devicePixelRatio를 이용하여 모니터의 픽셀 밀도를 얻은 뒤, 아래 일부 코드와 같이 화면을 보정하였습니다.  

가장 먼저 phaser 화면의 경우 width 및 height에 devicePixelRatio를 곱해줌으로서, 논리적 픽셀값과 물리적 픽셀값을 일치시켰습니다.  
이후 CSS 속성을 통해 phaser 화면의 크기를 다시 원래의 width 및 height 값으로 변환시켰습니다.  
결과적으로 phaser 화면의 사이즈 자체는 변함이 없지만, phaser 내에서 표시되는 요소는 devicePixelRatio가 반영되는 결과를 얻을 수 있습니다.  

```ts
// phaser의 기본 화면 세팅
const config: Phaser.Types.Core.GameConfig = {
// (중략)
  width: SIZE.WIDTH,  // 1280
  height: SIZE.HEIGHT,  // 800
  scale: {
    mode: Phaser.Scale.NONE,
    zoom: 1 / window.devicePixelRatio,
    width: SIZE.WIDTH * window.devicePixelRatio,
    height: SIZE.HEIGHT * window.devicePixelRatio,
  },
// (중략)
};

// phaser 내 요소 비율 세팅
private initBall() {
  this.ball = this.add
    .rectangle(
      this.scale.width / 2,  // DPR을 반영한 좌표 지정
      this.scale.height / 2,
      BALL_SIZE,
      BALL_SIZE,
      BALL_COLOR,
    )
    .setScale(window.devicePixelRatio);  // DPR을 반영한 사이즈 조절
}

```

<br>

## 화면 동기화 하기

PONG 게임은 화면 내에서 ball이 끊임 없이 움직이며, ball의 위치가 게임에 참여한 두 명의 유저에게 동일하게 보여야 하기 때문에, 멀티 플레이라 할지라도 턴제 게임과 다르게 실시간 동기화의 중요성이 매우 높습니다. (즉 원격으로 떨어진 두 명의 유저가 보는 화면은 실시간 항상 동일해야 합니다)  
따라서 소켓 통신을 이용하여 유저에게 보이는 화면을 최대한 동기화시킬 필요성이 있었습니다.  
지금까지 개발 및 리뉴얼을 진행하면서 주어진 조건을 만족시키기 위한 여러 시행착오는 아래와 같습니다.  

최초 개발단계에서는 동기화의 중요성을 생각하지 못했습니다.  
따라서 각각의 클라이언트(호스트(방장), 게스트(참가자))가 게임 로직을 계산하도록 하였습니다. (게임이 진행되는 로직은 동일하므로, 언제나 같은 결과가 나올 것이라 잘못 판단했습니다)  
즉 클라이언트는 canvas 및 requestAnimationFrame(이하 rAF)을 이용하여 ball의 움직임을 직접 계산하여(ball의 튕김 등등) 화면에 표시하였고, paddle의 위치정보만 서버로부터 전달받아 화면에 표시하는 구조를 가지고 있습니다.  

||최초 로직 도식화||
|:--:|:--:|:--:|
|![blank](https://github.com/dongtimes2/readme_image/assets/98700888/dfd52d64-80da-478f-aef3-c7bf7612ad6c)|![first](https://github.com/dongtimes2/readme_image/assets/98700888/895a12e6-4419-4b0d-a09d-e7daa087de94)|![blank](https://github.com/dongtimes2/readme_image/assets/98700888/dfd52d64-80da-478f-aef3-c7bf7612ad6c)|
||컨트롤러는 서버에게 센서값(paddle 위치 정보값)을 전달한다.<br/>서버는 클라이언트에게 paddle 위치 정보 값을 전달한다<br/>각각의 클라이언트는 paddle의 위치정보를 기반으로 ball의 움직임을 계산한다.||

하지만 위와 같은 방식은 큰 문제가 있었는데, 바로 호스트의 화면과 게스트의 화면이 동일하다는 점을 보장할 수 없다는 점입니다.  
rAF는 브라우저가 blur되는 등의 원인으로 언제든지 애니메이션이 멈출 수 있는데, 중간에 애니메이션이 멈출 경우 호스트의 ball의 위치와 게스트의 ball의 위치는 서로 달라지기 때문에 결과적으로 게임이 올바르게 진행되지 않게 됩니다. (예를 들어 호스트 화면에서는 자신에게 오는 ball을 튕겼는데, 게스트 화면에서는 ball의 위치가 호스트와 상이하기 때문에 호스트의 움직임이 어색하게 보일 수 있음)  
결국 위와 같은 문제점을 확인하고나서야 동기화의 중요성을 깨닫고 여러 동기화의 방법을 계속 찾기 시작했습니다.  

<br>

### 1. 일정 주기로 ball 위치 동기화 하기 (기각)

|일정 주기 ball 위치 동기화 도식화|오차 원인|
|:--:|:--:|
|![second](https://github.com/dongtimes2/readme_image/assets/98700888/0ffe7ab8-1ed6-4ec8-ae1e-78586d7abaad)|![second2](https://github.com/dongtimes2/readme_image/assets/98700888/1d3e22b0-dfff-4157-a3b7-9b31b1819ef3)|
|호스트는 일정 간격마다 게스트에게 현재 ball 위치를 전달하여 동기화를 시도한다. <br/> 하지만 통신 과정에서 발생하는 필연적 지연으로 인해 오차가 발생한다|호스트의 ball 위치가 (1,1)인 시점에서 게스트에게 ball의 위치를 전달하였다. <br/> 호스트의 ball 위치는 이후 (2, 2)로 변했지만, 같은 시점에서 게스트는 호스트가 보낸 ball의 위치 정보(1, 1)을 수신했다. <br/> 오차가 발생한 것이다.|

첫 번째 방법은, ball이 벽이나 paddle에 부딪힐 때, 혹은 일정한 시간 간격마다 ball의 위치를 동기화하는 방법입니다.  
즉, 특정 시점에서 호스트 화면에 출력되는 ball의 위치정보를 소켓 통신을 이용하여 게스트에게 전달하도록 하였습니다.  
그러나 이는 좋은 해결 방법이 되지 못했습니다.  
게임 특성상 ball은 클라이언트의 rAF에 의해, 프레임마다 쉴 새 없이 매끄럽게 움직입니다.  
동기화를 진행하는 과정에서 게임 화면을 멈추지 않는 이상, rAF는 계속해서 작동하기 때문에 ball의 위치는 계속해서 변하게 되는데, 호스트가 보내준 동기화의 기준점이 되는 ball의 위치는, 게스트가 데이터를 받는 시점에서는 이미 과거이기 때문에 위치가 서로 맞지 않게 됩니다.  
또한 ball이 움직이는 과정에서 동기화가 진행될 경우 ball의 움직임에 버벅임이 발생하여 UX적으로도 매우 좋지 않았습니다.  
결국 해당 방식은 ball의 위치 오차를 발생시키는 결과만을 낳게 되어 채택하지 않았습니다.  

<br>

### 2. 라운드가 시작될 때마다 ball 위치 동기화 하기 (기각)

||라운드 시작마다 ball 위치 간접 동기화 도식화||
|:--:|:--:|:--:|
|![blank](https://github.com/dongtimes2/readme_image/assets/98700888/dfd52d64-80da-478f-aef3-c7bf7612ad6c)|![third](https://github.com/dongtimes2/readme_image/assets/98700888/141064c3-9bad-41b0-a8f7-52ffda8b7b2f)|![blank](https://github.com/dongtimes2/readme_image/assets/98700888/dfd52d64-80da-478f-aef3-c7bf7612ad6c)|
||호스트는 자신이 득점(실점)하면 이를 서버에게 전달한다.<br/>서버는 클라이언트에게 화면 중앙에 ball을 새롭게 생성하라는 명령을 전달한다.<br/>각각의 클라이언트 화면에는 동시에 ball이 생성되며 움직인다.||

|오차 원인(클라이언트)|오차 원인(네트워크)|
|:--:|:--:|
|![third3](https://github.com/dongtimes2/readme_image/assets/98700888/5a933237-e50a-4dbf-9b27-7cdb69a77d22)|![third2](https://github.com/dongtimes2/readme_image/assets/98700888/6f09b162-e17e-4a3e-9e8a-65ad76e74980)|
|특정 클라이언트 자체적 문제로 인해 렉이 발생할 경우, 두 클라이언트 사이의 ball 좌표는 서로 달라지게 된다.|서버에 의한 ball 생성 명령이 다른 클라이언트보다 조금 늦게 도착할 경우 오차가 발생한다.|

두 번째 방법은, 호스트가 득점(실점)할 때마다 해당 이벤트를 서버에게 전달하여 간접적으로 동기화를 하는 방식입니다.  
PONG 게임은 paddle이 ball을 튕기지 못해 ball이 왼쪽이나 오른쪽 벽에 닿을 경우, ball은 사라지고 유저는 득점(실점)을 하게 되며 한 라운드가 끝나게 됩니다.  
이후 ball은 다시 중앙에서 생성되어 움직이며 다음 라운드가 시작됩니다.  

호스트의 화면을 기준으로 득점(실점) 이벤트가 발생했을 때, 호스트는 이 이벤트를 서버에게 전달하고, 서버는 호스트와 게스트에게 화면 중앙에서 ball을 생성하도록 하는 명령을 보낸다면, 명령을 전달받은 호스트와 게스트는 (특정 유저에게만 네트워트 지연이 발생하지 않은 경우) 동시에 ball을 화면 중앙에 생성하게 되어 간접적으로 ball 위치를 라운드 단위로 동기화 할 수 있게 됩니다.  

해당 방법은 첫 번째 방법에 비해 확실히 동기화 효과가 있었기 때문에 리뉴얼 이전까지 채택하였습니다.  
하지만 ball이 생성된 이후 라운드가 끝나기 전까지는 ball의 위치를 동기화할 방법이 없기 때문에, 클라이언트의 환경 문제로 인해 rAF의 프레임 전환 속도가 느려지거나, 네트워크 요인으로 인해 한 클라이언트가 다른 클라이언트보다 ball이 먼저 생성되는 등, 서로 다른 게임 화면을 보게 될 가능성이 여전히 존재한다는 단점을 가지고 있었습니다.  

<br>

### 3. 호스트가 게스트에게 계속 동기화된 정보 전달하기 (기각)

|호스트가 게스트에게 계속 정보 전달하여 동기화 도식화|오차 원인|
|:--:|:--:|
|![fourth](https://github.com/dongtimes2/readme_image/assets/98700888/4c220292-93d3-4a9f-ad42-ead1d03ca03e)|![fourth2](https://github.com/dongtimes2/readme_image/assets/98700888/62c9b099-a126-4b7a-ad88-f72b228f39a3)|
|호스트는 서버로부터 받은 paddle 위치 정보 및 ball의 움직임 정보를 모두 계산하여 게스트에게 전달한다.<br/>값을 수신받은 게스트는 화면에 단순히 렌더링만 한다.|부드러운 움직임을 위해서는 같은 간격으로 동기화된 정보를 수신받아야 하는데, 다양한 요인으로 인해 불균등한 간격으로 정보가 전달된다.</br>이에 따라 게스트 화면은 움직임이 부드럽지 못하다.|

리뉴얼 이후로 새롭게 도입한 첫 번째 방법으로, rAF 의해 canvas의 프레임이 변할 때마다 계속해서 동기화를 하는 방식입니다.  
호스트는 계속해서 ball의 위치를 계산한 뒤, rAF에 의해 1프레임씩 전환될 때마다 계속해서 게스트에게 ball의 위치 및 서버로부터 받은 paddle의 위치를 전달하며, 게스트는 호스트로부터 받은 값들을 기반으로 화면에 렌더링만 할 뿐, 따로 계산을 수행하지 않는 구조입니다.  
궁극적으로 게스트는 호스트의 화면을 1프레임 단위로 동일하게 볼 수 있다는 장점이 있으며, 이에 따라 거의 완벽한 동기화가 이루어진다는 장점이 있습니다.  

하지만 호스트는 게임 로직 계산과 더불어 최대 1초에 60번씩 게스트에게 소켓 통신을 보내야 하기 때문에, 호스트의 PC 성능에 매우 의존할 수 밖에 없는 구조가 되었으며, 호스트 브라우저가 blur된 경우 rAF이 멈추기 때문에 덩달아 게스트의 화면도 정지되는 단점이 발생했습니다. (호스트가 소켓 통신을 보내지 않기 때문에 게스트는 수신 받은 데이터가 없어 화면이 정지됨)

또한 호스트가 균일한 간격(보통 초당 60번)으로 게스트에게 정보를 전달한다고 보장할 수 없을 뿐더러, 만약 그렇더라도 서버가 이를 다시 게스트에게 균일한 간격으로 응답한다는 보장도 할 수 없었습니다.  
이에 따라 게스트 화면은 균등하지 않은 간격으로 화면이 동기화되기 때문에 요소가 툭툭 끊기는 형태로 움직였으며, 이는 좋지 않은 UX를 남겼습니다.  

https://github.com/dongtimes2/readme_image/assets/98700888/62476c7d-1b24-433a-959d-d859b773ab94

<div align="center" style="max-width: 100%;">
  <p>좌측: 호스트 화면, 우측: 게스트 화면</p>
</div>

결과적으로는 클라이언트는 프레임 단위로 동기화된 게임 화면을 계속해서 수신 받으면서, 끊김을 최대한 줄일 수 있는 방법을 찾아야 했습니다.  
그 결과 마침내 아래와 같은 방법을 도입하게 되었습니다.  

<br>

### 4. 서버로부터 동기화된 정보 전달받기 + 선형 보간법 (채택)

||서버에 의한 동기화 및 선형보간 도식화||
|:--:|:--:|:--:|
|![blank](https://github.com/dongtimes2/readme_image/assets/98700888/dfd52d64-80da-478f-aef3-c7bf7612ad6c)|![fifth](https://github.com/dongtimes2/readme_image/assets/98700888/a3db3489-c025-43a2-ab5d-48f599815a91)|![blank](https://github.com/dongtimes2/readme_image/assets/98700888/dfd52d64-80da-478f-aef3-c7bf7612ad6c)|
||||

클라이언트가 아닌 서버가 게임 로직을 계산하도록 변경하였습니다.  
우선 호스트에게 과하게 의존했던 기존의 문제점을 완전히 해결할 수 있게 되었고, 클라이언트는 서버로부터 가져온 데이터를 화면에 렌더링하는 역할만 담당하기 때문에, 클라이언트가 연산까지 수행했던 기존의 방식보다 부하가 낮아지는 효과를 거둘 수 있었습니다.  
한편 기존의 문제점이었던, 균등하지 않은 간격에 의한 동기화 문제를 해결하기 위해 선형 보간법을 이용하여 문제를 해결하였습니다.  

우선 서버가 클라이언트에게 데이터를 전달할 때, 데이터가 생성된 시간도 함께 전달하도록 하였습니다.  
클라이언트는 서버로부터 받은 데이터를 buffer에 저장한 뒤, buffer에 저장된 맨 앞 두 개의 데이터를 꺼내서 데이터에 들어있는 생성 시간을 비교합니다.  
두 생성시간의 차이가 1000ms / 60 = 16.666ms(60fps)와 동일하다면 보간을 수행하지 않으며, 생성시간의 차이가 16.666보다 작거나 크면 보간을 진행하여 부드러운 움직임을 표현하였습니다.  

보간에 사용된 공식은 다음과 같습니다.

$\text{이전 좌표를 }(x_{1}, \text{ } y_{1}), \text{ 다음 좌표를 } (x_{2},\text{ } y_{2}) \text{ 라고 할 때, } \Delta x = x_{2} - x_{1}, \text{ } \Delta y = y_{2} - y_{1} \text{라 놓는다면}$  

$\text{보간된 } x \text{ 및 } y\text{는 각각 } x = x_{1} + \Delta x \times \alpha, \text{ } y = y_{1} + \Delta y \times \alpha$  

$\text{이때 } \alpha\text{는 다음과 같다.}$  

$\alpha = \frac{\text{다음 좌표 생성 시간} - \text{이전 좌표 생성 시간}}{1000 / 60}$  

<br>

즉 다음 좌표 생성 시간과 이전 좌표 생성 시간의 차가 1000 / 60과 같다면, α는 1이 되기 때문에 보간된 x및 y좌표는 자연스럽게 다음 좌표가 되며,  
α가 1보다 작을 경우(다음 좌표 값이 60fps 속도보다 빠르게 도착했을 경우) 보간된 x 및 y좌표는 이전 좌표와 다음 좌표 사이의 값이 되고,  
α가 1보다 클 경우(다음 좌표 값이 60fps 속도보다 느리게 도착했을 경우) 보간된 x 및 y좌표는 다음 좌표 이후의 값이 됩니다.  

|α가 1보다 작을 경우|α가 1보다 클 경우|
|:--:|:--:|
|![inter1](https://github.com/dongtimes2/readme_image/assets/98700888/9cd479d5-e278-401f-8a31-a34ba03f3b61)|![inter2](https://github.com/dongtimes2/readme_image/assets/98700888/2838bb05-5852-47fa-82bf-9e960e8ff00d)|
|이전 좌표과 다음 좌표 사이에 보간된다.|다음 좌표 이후 위치에 보간된다.|

```ts
// α를 구하는 부분
private getInterpolationAlpha() {
  const previousState = this.gameStateButter[0];
  const currentState = this.gameStateButter[1];

  const timeDiff =
    currentState.lastUpdatedTime - previousState.lastUpdatedTime;
  if (timeDiff === 0) return 0;

  return timeDiff / UPDATE_INTERVAL;
}

// 선형 보간을 수행하는 부분
private handleReconcilation() {
  // (중략)

  const previousState = this.gameStateButter[0];
  const currentState = this.gameStateButter[1];
  const interpolationAlpha = this.getInterpolationAlpha();

  // 이전 좌표, 다음 좌표, α를 이용하여 보간된 위치를 얻는다.
  const ballPosition = Position.fromJson(
    previousState.ball.position,
  ).interpolateXY(
    currentState.ball.position.x,
    currentState.ball.position.y,
    interpolationAlpha,
  );
}

private addToBuffer(gameState: IGameState) {
  this.gameStateButter.push(gameState);
}

private handleGameStateUpdate(gameState: IGameState) {
  this.addToBuffer(gameState);
}

public preload() {
  this.socket.on(EVENT.SEND_GAME_DATA, (gameState: IGameState) => {
    this.handleGameStateUpdate(gameState);
  });
}

public update() {
  this.handleReconcilation();
}
```

구현한 결과의 모습은 아래 영상과 같습니다.  
호스트와 게스트의 화면 결과가 동일할 뿐만 아니라, 기존에 존재하던 버벅임도 해결된 모습을 볼 수 있습니다.  

https://github.com/dongtimes2/readme_image/assets/98700888/ed017f70-96e1-45c6-9097-58e0ad2b90d4

<div align="center" style="max-width: 100%;">
  <p>좌측: 호스트 화면, 우측: 게스트 화면</p>
</div>

<br>

## ball이 wall이나 paddle에 맞았을 때 튕김 구현하기

### 레이아웃 및 구현 소개

paddle 위치 및 ball 사이즈에 대한 레이아웃은 다음과 같습니다.  

<div style="max-width: 100%;">
  <img width="70%" src="https://github.com/dongtimes2/readme_image/assets/98700888/bc26484f-4148-4f32-b166-04aa692ddee7">
</div>

서버가 게임 로직을 계산하는 방식을 도입하기 이전에는 클라이언트가 게임 로직을 계산해야 했었으며, 이에 따라 아래와 같은 코드를 통해 각각의 요소 및 기능을 구현하였습니다.
(현재는 사용되지 않습니다)  

<details>
<summary>ball 선언</summary>
<div>

ball을 나타내기 위한 클래스는 다음과 같이 선언하였습니다.

```ts
export class Ball {
  private x: number;
  private y: number;
  private length: number;

  constructor(x: number, y: number, length: number) {
    this.x = x;
    this.y = y;
    this.length = length;
  }

  public paint(context: CanvasRenderingContext2D) {
    context.fillRect(this.x, this.y, this.length, this.length);
  }
}
```

ball의 움직임을 나타내기 위해, 애니메이션 프레임이 계속해서 변할 때마다 ball의 x좌표 및 y좌표에 특정 delta 값을 계속해서 더하는 식으로 구현하였습니다.  

```ts
const animate = () => {
  window.requestAnimationFrame(animate);

  ballX += ballDeltaX;
  ballY += ballDeltaY;

  const ball = new Ball(ballX, ballY, canvasWidth / 40);
  ball.print(context);
}

animate();
```
</div>
</details>

<details>
<summary>ball이 wall에 맞았을 경우</summary>
<div>

ball은 상단, 혹은 하단의 wall에 맞았을 때 튕겨야 합니다.  
이때 벽에 부딪힌 각도와 수직인 방향으로 튕기도록 구현하였습니다.  

<div style="max-width: 100%;">
  <img width="50%" src="https://github.com/dongtimes2/readme_image/assets/98700888/24a7dabb-b9fd-4b48-a3bd-ff57f764aa5a">
</div>

x축의 진행 방향은 그대로 두고 y축의 진행 방향에 음수를 곱해 반전시킨다면 튕김 효과를 줄 수 있습니다.  
따라서 delta Y에 -1을 곱하였습니다.  

```js
if (ballY + canvasWidth / 40 > canvasHeight || ballY < 0) {
  ballDeltaY *= -1;
}
```
</div>
</details>

<details>
<summary>ball이 paddle 중앙에 맞았을 경우</summary>
<div>

|paddle의 중앙 영역|중앙 영역 레이아웃|
|:--:|:--:|
|![middle](https://github.com/dongtimes2/readme_image/assets/98700888/85066ad1-f01e-4c6b-bf85-6c672ca02944)|![middle_layout](https://github.com/dongtimes2/readme_image/assets/98700888/d3c392c4-5556-4652-a9c8-1f712d185dd6)|

ball이 paddle 중앙에 맞았는지의 여부를 판정하기 위한 조건은 다음과 같습니다.  

&nbsp;  

$$\text{canvas width} / 20 + \text{canvas width} / 80 \leq x \leq \text{canvas width} / 20 + \text{canvas width} / 40$$

$$\text{paddle y좌표 시작점} \leq y \leq \text{paddle y좌표 시작점} + \text{paddle 길이} - \text{canvas width} / 40$$

&nbsp;  
만약 ball의 x좌표와 y좌표가 상기한 조건에 해당할 경우, ball의 x축 진행방향을 반전시켜 튕김 효과를 주었습니다.  
즉 delta X에 -1을 곱하였습니다.  

```js
if (ball의 X좌표 및 Y좌표 === 상기한 조건) {
  ballDeltaX *= -1;
}
```
</div>
</details>

<details>
<summary>ball이 paddle 상단에 맞았을 경우</summary>
<div>

|paddle의 상단 영역|상단 영역 레이아웃|
|:--:|:--:|
|![upper](https://github.com/dongtimes2/readme_image/assets/98700888/5910fad0-9886-406c-a30e-b9c6aa040be9)|![upper_layout](https://github.com/dongtimes2/readme_image/assets/98700888/e7de7ef7-b341-422a-9c53-186b8b545579)|

ball이 paddle 상단에 맞았는지의 여부를 판정하기 위한 조건은 다음과 같습니다.  

&nbsp;  

$$\text{canvas width} / 20 - \text{canvas width} / 80 \leq x \leq \text{canvas width} / 20 + \text{canvas width} / 40$$

$$\text{paddle y좌표 시작점} - \text{canvas width} / 40 \leq y \leq \text{paddle y좌표 시작점}$$

&nbsp;  
만약 ball의 x좌표와 y좌표가 상기한 조건에 해당할 경우, ball의 x축 및 y축 진행방향을 반전시켜 튕김 효과를 주었습니다.  
즉 delta X와 delta Y에 -1을 곱하였습니다.  

```js
if (ball의 X좌표 및 Y좌표 === 상기한 조건) {
  ballDeltaX *= -1;
  ballDeltaY *= -1;
}
```
</div>
</details>

<details>
<summary>ball이 paddle 하단에 맞았을 경우</summary>
<div>

|paddle의 하단 영역|하단 영역 레이아웃|
|:--:|:--:|
|![upper](https://github.com/dongtimes2/readme_image/assets/98700888/dc44a748-17c3-4462-af33-401978e07fcd)|![upper_layout](https://github.com/dongtimes2/readme_image/assets/98700888/b127cd7e-227f-4bfb-81a6-00c6f39e4ddd)|

ball이 paddle 하단에 맞았는지의 여부를 판정하기 위한 조건은 다음과 같습니다.  

&nbsp;  

$$\text{canvas width} / 20 - \text{canvas width} / 80 \leq x \leq \text{canvas width} / 20 + \text{canvas width} / 40$$

$$\text{paddle y좌표 시작점} + \text{paddle 길이} - \text{canvas width} / 40 \leq y \leq \text{paddle y좌표 시작점} + \text{paddle 길이}$$

&nbsp;  
만약 ball의 x좌표와 y좌표가 상기한 조건에 해당할 경우, ball의 x축 및 y축 진행방향을 반전시켜 튕김 효과를 주었습니다.  
즉 delta X와 delta Y에 -1을 곱하였습니다.  

```js
if (ball의 X좌표 및 Y좌표 === 상기한 조건) {
  ballDeltaX *= -1;
  ballDeltaY *= -1;
}
```
</div>
</details>

<br>

### 리뉴얼 이후

기존에는 튕김이라는 물리 효과를 주기 위해 무수히 많은 조건문을 사용할 수밖에 없었습니다.  
로직 특성상 해당 코드는 한눈에 이해하기 어렵게 구성되어 있었기 때문에, 추후 기능 추가 및 디버깅 시 코드를 이해하는 데 긴 시간이 걸릴 것 같다는 생각이 들었습니다.  
리뉴얼 이후 게임 로직에 대한 계산을 서버에게 위임하였을 때, 기존에 작성한 복잡한 코드를 서버에 이식하는 대신 물리엔진(matter.js)을 새롭게 도입하였고, 튕김 처리는 자체 구현이 아닌 물리엔진을 통해 처리하는 방식으로 변경하였습니다.  
그 결과 복잡한 조건문을 많이 줄일 수 있게 되었고, 유지보수하기 편한 코드가 되었습니다.  

```ts
// ball에 대한 물리속성 지정
const options = {
  frictionAir: 0,
  friction: 0,
  frictionStatic: 0,
  restitution: 1,
  mass: 0,
  inertia: Number.MAX_SAFE_INTEGER,
};

// ball이 paddle과 충돌할 때의 이벤트 등록 및 함수
Matter.Events.on(this.engine, 'collisionStart', (event) => {
  const pairs = event.pairs;
  for (let i = 0; i < pairs.length; i++) {
    this.ball.handleCollisionWithPaddle(pairs[i]);
  }
});


public handleCollisionWithPaddle(pair: Matter.Pair) {
  if (this.collisionTwoObjectsVerification(pair, LABEL.HOST_PADDLE)) {
    this.invertVelocityX();
    this.acceleration();
  }

  if (this.collisionTwoObjectsVerification(pair, LABEL.GUEST_PADDLE)) {
    this.invertVelocityX();
    this.acceleration();
  }

  return this;
}
```

<br>

## 유저의 돌발 이벤트 감지하기

게임 특성상 유저가 항상 올바른 행동을 한다는 보장을 할 수 없기 때문에, 돌발 이벤트에 대한 대비를 하였습니다.  

### 연결을 끊은 경우

사이트의 접속을 끊는다면 소켓 연결도 끊기게 되는데, 소켓의 disconnect 이벤트가 발생했을 때 다음과 같은 처리를 하였습니다.  

- PC 브라우저의 접속이 끊어진 경우
  - 연동한 모바일 기기의 소켓 연결도 함께 끊은다음, 모바일 기기에는 더이상 기기를 사용할 수 없다는 문구가 출력되도록 하였습니다.  

- 모바일 기기의 접속이 끊어진 경우
  - PC 브라우저의 화면을 강제로 메인 화면으로 이동시킨다음, 모바일 기기와의 연동 정보를 제거하였습니다.  
  이후 다시 게임에 참여하려면, 설정 화면을 통해 모바일 기기를 다시 연동해야 합니다.

|PC 브라우저의 접속이 끊어진 경우|모바일 기기의 접속이 끊어진 경우|
|:--:|:--:|
|![pc_disconnect](https://github.com/dongtimes2/readme_image/assets/98700888/925b2562-a31b-4736-8685-507a7a04baeb)|![mobile_disconnect](https://github.com/dongtimes2/readme_image/assets/98700888/4dbfd742-2851-41ed-912e-a3e5903cc28b)|
|모바일 기기에는 더이상 기기를 사용할 수 없다는 문구가 출력된다.|PC 브라우저는 강제로 메인 화면으로 이동하며, 모바일 기기와의 연동 정보가 사라진다|

<br>

### 게임 페이지 내 뒤로가기, 혹은 새로고침을 시도할 경우

pushState 및 popState 이벤트를 이용하여 게임 페이지 내에서 뒤로가기 기능을 막았습니다.  
beforeunload 이벤트를 이용하여 새로고침을 시도했을 때, 페이지가 바로 새로고침 되지 않도록 하였습니다.  

```ts
useEffect(() => {
    const handlePreventRefresh = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };

    const handlePreventGoBack = (event: PopStateEvent) => {
      window.history.pushState(null, '', window.location.href);
      event.preventDefault();
    };

    window.history.pushState(null, '', window.location.href);
    window.addEventListener('beforeunload', handlePreventRefresh);
    window.addEventListener('popstate', handlePreventGoBack);

    return () => {
      window.removeEventListener('beforeunload', handlePreventRefresh);
      window.removeEventListener('popstate', handlePreventGoBack);
    };
  }, []);
```

<br>

### 게임 페이지 내 PC 브라우저 창을 닫거나, 모바일 기기의 연결을 끊은 경우

부정행위로 간주하여 상대방에게 게임에서 승리했다는 안내가 전달됨과 함께 게임이 종료됩니다.

<br>

## 모바일 기기 움직임으로 버튼 클릭 및 페이지 이동 구현

### 구현 배경

마우스를 이용하지 않고도, 모바일 기기의 움직임을 통해 버튼을 클릭하거나 페이지를 이동할 수 있는 기능을 구현하였습니다.  

맨 처음 해당 기능을 구현하고자 할 때, 정확히 어떤 움직임을 취해야 하는지를 정할 필요성이 있었습니다.  
가장 먼저 모바일 기기를 허공에서 이리저리 움직이는 방법을 떠올렸습니다.  
허공에서 기기의 위치 변화를 감지하기 위해서는 GPS를 사용해야 하는데, GPS는 특성상 정밀한 움직임을 파악하는데 무리가 있고 실내에서는 인식률이 극히 낮아 사용하기 어렵기 때문에 GPS 기술을 택할 수 없었습니다.  
따라서 기기의 위치를 변화시키는 방법은 사용할 수 없었습니다.  

두 번째 방법은 기기의 기울임 정보를 이용하는 방법입니다.  
거의 모든 휴대폰에는 자이로 센서가 탑재되어 있어 기울임 수치를 정확하게 탐지할 수 있기 때문에, 기울임 정보를 이용하여 움직임 정보를 취하는 방향으로 가닥을 잡았습니다.  

이제 어떻게 기울여서 사용할 것인지에 대한 방식을 정해야 했습니다.  
유저가 직관적으로 사용할 수 있어야 하고, 인식률도 높아야 된다는 제약 조건을 모두 만족시켜야 했습니다.  
고심끝에 채택한 아이디어는 '상', '하', '좌', '우' 각각의 움직임을 조합하는 방식입니다.  
예를 들어 설정 페이지로 이동하고 싶으면 기기를 '좌', 그리고 '상' 방향으로 움직여야 합니다.  

|![main](https://github.com/dongtimes2/readme_image/assets/98700888/06c3300d-cde8-416b-89f7-c6489e55ae0e)|![move](https://github.com/dongtimes2/readme_image/assets/98700888/73cfb458-ccc5-4530-a68b-cef42c16404d)|
|:--:|:--:|
|버튼 옆에 화살표가 표시되어있어, 어느 방향으로 움직임을 취해야 하는지 볼 수 있다|실제 작동 모습|

<br />

### 구현 상세

![alpha_beta_gamma](https://github.com/dongtimes2/readme_image/assets/98700888/bacb30df-a2f8-4680-beb6-b66b7709d9ab)  
Image source: https://newnow.co/me-myself-and-i/  
&nbsp;  
&nbsp;  

기기가 왼쪽, 혹은 오른쪽으로 회전했는지 파악하기 위해서는 α값(z축)을 확인해야 합니다.  
기기가 위, 혹은 아래로 회전했는지 파악하기 위해서는 β값(x축)을 확인해야 합니다.  
이때 기기가 확실하게 상하좌우로 움직였는지 판정하기 위해서는, 현재 지점을 기준으로 α값이나 β값이 지정된 경계값보다 더 많이 변동했는가를 파악해야 됩니다.  

<div align="center" style="max-width: 100%;">
  <img width="30%" src="https://github.com/dongtimes2/readme_image/assets/98700888/cbd9941b-d965-48ea-8f37-6a35a8a8d8c0" alt="direction"/>
</div>

예를 들어 첨부된 그림과 같이, 상하좌우 경계값의 길이가 20이라고 가정해봅시다.  
현재 α값이 0이고, 기기가 움직인 이후의 α값이 30이라면, α값은 30 증가하였는데 이는 경계값인 20보다 크기 때문에 기기가 좌측으로 움직였다고 판정할 수 있습니다.  
현재 β값이 50이고, 기기가 움직인 이후의 β값이 20이라면, β값은 30감소하였는데 이는 경계값인 20보다 크기 때문에 기기가 아래로 움직였다고 판정할 수 있습니다.  

이런 원리로 기기가 어느 방향으로, 어느 순서로 움직였는지 판정할 수 있고, 이 값이 미리 정해진 값과 일치하다면 주어진 동작을 수행하도록 하였습니다.  

```ts
// 입력된 움직임 값이 ⇩⇦ 라면 홈으로 이동하는 코드

useEffect(() => {
  if (motionString === '⇩⇦') {
    navigate(PATH.HOME);
    s_ResetMotionData();
  }
}, [motionString, navigate]);
```

<br />

## AWS 배포
|프론트엔드|백엔드|
|:---:|:---:|
|![front](https://github.com/dongtimes2/readme_image/assets/98700888/86861956-207b-4540-a57a-24aa63396b08)|![back](https://github.com/dongtimes2/readme_image/assets/98700888/b1fb3ee7-d983-4312-94a4-81b6de645d64)|

<br />

## 개발 가이드

### 환경 변수

프로젝트 폴더 root 위치에 .env 파일을 만들고 다음과 같이 환경변수를 설정해주어야 합니다.

#### 프론트엔드

```
VITE_SERVER_URL  // 백엔드 서버 주소입니다.
```

#### 백엔드

```
PORT  // 백엔드 포트 번호입니다. 지정하지 않을 경우 8000번으로 부여됩니다.
CLIENT_URL  // 프론트엔드 주소입니다.
```
### 빌드

#### 프론트엔드

빌드 결과물은 ./build 폴더에 생성됩니다.

```sh
$ npm install
$ npm run build
```

#### 백엔드

빌드 결과물은 ./dist 폴더에 생성됩니다.

```sh
$ npm install
$ npm run build

# 빌드한 결과물 실행
# 전역 환경에 pm2가 설치되어 있어야 올바르게 동작합니다.
$ npm start
```

<br />

## node version

node.js: 18.17.1(LTS), npm: 9.6.7 버전으로 개발되었습니다.  
.nvmrc 파일이 포함되어 있으므로, nvm이 설치되어있는 환경이라면 따로 버전을 설정할 필요가 없습니다.  
