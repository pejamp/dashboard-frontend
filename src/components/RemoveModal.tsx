import styles from '../styles/components/RemoveModal.module.scss';

interface ModalProps {
  userToDeleted: string;
  onCloseModal: (value: boolean) => void;
}

export function RemoveModal({ onCloseModal, userToDeleted }: ModalProps) {

  function handleRemoveUser() {

    console.log('elemento a ser removido da lista: ', userToDeleted)
    onCloseModal(false);
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.xButton}>
          <button onClick={() => onCloseModal(false)}>X</button>
        </div>

        <header>Remover usuário</header>

        <p>
          Deseja remover o usuário <br /> 
          {userToDeleted}?
        </p>

        <div className={styles.buttons}>
          <button type="button" onClick={handleRemoveUser}>
            Remover usuário
          </button>
          <button className={styles.cancel} type="button" onClick={() => onCloseModal(false)}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}