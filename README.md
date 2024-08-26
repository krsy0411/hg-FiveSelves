# `다섯가지자아` - `주르르`

해커그라운드 해커톤에 참여하는 `다섯가지자아` 팀의 `주르르`입니다.

## 참고 문서

> 아래 두 링크는 해커톤에서 앱을 개발하면서 참고할 만한 문서들입니다. 이 문서들에서 언급한 서비스 이외에도 더 많은 서비스들이 PaaS, SaaS, 서버리스 형태로 제공되니 참고하세요.

- [순한맛](./REFERENCES_BASIC.md)
- [매운맛](./REFERENCES_ADVANCED.md)

## 제품/서비스 소개

<!-- 아래 링크는 지우지 마세요 -->
[제품/서비스 소개 보기](TOPIC.md)
<!-- 위 링크는 지우지 마세요 -->

## 오픈 소스 라이센스

<!-- 아래 링크는 지우지 마세요 -->
[오픈소스 라이센스 보기](./LICENSE)
<!-- 위 링크는 지우지 마세요 -->

## 설치 방법

> **아래 제공하는 설치 방법을 통해 심사위원단이 여러분의 제품/서비스를 실제 Microsoft 애저 클라우드에 배포하고 설치할 수 있어야 합니다. 만약 아래 설치 방법대로 따라해서 배포 및 설치가 되지 않을 경우 본선에 진출할 수 없습니다.**

### 사전 준비 사항

> **여러분의 제품/서비스를 Microsoft 애저 클라우드에 배포하기 위해 사전에 필요한 준비 사항들을 적어주세요.**

## 시작하기 (Client)

### Step1. <a href="https://portal.azure.com">에저포탈</a>에 접속한다.

### Step2. 가지고 있는 계정으로 로그인 해준다.
<img width="468" alt="image" src="https://github.com/user-attachments/assets/d7933154-23aa-47b6-bfb9-4f0de02d465a">

### Step3. 리소스그룹 클릭
<img width="540" alt="스크린샷 2024-08-26 오전 9 32 00" src="https://github.com/user-attachments/assets/bc40d74d-63fb-4aca-9e10-77e6d20ffc36">

### Step4. 자신이 속한 그룹을 검색하고 들어가준다.
<img width="1707" alt="스크린샷 2024-08-26 오전 9 34 19" src="https://github.com/user-attachments/assets/a13fc512-9eb3-46bf-bfea-a0c23b1e7dcf">

### Step5. 새로운 서비스를 만들어준다.
<img width="1706" alt="스크린샷 2024-08-26 오전 9 35 51" src="https://github.com/user-attachments/assets/c0e9dd74-e457-4ab3-8125-fa6c615ef211">

### Step6. `Static Web App`을 검색 후 정적 웹앱을 서비스를 만들어준다.
<img width="1440" alt="스크린샷 2024-08-26 오후 1 01 35" src="https://github.com/user-attachments/assets/4be7ac9c-41f6-46e3-b87b-51673849f72c">
<img width="1440" alt="스크린샷 2024-08-26 오후 1 02 51" src="https://github.com/user-attachments/assets/84e5f213-c42e-4a1b-b344-9ee8af4d8fe5">



### Step7. 웹앱 설정을 해준다.
<img width="400" alt="스크린샷 2024-08-26 오전 9 40 28" src="https://github.com/user-attachments/assets/f5552959-2360-400e-aeec-15b67baeaadf">

<img width="465" alt="스크린샷 2024-08-26 오전 9 41 43" src="https://github.com/user-attachments/assets/91856a93-8b9f-4c24-b7ac-502c75509c47">

먼저 리소스그룹을 선택해준다. `Step3`에서 선택한 리소스그룹과 같은 그룹을 선택해주면 된다.

<br>
<img width="801" alt="스크린샷 2024-08-26 오후 1 06 45" src="https://github.com/user-attachments/assets/6bb2d7f0-9cd2-4f14-9e9d-20836192362f">

이름을 입력해준다.

<img width="1710" alt="스크린샷 2024-08-26 오후 4 57 26" src="https://github.com/user-attachments/assets/77adf1bb-9c63-4bfa-879f-2e359fee5d8b">

그다음 <a href="https://github.com/hackersground-kr/hg-FiveSelves">링크</a>에 들어가서 깃허브 포크를 받아준다.

<img width="757" alt="스크린샷 2024-08-26 오후 4 58 19" src="https://github.com/user-attachments/assets/492a062d-4bbc-4b83-a3f5-bb02f788e916">

그리고 이름을 설정해준다.

<img width="400" alt="스크린샷 2024-08-26 오전 9 46 07" src="https://github.com/user-attachments/assets/f78c1367-8e46-40fd-a776-68de95cd241d">

여기서 자신의 이름가 위에서 설정한 포크한 레포지토리 이름을 선택해준다.

#### 중요!
<img width="251" alt="스크린샷 2024-08-26 오후 5 43 06" src="https://github.com/user-attachments/assets/635a0b10-25b6-469e-b580-1e55429d00fa">

client 브랜치를 선택해주어야한다.

조직 : {자기 GitHub ID}
레포지토리 : {바꾸지 않았다면 hg-FiveSelves 포크할때 바꿔다면 바꾼 레포 이름}
브랜치 : {client}

<img width="413" alt="스크린샷 2024-08-26 오전 9 48 24" src="https://github.com/user-attachments/assets/0b864fec-0c55-428c-9a9c-7cf244a189aa">

검토 + 만들기를 클릭해서 검토를 먼저해준다.

<img width="400" alt="스크린샷 2024-08-26 오전 9 48 57" src="https://github.com/user-attachments/assets/2d16ca58-ba82-494e-990a-3061519489f2">

만들기를 클릭해서 서비스를 만들어준다.

<img width="723" alt="스크린샷 2024-08-26 오전 9 49 54" src="https://github.com/user-attachments/assets/2ae8f81c-2651-452d-89b2-8bb5d74811d7">

조금만 기다려주면

<img width="1710" alt="스크린샷 2024-08-26 오전 9 51 06" src="https://github.com/user-attachments/assets/ec408ed9-4bc2-4397-bbfa-16f573465cd7">

배포가 완료된다.

### Step8. 내 서비스 확인 및 접속해보기

<img width="949" alt="스크린샷 2024-08-26 오전 9 51 59" src="https://github.com/user-attachments/assets/9e9d13a3-b5e8-4dd3-b4ea-e86c14996ff7">

리소스로 이동을 클릭

<img width="1710" alt="스크린샷 2024-08-26 오전 9 53 08" src="https://github.com/user-attachments/assets/0dc420f9-fefd-43fd-8584-6982f40612b7">

URL 부분을 확인하면 배포 URL을 확인할 수 있다.

<img width="1041" alt="스크린샷 2024-08-26 오전 9 53 52" src="https://github.com/user-attachments/assets/197ce526-5399-4705-ad65-74bccf6bb3e1">

배포는 끝이다

### 번외
<img width="1710" alt="스크린샷 2024-08-26 오전 9 56 58" src="https://github.com/user-attachments/assets/f50d4521-f44a-4e73-82cd-1d4c84347391">

깃허브에 push를 하게되면 자동으로 CI/CD가 작동하는 것을 확인할 수 있다.

