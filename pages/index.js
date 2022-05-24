import Head from 'next/head'
import { Nav } from '../src/components/nav'
import { Hero } from '../src/components/hero'
import { Faq } from '../src/components/info_section'
import { Contact } from '../src/components/contact'
import { Footer } from '../src/components/footer'
import { Feature } from '../src/components/feature'
import { Education } from '../src/components/education'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vizcaino Bonifasi Law</title>
        <meta name="description" content="The Virtual Immigration Lawfirm" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="dabQu5cr7bPc5aW_UKSdBKUgpqMDKZMXqlpaHkGtyUw" />
      </Head>
      

      <Nav></Nav>
      <Hero></Hero>
      <Education></Education>
      <Feature></Feature>
      <Faq></Faq>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}
