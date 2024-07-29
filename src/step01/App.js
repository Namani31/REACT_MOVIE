// 1. 로딩 페이지
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  // 상태 변수 설정
  const [isLoading, setIsLoading] = useState(true);
  const [loadCounter, setLoadCounter] = useState(0);

  return (
    <div>
      {isLoading ? `Loading... ${loadCounter}`: 'Loaded' }
    </div>
  );
}

export default App;
