import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { Game, Home, Index, GameSelect } from './pages';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/gameselect" element={<GameSelect />} />
      </Routes>
    </Router>
  );
}

export default App;
