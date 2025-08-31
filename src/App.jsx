import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { login, logout } from './store/authSlice';
import { Header, Footer } from './components/index';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen bg-bg-dark text-text transition-colors duration-300">
      <Header />
      <main className="pt-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : (
    <div className="min-h-screen bg-bg-dark text-text flex items-center justify-center">
      <div className="text-accent font-medium animate-pulse">Loading...</div>
    </div>
  );
}

export default App;
