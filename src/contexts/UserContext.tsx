import { createContext, useContext, useState, ReactNode } from "react";

type User = {
  name: string;
  bio: string;
  avatar: string;
};

type UserContextType = {
  user: User[];
  setUser: (user: User[]) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User[]>([]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUsuario deve ser usado dentro de um UsuarioProvider");
  }
  return context;
};