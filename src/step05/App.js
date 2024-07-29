// 3. Router 적용
import './App.css';

function App() {
  
  return (
    <div>
      {isLoading ? `Loading... ${loadCounter}`: displayMovies() }
    </div>
  );
}

export default App;
