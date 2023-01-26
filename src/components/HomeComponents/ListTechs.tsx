import { techProps } from "../../../pages";
import * as C from '../../styles/InitialPageStyles';

interface ListTechs {
   techs: techProps;
   hiddenTechs: number;
   handleShowAllTechnologies: () => void;
}

export const ListTechs = ({ techs, hiddenTechs, handleShowAllTechnologies }: ListTechs) => {

   return (
      <>
         <C.TechsContainer>
            {techs.filter((tec) => tec.defaultVisible)?.map((tech) => (
               <li key={tech.id}>
                  <img
                     src={tech.logo.url}
                     alt={tech.techname}
                     width={100}
                  />
                  <span>{tech.techname}</span>
               </li>
            ))}
            {hiddenTechs > 0 && (
               <li onClick={handleShowAllTechnologies}>+{hiddenTechs} outras</li>
            )}
         </C.TechsContainer>
      </>
   )
}