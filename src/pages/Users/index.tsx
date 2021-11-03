import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";

import ReactTooltip from "react-tooltip";

import styles from '../../styles/pages/Users.module.scss';

import editImg from '../../assets/edit.svg';
import deleteImg from '../../assets/delete.svg';
import { useUsers } from "../../hooks/useUsers";
import { useState } from "react";
import { RemoveModal } from "../../components/RemoveModal";
import { EmptyPage } from "../../components/EmptyPage";
import history from "../../routes/history";

export default function Users() {
  const { users } = useUsers();
  const [openModal, setOpenModal] = useState(false);
  const [userSelected, setUserSelected] = useState('');

  function handleRemoveUser(user: string) {
    
    setOpenModal(true)
    setUserSelected(user);
  }

  function handleCreateUser() {
    history.push('/users/create');
  }
  
  return (
    <div className={styles.container}>
      <Sidebar />

      <div>
        <div className={styles.header}>
          <h2>Usuários</h2>
          <a onClick={handleCreateUser}>novo usuário</a>
        </div>

        <div className={styles.tableContainer}>
          { users.length === 0 
          ? <EmptyPage />
          : <>
            <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.nameRole}>NOME E CARGO</th>
                    <th>STATUS</th>
                    <th>DATA DE NASCIMENTO</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td className={styles.nameRole}>
                        <div>
                          <p className={styles.name}>{user.name}</p>
                          <p>{user.role}</p>
                        </div>
                      </td>
                      <td className={styles.status}>
                        <span 
                          className={`${user.status === 'Ativo' ? styles.greenBadge : ''}
                           ${user.status === 'Inativo' ? styles.redBadge : ''}`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td>
                        {new Intl.DateTimeFormat('pt-BR').format(
                          new Date(user.birth)
                        )}
                      </td>
                      <td className={styles.icons}>
                        <button onClick={handleCreateUser} type="button" data-for="edit" data-tip='Editar'>
                          <img src={editImg} alt="edit button" />
                        </button>
                        <ReactTooltip 
                          id='edit' 
                          textColor='#fff' 
                          backgroundColor='#4285f4' 
                          effect='solid' 
                          place="left" 
                        />
                        <button 
                          type="button" 
                          onClick={() => handleRemoveUser(user.name)} 
                          data-for="delete" 
                          data-tip='Remover'
                        >
                          <img src={deleteImg} alt="delete button" />
                        </button>
                        <ReactTooltip 
                          id='delete' 
                          textColor='#fff' 
                          backgroundColor='#dc4646' 
                          effect='solid' 
                          place="left" 
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <Pagination />
            </> }
        </div>
      </div>

      {openModal && <RemoveModal onCloseModal={setOpenModal} userToDeleted={userSelected} />}
    </div>
  );
}