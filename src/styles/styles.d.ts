import 'styled-components';

declare module 'styled-components' {
   export interface DefaultTheme {
      title: string,

      colors: {
         primary: string;
         secondary: string;
         oldGreen: string;
         darkLiver: string;
         darkSienna: string;
         pastel: string
         white: string;
         dark: string;
      },
      textColors: {
         primary: string;
      },
      fontWeights: {
         normal: number;
         medium: number;
         bold: number
      }

   }
}