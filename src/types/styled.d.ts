import { Colors } from 'src/styles/theme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [key in Colors]: string };
  }
}
