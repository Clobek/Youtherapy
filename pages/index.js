import Head from 'next/head'
import Link from 'next/link'
import img from '../public/images/peachmarble.jpg'
import '../assets/style.scss'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Youtherapy</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/8187678fb5.js" crossorigin="anonymous" defer></script>
      </Head>
      <header>
        <div className="logo"></div>
        <div className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#news">About</a></li>
            <li className="dropdown">
              <div className="dropbtn">Services&nbsp;<i className="fas fa-caret-down"></i></div>
              <div className="dropdown-content">
                <a href="#">Fibroblast</a>
                <a href="#">Hyaluron</a>
              </div>
            </li>
            <li className="dropdown">
              <div className="dropbtn">Pricing&nbsp;<i className="fas fa-caret-down"></i></div>
              <div className="dropdown-content">
                <a href="#">Fibroblast</a>
                <a href="#">Hyaluron</a>
              </div>
            </li>
            <li><a href="#news">Specials</a></li>
            <li><a href="#news">Contact</a></li>
          </ul>
        </div>
      </header>
      <main></main>
      <footer></footer>
    </div>
  )
}