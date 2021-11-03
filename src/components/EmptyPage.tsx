import smilefaceImg from '../assets/smileface.png';
import styles from '../styles/components/EmptyPage.module.scss';

export function EmptyPage() {
  return (
    <div className={styles.container}>
      <img src={smilefaceImg} alt="smile face" />

      <strong>Ops!</strong>

      <p>
        A tabela não possui <br />
        dados a serem exibidos.
      </p>
    </div>
  );
}