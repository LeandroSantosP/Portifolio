import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {
   ActiveClass: string;
   children: React.ReactNode;
}

export const ActiveLink = ({ ActiveClass, children, ...rest }: ActiveLinkProps) => {

   const { asPath } = useRouter();
   const currentPath = asPath === rest.href ? ActiveClass : "";

   return (
      <Link className={currentPath} {...rest}>
         {children}
      </Link>
   )
}