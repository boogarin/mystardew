"use client"

import { cache, createContext, useContext, useEffect, useState } from "react";
import { Base64 } from 'js-base64';

interface UserData {
    nome: string;
}

interface UserDataContextType {
    userData: UserData;
    setUserData: (data: UserData) => void;
    encodedCode: string;
    exportDataAsCode: () => void;
    importDataFromCode: (code: string) => void;
  }

  interface UserDataProviderProps {
    children: React.ReactNode;
  }

const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

const UserDataProvider: React.FC<UserDataProviderProps> = ({ children }) => {
    const [userData, setUserData] = useState<UserData>({ nome: ''});
    const [encodedCode, setEncodedCode] = useState<string>('');
  
    const exportDataAsCode = () => {
      const jsonData = JSON.stringify(userData);
      const encoded = Base64.encode(jsonData);
      setEncodedCode(encoded);
      localStorage.setItem("base64", encoded)
    };
  
    const importDataFromCode = (code: string) => {
        const cache = JSON.stringify(localStorage.getItem("base64"))
          const decodedString = Base64.decode(code);
          const parsedData = JSON.parse(decodedString);
          setUserData(parsedData);
    };

    useEffect(() => {
      const cacheEffect = JSON.stringify(localStorage.getItem("base64"))

      if (cacheEffect !== null) {
        importDataFromCode(cacheEffect)
      }
    },[])
  
    return (
      <UserDataContext.Provider
        value={{
          userData,
          setUserData,
          encodedCode,
          exportDataAsCode,
          importDataFromCode,
        }}
      >
        {children}
      </UserDataContext.Provider>
    );
  };

  const useUserDataContext = (): UserDataContextType => {
    const context = useContext(UserDataContext);
    if (!context) {
      throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
  };

export {UserDataProvider, useUserDataContext};