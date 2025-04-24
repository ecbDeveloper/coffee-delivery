import type { CSSProp } from 'styled-components';
import { DefaultTheme } from "../styles/themes/default";

type ThemeType = typeof DefaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { }

    declare module "react" {
        interface DOMAttributes {
            css?: CSSProp;
        }
    }
}