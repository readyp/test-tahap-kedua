import React from 'react'
import { Outlet } from 'react-router-dom'
import { useCheckCredential } from './hooks/useCheckCredential'

type AppProps = Record<string, never>

const App: React.FC<AppProps> = () => {
  // check credential
  useCheckCredential()
  
  return (
    <div className="bg-slate-100/20">
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  )
}

export { App }
