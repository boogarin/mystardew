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
      }, [userData]);

    return (
        <div className="flex bg-[url('/assets/bg-light.png')] dark:bg-[url('/assets/bg-dark.png')] bg-cover bg-center min-h-screen justify-center">
            <div className="flex flex-col p-20">
                <input
                value={nome}
                placeholder="Nome"
                onChange={(e) => setNome(e.target.value)}/>
                <button onClick={handleSubmit}>
                    Salvar
                </button>
                <button onClick={exportDataAsCode}>Exportar como Código</button>
                {encodedCode && <p>Código Base64: {encodedCode}</p>}
                <input
                placeholder="Cole o código para importar"
                onBlur={(e) => handleImport(e.target.value)}
                />
                <div>
                    <h2>Dados Atuais:</h2>
                    <pre>{JSON.stringify(userData, null, 2)}</pre>
                </div>
            </div>
        </div>
        
    )
}