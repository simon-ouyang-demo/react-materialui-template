import { useContext } from 'react'

import { ThemeContext } from '../contexts'

export default function useThemeContext() {
  return useContext(ThemeContext)
}
