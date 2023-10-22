import LanguageContext from "@/providers/context/LanguageContext"
import Select from 'react-select'
import { useContext } from "react"

export default function LanguageDropdown() {
    const context = useContext(LanguageContext)

    return (
        <div className="flex justify-center">
           <select
           className='h-12 w-16 pl-2 text-[#8d3034] font-bold rounded-[5px] cursor-pointer select-none
           border-4 border-t-[#FA9305] border-l-[#B14E05] border-r-[#B14E05] border-b-[#853605] bg-[#FFD789] font-inter
           hover:bg-[#facf78] focus:bg-[#ffbb6d]'
           value={1} onChange={context.selectLanguage}>
            <option disabled={true} value={1} className="hidden">
            🌎
            </option>
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

/*'text-[#8d3034] font-bold rounded-[5px] px-3 cursor-pointer select-none
border-4 border-t-[#FA9305] border-l-[#B14E05] border-r-[#B14E05] border-b-[#853605] bg-[#FFD789] font-inter
hover:bg-[#facf78] active:border-[3px] active:border-t-[#B14E05] ease-in-out duration-100 active:bg-[#DD8254] focus:bg-[#ffbb6d] active:text-[#fdeaec]
selection:hover:bg-red-600'*/