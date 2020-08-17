import Head from 'next/head'
import Link from 'next/link'
import '../../assets/style.scss'

export default function Fibroblast() {
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
            <li><Link href="/prices"><a>Price List</a></Link></li>
            <li><Link href="/specials"><a>Specials</a></Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="fibro">
          <div className="fibro__title">Fibroblast Plasma</div>
          <div className="fibro__how">
            <h2>How does Fibroblast Plasma work?</h2>
            <p>Fibroblast is a relatively new innovation in the beauty industry in North America but has been used since 1994 in Europe. The extremely accurate hand held device works by utilizing the voltage in the air between its tip and the natural gasses emitted from our skin, to form a plasma charge. A small electrical arc is created and instantly shrinks the targeted skin.  The tissues retract and tighten giving you more youthful looking skin.</p>
          </div>
          <div className="fibro__what">
            <h2>What is it used to treat?</h2>
            <p>Fibroblast is able to treat a number of imperfections without any actual cutting of the skin. It can be used for:</p>
            <ul>
              <li>Eyelid Tightening, including under eyes and excess upper eyelid skin</li>
              <li>Skin imperfections/Scars</li>
              <li>Improvement in the appearance of acne scars</li>
              <li>Tightening loose stomach skin after pregnancy</li>
              <li>Lines and wrinkles around the mouth</li>
              <li>Jowls and Neck Tightening</li>
              <li>Knee Caps and Under Arms</li>
              <li>And much more!</li>
            </ul>
          </div>
          <div className="fibro__duration">
            <h2>How long does it last?</h2>
            <p>As Fibroblast is more than a simple tightening treatment (skin volume is actually reduced), the effects should last as long as they would with invasive surgery.  Like all surgical and cosmetic procedures, the effects of Fibroblast are not entirely permanent as it does not stop any further aging, but the positive results should last years depending on the area treated. The positive effects of treatment will be noticeable immediately after the first treatment, but the final results will be seen after 8 weeks. For some, an additional treatment may be required after 8 weeks for maximum results.  Additionally, there are lifestyle factors that can prevent the result from lasting as long as they can, such as smoking, alcohol consumption, and prolonged sun exposure. ​</p>
          </div>
          <div className="fibro__risks">
            <h2>What are the risks?</h2>
            <p>Fibroblast has been shown to be a safe treatment due to its non-invasive nature when done by a fully certified technician. Still the majority of clients are likely to experience some minor side effects in the 7-10 days following treatment. There will be small carbon crusts (little polkadots) in the treated area that beneath. Swelling in the eye area is to be expected for a few days following an upper eyelid treatment. To avoid any more serious side effects such as hyper-pigmentation, follow the aftercare recommendations given to you by your technician.</p>
          </div>
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
        <div className="footer__signature">Website design & code by Bryce Belock</div>
      </footer>
    </div>
  )
}