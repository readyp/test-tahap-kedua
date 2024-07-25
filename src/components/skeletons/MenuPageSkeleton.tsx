import React from 'react'
import { Footer } from '../Footer'

type MenuPageSkeletonProps = Record<string, never>

const MenuPageSkeleton: React.FC<MenuPageSkeletonProps> = () => {
  return (
    <div className="flex h-screen flex-col justify-between bg-slate-100 scroll-smooth">
      {/* Header */}
      <header className="shadow border pb-4 bg-white">
        <h2 className="text-2xl font-semibold text-center uppercase py-4">menu</h2>
        <ul className="mt-4 flex space-x-8 px-4 scrollable select-none sm:justify-start md:justify-center">
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-28"></div>
        </ul>
      </header>
      {/* Main */}
      <main className="container mx-auto flex flex-col flex-1 space-y-4 my-4 overflow-y-auto no-scrollbar md:max-w-2xl scroll-smooth">
        <div>
          <div className="skeleton h-4 w-32 my-4"></div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
              <div className="flex flex-col gap-4 flex-1">
                <div className="skeleton h-4 w-"></div>
                <div className="skeleton h-4"></div>
                <div className="skeleton h-4 w-28"></div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
              <div className="flex flex-col gap-4 flex-1">
                <div className="skeleton h-4 w-"></div>
                <div className="skeleton h-4"></div>
                <div className="skeleton h-4 w-28"></div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
              <div className="flex flex-col gap-4 flex-1">
                <div className="skeleton h-4 w-"></div>
                <div className="skeleton h-4"></div>
                <div className="skeleton h-4 w-28"></div>
              </div>
            </div>


          </div>
        </div>
        <div>
          <div className="skeleton h-4 w-32 my-4"></div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
              <div className="flex flex-col gap-4 flex-1">
                <div className="skeleton h-4 w-"></div>
                <div className="skeleton h-4"></div>
                <div className="skeleton h-4 w-28"></div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
              <div className="flex flex-col gap-4 flex-1">
                <div className="skeleton h-4 w-"></div>
                <div className="skeleton h-4"></div>
                <div className="skeleton h-4 w-28"></div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
              <div className="flex flex-col gap-4 flex-1">
                <div className="skeleton h-4 w-"></div>
                <div className="skeleton h-4"></div>
                <div className="skeleton h-4 w-28"></div>
              </div>
            </div>


          </div>
        </div>
        <div>
          <div className="skeleton h-4 w-32 my-4"></div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
              <div className="flex flex-col gap-4 flex-1">
                <div className="skeleton h-4 w-"></div>
                <div className="skeleton h-4"></div>
                <div className="skeleton h-4 w-28"></div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
              <div className="flex flex-col gap-4 flex-1">
                <div className="skeleton h-4 w-"></div>
                <div className="skeleton h-4"></div>
                <div className="skeleton h-4 w-28"></div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
              <div className="flex flex-col gap-4 flex-1">
                <div className="skeleton h-4 w-"></div>
                <div className="skeleton h-4"></div>
                <div className="skeleton h-4 w-28"></div>
              </div>
            </div>


          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export { MenuPageSkeleton }
