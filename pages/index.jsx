import Head from 'next/head'
import Analysis from './componants/analytic'
import Cards from './componants/cards'
import Hero from './componants/hero'
import NavBar from './componants/nav'
import NewSletter from './componants/newsletter'
import Footer from './componants/footer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar/>
        <Hero/>
        <Analysis/>
        <NewSletter/>
        <Cards/>
        <Footer/>
      </main>
    </div>
  )
}
