import Head from 'next/head'
import { Nav } from './src/components/nav'
import { Hero } from './src/components/hero'
import { Faq } from './src/components/info_section'
import { Contact } from './src/components/contact'
import { Footer } from './src/components/footer'
import { Feature } from './src/components/feature'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <Nav></Nav>
      <Hero></Hero>
      <Feature></Feature>
      <Faq></Faq>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}
