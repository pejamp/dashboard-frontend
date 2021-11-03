import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface User {
  id: number;
  name: string;
  role: string,
  status: string;
  birth: string;
}

type UserInput = Omit<User, 'id'>;

interface UsersProviderProps {
  children: ReactNode;
}

interface UsersContextData {
  users: User[];
  createUser: (user: UserInput) => Promise<void>;
}

const UsersContext = createContext<UsersContextData>({} as UsersContextData);

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get('users')
      .then(response => setUsers(response.data.users))
  }, []);

  async function createUser(userInput: UserInput) {
    const response = await api.post('/users', userInput);
    const { user } = response.data;

    setUsers([...users, user]);
  }

  return (
    <UsersContext.Provider value={{ users, createUser }}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);

  return context;
}