import type { Theme } from "@/types/theme";

const InputToken = (theme: Theme) => ({
  default: "#E6E6E6",
  success: theme.statusSuccess,
  info: theme.statusInfo,
  error: theme.statusError,
  warn: theme.statusWarn,
  disabled: 'none'
})

export default InputToken;