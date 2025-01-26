"use client"

import { useEffect, useState } from "react";
import { useUserDataContext } from "../providers/contexts/UserDataContext";

export default function SV() {
    const { userData, setUserData, exportDataAsCode, importDataFromCode, encodedCode } = useUserDataContext();
    const [nome, setNome] = useState("");

    const handleSubmit = () => {
        setUserData({ nome });
    };

    const handleImport = (code: string) => {
        importDataFromCode(code);
    };

    useEffect(() => {
        if (userData.nome) {
          exportDataAsCode(); // Chama a exportação assim que userData mudar
        }
      }, [userData, exportDataAsCode]);

    return (
        <div className="flex bg-[url('/assets/bg-light.png')] dark:bg-[url('/assets/bg-dark.png')] bg-cover bg-center min-h-screen justify-center">
            
        </div>
        
    )
}