import { IProject } from '@/interfaces/project'
import { pathImages } from '@/utils/path-images'

export const projects: IProject[] = [
  {
    description:
      'O AnyShare é um serviço que compartilhe códigos, comandos ou qualquer tipo de texto em tempo real.',
    image: pathImages.anyshare,
    urlSite: 'https://anyshare-zh.vercel.app/',
    urlGithub: 'https://github.com/claudiozh/anyshare-frontend',
    emphasis: false,
  },
  {
    description:
      'O Encurtaki é um serviço de encurtamento de URLs que permite aos usuários transformar links longos em URLs curtas e fáceis de compartilhar. É uma ferramenta simples e eficiente que oferece uma maneira conveniente de encurtar URLs sem complicações.',
    image: pathImages.encurtaki,
    urlSite: 'https://encurtaki.me/',
    emphasis: true,
  },
  {
    description: `O Move.it é um app que utiliza a técnica de pomodoro, com períodos
    de trabalho de 25 minutos seguidos por intervalos curtos. A cada
    ciclo, os usuários recebem desafios para realizar.`,
    image: pathImages.moveit,
    urlSite: 'https://moveit-claudiozh.vercel.app/',
    urlGithub: 'https://github.com/claudiozh/moveit',
    emphasis: false,
  },
  {
    description:
      'O PetDevShop é um sistema desenvolvido em Typescript, CSS e HTML, que oferece aos usuários a capacidade de listar animais e aplicar filtros.',
    image: pathImages.petshop,
    urlSite: 'https://petshop-nodets.onrender.com/',
    urlGithub: 'https://github.com/claudiozh/petshop-nodets',
    emphasis: false,
  },
  {
    description:
      'O React Calc IMC é uma calculadora de IMC desenvolvida em React. O IMC é uma medida utilizada para calcular se uma pessoa está no peso ideal.',
    image: pathImages.calculator,
    urlSite: 'https://react-calc-imc-claudiozh.vercel.app/',
    urlGithub: 'https://github.com/claudiozh/react-calc-imc',
    emphasis: false,
  },
  {
    description:
      'Este é o meu projeto de portfólio que destaca minha expertise em desenvolvimento backend com Node.js e um pouco da minha experiência com React, Next.js, Typescript, CSS e HTML.',
    image: pathImages.logoDark,
    urlSite: 'https://claudiozh.vercel.app/',
    urlGithub: 'https://github.com/claudiozh/portfolio',
    emphasis: false,
  },
]
