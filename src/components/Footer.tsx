import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo_home1 from '../assets/img/home1.png'
import logo_home2 from '../assets/img/home2.png'
import logo_menu1 from '../assets/img/menu1.png'
import logo_menu2 from '../assets/img/menu2.png'

type FooterProps = Record<string, never>

const Footer: React.FC<FooterProps> = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <footer className="flex h-12 w-full items-center justify-between border-t bg-white px-16 shadow md:h-20 md:px-48">
      <button onClick={() => navigate('/')} className="flex flex-col items-center">
        <img src={pathname === '/' ? logo_home1 : logo_home2} className="w-5 md:w-8" />
        <span className="text-sm">Home</span>
      </button>
      <button onClick={() => navigate('/menu')} className="flex flex-col items-center">
        <img src={pathname === '/' ? logo_menu2 : logo_menu1} className="w-5 md:w-8" />
        <span className="text-sm">Menu</span>
      </button>
    </footer>
  )
}

export { Footer }
