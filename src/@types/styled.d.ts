// tipagem dos temas

import 'styled-components';
import { defaultTheme } from '../syles/themes/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
   export interface DefaultTheme extends ThemeType {}
}