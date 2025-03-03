import 'styled-components';
import { Theme } from './shared/lib/types/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
} 