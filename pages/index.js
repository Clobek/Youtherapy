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
      <main>
        <div className="section">Summary</div>
        <div className="fibroblast">
          <div className="fibroblast__title">
            <p>Fibroblast Plasma</p>
          </div>
          <div className="fibroblast__description">
            <p>Fibroblast is the only cosmetic treatment to use plasma to reduce the volume of excess skin. As a less expensive, low risk procedure with minimal downtime, Fibroblast is a great alternative to surgery.</p>
            <p> Results are expected to last 3-5 years; however, depending on the aging of skin, decrease in elasticity and how deep wrinkle lines/scars are, follow up treatments can be performed in just 8-12 weeks.</p>
          </div>
        </div>
        <div className="hyaluron">
          
          <div className="hyaluron__description">
            <p>Fibroblast is the only cosmetic treatment to use plasma to reduce the volume of excess skin. As a less expensive, low risk procedure with minimal downtime, Fibroblast is a great alternative to surgery.</p>
            <p> Results are expected to last 3-5 years; however, depending on the aging of skin, decrease in elasticity and how deep wrinkle lines/scars are, follow up treatments can be performed in just 8-12 weeks.</p>
          </div>
          <div className="hyaluron__title">
            <p>Hyaluron Lip Treatment</p>
          </div>
        </div>
        <div className="section">Examples</div>
        <div className="examples">
          <div className="examples__fibroblast">
            <div className="examples__fibroblast--image"></div>
            <div className="examples__fibroblast--title">
              <div>
                Fibroblast Plasma
              </div>
              <div>
                - See examples -
              </div>
            </div>
          </div>
          <div className="examples__hyaluron">
            <div className="examples__hyaluron--image"></div>
            <div className="examples__hyaluron--title">
              <div>
                Hyaluron Lip Treatment
              </div>
              <div>
                - See examples -
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  )
}