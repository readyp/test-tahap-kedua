import { useEffect } from 'react'
import { useAuthAction, useAuthSelector } from '../store/slice/auth-slice'
import { getFromLocalStorage } from '../utils/local-storage'

const useCheckCredential = () => {
  const { token } = useAuthSelector()
  const { removeCredential } = useAuthAction()

  useEffect(() => {
    const expireTime = getFromLocalStorage('expireTime')

    const checkExpireTime = () => {
      const currentTime = Date.now()

      if (expireTime && token) {
        if (currentTime > expireTime) {
          removeCredential()
        }
      }
    }

    const interval = setInterval(checkExpireTime, 1000 * 60)

    if (!token) {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
    }
  }, [token, removeCredential])
}

export { useCheckCredential }
