import Head from 'next/head'
import Link from 'next/link'
import '../assets/style.scss'

export default function Contact() {
  return (
    <div className="container">
      <Head>
        <title>Youtherapy</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/8187678fb5.js" crossorigin="anonymous" defer></script>
      </Head>
      <header>
        <Link href="/"><div className="logo"></div></Link>
        <div className="nav">
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
            <li className="dropdown">
              <div className="dropbtn">Services&nbsp;<i aria-hidden className="fas fa-caret-down"></i><i aria-hidden className="fas fa-caret-up"></i></div>
              <div className="dropdown-content">
                <Link href="/services/fibroblast"><a>Fibroblast</a></Link>
                <Link href="/services/hyaluron"><a>Hyaluron</a></Link>
              </div>
            </li>
            <li className="dropdown">
              <div className="dropbtn">Pricing&nbsp;<i aria-hidden className="fas fa-caret-down"></i><i aria-hidden className="fas fa-caret-up"></i></div>
              <div className="dropdown-content">
                <Link href="/pricing/fibroblast"><a>Fibroblast</a></Link>
                <Link href="/pricing/hyaluron"><a>Hyaluron</a></Link>
              </div>
            </li>
            <li><Link href="/specials"><a>Specials</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
          </ul>
        </div>
      </header>
    </div>
  )
}