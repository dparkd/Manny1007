import Head from 'next/head'
import Script from 'next/script'
import MannyPlayer from '@components/MannyPlayer'
import MannyFesto from '@components/MannyFesto'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Manny1007 Studio</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <h1 class="title">Manny1007 Studios</h1>
        <MannyPlayer title="Welcome to my app!" />
        <MannyFesto />
      </main>

      <Script src="/unmute.js" />
    </div>
  )
}
