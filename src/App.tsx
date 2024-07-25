import React from 'react'
import { Outlet } from 'react-router-dom'

type AppProps = Record<string, never>

const App: React.FC<AppProps> = () => {
  return (
    <div className="bg-slate-100/20">
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  )
}

export { App }
