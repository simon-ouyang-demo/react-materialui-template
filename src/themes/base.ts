import { Theme } from '@material-ui/core'

import { darkTheme, lightTheme } from '../themes'

export function themeCreator(themeName: string): Theme {
  const themeMap: Record<string, Theme> = {
    lightTheme: lightTheme as Theme,
    darkTheme: darkTheme as Theme,
  }
  return themeMap[themeName]
}
