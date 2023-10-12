import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mint Ventures AI Demo!</title>
        <link rel="icon" href="/MV_favicon.svg" />
      </Head>

      <main>
        <Header title="Welcome to Mint Ventures AI Article Generator Demo!" />
        <p className="description">
          Give the article generator some details and it will write a 400-word article for you. Get started by clicking on the bot icon.
        </p>
      </main>

      <Footer />
    </div>
  )
}
