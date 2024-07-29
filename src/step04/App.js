// 2. JSON 파일 읽어오기
import './App.css';
import { useState, useEffect } from 'react';
//npm install axios
// 목록주소
// https://yts.mx/api/v2/list_movies.json
// https://yts-proxy.now.sh/list_movies.json
// 상세보기주소
// https://yts.mx/api/v2/movie_details.json?movie_id=11
// https://yts-proxy.now.sh/movie_detail.json?movie_id=11

function App() {
  // 상태 변수 설정
  const [isLoading, setIsLoading] = useState(true);
  const [loadCounter, setLoadCounter] = useState(0);
  useEffect(
    () => {
      console.log('useEffect 발생');
      axios.get('https://yts-proxy.now.sh/list_movies.json');
      
    }, [loadCounter]
  );

  return (
    <div>
      {isLoading ? `Loading... ${loadCounter}`: 'Loaded' }
    </div>
  );
}

export default App;
