import cn from "classnames";

const FooterIsolated = ({className}:{className?:string}) => {
  return (
    <>
      <footer>
        <section className={cn("footer-top-wrapper",className)}>
          <section className="footer-top">
            <img
              className="logo"
              src="/src/assets/logos/atheros_logo_white.png"
              title="Logo"
              alt="Logo"
            />
            <span className="social-links">
              <a>
                <img
                  src="/src/assets/icons/instagram.svg"
                  title="Instagram"
                  alt="Instagram"
                />
              </a>
              <a>
                <img
                  src="/src/assets/icons//facebook.svg"
                  title="Facebook"
                  alt="Facebook"
                />
              </a>
              <a>
                <img
                  src="/src/assets/icons//linkedin.svg"
                  title="Linkedin"
                  alt="Linkedin"
                />
              </a>
            </span>
          </section>
          <section>
            <menu>
              <h2>Atheros Learning</h2>
              <li>
                <a>For Students</a>
              </li>
              <li>
                <a>For Lectors</a>
              </li>
              <li>
                <a>Sign-Up/Log-In</a>
              </li>
            </menu>
          </section>
          <section>
            <menu>
              <h2>Atheros Cloud</h2>
              <li>
                <a>Private Data Detector</a>
              </li>
              <li>
                <a>Text Classification</a>
              </li>
              <li>
                <a>Duplicates Detector</a>
              </li>
            </menu>
          </section>
          <section>
            <menu>
              <h2>Company</h2>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </menu>
          </section>
        </section>
        <section className="footer-bottom">
          <small>© Atheros Intelligence Ltd. 2023 All rights reserved</small>
        </section>
      </footer>

      <style>
        {`
          footer {
            position:sticky;
            background: #050028;
            box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
            font-size: 16px;
            color: white;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            width: 100%;
            bottom: 0px;
          }

          .footer-top-wrapper {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 48px;
            margin: 0 auto;
            padding: 16px;
          }

          .footer-top-wrapper > section {
            width: 180px;
          }

          h2 {
            text-align: left;
            color: #d2d0e6;
            margin-top: 0px;
            margin-bottom: 16px;
            opacity: 0.7;
            font-size: 16px;
            font-weight: 600;
          }

          menu {
            list-style-type: none;
            padding: 0;
            margin: 0;
          }

          menu li {
            margin-bottom: 16px;
          }

          .logo {
            width: 180px;
            margin-bottom: 8px;
          }

          .social-links {
            display: flex;
            flex-direction: row;
            gap: 8px;
            with: 180px;
          }

          .social-links img {
            width: 24px;
            height: 24px;
          }

          .footer-top {
            max-width: 800px;
          }

          .footer-bottom {
            margin-top: 48px;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
            width: 100%;
            background-color: #1f1b3d;
            padding: 4px;
          }

          .footer-bottom > small {
            font-size: 16px;
            margin: 0 4px;
          }
        `}
      </style>
    </>
  );
};

export default FooterIsolated;
