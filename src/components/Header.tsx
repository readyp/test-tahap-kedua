import React from 'react'
import techno_partnerlogo from '../assets/img/logo_technopartner.png'

type HeaderProps = Record<string, never>

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex h-16 w-full items-center border-b bg-white px-8 shadow md:px-16">
      {/* Navbrand */}
      <img src={techno_partnerlogo} className="w-32 object-contain" alt="" />
    </header>
  )
}

export { Header }
