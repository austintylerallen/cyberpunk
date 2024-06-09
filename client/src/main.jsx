import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CyberpunkPage from './components/Cyberpunk/CyberpunkPage';
// import SvgBackground from './components/SvgBackground/SvgBackground';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<CyberpunkPage />} />
    </Routes>
  </Router>
);
