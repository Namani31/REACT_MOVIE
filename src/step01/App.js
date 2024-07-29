// 1. 로딩 페이지
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  // 상태 변수 설정
  const [isLoading, setIsLoading] = useState(true);
  const [loadCounter, setLoadCounter] = useState(0);
  useEffect(
    () => {

      function IncreaseCounter() {
        let _counter = loadCounter;
        _counter += 1;
    
        // 카운터 값이 10 이상이면 isLoading` 타이머 종료
        if(_counter > 10) {
          setIsLoading(false);
          clearInterval(loadTimer);
        }
        setLoadCounter(
          _counter
        );
      }
    
      // 타이머로 loadCounter 값을 1씩 증가
      const loadTimer = setInterval(
        IncreaseCounter, 1000
      );
      return () => {
        clearInterval(loadTimer);
      }

    }, [loadCounter]
  );

  return (
    <div>
      {isLoading ? `Loading... ${loadCounter}`: 'Loaded' }
    </div>
  );
}

export default App;
