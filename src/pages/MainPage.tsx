import React, { useEffect } from 'react'
import { useAuthSelector } from '../store/slice/auth-slice'
import { useNavigate } from 'react-router-dom'

type MainPageProps = Record<string, never>

const MainPage: React.FC<MainPageProps> = () => {
  const { token } = useAuthSelector()
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [navigate, token])

  return <div>MainPage Works!</div>
}

export { MainPage }
