import { ReactNode } from "react"
import LanguageProvider from "@/providers/LanguageProvider"

export const Wrapper = ({ children } : { children: ReactNode }) => {
    return (
        <LanguageProvider>
            {children}
        </LanguageProvider>
    )
}