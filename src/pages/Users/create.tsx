import { FormEvent, useState } from "react";
import history from "../../routes/history";

import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Sidebar } from "../../components/Sidebar";

import circleArrowImg from '../../assets/circleArrow.svg';

import styles from '../../styles/pages/Create.module.scss';
import { useUsers } from "../../hooks/useUsers";

type SelectProps = {
  value: string;
  label: string;
}

const roles: SelectProps[] = [
  { value: 'Back-end', label: 'Back-end' },
  { value: 'Front-end', label: 'Front-end' },
  { value: 'UI/UX Designer', label: 'UI/UX Designer' },
  { value: 'DevOps', label: 'DevOps' },
];

const states: SelectProps[] = [
  { value: 'Ativo', label: 'Ativo' },
  { value: 'Inativo', label: 'Inativo' },
  { value: 'Férias', label: 'Férias' },
];

export function CreateUser() {
  const { createUser } = useUsers();

  const [name, setName] = useState('');
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [birth, setBirth] = useState(String(new Date()));

  
  async function handleCreateNewUser(event: FormEvent) {
    event.preventDefault();

    if (!name) {
      return(alert('Nome do usuário não preenchido!'));
    } else if (!role) {
      return(alert('Cargo não selecionado!'));
    } else if (!status) {
      return(alert('Status não selecionado!'));
    } else if (!birth) {
      return(alert('Data de nascimento não preenchida!'));
    } else {
      await createUser({
        name,
        role,
        status,
        birth,
      });
    };
    
    history.push('/users');
  }

  function handleBackPage() {
    history.push('/users');
  }

  return (
    <div className={styles.container}>
      <Sidebar />

      <div>
        <div className={styles.header}>
          <a onClick={handleBackPage}>
            <img src={circleArrowImg} alt="button to back" />
          </a>
          <h2>Novo usuário</h2>
        </div>

        
        <form onSubmit={handleCreateNewUser} className={styles.formContainer}>
          <div className={styles.formInputs}>
            <div>
              <label htmlFor="name">Nome do usuário</label>
              <input 
                className={styles.inputText} 
                id="name" 
                type="text" 
                name="name" 
                placeholder="nome do usuário"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </div>

            <div>
              <label htmlFor="roles">Cargo</label>
              <Select 
                className={styles.inputSelect} 
                id="roles" 
                isClearable={true} 
                placeholder="selecione"
                value={roles.find(obj => obj.value === role)}
                options={roles} 
                onChange={(event) => setRole(String(event?.value))}
              />
            </div>
          </div>

          <div className={styles.formInputs}>
            <div>
              <label htmlFor="status">Status</label>
              <Select 
                className={styles.inputSelect} 
                id="status" 
                isClearable={true} 
                placeholder="selecione"
                value={states.find(obj => obj.value === status)}
                options={states} 
                onChange={(event) => setStatus(String(event?.value))}
              />
            </div>
            
            <div>
              <label htmlFor="roles">Data de nascimento</label>
              <DatePicker
                className={styles.inputText} 
                selected={new Date(birth)}
                onChange={(date: Date) => setBirth(String(date))}
                placeholderText="selecione"
                dateFormat="dd/MM/yyyy" 
              />
            </div>
          </div>

          <div className={styles.formButtons}>
            <button  type="submit">
              Criar usuário
            </button>
            <button onClick={handleBackPage} className={styles.cancel} type="button">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}