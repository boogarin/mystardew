import LanguageContext from "@/providers/context/LanguageContext"
import { useContext } from "react"

export default function LanguageDropdown() {
    const context = useContext(LanguageContext)

    return (
        <div className="flex justify-center">
           <select
           className='absolute bottom-4 right-4 mt-5 lg:mt-0 lg:top-7 lg:right-8 h-10 text-[#8d3034] font-bold rounded-[5px] px-3 cursor-pointer select-none
           border-4 border-t-[#FA9305] border-l-[#B14E05] border-r-[#B14E05] border-b-[#853605] bg-[#FFD789] font-inter
           hover:bg-[#facf78] active:border-[3px] active:border-t-[#B14E05] ease-in-out duration-100 active:bg-[#DD8254] focus:bg-[#ffbb6d] active:text-[#fdeaec]
           selection:hover:bg-red-600'
           value={1} onChange={context.selectLanguage}>
            <option value="1" disabled={true}>Selecione</option>
            <option value="en-US">
                English
            </option>
            <option value="pt-BR">
                Português
            </option>
            
           </select>
        </div>
    )
};