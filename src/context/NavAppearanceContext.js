'use client';
import { createContext, useContext, useState } from 'react';

const NavAppearanceContext = createContext();

export function NavAppearanceProvider({ children }) {
  const [isLight, setIsLight] = useState(false); // true when nav should be light

  return (
    <NavAppearanceContext.Provider value={{ isLight, setIsLight }}>
      {children}
    </NavAppearanceContext.Provider>
  );
}

export const useNavAppearance = () => useContext(NavAppearanceContext);
