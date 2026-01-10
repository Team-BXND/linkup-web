import type { Theme } from "@/types/theme";

const ButtonToken = (theme: Theme) => ({
  padding: {
    md: "0.5rem 1.75rem",
    lg: "0.6rem 2.13rem"
  },
  color: {
    default: {
      background: theme.color.main.subColor,
      stroke: 'none',
      text: theme.color.button.text.primary
    },
    negative: {
      background: theme.color.background.primary,
      stroke: `1px solid ${theme.color.main.subColor}`,
      text: theme.color.main.subColor
    }
  }
})

export default ButtonToken;