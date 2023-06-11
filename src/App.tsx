import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { SnakeGame, Home, Index, GameSelect, RankAll, RankMe, RankCoal, Login } from './pages';
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
        <Route path="/rankall" element={<RankAll />} />
        <Route path="/rankme" element={<RankMe />} />
        <Route path="/rankcoal" element={<RankCoal />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
