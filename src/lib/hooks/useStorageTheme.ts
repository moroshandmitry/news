import { theme } from 'theme'

import useLocalStorage from './useLocalStorage'

const useStorageTheme = () => {
  const [storageTheme, setStorageTheme] = useLocalStorage('theme', 'light')

  const toggleTheme = () => {
    setStorageTheme((p) => (p === 'light' ? 'dark' : 'light'))
  }

  const selectedTheme = storageTheme === 'light' ? theme.light : theme.dark

  return {
    toggleTheme,
    storageTheme,
    selectedTheme,
  }
}

export default useStorageTheme
