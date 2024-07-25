import React from 'react'
import { ICategpry } from '../store/api/menu-api'

type MenuItemProps = {
  categories: ICategpry[]
  kategory: string
}

const MenuItem: React.FC<MenuItemProps> = ({ categories }) => {
  return categories
    .map((item) => (
      <div className='scroll-smooth'>
        <h1 id={item.category_name} className="my-4 px-4 font-semibold">{item.category_name}</h1>
        {item.menu.map((menu, index) => (
          <div key={index}>
            <div className="flex justify-between space-x-4 bg-white px-4 py-4">
              <img src={menu.photo} className="h-16 w-16 self-center justify-self-center" alt="" />
              <div className="flex-1">
                <p className="font-bold">{menu.name}</p>
                <p className="text-sm font-thin text-gray-400 md:text-base lg:text-lg">{menu.description}</p>
              </div>
              <p>Rp. {menu.price}</p>
            </div>
          </div>
        ))}
      </div>
    ))
}

export { MenuItem }
