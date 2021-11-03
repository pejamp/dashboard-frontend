import { FormEvent, useState } from 'react';
import logoImg from '../assets/logo.svg';
import history from '../routes/history';
import styles from '../styles/pages/Login.module.scss';

export function Login() {
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [checked, setChecked] = useState(false);

  function handleLogin(event: FormEvent) {
    event.preventDefault();
    const admin = { adminEmail, adminPassword };

    if (!adminEmail) {
      return;
    }

    if (!adminPassword || Number(adminPassword.length) < 6) {
      return;
    }

    if (checked) {
      localStorage.setItem('admin', JSON.stringify(admin));
    }

    history.push('/dashboard');
  }

  return (
    <div className={styles.container}>
      <div className={styles.formModal}>
        <img src={logoImg} alt="" />

        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input 
            className={styles.inputText} 
            id="email" 
            type="email" 
            name="email" 
            placeholder="digite seu email..." 
            value={adminEmail}
            onChange={event => setAdminEmail(event.target.value)}
          />
          
          <label htmlFor="password">Senha</label>
          <input 
            className={styles.inputText} 
            id="password" 
            type="password" 
            name="password" 
            placeholder="digite sua senha..." 
            value={adminPassword}
            onChange={event => setAdminPassword(event.target.value)}
          />

          <input 
            type="checkbox" 
            checked={checked}
            onChange={event => setChecked(event.target.checked)}
          />
          <span className="checkmark">permanecer logado</span>
  
          <button 
            className={ !adminEmail || !adminPassword ? styles.disabled : '' } 
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}