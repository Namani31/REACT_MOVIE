// 3. Router 적용
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Detail } from './routes/Detail';
import { Navigation } from './components/Navigation';

function App() {
  return (
    /*
      BrowserRouter: URL 관리하고 라우트 설정
                      해당 경로에 맞는 컴포넌트 렌더링
                      경로 변경 시, 전체 페이지를 새로 고침 하지 않아도
                      다른 컴포넌트를 렌더링 할 수 있음

    */<BrowserRouter>
      {/* Navigation: 사용자에게 네비게이션 메뉴 제공, 링크, 버튼 포함, 헤더나 사이드바에 위치 */}
      <Navigation/>
      {/* Routes: 여러 개의 `Route` 컴포넌트를 그룹화하여 라우팅 설정 정의 */}
      <Routes>
      {/* Route: path와 그 경로에 대응하는 컴포넌트 (element) 설정, 사용자가 특정 경로로 이동할 때 해당 컴포넌트 렌더링함 
          `Routes`와 `Route`의 차이: Routes는 컨테이너 역할, Route는 해당 경로에 매핑된 컴포넌트 정의하는 데 사용
          exact: path 속성에 넣은 경로값이 정확히 URL의 경로값과 일치할 때만 렌더링을 함 (README 참고) 
      */}
      <Route path="/REACT_MOVIE" exact={true} element={<Home/>}/>/        
      <Route path="/" exact={true} element={<Home/>}/>
        <Route path="/about" exact={true} element={<About/>}/>
        <Route path="/detail" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
