import type { Theme } from '@/types/theme';


const Typography = {
  fontSize: {
    display: {
      default: '3rem',    // 48px
    },
    title: {
      lg: '2.25rem',      // 36px
      md: '2rem',         // 32px
      sm: '1.75rem',      // 28px
      xsm: '1.5rem',      // 24px
    },
    body: {
      lg: '1.5rem',       // 24px
      md: '1.25rem',      // 20px
      sm: '1.125rem',     // 18px
    },
    caption: {
      lg: '1rem',         // 16px
      md: '0.875rem',     // 14px
    },
  },
  fontWeight: {
    bold: 700,
    semibold: 600,
    medium: 500,
  },
}

export const lightTheme: Theme = {
  mainColor: '#3C79FF',
  subColor: '#5587F6',
  bgPrimary: '#fff',
  bgSecondary: '#FBFBFB',
  textPrimary: '#1B1B1B',
  textSecondary: '#ADADAD',
  btnTextPrimary: '#FAFAFA',
  lineLight: '#ADADAD40',
  statusInfo: '#59A9FF',
  statusSuccess: '#14C14E',
  statusError: '#FF5959',
  statusWarn: '#FFAA00',
  statusDisabled: '#E6E6E6',
  
  typography: Typography,
};

export const darkTheme: Theme = {
  mainColor: '#5587F6',
  subColor: '#3C79FF',
  bgPrimary: '#222222',
  bgSecondary: '#1B1B1B',
  textPrimary: '#FAFAFA',
  textSecondary: '#C8C7C7',
  btnTextPrimary: '#FAFAFA',
  lineLight: '#ADADAD40',
  statusInfo: '#59A9FF',
  statusSuccess: '#14C14E',
  statusError: '#FF5959',
  statusWarn: '#FFAA00',
  statusDisabled: '#E6E6E6',

  typography: Typography,
};
