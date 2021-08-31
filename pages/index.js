import Head from 'next/head'
import Layout, { siteTitle } from '@components/layout'
import utilStyles from '@styles/utils.module.css'
import { getSortedPostsData } from '@lib/posts'
import Link from 'next/link'
import Date from '@components/date'
import KiwanisCalendar from '@components/calendar'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <h2>Vinnarar av lutaseðlasøluni 2021</h2>
        
        Notarius publikus hevur trekt hesi tølini:
        <br/>
        <br/>
        <ul className={utilStyles.list}>
            <li className={utilStyles.ListItem}>Vinningur nr. 1  -   <u><strong>Lutaseðil nr. 7840</strong></u></li>
            <li className={utilStyles.ListItem}>Vinningur nr. 2  -    <u><strong>Lutaseðil nr. 904</strong></u></li>
            <li className={utilStyles.ListItem}>Vinningur nr. 3  -  <u><strong>Lutaseðil nr. 10464</strong></u></li>
            <li className={utilStyles.ListItem}>Vinningur nr. 4  -   <u><strong>Lutaseðil nr. 5006</strong></u></li>
            <li className={utilStyles.ListItem}>Vinningur nr. 5  -  <u><strong>Lutaseðil nr. 14000</strong></u></li>
        </ul>

        <h4><i>Vinnarar biðjast ringja til <b>Peter Jakobsen</b> á telefon 29 20 30 </i></h4>   
      </section>

      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          
          ))}
        </ul>
      </section> */}
    </Layout>
  )
}


