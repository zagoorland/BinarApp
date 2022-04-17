import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import UserProvider from './contexts/UserContext';
import Game from './pages/Game';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </UserProvider>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
