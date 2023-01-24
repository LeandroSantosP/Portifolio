import 'styled-components';

declare module 'styled-components' {
   export interface DefaultTheme {
      light: {
         colors: {
            oldGreen: string;
            darkLiver: string;
            darkSienna: string;
            pastel: string
            white: string;
            dark: string;
         },
         fontWeights: {
            normal: number;
            medium: number;
            bold: number
         }
      },
   }
}