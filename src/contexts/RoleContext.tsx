import React, { createContext, useContext, useState } from 'react';

export type UserRole = 'account_manager' | 'finance' | 'ceo';

interface RoleContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (v: boolean) => void;
}

const RoleContext = createContext<RoleContextType>({
  role: 'account_manager',
  setRole: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const useRole = () => useContext(RoleContext);

export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>('account_manager');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <RoleContext.Provider value={{ role, setRole, isLoggedIn, setIsLoggedIn }}>
      {children}
    </RoleContext.Provider>
  );
};
