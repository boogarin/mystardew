"use client"

import { ReactNode, useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import LanguageContext from "@/providers/context/LanguageContext";
import browserLang from 'browser-lang';

import English from "../../lang/en-US.json"
import Portuguese from "../../lang/pt-BR.json"

const defaultLocale = "en-US";

const region = typeof localStorage !== 'undefined' && localStorage.getItem('language') || defaultLocale;

let lang: any
if (region === "en-US") {
  lang = English
} else {
  lang = Portuguese
}

const LanguageProvider = ({children} : { children: ReactNode }) => {

  const [language, setLanguage] = useState(region);
  const [messages, setMessages] = useState(lang);

  useEffect(() => {
    window.localStorage.setItem('language', language)
  }, [language])

  function selectLanguage (e: any) {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
    if (newLanguage === "en-US") {
      setMessages(English);
    } else {
        setMessages(Portuguese);
    }
  }

  return (
    <LanguageContext.Provider value={{ language, selectLanguage }}>
      <IntlProvider locale={language} defaultLocale={region} messages={messages}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  )
};

export default LanguageProvider;