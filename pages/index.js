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
        <Header title="Welcome to Mint Ventures demo app!" />
        <p className="description">
          Get started by clicking on the bot icon.
        </p>
      </main>

      <Footer />
    </div>
  )
}
