import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { SnakeGame, Home, Index, GameSelect } from './pages';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import React from 'react';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Home />} />
        <Route path="/gameselect" element={<GameSelect />} />
        <Route path="/snakegame" element={<SnakeGame />} />
      </Routes>
    </Router>
  );
}

export default App;
