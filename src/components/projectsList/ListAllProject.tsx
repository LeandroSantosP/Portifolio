import Link from "next/link"
import { dataProps } from "../../../pages/projects"

interface ListAllProject {
   project: {
      id: number;
      name: string;
      introduction: string;
      details: {
         slug: string;
      }[]
      thumbUrl: {
         url: string;
      }
      _createdAt: string;

   }
   formtIntrodction: string;
   formatData: string
}

export const ListAllProject = ({ project, formtIntrodction, formatData }: ListAllProject) => {

   return (
      <li>
         <h1>{project.name}</h1>
         <img src={project.thumbUrl.url} alt={project.name} />
         <Link href={`/projects/${project.details[0].slug}`}>Detalhes</Link>
         <p>{formtIntrodction}</p>
         <span>{formatData}</span>
      </li>
   )
}