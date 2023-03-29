import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import Start from './components/start';

function App() {
  return (
    <Router theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Start />} />
      </Routes>
    </Router>
  );
}

export default App;
