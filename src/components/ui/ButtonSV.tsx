import { ReactNode } from "react"

const ButtonSV = ({children} : { children: ReactNode }) => {
    return (
        <button className='text-[#8d3034] font-bold rounded-[5px] px-4 py-2 cursor-pointer select-none
            border-4 border-t-[#FA9305] border-l-[#B14E05] border-r-[#B14E05] border-b-[#853605] bg-[#FFD789]
            hover:bg-[#facf78] active:border-[3px] active:border-t-[#B14E05] ease-in-out duration-100 active:bg-[#DD8254] active:text-[#fdeaec]'>
            {children}
        </button>
    )
}

export default ButtonSV;