import { ReactNode } from "react"

const ContainerSV = ({children} : {children : ReactNode}) => {
    return (
        <div className='bg-[#FFF6D4] rounded-[10px] border-4 border-t-[#FA9305] border-l-[#DC7B05] border-r-[#DC7B05] border-b-[#853605] bottom-0 p-5'>
            {children}
        </div>
    )
}

export default ContainerSV;

//border-b-[#853605]