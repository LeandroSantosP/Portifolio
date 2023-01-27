
import { getDetailsOfProject } from '../../src/lib/dato-cmd';
import { ParsedUrlQuery } from 'querystring';
import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { remark } from 'remark';
import Image from 'next/image';
import html from 'remark-html';
import Link from 'next/link';
import * as C from '../../src/styles/ProjectDetailsStyles';

interface DetailsProps {
   id: string,
   projectTitle: string;
   description: string;
   deploymenturl: string;
   projectBanner: {
      url: string
   }
   slug: string;
   isLive: boolean;
   githuburl: string;
}

interface ProjectDetailsProps {
   details: DetailsProps
}

export default function ProjectDetails({ details }: ProjectDetailsProps) {
   const [projectDetails, setProjectDetails] = useState(details);
   const [content, setContent] = useState<{
      contentHTML: string;
   }>();

   const getPost = async () => {
      const processContent = await remark()
         .use(html)
         .process(projectDetails.description)
         const contentHTML = processContent.toString();

      return{
         contentHTML,
      }
   };

   useEffect(() => {
      getPost().then(content => {
         if(content)
            setContent(content);
   });
},[details]);


   return (
      <C.ProjectDetails isLive={projectDetails.isLive}>
         <section>
            <h1>{projectDetails.projectTitle}</h1>
            <Image src={projectDetails.projectBanner.url} width={700} height={393} alt="" />
               <Link href={ projectDetails.isLive ? projectDetails.deploymenturl: "#"} target="_blank" className='isLive'>
                  <div className='container'>
                     <div /> 
                     <span>
                        Live
                     </span>
                  </div>
               </Link>
            <Link href={projectDetails.githuburl} target="_blank">repositorio</Link>

            {content && <div className='markDown' dangerouslySetInnerHTML={{ __html: content.contentHTML }} />}
            
         </section>
      </C.ProjectDetails>
   )
}

interface IParams extends ParsedUrlQuery  {
   slug: string
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
   const { slug } = params as IParams 

   const AllDetails: DetailsProps[] = await getDetailsOfProject({ limit: 10 });

   const currentDetails = AllDetails.find(details => {
      const res = details.slug === slug
      return res
   })
;

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

