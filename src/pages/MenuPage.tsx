import React, { useState } from 'react'
import { Footer } from '../components/Footer'
import { useGetMenuQuery } from '../store/api/menu-api'
import { MenuItem } from '../components/MenuItem'

type MenuPageProps = Record<string, never>

const MenuPage: React.FC<MenuPageProps> = () => {
  const { data: menuData, isLoading } = useGetMenuQuery()
  const [active, setActive] = useState(0)
  const [kategori, setKategori] = useState('Seasonal menu')

  return isLoading ? (
    <p>Loaidng</p>
  ) : menuData ? (
    <div className="flex h-screen flex-col justify-between bg-slate-100 scroll-smooth">
      {/* Header */}
      <header className="shadow border pb-4 bg-white">
        <h2 className="text-2xl font-semibold text-center uppercase py-4">menu</h2>
        <ul className="mt-4 flex space-x-8 px-4 scrollable select-none sm:justify-start md:justify-center">
          {menuData.result.categories.map((category, index) => (
            <a
              key={category.category_name}
              href={`#${category.category_name}`}
              className={`hover:cursor-pointer
              ${active === index ? 'underline underline-offset-4 font-bold' : ''}
              `}
              onClick={() => {
                setActive(index)
                setKategori(category.category_name)
              }}
            >
              {category.category_name}
            </a>
          ))}
        </ul>
      </header>
      {/* Main */}
      <main className="container mx-auto flex flex-col flex-1 space-y-4 my-4 overflow-y-auto no-scrollbar md:max-w-2xl scroll-smooth">
        <MenuItem categories={menuData.result.categories} kategory={kategori} />
      </main>
      <Footer />
    </div>
  ) : null
}

export { MenuPage }
