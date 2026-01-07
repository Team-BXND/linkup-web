interface Typography {
  fontSize: {
    display: {
      default: string,
    },
    title: {
      lg: string,
      md: string,
      sm: string,
      xsm: string,
    },
    body: {
      lg: string,
      md: string,
      sm: string,
    },
    caption: {
      lg: string,
      md: string,
    },
  },
  fontWeight: {
    bold: number,
    semibold: number,
    medium: number,
  },
}

export interface Theme {
  mainColor: string,
  subColor: string,
  bgPrimary: string,
  bgSecondary: string,
  textPrimary: string,
  textSecondary: string,
  btnTextPrimary: string,
  lineLight: string,
  statusInfo: string,
  statusSuccess: string,
  statusError: string,
  statusWarn: string,
  statusDisabled: string,

  typography: Typography,
}

export type ThemeType = Theme;