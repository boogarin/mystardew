import Link from "next/link";
import LanguageDropdown from "../LanguageDropdown";
import ButtonSV from "./ButtonSV";

export default function Header() {
    return (
        <nav className="absolute w-full top-0 h-20 p-4 flex justify-between items-center">
            <div>
                <LanguageDropdown/>
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