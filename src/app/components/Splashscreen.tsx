import Image from "next/image";

export default function Splashscreen() {
  return (
    <section id="splashscreen">
      <div className="splashscreen-overlay">
        <div className="container">
          <div className="splash_fullsection">
            <div className="splash_top">
              <div className="logo_sec">
                <a href="#">
                  <Image
                    src="/assets/images/splashscreen/logo.png"
                    alt="logo"
                    width={120}
                    height={120}
                    priority
                  />
                </a>
              </div>
              <div className="logo_details">
                <h1>Brookwood</h1>
                <p>Decor the dreams with wood beauty</p>
              </div>
            </div>
            <div className="splash_bottom">
              <a href="/onboardscreen.html">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
