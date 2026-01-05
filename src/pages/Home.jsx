import './Home.css';
import portrait from '../assets/portrait.jpeg';

export default function Home() {
  return (
    <div>
      {/* Section accueil */}
      <section className="hero">
        <div className="hero-left">
          <h4 className="name">Mondesire Kouadio</h4>
          <h1 className="title">PORTFOLIO</h1>
          <h2 className="subtitle">Creative</h2>
          <p className="description">
            Étudiante en informatique, passionnée par le développement web et l'intelligence artificielle.
          </p>
          <a className="btn" href="#expertise">Voir mes projets</a>
        </div>
        <div className="hero-right">
          <img src={portrait} alt="Qauser Massua" className="portrait" />
        </div>
      </section>

      {/* Section expertise (collée sur la même page) */}
      <section id="expertise" className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-0">Mon expertise</h2>
          <h3 className="fw-light fs-5">Développement web et hobbies</h3>

          <div className="row gy-4 mt-4">
            <div className="col-12 col-md-7">
              {/* Exemple HTML5 */}
              <div className="mb-3 p-3 bg-white">
                <div className="row align-items-center">
                  <div className="col-5 col-sm-4 col-md-3 col-xl-2">
                    <div className="d-flex align-items-center">
                      <i className="fab fa-html5 fa-2x me-3 text-primary"></i>
                      <p className="fw-bold m-0">HTML5</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        75%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ajoute ici SQL, JS, CSS3, PHP comme dans ton code */}
            </div>

            <div className="col-12 offset-md-1 col-md-4">
              <img src="fip.png" alt="mon interface" width="100%" />
            </div>
          </div>

          {/* Hobbies */}
          <div className="row gy-4 mt-4">
            <div className="col-12 col-md-4">
              <img src="ququ.jpg" alt="hobby" width="100%" />
            </div>
            <div className="col-12 order-first offset-md-1 col-md-7 order-md-last">
              {/* Exemple musique */}
              <div className="mb-3 p-3 bg-white">
                <div className="row align-items-center">
                  <div className="col-5 col-sm-4 col-lg-3 col-xl-2">
                    <div className="d-flex align-items-center text-uppercase">
                      <i className="fas fa-music fa-2x me-3 text-primary"></i>
                      <p className="fw-bold m-0">écouter la musique</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        75%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ajoute ici manger, dormir, netflix, balade */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}