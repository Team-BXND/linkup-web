interface Typography {
  fontSize: {
    display: {
      default: string;
    };
    title: {
      lg: string;
      md: string;
      sm: string;
      xsm: string;
    };
    body: {
      lg: string;
      md: string;
      sm: string;
    };
    caption: {
      lg: string;
      md: string;
    };
  };
  fontWeight: {
    bold: number;
    semibold: number;
    medium: number;
  };
}

export interface Color {
  main: {
    mainColor: string;
    subColor: string;
  };
  button: {
    text: {
      primary: string;
    };
  };
  line: {
    light: string;
  };
  status: {
    info: string;
    success: string;
    error: string;
    warn: string;
    disabled: string;
  };
}

interface Shadow {
  hard: string;
  medium: string;
  soft: string;
}

export interface Theme {
  color: {
    main: Color["main"];
    background: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    button: Color["button"];
    line: Color["line"];
    status: Color["status"];
  };

  shadow: Shadow;

  typography: Typography;
}

export type ThemeType = Theme;
