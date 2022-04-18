import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import UserProvider from './contexts/UserContext';
import Game from './pages/Game';
import Login from './pages/Login';
import Results from './pages/Results';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/game" element={<Game />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </UserProvider>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
