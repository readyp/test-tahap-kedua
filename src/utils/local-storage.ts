export interface IToken {
  token_type: string
  expires_in: number
  access_token: string
  refresh_token: string
}

type LocalStorageType = {
  token: IToken
  expireTime: number
}

type KeyLocalStorage = keyof LocalStorageType

const getFromLocalStorage = <K extends KeyLocalStorage>(key: K): LocalStorageType[K] | null => {
  const dataString = localStorage.getItem(key)

  if (!dataString) {
    return null
  }

  return JSON.parse(dataString)
}

const saveToLocalStorage = <K extends KeyLocalStorage>(key: K, data: LocalStorageType[K]): void => {
  const dataString = JSON.stringify(data)

  localStorage.setItem(key, dataString)
}

const removeFromLocalStorage = <K extends KeyLocalStorage>(key: K): void => {
  localStorage.removeItem(key)
}

export { getFromLocalStorage, saveToLocalStorage, removeFromLocalStorage }
