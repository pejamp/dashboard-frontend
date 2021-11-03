import { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { UsersProvider } from './hooks/useUsers';
import Routes from './routes';
import history from './routes/history';

import './styles/global.scss';

export function App() {
  useEffect(() => {
    const userOn = localStorage.getItem('admin')
  
    if (userOn) {
      history.push('/dashboard');
    }
  }, []);

  return (
    <UsersProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </UsersProvider>
  );
}

