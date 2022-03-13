import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description"> 
        <p>We use English grammar every day, whether we’re speaking, writing, or reading. It’s the basic tool that helps us communicate clearly and effectively. But what exactly is English grammar? Let’s take a closer look.</p> 
        <a href="https://englishgrammarsoft.com">Learn English Grammar</a></p>
       
      </main>

      <Footer />
    </div>
  )
}
