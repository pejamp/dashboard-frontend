import { Sidebar } from '../components/Sidebar';
import styles from '../styles/pages/Dashboard.module.scss';
import perfilImg from '../assets/perfil.jpg';
import groupedChartImg from '../assets/grouped-bar-chart.png';
import lineChartImg from '../assets/line-chart.png';

export function Dashboard() {
  return (
    <div className={styles.container}>
      <Sidebar />

      <div>
        <div className={styles.dashboardProfile}>
          <div className={styles.background}></div>
          
          <div className={styles.info}>
            <img src={perfilImg} alt="foto de perfil" />
            <p>Bom dia</p>
            <p>Nome do Usuário</p>
          </div>
        </div>
        <div className={styles.dashboardTables}>
          <div>
            <p>Média semanal</p>
            <div className={styles.table}>
              <img src={lineChartImg} alt="Alcance  dos clientes" />
            </div>
          </div>
          <div>
            <p>Alcance  dos clientes</p>
            <div className={styles.table}>
              <img src={groupedChartImg} alt="Média semanal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}