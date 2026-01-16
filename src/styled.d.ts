import "styled-components";
import { ThemeType } from "@/types/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
