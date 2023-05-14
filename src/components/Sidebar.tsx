'use client'

import Image from 'next/image'
import {
  BiHome,
  BiUserCheck,
  BiBriefcaseAlt2,
  BiChat,
  BiDesktop,
  BiCode,
} from 'react-icons/bi'

import { Link as ScrollLink } from 'react-scroll'

const year = new Date().getFullYear()

export const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between w-72 h-screen fixed px-8 py-12 bg-[#2E3D6E] border-r-[1px] border-slate-600">
      <Image src="/logo.png" alt="Logo" width={140} height={80} />

      <nav className="h-[100%] py-20">
        <ul className="text-gray-50 text-lg font-semibold">
          <ScrollLink to="home" smooth={true} duration={1000}>
            <li className="flex items-center mb-6 hover:text-yellow-500 hover:cursor-pointer">
              <BiHome className="mr-4 text-2xl" />
              <span>Início</span>
            </li>
          </ScrollLink>

          <ScrollLink to="about" smooth={true} duration={1000}>
            <li className="flex items-center mb-6 hover:text-yellow-500 hover:cursor-pointer">
              <BiUserCheck className="mr-4 text-2xl" />
              <span>Sobre</span>
            </li>
          </ScrollLink>

          <ScrollLink to="projects" smooth={true} duration={1000}>
            <li className="flex items-center mb-6 hover:text-yellow-500 hover:cursor-pointer">
              <BiDesktop className="mr-4 text-2xl" />
              <span>Projetos</span>
            </li>
          </ScrollLink>

          <ScrollLink to="skills" smooth={true} duration={1000}>
            <li className="flex items-center mb-6 hover:text-yellow-500 hover:cursor-pointer">
              <BiCode className="mr-4 text-2xl" />
              <span>Habilidades</span>
            </li>
          </ScrollLink>

          <ScrollLink to="experience" smooth={true} duration={1000}>
            <li className="flex items-center mb-6 hover:text-yellow-500 hover:cursor-pointer">
              <BiBriefcaseAlt2 className="mr-4 text-2xl" />
              <span>Experiência</span>
            </li>
          </ScrollLink>

          <ScrollLink to="contact" smooth={true} duration={1000}>
            <li className="flex items-center mb-6 hover:text-yellow-500 hover:cursor-pointer">
              <BiChat className="mr-4 text-2xl" />
              <span>Contato</span>
            </li>
          </ScrollLink>
        </ul>
      </nav>

      <p className="text-slate-400">© {year} Claudio Rodrigo.</p>
    </div>
  )
}
