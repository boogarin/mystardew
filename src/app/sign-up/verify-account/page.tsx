"use client"

import LanguageDropdown from "@/components/LanguageDropdown";
import ButtonSV from "@/components/ui/ButtonSV";
import ContainerSV from "@/components/ui/ContainerSV";
import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

export default function StardewHome() {
    return (
        <div className="flex w-screen h-screen bg-[url('/assets/bg-light.png')] dark:bg-[url('/assets/bg-dark.png')] bg-cover bg-center justify-center pt-4 sm:pt-0 pb-10 sm:items-center">
            <div className="flex-col">
                <div className="flex-col p-4">
                    <Link href={'/'} className='flex justify-center pb-5'>
                    <Image
                    src="/assets/logo.png"
                    width={140}
                    height={60}
                    alt="Stardew Valley"
                    unoptimized={true}
                    />
                    </Link>
                    <ContainerSV>
                        <div className="px-4 py-2 flex-col">
                            <p className="font-bold text-2xl text-[#663300]"><FormattedMessage id="verify_account"/></p>
                            <div className="mt-4 grid grid-cols-4 gap-3">
                            <input maxLength={1} className="h-14 w-14 bg-[#fffbea] text-[#663300] text-xl font-bold text-center p-2 mt-1 border-4 rounded-md border-t-[#FA9305] border-l-[#DC7B05] border-r-[#DC7B05] border-b-[#853605]"/>
                            <input maxLength={1} className="h-14 w-14 bg-[#fffbea] text-[#663300] text-xl font-bold text-center p-2 mt-1 border-4 rounded-md border-t-[#FA9305] border-l-[#DC7B05] border-r-[#DC7B05] border-b-[#853605]"/>
                            <input maxLength={1} className="h-14 w-14 bg-[#fffbea] text-[#663300] text-xl font-bold text-center p-2 mt-1 border-4 rounded-md border-t-[#FA9305] border-l-[#DC7B05] border-r-[#DC7B05] border-b-[#853605]"/>
                            <input maxLength={1} className="h-14 w-14 bg-[#fffbea] text-[#663300] text-xl font-bold text-center p-2 mt-1 border-4 rounded-md border-t-[#FA9305] border-l-[#DC7B05] border-r-[#DC7B05] border-b-[#853605]"/>
                            </div>
                            <div className="mt-5">
                                <button className='text-[#8d3034] font-bold rounded-[5px] px-4 py-2 cursor-pointer select-none
                                border-4 border-t-[#FA9305] border-l-[#B14E05] border-r-[#B14E05] border-b-[#853605] bg-[#FFD789]
                              hover:bg-[#facf78] active:border-[3px] active:border-t-[#B14E05] ease-in-out duration-100 active:bg-[#DD8254] active:text-[#fdeaec] w-full mt-2 mb-1'>
                                   <FormattedMessage id="define_button"/>
                                </button>
                            </div>
                        </div>
                    </ContainerSV>
                </div>
                <div className='mt-5 text-center sm:absolute sm:bottom-4 sm:right-4 text-[14px] text-white font-medium'>
                <FormattedMessage id="madeBy"/>
                </div>
            </div>
        </div>
    )
}