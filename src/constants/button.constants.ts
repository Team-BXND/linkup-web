import type { Theme } from "@/types/theme";

const ButtonToken = (theme: Theme) => ({
  padding: {
    md: "0.5rem 1.75rem",
    lg: "0.6rem 2.13rem"
  },
  color: {
    default: {
      background: theme.subColor,
      stroke: 'none',
      text: theme.btnTextPrimary
    },
    negative: {
      background: theme.bgPrimary,
      stroke: `1px solid ${theme.subColor}`,
      text: theme.subColor
    }
  }
})

export default ButtonToken;