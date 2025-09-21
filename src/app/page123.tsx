import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <div className="site_content">
      {/* Preloader Start */}
      <div className="loader-mask">
        <div className="loader">
          <div></div>
          <div></div>
        </div>
      </div>
      {/* Preloader End */}

      {/* Splashscreen Details Section Start */}
      <section id="splashscreen">
        <div className="splashscreen-overlay">
          <div className="container">
            <div className="splash_fullsection">
              <div className="splash_top">
                <div className="logo_sec">
                  <a href="javascript:void(0)">
                    <Image
                      src="/assets/images/splashscreen/logo.png"
                      alt="logo"
                      width={120}
                      height={120}
                    />
                  </a>
                </div>
                <div className="logo_details">
                  <h1>Graha Group</h1>
                  <p>Decor the dreams with wood beauty</p>
                </div>
              </div>
              <div className="splash_bottom">
                <a href="onboardscreen.html">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Splashscreen Details Section End */}

      {/* External scripts */}
      <Script src="/assets/js/jquery-min-3.6.0.js" strategy="beforeInteractive" />
      <Script src="/assets/js/slick.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/custom.js" strategy="lazyOnload" />
    </div>
  );
}
