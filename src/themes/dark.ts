import {
  Theme,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from '@material-ui/core/styles'

import commonSettings from './commonSetting'
import { Colors } from './shared'
const darkTheme = createMuiTheme(
  {
    palette: {
      secondary: {
        main: Colors.RB_Primary,
        contrastText: Colors.RB_White,
      },
      primary: {
        main: Colors.RB_White,
        contrastText: Colors.RB_White,
      },
      text: {
        primary: Colors.RB_White,
        secondary: Colors.RB_White,
        disabled: Colors.RB_ProductGray,
      },
      background: {
        default: Colors.RB_Tertiary,
      },
    },
  },
  commonSettings,
)

export default darkTheme as Theme
