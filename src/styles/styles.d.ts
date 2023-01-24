import 'styled-components';

declare module 'styled-components' {
   export interface DefaultTheme {
      fontWeights: {
         normal: number;
         medium: number;
         bold: number;
      }
   }
}