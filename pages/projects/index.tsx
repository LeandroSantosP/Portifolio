import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { getAllProjects } from '../../src/lib/dato-cmd';
import { ListAllProject } from '../../src/components/projectsList';
import * as C from '../../src/styles/AllprojectStyles';

export type dataProps = Array<{
   id: number;
   name: string;
   introduction: string;
   details: Array<{
      slug: string;
   }>
   thumbUrl: {
      url: string;
   }
   _createdAt: string;
}>

interface DataProps {
   data: dataProps
}

export default function AllProjects({ data }: DataProps) {
   const [projects, setProjects] = useState(data);
   
   return (
      <C.ProjectContainer>
         <ul>
            {projects?.map(project => {
               const formatData = new Date(project._createdAt).toLocaleDateString('pt-br', {
                  day: "2-digit",
                  month: "long",
                  year: "numeric"
               });
               const formtIntrodction = project.introduction.substring(0, 100) + "...";


               return <ListAllProject
                  key={project.id}
                  project={project}
                  formatData={formatData}
                  formtIntrodction={formtIntrodction}
               />

            })}
         </ul>
      </C.ProjectContainer>
   )

}

export const getStaticProps: GetStaticProps = async () => {
   const data = await getAllProjects({ limit: 10 });

   return {
      props: {
         data,
      },
      revalidate: 60 * 60
   }
}
