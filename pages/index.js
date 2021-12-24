import Head from 'next/head'
import MannyIntro from '@components/MannyIntro'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Manny1007 Studio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MannyIntro title="Welcome to my app!" />
      </main>
    </div>
  )
}
