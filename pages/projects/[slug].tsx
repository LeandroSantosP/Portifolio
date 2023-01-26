
import { GetServerSideProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { getDetailsOfProject } from '../../src/lib/dato-cmd';
import * as C from '../../src/styles/ProjectDetailsStyles';

interface ProjectDetailsProps {
   details: {
      id: string;
      projectTitle: string;
      description: string;
      projectBanner: {
         url: string;
      }
      slug: string;
      isLive: boolean;
      githuburl: string;
   }
}

export default function ProjectDetails({ details }: ProjectDetailsProps) {
   const [projectDetails, setProjectDetails] = useState(details);

   console.log(projectDetails);


   return (
      <C.ProjectDetails>
         <h1>{projectDetails.projectTitle}</h1>
         <Link href={projectDetails.githuburl} target="_blank">repositorio</Link>
      </C.ProjectDetails>
   )
}

interface DetailsProps {
   id: string,
   projectTitle: string,
   description: string,
   projectBanner: {
      url: string
   }
   slug: string;
   isLive: boolean;
   githuburl: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
   const { slug }: any = params;

   const AllDetails: DetailsProps[] = await getDetailsOfProject({ limit: 10 });

   const currentDetails = AllDetails.find(details => {
      const res = details.slug === slug
      return res
   })


   if (!currentDetails) {
      return {
         redirect: {
            destination: '/projects',
            permanent: false
         }
      }
   }

   return {
      props: {
         details: currentDetails
      }
   }
}

