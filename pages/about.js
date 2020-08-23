import Head from 'next/head'
import Link from 'next/link'
import '../assets/style.scss'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Youtherapy</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/8187678fb5.js" crossOrigin="anonymous" defer></script>
      </Head>
      <header>
      <Link href="/"><div className="logo"></div></Link>
        <nav>
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
              <div className="dropbtn">Gallery&nbsp;<i aria-hidden className="fas fa-caret-down"></i><i aria-hidden className="fas fa-caret-up"></i></div>
              <div className="dropdown-content">
                <Link href="/gallery/fibroblast"><a>Fibroblast</a></Link>
                <Link href="/gallery/hyaluron"><a>Hyaluron</a></Link>
              </div>
            </li>
            <li><Link href="/prices"><a>Price List</a></Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="about">
          <div className="top-right">Katie Jo</div>
          <div className="left"></div>
          <div className="center"><p>At an early age I always knew I would either own or operate a business. From childhood to adulthood I would help around my mother's businesses; it wasn't until I was older and managing my mother's beauty salon that my passion for the beauty industry began. 
          After extensive research I decided to attend Aveda Institute of Chicago where I fell in love with natural health and beauty. Training in both Cosmetology and Esthiology I worked with clients at Aveda salons as well as on the sets for music videos, fashion shows and even television shows. I loved all the services I provided but especially enjoyed my skincare appointments. It's because of this that I decided to further my education in skincare.</p> 
          
          <p>While pregnant and researching natural anti-aging treatments, I learned about these life changing treatments. After having my son, I went back to school to get certified for both the Fibroblast Plasma Pen as well as the Hyaluron Pen. Now, full circle I have opened my own business. Youtherapy Modern Skincare a you-nique beauty boutique specializing in natural-looking, non-surgical facial rejuvenation and skincare for both men and women. I am the first and only Fibroblast and Hyaluron technician in the Quad Cities. I remain dedicated to staying educated on the latest advancements/technology in natural skincare. My goal is to create a comfortable and private atmosphere focusing on making people feel beautiful, confident and more comfortable in their own skin.</p> 

          <p>*Due to high service requests I also travel between Chicago IL, Madison WI, Denver CO and Los Angeles CA. If you are interested in me coming to your area for a treatment please request a consultation.</p></div>
          <div className="right"></div>
        </div>
      </main>
      <footer>
        <div className="footer">
          <div className="footer__location">
            <p>1147 16th Ave., Moline, IL 61265</p>
            <p>kj@youtherapyskin.com</p>
            <p>(818)825-6441</p>
          </div>
          <div className="footer__links">
            <a href="https://www.instagram.com/youtherapy_modern_skincare/" target="_blank" rel="noopener noreferrer"><i aria-hidden className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/youtherapymodernskincare" target="_blank" rel="noopener noreferrer"><i aria-hidden className="fab fa-facebook-square"></i></a>
          </div>
        </div>
        <div className="footer__section"></div>
        <div className="footer__signature">
          <a href="">Bryce Belock</a>&nbsp;© 2020
        </div>
      </footer>
    </div>
  )
}