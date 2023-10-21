"use client"

import LanguageDropdown from "@/components/LanguageDropdown";
import ButtonSV from "@/components/ui/ButtonSV";
import ContainerSV from "@/components/ui/ContainerSV";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

export default function StardewHome() {
    return (
        <div className="flex w-screen h-screen bg-[url('/assets/bg-light.png')] dark:bg-[url('/assets/bg-dark.png')] bg-cover bg-center justify-center sm:items-center">
            <div className="flex-col">
                <div className="flex p-4">
                    <ContainerSV>
                        <div className="text-black">
                            Login
                        </div>
                    </ContainerSV>
                </div>
            </div>
            
            <LanguageDropdown/>
            <div className='absolute bottom-4 left-5 lg:left-auto text-[14px] text-white font-medium'>
                <FormattedMessage id="madeBy"/>
            </div>
        </div>
    )
}