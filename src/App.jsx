import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import HCMThoughts from './pages/HCMThoughts';
import CorruptionRisks from './pages/CorruptionRisks';
import Challenges from './pages/Challenges';
import Interactive from './pages/Interactive';
import AIUsage from './pages/AIUsage';
import Context from './pages/Context';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="tu-tuong" element={<HCMThoughts />} />
          <Route path="nguy-co" element={<CorruptionRisks />} />
          <Route path="thach-thuc" element={<Challenges />} />
          <Route path="tuong-tac" element={<Interactive />} />
          <Route path="ai-usage" element={<AIUsage />} />
          <Route path="boi-canh" element={<Context />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;