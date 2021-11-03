import styles from '../styles/components/Sidebar.module.scss';
import logoImg from '../assets/logo.svg';
import dashboardImg from '../assets/dashboard.svg';
import usersImg from '../assets/users.svg';
import profileImg from '../assets/perfil.jpg';
import history from '../routes/history';

export function Sidebar() {
  const { pathname } = history.location;

  function handleChangeRoute(path: string) {
    history.push(path);
  }

  function handleLogOut() {

    localStorage.removeItem('admin');

    history.push('/');
  }

  return (
    <aside className={styles.container}>
      <div className={styles.content}>
        <div>
          <img className={styles.logo} src={logoImg} alt="logo" />

          <div className={`${styles.navigation} ${pathname === '/dashboard' ? styles.activatedAsideButton : ''}`}>
            <a onClick={() => handleChangeRoute('/dashboard')}>
              <img src={dashboardImg} alt="icon" />
              Dashboard
            </a>
          </div>
          <div className={`${styles.navigation} ${pathname === '/users' ? styles.activatedAsideButton : ''}`}>
            <a onClick={() => handleChangeRoute('/users')}>
              <img src={usersImg} alt="icon" />
              Usuários
            </a>
          </div>
        </div>

        <div className={styles.profile}>
          <img src={profileImg} alt="foto de perfil" />
          <div>
            <p>Nome</p>
            <a onClick={handleLogOut}>Sair</a>
          </div>
        </div>
      </div>
    </aside>
  );
}