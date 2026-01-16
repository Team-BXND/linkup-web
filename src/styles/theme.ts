import type { Theme } from "@/types/theme";

/* 디자인 시스템의 텍스트 스타일을 정리한 Object입니다. */
const Typography = {
  fontSize: {
    display: {
      default: "3rem", // 48px
    },
    title: {
      lg: "2.25rem", // 36px
      md: "2rem", // 32px
      sm: "1.75rem", // 28px
      xsm: "1.5rem", // 24px
    },
    body: {
      lg: "1.5rem", // 24px
      md: "1.25rem", // 20px
      sm: "1.125rem", // 18px
    },
    caption: {
      lg: "1rem", // 16px
      md: "0.875rem", // 14px
    },
  },
  fontWeight: {
    bold: 700,
    semibold: 600,
    medium: 500,
  },
};

/* lightTheme과 darkTheme에서 공통으로 사용되는 컬러를 정리한 Object입니다. */
const Color = {
  main: {
    mainColor: "#3C79FF",
    subColor: "#5587F6",
  },
  button: {
    text: {
      primary: "#FAFAFA",
    },
  },
  line: {
    light: "#ADADAD40",
  },
  status: {
    info: "#59A9FF",
    success: "#14C14E",
    error: "#FF5959",
    warn: "#FFAA00",
    disabled: "#E6E6E6",
  },
};

const Shadow = {
  hard: "0px 2px 4px 0px #0C0C0D26, 0px 2px 4px 0px #0C0C0D1A",
  medium: "0px 2px 4px -1px #0C0C0D0D, 0px 2px 4px -1px #0C0C0D1A",
  soft: "box-shadow: 0px 2px 4px -1px #0C0C0D1A;",
};

/* lightTheme입니다. Typography와 Color의 내용을 상속받습니다. */
export const lightTheme: Theme = {
  color: {
    main: Color.main,
    background: {
      primary: "#fff",
      secondary: "#FBFBFB",
    },
    text: {
      primary: "#1B1B1B",
      secondary: "#ADADAD",
    },
    button: Color.button,
    line: Color.line,
    status: Color.status,
  },

  shadow: Shadow,

  typography: Typography,
};

/* darkTheme입니다.. Typography와 Color의 내용을 상속받습니다. */
export const darkTheme: Theme = {
  color: {
    main: Color.main,
    background: {
      primary: "#222222",
      secondary: "#1B1B1B",
    },
    text: {
      primary: "#FAFAFA",
      secondary: "#C8C7C7",
    },
    button: Color.button,
    line: Color.line,
    status: Color.status,
  },

  shadow: Shadow,

  typography: Typography,
};
