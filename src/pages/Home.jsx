import './Home.css';
import portrait from '../assets/portrait.jpeg';
import fip from '../assets/fip.png';
import progress from '../assets/progress.png';
import num from '../assets/num.png';
export default function Home() {
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#accueil">Accueil</a></li>
              <li className="nav-item"><a className="nav-link" href="#apropos">À propos</a></li>
              <li className="nav-item"><a className="nav-link" href="#competences">Compétences</a></li>
              <li className="nav-item"><a className="nav-link" href="#projets">Projets</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Section accueil */}
      <section className="hero">
        <div className="hero-left">
          <h4 className="name">Mondesire Kouadio</h4>
          <h1 className="title">PORTFOLIO</h1>
          <p className="description">
            Étudiante en informatique, passionnée par le développement web et l'intelligence artificielle.
          </p>
          <a className="btn" href="#expertise">Voir mes projets</a>
        </div>
        <div className="hero-right">
          <img src={portrait} alt="Mondesire Kouadio" className="portrait" />
        </div>
      </section>
      <section id="apropos" className="py-5">
        <div className="container">
          <h2>À propos de moi</h2>
          <ul>
            <li>Étudiante en Licence Informatique option genie logociel à Yamoussoukro</li>
            <li>Objectif : devenir ingénieure en développement logiciel</li>
          </ul>
        </div>
      </section>

      {/* Section Compétences */}
      <section id="competences" className="py-5 bg-dark text-white">
        <div className="container">
          <h2>Mes compétences</h2>
          <div className="row">
            <div className="col-md-4">
              <h5>Langages</h5>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>Boostrap</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Outils</h5>
               <ul>
                <li>Git & GitHub</li>
                <li>MySQL</li>
                <li>VS Code</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Autres</h5>
              <ul>
                <li>Algorithmique</li>
                <li>MERISE</li>
                <li>Bases de données</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="projets" className="py-5">
        <div className="container">
          <h2>Mes projets</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card project-card">
                <img src={fip} className="card-img-top" alt="" />
                <div className="card-body bg-secondary">
                  <h5 className="card-title">Page de Connexion</h5>
                  <p className="card-text">HTML, CSS, PHP</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card project-card">
                <img src={progress} className="card-img-top" alt="" />
                <div className="card-body bg-secondary">
                  <h5 className="card-title">progression</h5>
                  <p className="card-text">HTML, JS</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card project-card">
                <img src={num} className="card-img-top" alt="" />
                <div className="card-body bg-secondary">
                  <h5 className="card-title">calcul d'equation non-lineaire avec python</h5>
                  <p className="card-text">Python</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="btn btn-dark">Voir tous mes projets</a>
          </div>
        </div>
      </section>

      {/* Section Contact(footer) */}
      <section id="contact" className="py-5 bg-dark text-white">
        <div className="container">
          <h2>Contact</h2>
          <p>Tu peux me joindre par email ou via GitHub.</p>
          <p><a href="mailto:qmassuamondesirek@gmail.com">qmassuamondesirek@gmail.com</a></p>
            <p><a href="https://github.com/QMASSUADEV08">GitHub</a></p>
        </div>
      </section>
    </div>
  );
}