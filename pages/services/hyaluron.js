import Head from 'next/head'
import Link from 'next/link'
import '../../assets/style.scss'

export default function Hyaluron() {
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
        <div className="hyla">
          <div className="hyla__title">Hyaluron Lip Treatment</div>
          <div className="hyla__what">
            <h2>What is Hyaluron Lip Treatment?</h2>
            <p>The hyaluronic acid treatment pen is one of the newest techniques for plumping lips and adding volume to the face without the risk associated with needle injections. It is fast, pain-free, and non-invasive. The Hyaluron Pen is used to infuse the skin with Hyaluronic Acid to plump and eliminate wrinkles and to fill and augment lips and eliminate fine lines and wrinkles caused by aging or sun damage. It works by using pressure technology to allow Hyaluronic Acid to transfer into the skin through nano-scale molecules. Hyaluronic Acid is naturally produced by the body and therefore there is no risk of an allergic reaction. If you're afraid of needles and have always wanted a fuller pout, more voluminous lips, and to fill sunken areas of the face, contact Youtherapy for a complimentary consultation.</p>
          </div>
          <div className="hyla__safe">
            <h2>Safe, Effective and Simple</h2>
            <p>Hyaluronic Acid is used to treat marionette lines, nasolabial folds, augment lips, and fill in acne scars among other wrinkles on the face. Because it only penetrates the epidermis, it is safer than risky injectables that cause lumps and bruising.  With this infusion technology, puncturing blood vessels is avoided.</p>
            <p>Hyaluronic Acid is a sugar naturally found in the human body.  It attracts water and keeps your skin hydrated, resulting in firmer, more youthful-looking skin.  With aging, our bodies produce less Hyaluronic Acid, causing skin to wrinkle and sag. Placing this naturally-occurring substance into our skin helps to rejuvenate our skin and lips without the risk of complications or allergic reactions.</p>
          </div>
          <div className="hyla__comp">
            <h2>Ditch the injections!</h2>
            <p>Hyaluronic Acid addresses the root cause of the problem by increasing hydration and thereby plumps wrinkles and lips.  Compared to fillers and needle injections, Hyaluron Pen needleless injections are safer with less risk. There’s a reason cosmetic experts and clients alike have been shifting from injections to these treatments. This technology was originally developed decades ago to inject insulin into the skin of diabetic patients without the use of painful needles. Since that time, this technology has been scientifically proven to infuse Hyaluronic Acid into areas of the face and neck, including the lips. Try this safe and effective alternative for attaining luscious lips and youthful skin. Contact us today to learn more about this treatment during a complimentary consultation.​</p>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer">
          <div className="footer__location">
            <p>1147 16th Ave., Moline, IL 61265</p>
            <p>kj@youtherapyskin.com</p>
            <p><a href="tel:8188256441">(818)825-6441</a></p>
          </div>
          <div className="footer__links">
            <a href="https://www.instagram.com/youtherapy_modern_skincare/" target="_blank" rel="noopener noreferrer"><i aria-hidden className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/youtherapymodernskincare" target="_blank" rel="noopener noreferrer"><i aria-hidden className="fab fa-facebook-square"></i></a>
          </div>
        </div>
        <div className="footer__section"></div>
        <div className="footer__signature">
          <a href="https://www.linkedin.com/in/bryce-belock/" target="_blank" rel="noopener noreferrer">Bryce Belock</a>&nbsp;© 2020
        </div>
      </footer>
    </div>
  )
}