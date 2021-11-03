import styles from '../styles/components/Pagination.module.scss';
import arrowIconImg from '../assets/arrow.svg';

export function Pagination() {
  return (
    <div className={styles.container}>
      <div>
        Page <strong>1</strong> of <strong>70</strong> results
      </div>
      
      <div className={styles.pageButtons}>
        <button>
          <img src={arrowIconImg} alt="arrow button" />
        </button>
        <button className={styles.disabled}>
          1
        </button>
        <button>2</button>
        <button>...</button>
        <button>70</button>
        <button>
          <img src={arrowIconImg} alt="arrow button" />
        </button>
      </div>
    </div>
  );
}