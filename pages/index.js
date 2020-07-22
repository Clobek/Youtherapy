import Head from 'next/head'
import '../assets/style.scss'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Youtherapy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="test">Hello World</div>
    </div>
  )
}
