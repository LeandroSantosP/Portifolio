import { GetStaticProps } from 'next';
import { useState } from "react";
import { getAllTechnology, getDetailsOfProject } from "../src/lib/dato-cmd";
import { ListTechs } from "../src/components/HomeComponents/ListTechs";
import { Heading } from "../src/components/HomeComponents/Heading";
import { Slider } from '../src/components/Slider/Slider';
import * as C from '../src/styles/InitialPageStyles'

export type techProps = Array<{
  id: number;
  techname: string;
  defaultVisible: boolean;
  logo: {
    url: string
  }
}>

export type OnlyInfosNecessery  = Array<{
  urlImage: string;
  data: string;
  id: string;
}>

interface HomeProps {
  data: any;
  OnlyInfosNecesseryOfCarrosel: OnlyInfosNecessery
}

export default function Home({ data, OnlyInfosNecesseryOfCarrosel }: HomeProps) {
  const [techs, setTechs] = useState<techProps>(data);

  const handleShowAllTechnologies = () => {
    const techsShow = techs.map(tech => {
      tech.defaultVisible = true;
      return tech
    })
    return setTechs(techsShow);
  };

  const hiddenTechs = techs?.filter(t => !t.defaultVisible).length;

  if (window) navigator.serviceWorker.register('service-worker.js')
  
  return (
    <C.Container>
      <Heading />
      <ListTechs
        techs={techs}
        hiddenTechs={hiddenTechs}
        handleShowAllTechnologies={handleShowAllTechnologies}
      />
      <C.Divider />
      <Slider Slider={OnlyInfosNecesseryOfCarrosel} />
      <C.Divider />
    </C.Container >
  )
}

export type DataOfCarroselProps = Array<{
  id: string;
  projectBanner: {
    url:string;
    _createdAt: string;
  }
}>

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllTechnology({ limit: 10 });

  const DataOfCarrosel: DataOfCarroselProps = await getDetailsOfProject({ limit: 10 });

  const OnlyInfosNecesseryOfCarrosel = DataOfCarrosel.map(info => {
    const urlImage = info.projectBanner.url;
    const data = info.projectBanner._createdAt;
    const id= info.id;
    
    return {
      urlImage,
      data,
      id
    }
  });

  return {
    props: {
      data,
      OnlyInfosNecesseryOfCarrosel
    },
    revalidate: 60 * 5
  }
}
