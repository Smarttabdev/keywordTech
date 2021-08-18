

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


const Footer = (props) =>
{

  return (
    <footer id="footer" className="pt-0">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>KeywordAmazon</h3>
              <p>
                .... Street <br /> .... City, 00000 Zip Code<br /> .... <br /><br />
                <strong>Phone:</strong> Phone Number<br />
                <strong>Email:</strong> info@example.com<br />
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Site Map</h4>
              <ul>
                <li>
                  <KeyboardArrowRightIcon className="fs-5 hover-col" /> <a href="/">Home Page</a>
                </li>
                <li>
                  <KeyboardArrowRightIcon className="fs-5 hover-col" />
                  <a href="/user/legal">Impressum</a>
                </li>
                <li>
                  <KeyboardArrowRightIcon className="fs-5 hover-col" />
                  <a href="/user/policy">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" /><input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-md-flex py-3">
        <div className="me-md-auto text-center text-md-start">

          <div className="credits">
            {/* <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you purchased the pro version. -->
            <!-- Licensing information: https://bootstrapmade.com/license/ -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/bikin-free-simple-landing-page-template/ -->
            <!-- Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> --> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;