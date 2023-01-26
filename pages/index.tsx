import { GetStaticProps } from 'next';
import { getAllTechnology } from "../src/lib/dato-cmd";
import { useState } from "react";
import { ListTechs } from "../src/components/HomeComponents/ListTechs";
import { Heading } from "../src/components/HomeComponents/Heading";
import * as C from '../src/styles/InitialPageStyles'

export type techProps = Array<{
  id: number;
  techname: string;
  defaultVisible: boolean;
  logo: {
    url: string
  }
}>

export default function Home({ data }: any) {
  const [techs, setTechs] = useState<techProps>(data);

  const handleShowAllTechnologies = () => {
    const techsShow = techs.map(tech => {
      tech.defaultVisible = true;
      return tech
    })
    return setTechs(techsShow)
  };

  const hiddenTechs = techs?.filter(t => !t.defaultVisible).length

  return (
    <C.Container>
      <Heading />
      <ListTechs
        techs={techs}
        hiddenTechs={hiddenTechs}
        handleShowAllTechnologies={handleShowAllTechnologies}
      />
    </C.Container >
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllTechnology({ limit: 10 })

  return {
    props: {
      data
    },
    revalidate: 60 * 5
  }
}
