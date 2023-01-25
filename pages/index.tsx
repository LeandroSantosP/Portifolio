import Router from "next/router";
import { useAuth } from "../src/contexts/AuthContenxt";
import { GetStaticProps } from 'next';
import { getAllTechnology } from "../src/lib/dato-cmd";
import { useState } from "react";
import * as C from '../src/styles/InitialPageStyles'

type techProps = Array<{
  id: number;
  techname: string;
  defaultVisible: boolean;
  logo: {
    url: string
  }
}>

export default function Home({ data }: any) {
  const [techs, setTechs] = useState<techProps>(data);

  console.log(data);

  const handleShowAllTechnologies = () => {
    const techsShow = techs.map(tech => {
      tech.defaultVisible = true;
      return tech
    })
    return setTechs(techsShow)
  };

  const hiddenTecns = techs?.filter(t => !t.defaultVisible).length

  return (
    <C.Container>
      <section>
        <h1>"Empoderando a próxima geração de programadores: <br /> onde a inovação começa"</h1>
        <p>100% free</p>
        <span>
          Transformando mentes, moldando o futuro: Uma escola de programação de excelência
        </span>
      </section>

      <C.TechsContainer>
        {techs.filter(tec => tec.defaultVisible)?.map(tech => (
          <li key={tech.id}>
            <img
              src={tech.logo.url}
              alt={tech.techname}
              width={100}
            />
            <span>{tech.techname}</span>
          </li>
        ))}
        {hiddenTecns > 0 && (
          <li onClick={handleShowAllTechnologies}>+{hiddenTecns} outras</li>
        )}
      </C.TechsContainer>
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
