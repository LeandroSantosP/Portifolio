import { async } from '@firebase/util';
import { GraphQLClient } from 'graphql-request'

const API_URL_DATO = 'https://graphql.datocms.com'
const API_TOKEN_DATO = process.env.NEXT_TOKEN_API_DATO_CMS;


interface variablesProps {
   variables: {
      limit: number;
   }
}

export function request(query: string, { variables }: variablesProps) {

   const headers: any = {
      authorization: `Bearer ${API_TOKEN_DATO}`,
   };
   const client = new GraphQLClient(API_URL_DATO, { headers });

   return client.request(query, variables);
}


export const getAllProjects = async (variables: any) => {
   const AMOUNT_QUERY = `
   {
      allEpisodes{
        id,
        name,
        introduction,
       details {
         id,
         projectTitle,
         slug,
         description,
         projectBanner {
           id,
           url
         },
       },
        thumbUrl{
          url,
        },
        _createdAt
      }
    }
   
`
   const response = await request(AMOUNT_QUERY, variables)

   return response.allEpisodes;

}

export const getDetailsOfProject = async (variables: any) => {

   const QUERY_DETAILS = `
   {
      allProjecs{
        id,
        projectTitle,
        description,
        projectBanner {
          id,
          url
        },
        slug,
        isLive,
        githuburl
      }
    }
   
   `

   const response = await request(QUERY_DETAILS, variables)

   return response.allProjecs

}

export const getAllTechnology = async (variables: any) => {

   const AMOUNT_QUERY = `
   {
      allTechnologs {
        id,
        techname,
        defaultVisible,
        logo {
           url
        }
    
      }
    }
   `
   const response = await request(AMOUNT_QUERY, variables);


   return response.allTechnologs;
}