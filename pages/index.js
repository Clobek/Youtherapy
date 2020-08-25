import Head from 'next/head'
import Link from 'next/link'
import '../assets/style.scss'
const {useState, useEffect} = React

export default function Home() {

  const [state, setState] = useState({
    status: ''
  });

  const submitForm = (ev) =>{
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setState({ status: "SUCCESS" });
      } else {
        setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  };

  const {status} = state;

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
        <div className="fibroblast">
          <Link href="/services/fibroblast"><div className="fibroblast__title">
            <p>Fibroblast Plasma</p>
            <p>- More Info -</p>
          </div></Link>
          <div className="fibroblast__description">
            <p>Fibroblast is the only cosmetic treatment using plasma to reduce the volume of excess skin. As a less expensive, low risk procedure with minimal downtime, Fibroblast is a great alternative to surgery.</p>
            <p> Results are expected to last 3-5 years; however, depending on the aging of skin, decrease in elasticity and how deep wrinkle lines/scars are, follow up treatments can be performed in just 8-12 weeks.</p>
          </div>
        </div>
        <div className="hyaluron">   
          <div className="hyaluron__description">
            <p>The Hyaluron Pen is an innovative tool that injects hyaluronic acid into the skin and lips using pressurized air. The Hyaluron Pen offers beautiful results without the pain or anxiety that can come from needles.</p>
            <p> The results are beautiful, adding volume, wrinkle correction and even face contouring. Clients notice the results are both long lasting and low maintenance.</p>
          </div>
          <Link href="/services/hyaluron"><div className="hyaluron__title">
            <p>Hyaluron Lip Treatment</p>
            <p>- More Info -</p>
          </div></Link>
        </div>
        <div className="section">Results</div>
        <div className="examples">
          <Link href="/gallery/fibroblast"><div className="examples__fibroblast">
            <div className="examples__fibroblast--image"></div>
            <div className="examples__fibroblast--title">
              <div>
                Fibroblast Plasma
              </div>
              <div>
                - See Results -
              </div>
            </div>
          </div></Link>
          <Link href="/gallery/hyaluron"><div className="examples__hyaluron">
            <div className="examples__hyaluron--image"></div>
            <div className="examples__hyaluron--title">
              <div>
                Hyaluron Lip Treatment
              </div>
              <div>
                - See Results -
              </div>
            </div>
          </div></Link>
        </div>
        <div className="section">Contact</div>
        <form
          onSubmit={submitForm}
          action="https://formspree.io/maypkddv"
          method="POST"
        >
          <div className="form">
            <div className="form__left">
                <input type="text" name="name" id="name" placeholder="Name (Required)" required/>
                <input type="tel" name="phone" id="phone" maxLength="15" placeholder="Phone (Required)" required/>
                <input type="email" name="email" id="email" placeholder="Email (Required)" required/>
            </div>
            <div className="form__right">
              <textarea name="message" id="message" placeholder="Additional comments or questions... (Optional)"/>
            </div>
          </div>
          <div className="submit">
            {status === "SUCCESS" ? <p>Thank you! Your message has been successfully sent.</p> : <button><span>Send</span><i aria-hidden className="far fa-envelope"></i></button>}
          </div>
        </form>
        {status === "ERROR" && <div className="error">Ooops! There was an issue sending your message. Make sure there are no issues with the form.</div>}
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