import type { Theme } from "@/types/theme";

const InputToken = (theme: Theme) => ({
  default: "#E6E6E6",
  success: theme.color.status.success,
  info: theme.color.status.info,
  error: theme.color.status.error,
  warn: theme.color.status.warn,
  disabled: 'none'
})

export default InputToken;