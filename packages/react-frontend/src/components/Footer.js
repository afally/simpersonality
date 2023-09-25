import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter style={{ backgroundColor: "#0C6DFD" }} className="text-white ">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span className="text-white">
            Get connected with us on social networks:
          </span>
        </div>

        <div>
          <a
            href="https://www.facebook.com/your-facebook-page"
            className="me-4 text-reset text-white"
          >
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a
            href="https://www.facebook.com/your-facebook-page"
            className="me-4 text-reset text-white"
          >
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a
            href="https://www.facebook.com/your-facebook-page"
            className="me-4 text-reset text-white"
          >
            <MDBIcon color="secondary" fab icon="google" />
          </a>
          <a
            href="https://www.facebook.com/your-facebook-page"
            className="me-4 text-reset text-white"
          >
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a
            href="https://www.facebook.com/your-facebook-page"
            className="me-4 text-reset text-white"
          >
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a
            href="https://www.facebook.com/your-facebook-page"
            className="me-4 text-reset text-white"
          >
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section>
        <MDBContainer className="text-center text-md-start mt-5 text-white">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-white">
                <MDBIcon color="white" icon="gem" className="me-3" />
                Personality Company
              </h6>
              <p>Learn about your personality</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Personality test 1.0
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Personality test 2.0
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Personality test 1.0
                </a>
              </p>
              <p>
                <a
                  href="https://www.facebook.com/your-facebook-page"
                  className="text-reset"
                >
                  Personality test 2.0
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                info@example.com
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          personality.com
        </a>
      </div>
    </MDBFooter>
  );
}
