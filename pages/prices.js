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
        <div className="prices"></div>
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
          <a href="">Bryce Belock</a>&nbsp;© 2020
        </div>
      </footer>
    </div>
  )
}