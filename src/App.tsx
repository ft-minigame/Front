import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { SnakeGame, Home, Index, GameSelect, Rank } from './pages';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Home />} />
        <Route path="/gameselect" element={<GameSelect />} />
        <Route path="/snakegame" element={<SnakeGame />} />
        <Route path="/rank" element={<Rank />} />
      </Routes>
    </Router>
  );
}

export default App;
