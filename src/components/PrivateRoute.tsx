import React from 'react'
import { useAuthSelector } from '../store/slice/auth-slice'
import { Navigate, Outlet } from 'react-router-dom'

type PrivateRouteProps = Record<string, never>

const PrivateRoute: React.FC<PrivateRouteProps> = () => {
  const { token } = useAuthSelector()
  return token ? <Outlet /> : <Navigate to={'/login'} replace />
}

export { PrivateRoute }
