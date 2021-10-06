import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import styles from './index.module.scss'
import { getSortedPostsData } from '../lib/posts'
import { Card } from '../components/Card';
import styled from "styled-components";
import { GetStaticProps } from 'next'

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 50px;
  margin-left: -50px;
  overflow: hidden;
`;

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
    abstract: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.intro}>
        <p>Esse texto mostra toda a conformidade que será aplicada ao texto apresentado aqui, assim como a disposição que será apresentada, de forma que fique claro, a estrutura e imagem deste.</p>
      </section>
        <CardContainer className={styles.cardContainer}>
        {allPostsData.map(({ id, date, title, abstract }) => (
          <Card imgUrl={'/images/profile.jpg'} key={id} href={`/posts/${id}`} title={title} date={date} abstract={abstract}/>
        ))}
        </CardContainer>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}