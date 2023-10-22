import Link from "next/link";
import LanguageDropdown from "../LanguageDropdown";
import ButtonSV from "./ButtonSV";
import Image from 'next/image'

export default function HeaderAuth() {
    return (
        <nav className="absolute w-full top-0 h-20 p-4 flex justify-between items-center px-6">
            <div>
                <Link href={'/'}>
                    <Image
                    className="hidden sm:flex"
                    src="/assets/logo.png"
                    width={120}
                    height={60}
                    alt="Stardew Valley"
                    unoptimized={true}
                    />
                </Link>
                <Link href={'/'}>
                    <Image
                    className="flex sm:hidden"
                    src="/assets/logo-small.png"
                    width={45}
                    height={60}
                    alt="Stardew Valley"
                    unoptimized={true}
                    />
                </Link>
            </div>
            <div className="flex items-center">
                <Link href={'/login'}>
                    <p className="font-bold mr-5 text-[#193a53] dark:text-white">Entrar</p>
                </Link>
                <Link href={'/sign-up'}>
                    <ButtonSV>Criar conta</ButtonSV>
                </Link>
            </div>
        </nav>
    )
};