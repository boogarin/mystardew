"use client"

import ButtonSV from '@/components/ui/ButtonSV'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [effect, setEffect] = useState(false);

  return (
    <div className="flex bg-[url('/assets/bg-light.png')] dark:bg-[url('/assets/bg-dark.png')] bg-cover bg-center min-h-screen justify-center pt-24 sm:pt-8 sm:pb-8 sm:items-center">
      
      <Image className="z-10 fixed top-10 right-0 animate-bird-slide"
      onClick={() => {setEffect(true)}} onAnimationEnd={() => setEffect(false)} alt='Birb'
      src={'/assets/props/stardew_bird.gif'} width={60} height={54}/>
      <Image className="z-0 pointer-events-none absolute top-0 animate-pulse left-0 hidden dark:flex h-auto" alt='Stars'
      src={'/assets/props/stars.png'} width={1119} height={54}/>
      <Image className="z-0 pointer-events-none absolute top-0 animate-pulse duration-800 right-0 hidden dark:flex h-auto" alt='Stars'
      src={'/assets/props/stars2.png'} width={1119} height={54}/>
      <Image className="z-0 pointer-events-none absolute top-0 animate-pulse duration-200 hidden dark:flex h-auto" alt='Stars'
      src={'/assets/props/stars3.png'} width={1119} height={54}/>
      
      <div className='flex-col px-3'>

        <div className='flex justify-center pb-5'>
          <Image className={`${effect && "animate-pulse relative bg-repeat-x z-20"}pointer-events-none`}
          src="/assets/logo.png" width={199} height={60} alt="MyStardew" unoptimized={true}/>
        </div>

        <div className='border-4 border-t-[#FA9305] border-l-[#DC7B05] border-r-[#DC7B05] border-b-[#DC7B05] bg-[#DC7B05] rounded-xl sm:rounded-[10px]'>
          <div className='flex space-x-1 rounded-[20px]'>
            
            <div className='relative flex justify-center'>
              <Image
              className='pointer-events-none'
              src="/assets/stardewvalley.png"
              width={257}
              height={350}
              alt="Stardew Valley"
              unoptimized={true}
              />
              <Link className="absolute bottom-5" href={'/sv'}>
                <ButtonSV>
                  Entrar
                </ButtonSV>
              </Link>
            </div>

            <div className='relative flex justify-center'>
              <Image
              className='pointer-events-none'
              src="/assets/hauntedchocolatier-d.png"
              width={257}
              height={350}
              alt="Haunted Chocolatier"
              unoptimized={true}
              />
              <span className='animate-pulse absolute bottom-[24px] bg-black text-white font-bold rounded-full px-4 py-2 opacity-50'>
                Em breve
              </span>
            </div>
            
          </div>
        </div>

        <div className='bg-[#FFF6D4] text-[15px] rounded-[10px] border-4 border-t-[#FA9305] border-l-[#DC7B05] border-r-[#DC7B05] border-b-[#853605] p-5 mt-5'>
          <p className='font-bold text-lg mb-3 text-[#663300]'>Últimas notícias</p>
          <div className='flex justify-between mb-2'>
            <Link href={'https://twitter.com/ConcernedApe/status/1710021649771434352'}>
            <div className='flex items-center'>
                <Image className='rounded-full mr-2 h-[25px] w-[25px]' alt="Concerned Ape's twitter" src={'/assets/caIcon.jpg'} width={25} height={25}/>
                <p className='font-medium text-[#663300] hover:underline'>Concerned Ape - Chapéus em gatos e cachorros</p>
              </div>
            </Link>
            <p className='text-[#663300] text-opacity-50'>05/10</p>
          </div>
          <div className='flex justify-between mb-2'>
            <Link href={'https://twitter.com/ConcernedApe/status/1709377096802566338'}>
            <div className='flex items-center'>
                <Image className='rounded-full mr-2 h-[25px] w-[25px]' alt="Concerned Ape's twitter" src={'/assets/caIcon.jpg'} width={25} height={25}/>
                <p className='font-medium text-[#663300] hover:underline'>Concerned Ape - Imagens de Haunted Chocolatier</p>
              </div>
            </Link>
            <p className='text-[#663300] text-opacity-50'>03/10</p>
          </div>
          <div className='flex justify-between mb-2'>
            <Link href={'https://twitter.com/ConcernedApe/status/1707155027914035542'}>
              <div className='flex items-center'>
                <Image className='rounded-full mr-2 h-[25px] w-[25px]' alt="Concerned Ape's twitter" src={'/assets/caIcon.jpg'} width={25} height={25}/>
                <p className='font-medium text-[#663300] hover:underline'>Concerned Ape - Espiada na versão 1.6</p>
              </div>
            </Link>
            <p className='text-[#663300] text-opacity-50'>27/09</p>
          </div>
        </div>

        <div className='flex mt-5 justify-center bottom text-sm text-white font-medium items-center'>
        feito com
        <span className='px-2 text-lg font-bold animate-pulse'>♥</span>
        por boogarino
        </div>
      </div>
    </div>
  )
}
