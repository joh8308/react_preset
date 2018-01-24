# React-Preset @john


#### 필수 모듈


###### react - react 컴포넌트 생성할 때 사용(지우면 망함)

###### react-router - URL에 따라 다른 컴포넌트 렌더링에 사용, 현재 4.2.0이 최신인데 문법도 맘에 안드고 잔오류도 많아서 3.2.0으로 세팅함 4.2.0이 더맘에 드는 사람은 업데이트해서 사용하면 됨(딴거 좋은거 찾으면 바꿔도 상관없음)

###### react-dom - html 파일의 emlementId 를 잡아와서 그곳에 react main component를 렌더링할 때 사용하고 태그의 reference id를 잡아올때도 사용함(지우면 망함)

###### react-elmish-example - mac 환경일 경우 react webpack 을 커스터마이징하려면 사용해야함(mac일 경우 지우면 망함)


#### 실행법

###### npm install 후 npm start 하면 됨

###### yarn.lock파일은 위에 써있는 필수 모듈 몇개 안깔릴 수 있음 npm 으로 깐거라

#### 추신

##### 이 repository는 오직 뷰만 제공함. 서버는 따로 코딩해야함. 서버 띄울때 node express 서버나 meteor 서버를 포트 listen 정도까지만 하고 뷰쪽에서 쳐다보게만 설정하면됨
