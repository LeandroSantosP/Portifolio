import { GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';
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
   const [projectFilter, setProjectFilter] = useState('');

   const handleFilter = (search: string) => {
      let projecFilter = data.filter(projec => {
         return projec.name.includes(search)
      })
      setProjects(projecFilter)
   }

   useEffect(() => {
      handleFilter(projectFilter)
   }, [projectFilter])



   return (
      <C.ProjectContainer>
         <div className="search">
            <input
               placeholder='Buscar'
               type="text"
               onChange={({ target }) => setProjectFilter(target.value)}
            />
         </div>
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
