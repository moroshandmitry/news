import React from 'react'

type UseLocalStorageReturn<T> = [T, React.Dispatch<React.SetStateAction<T>>]

const useLocalStorage = <T>(key: string, initialValue: T): UseLocalStorageReturn<T> => {
  const storedValue = localStorage.getItem(key)
  const initial = storedValue ? (JSON.parse(storedValue) as T) : initialValue

  const [value, setValue] = React.useState<T>(initial)

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
