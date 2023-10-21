import { createContext } from "react";

interface LanguageContextInterface {
    language: string;
    selectLanguage: (language: string | any ) => void;
}

const LanguageContext = createContext<LanguageContextInterface>({
    language: '',
    selectLanguage: () => {}
});

export default LanguageContext;