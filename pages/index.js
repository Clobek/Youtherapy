import Head from 'next/head'
import Link from 'next/link'
import img from '../public/images/peachmarble.jpg'
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
          </ul>
        </div>
      </header>
      <main>
        <div className="section">Summary</div>
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
            <p>The Hyaluron Pen is an innovative tool that injects hyaluronic acid into the skin and lips using pressurized air. The Hyaluron Pen offers beautiful results without the pain or anxiety that can come from needles</p>
            <p> The results are beautiful, adding volume, wrinkle correction and even face contouring. Clients notice the results are both long lasting and low maintenance.</p>
          </div>
          <Link href="/services/hyaluron"><div className="hyaluron__title">
            <p>Hyaluron Lip Treatment</p>
            <p>- More Info -</p>
          </div></Link>
        </div>
        <div className="section">Results</div>
        <div className="examples">
          <div className="examples__fibroblast">
            <div className="examples__fibroblast--image"></div>
            <div className="examples__fibroblast--title">
              <div>
                Fibroblast Plasma
              </div>
              <div>
                - See Results -
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
                - See Results -
              </div>
            </div>
          </div>
        </div>
        <form
        onSubmit={submitForm}
        action="https://formspree.io/maypkddv"
        method="POST"
      >
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Phone Number:</label>
        <input type="phone" name="phone" />
        <label>Message:</label>
        <input type="textarea" name="message" />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
      </main>
      <footer>
        <div className="footer">
          <div className="footer__location">
            <p>1147 16th Ave., Moline, IL 61265</p>
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