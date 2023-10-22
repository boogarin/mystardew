"use client"

import LanguageDropdown from "@/components/LanguageDropdown";
import ButtonSV from "@/components/ui/ButtonSV";
import ContainerSV from "@/components/ui/ContainerSV";
import HeaderAuth from "@/components/ui/HeaderAuth";
import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

export default function StardewHome() {
    return (
        <div className="flex w-screen h-screen bg-[url('/assets/bg-light.png')] dark:bg-[url('/assets/bg-dark.png')] bg-cover bg-center justify-center pt-20 sm:pt-4 sm:items-center">
            <HeaderAuth/>
            <div className="flex-col">
                <div className="flex-col p-4">
                    <ContainerSV>
                        <Link href={'/'}><p className="font-bold text-[#663300] mb-2">← <FormattedMessage id="back"/></p></Link>
                        <div className="px-4 py-2 flex-col">
                            <p className="font-bold text-2xl text-[#663300]"><FormattedMessage id="recover"/></p>
                            <p className="text-[#663300] font-semibold mt-4"><FormattedMessage id="define_password"/></p>
                            <input className="h-11 bg-[#fffbea] text-[#663300] p-2 mt-1 border-4 rounded-md border-t-[#FA9305] border-l-[#DC7B05] border-r-[#DC7B05] border-b-[#853605]"/>
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