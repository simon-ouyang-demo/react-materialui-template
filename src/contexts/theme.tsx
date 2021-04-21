import React, { useState } from 'react'
import { MuiThemeProvider } from '@material-ui/core'

import { themeCreator } from '../themes'

export type IState = {
  hostName: string
}
export interface IDispatch {
  setThemeName: (themeName: string) => void
}
export type ThemeContextProps = IState & IDispatch
export const InitialState: Partial<IState> = { hostName: '' }
export const ThemeContext = React.createContext<ThemeContextProps>(
  InitialState as ThemeContextProps,
)

const ThemeProvider: React.FC = props => {
  // Read current theme from localStorage or maybe from an api
  const curThemeName = localStorage.getItem('appTheme') || 'lightTheme'
  // State to hold the selected theme name
  const [themeName, _setThemeName] = useState(curThemeName)
  // Get the theme object by theme name
  const theme = themeCreator(themeName)

  const setThemeName = (themeName: string): void => {
    localStorage.setItem('appTheme', themeName)
    _setThemeName(themeName)
  }
  const hostName = window.location.hostname ? window.location.hostname.split('.')[0] : ''
  const value: ThemeContextProps = {
    hostName,
    setThemeName,
  }
  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
