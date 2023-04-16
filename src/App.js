import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import Title from './components/title';
import Index from './components/Index/Index';
import Game from './components/game';
import GameSelect from './components/gameselect/gameselect';

function App() {
  return (
    <Router theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/index" element={<Index />} />
        <Route path="/game" element={<Game />} />
        <Route path="/gameselect" element={<GameSelect />} />
      </Routes>
    </Router>
  );
}

export default App;
