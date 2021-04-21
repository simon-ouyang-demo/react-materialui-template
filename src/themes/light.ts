import {
  Theme,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from '@material-ui/core/styles'

import commonSettings from './commonSetting'
import { Colors } from './shared'
const lightTheme = createMuiTheme(
  {
    palette: {
      primary: {
        main: Colors.RB_Primary,
        contrastText: Colors.RB_White,
      },
      secondary: {
        main: Colors.RB_White,
        contrastText: Colors.RB_Primary,
      },
      text: {
        primary: Colors.RB_Secondary,
        secondary: Colors.RB_Secondary,
        disabled: Colors.RB_DisableText,
      },
      background: {
        default: Colors.RB_ProductGray,
      },
    },
  },
  commonSettings,
)

export default lightTheme as Theme
