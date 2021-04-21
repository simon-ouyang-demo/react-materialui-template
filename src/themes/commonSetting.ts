import { transparentize } from 'polished'

import { Colors, htmlFontSize, fontSize } from './shared'
const commonSetting = {
  typography: {
    htmlFontSize,
    fontSize,
    fontFamily: '"Poppins", "Arial", sans-serif',
    fontWeightRegular: 400,
    fontWeightBold: 500,
    h3: {
      fontSize: '24px',
      fontWeight: 'normal',
      lineHeight: '28px',
    },
    h4: {
      fontSize: '20px',
      fontWeight: 'normal',
      lineHeight: '24px',
    },
    h5: {
      fontSize: '16px',
      fontWeight: 'normal',
      lineHeight: '24px',
    },
    h6: {
      fontSize: '14px',
      lineHeight: '24px',
    },
    subtitle1: {
      fontSize: '16px',
      lineHeight: '24px',
    },
    subtitle2: {
      fontSize: '16px',
      lineHeight: '24px',
    },
    body1: {
      fontSize: '14px',
      lineHeight: '21px',
    },
    body2: {
      fontSize: '12px',
      lineHeight: '16.56px',
    },
    button: {
      fontSize: '14px',
    },
    caption: {
      fontSize: '12px',
    },
    overline: {
      fontSize: '12px',
      lineHeight: '18px',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiStepper: {
      root: {
        backgroundColor: Colors.RB_ProductGray,
        padding: 0,
      },
    },
    // @ts-ignore
    MuiAlert: {
      root: {
        padding: '7px 12px',
        fontSize: '14px',
        color: Colors.RB_Secondary,
        boxShadow: 'none',
        WebkitBoxShadow: 'none',
        MozBoxShadow: 'none',
        height: '48px',
      },
      filledError: {
        backgroundColor: transparentize(0.95, Colors.RB_Error),
        color: Colors.RB_Error,
      },
      filledWarning: {
        backgroundColor: transparentize(0.95, Colors.RB_Hold),
        color: Colors.RB_Hold,
      },
      filledSuccess: {
        backgroundColor: `${Colors.RB_Secondary} !important`,
        color: Colors.RB_White,
      },
      filledInfo: {
        backgroundColor: transparentize(0.95, Colors.RB_Primary),
        color: Colors.RB_Primary,
      },
      icon: {
        fontSize: '20px',
      },
    },
    MuiToolbar: {
      root: {
        color: Colors.RB_Secondary,
        backgroundColor: Colors.RB_White,
      },
      regular: {
        height: 48,
        minHeight: '48px !important',
      },
    },
    MuiTooltip: {
      tooltip: {
        padding: '16px 24px',
        color: Colors.RB_White,
        borderRadius: '4px',
        backgroundColor: Colors.RB_Secondary,
        textAlign: 'left',
        fontSize: '12px',
        fontWeight: 'normal',
      },
    },
    MuiLink: {
      root: {
        color: Colors.RB_Primary,
        cursor: 'pointer',
        fontSize: '11px',
        textDecoration: 'none',
        padding: '6px',
        '&:hover': {
          backgroundColor: transparentize(0.95, Colors.RB_Primary),
        },
        '&:focus': {
          backgroundColor: transparentize(0.95, Colors.RB_Primary),
        },
        '&:active': {
          backgroundColor: transparentize(0.95, Colors.RB_Primary),
        },
      },
    },
    MuiBreadcrumbs: {
      separator: {
        marginLeft: 0,
        marginRight: 0,
        '& .MuiSvgIcon-root': {
          fontSize: '20px',
        },
      },
      root: {
        '& .MuiLink-root': {
          color: Colors.RB_SubInfo,
          fontSize: 14,
          padding: '3px',
        },
      },
    },
    MuiButton: {
      root: {
        fontWeight: 500,
        padding: '14px 16px',
        margin: '8px',
        height: '48px',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: Colors.RB_Secondary,
          boxShadow: 'none',
          WebkitBoxShadow: 'none',
          MozBoxShadow: 'none',
        },
        boxShadow: 'none',
        WebkitBoxShadow: 'none',
        MozBoxShadow: 'none',
      },
      contained: {
        backgroundColor: Colors.RB_White,
        '&:hover': {
          backgroundColor: Colors.RB_Secondary,
          boxShadow: 'none',
          WebkitBoxShadow: 'none',
          MozBoxShadow: 'none',
        },
        boxShadow: 'none',
        WebkitBoxShadow: 'none',
        MozBoxShadow: 'none',
      },
      containedPrimary: {
        backgroundColor: Colors.RB_Primary,
        '&:hover': {
          backgroundColor: Colors.RB_Secondary,
          boxShadow: 'none',
          WebkitBoxShadow: 'none',
          MozBoxShadow: 'none',
        },
        boxShadow: 'none',
        WebkitBoxShadow: 'none',
        MozBoxShadow: 'none',
      },
      containedSecondary: {
        color: Colors.RB_SubInfo,
        backgroundColor: Colors.RB_White,
        borderColor: Colors.RB_MildGray,
        border: `1px solid ${Colors.RB_MildGray}`,
        '&:hover': {
          border: `1px solid ${Colors.RB_Primary}`,
          backgroundColor: Colors.RB_White,
        },
        boxShadow: 'none',
        WebkitBoxShadow: 'none',
        MozBoxShadow: 'none',
      },
      text: {
        color: Colors.RB_Primary,
      },
    },
    MuiMenu: {
      paper: {
        backgroundColor: Colors.RB_White,
        boxShadow: 'none',
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: transparentize(0.3, Colors.RB_ProductGray),
      },
    },
    MuiDialog: {
      paper: {
        boxShadow: '0px 2px 2px rgba(223, 224, 235, 0.5)',
      },
    },
    MuiMenuItem: {
      root: {
        backgroundColor: 'transparent',
        color: Colors.RB_Secondary,
        borderRadius: 0,
        fontSize: '14px',
        padding: '6px 24px 6px 40px',
        margin: '8px 0 0 0',
        '&:hover': {
          backgroundColor: transparentize(0.95, Colors.RB_Primary),
        },
        '&$selected': {
          backgroundColor: transparentize(0.95, Colors.RB_Primary),
          borderRadius: 0,
          color: Colors.RB_Secondary,
          padding: '6px 24px 6px 16px',
          fontWeight: 500,
          borderColor: Colors.RB_Primary,
          '&:hover': {
            backgroundColor: transparentize(0.95, Colors.RB_Primary),
          },
        },
        '&.active': {
          backgroundColor: transparentize(0.95, Colors.RB_Primary),
          borderRadius: 0,
          color: Colors.RB_Primary,
          fontWeight: 500,
          borderColor: Colors.RB_Primary,
          margin: '4px 0',
        },
        '@media (max-width: 600px)': {
          minHeight: 'auto',
        },
      },
    },
    MuiSelect: {
      selectMenu: {
        '&:hover': {
          backgroundColor: 'transparent !important',
        },
        backgroundColor: 'transparent !important',
      },
    },
    MuiPopover: {
      paper: {
        boxShadow: '0px 2px 2px rgba(223, 224, 235, 0.5) !important',
      },
    },
    MuiOutlinedInput: {
      root: {
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: Colors.RB_Primary,
        },
        '&$disabled': {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: Colors.RB_DisableText,
          },
        },
      },
      input: {
        padding: '14px',
      },
      notchedOutline: {
        borderColor: Colors.RB_MildGray,
      },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: Colors.RB_Primary,
      },
    },
    MuiTab: {
      root: {
        color: Colors.RB_MildGray,
        backgroundColor: Colors.RB_MildGray,
        fontSize: '17px',
        fontWeight: 500,
        borderRadius: '0 !important',
        textTransform: 'none',
        borderBottomColor: Colors.RB_Primary,
        '&:hover': {
          color: Colors.RB_White,
          backgroundColor: Colors.RB_Primary,
        },
        '&$selected': {
          color: Colors.RB_White,
          backgroundColor: Colors.RB_Primary,
          overflow: `hidden`,
          '& $wrapper': {
            borderColor: Colors.RB_Secondary,
          },
        },
        '@media (min-width: 600px)': {
          minWidth: 72,
        },
        '@media (max-width: 600px)': {
          minWidth: 'auto',
        },
      },
      textColorPrimary: {
        color: Colors.RB_Secondary,
        '&:hover': {
          color: Colors.RB_Secondary,
          backgroundColor: Colors.RB_Primary,
        },
        '&$selected': {
          color: Colors.RB_White,
          backgroundColor: Colors.RB_Primary,
        },
      },
      wrapper: {
        borderLeft: `3px solid ${Colors.RB_MildGray}`,
        paddingLeft: '5px',
        height: '18px',
        flexDirection: 'row',
      },
    },
    MuiInputLabel: {
      root: {
        '&$focused': {
          fontWeight: 500,
        },
      },
    },
    MuiInputBase: {
      root: {
        height: '48px',
        fontWeight: 'normal',
        color: Colors.RB_Secondary,
        borderColor: Colors.RB_MildGray,
        '&$focused': {
          color: Colors.RB_Secondary,
          borderColor: Colors.RB_Primary,
        },
      },
    },
    MuiSwitch: {
      root: {
        color: Colors.RB_MildGray,
      },
      colorPrimary: {
        '&$checked': {
          color: Colors.RB_SubInfo,
          '& + $track': {
            backgroundColor: Colors.RB_White,
          },
        },
      },
    },
    MuiFormControlLabel: {
      label: {
        '&:hover': {
          color: Colors.RB_Primary,
        },
      },
    },
    MuiCheckbox: {
      root: {
        color: Colors.RB_MildGray,
        '&:hover': {
          color: Colors.RB_Primary,
        },
      },
      colorPrimary: {
        '&$checked': {
          color: Colors.RB_Secondary,
        },
      },
    },
    MuiChip: {
      root: {
        fontSize: '12px',
        padding: '3.5px 16px',
        color: Colors.RB_White,
        backgroundColor: Colors.RB_Primary,
        textTransform: 'uppercase',
      },
      colorPrimary: {
        backgroundColor: Colors.RB_White,
        color: Colors.RB_SubInfo,
      },
      colorSecondary: {
        backgroundColor: Colors.RB_ProductGray,
        color: Colors.RB_White,
      },
      outlinedPrimary: {
        backgroundColor: Colors.RB_White,
        color: Colors.RB_SubInfo,
        borderColor: Colors.RB_MildGray,
      },
      outlinedSecondary: {
        color: Colors.RB_White,
        backgroundColor: Colors.RB_ProductGray,
        borderColor: Colors.RB_MildGray,
      },
    },
    MuiStepLabel: {
      label: {
        color: Colors.RB_DisableText,
      },
      active: {
        color: `${Colors.RB_Secondary} !important`,
      },
      completed: {
        color: `${Colors.RB_SubInfo} !important`,
      },
    },
    MuiSvgIcon: {
      root: {
        verticalAlign: 'middle',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      colorPrimary: {
        color: Colors.RB_MildGray,
      },
      colorSecondary: {
        color: Colors.RB_Secondary,
        '&:hover': {
          backgroundColor: Colors.RB_ProductGray,
        },
      },
      fontSizeSmall: {
        width: '20px',
        height: '20px',
      },
    },
    MuiTypography: {
      colorTextPrimary: {
        color: Colors.RB_Primary,
      },
      colorSecondary: {
        color: Colors.RB_ProductGray,
      },
    },
    MuiCircularProgress: {
      colorPrimary: {
        color: Colors.RB_Primary,
        width: '42px',
      },
      colorSecondary: {
        color: Colors.RB_Primary,
        width: '42px',
      },
    },
    MuiIcon: {
      root: {
        padding: 0,
        margin: 0,
      },
      fontSizeSmall: {
        fontSize: '8px',
        padding: 0,
      },
      colorSecondary: {
        color: Colors.RB_Tertiary,
      },
    },
  },
  props: {
    MuiButton: {
      variant: 'contained',
    },
    MuiCard: {
      variant: 'outlined',
    },
    MuiFormControl: {
      variant: 'outlined',
    },
  },
}

export default commonSetting
