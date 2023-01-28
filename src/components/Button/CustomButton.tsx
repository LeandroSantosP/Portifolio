import * as C from './CustomButtomStyles'

interface CustomButtomProps {
   children: React.ReactNode;
   type?: "button" | "reset" | "submit" | undefined;
}

export const CustomButton = ({ children, type = "button", ...rest }: CustomButtomProps) => {


   return <C.CustomButtonStyles type={type} {...rest}>{children}</C.CustomButtonStyles>
} 