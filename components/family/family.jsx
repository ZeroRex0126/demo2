import styled from "styled-components";

const FamilyComp = styled.div`
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .pic {
    height: 300px;
    background-size: cover;
  }
`;

const Family = ({ webSiteSetting }) => {
  return (
    <FamilyComp id="family">
      <div className="container-fluid py-5" id="family">
        <div className="container pt-5 pb-3">
          <div className="section-title position-relative text-center">
            <h1 className="font-secondary display-4">Groomsmen & Bridesmaid</h1>
            <i className="far fa-heart text-dark"></i>
          </div>
          <div className="row">
            <div className="col-12 text-center mb-2">
              <ul className="list-inline mb-4" id="portfolio-flters">
                <li
                  className="btn btn-outline-primary font-weight-bold m-1 py-2 px-4"
                  data-filter=".first"
                >
                  Groomsmen
                </li>
                <li
                  className="btn btn-outline-primary font-weight-bold m-1 py-2 px-4"
                  data-filter=".second"
                >
                  Bridesmaid
                </li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
              <div className="position-relative mb-2">
                <div
                  className="img-fluid mr-md-3 w-100 pic"
                  style={{
                    backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
                  }}
                ></div>
                <div className="bg-secondary text-center p-4">
                  <h4 className="mb-3">Full Name</h4>
                  <p className="text-uppercase">Best Friend</p>
                  <div className="d-inline-block">
                    <a className="mx-2" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
              <div className="position-relative mb-2">
                <div
                  className="img-fluid mr-md-3 w-100 pic"
                  style={{
                    backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
                  }}
                ></div>
                <div className="bg-secondary text-center p-4">
                  <h4 className="mb-3">Full Name</h4>
                  <p className="text-uppercase">Best Friend</p>
                  <div className="d-inline-block">
                    <a className="mx-2" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
              <div className="position-relative mb-2">
                <div
                  className="img-fluid mr-md-3 w-100 pic"
                  style={{
                    backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
                  }}
                ></div>
                <div className="bg-secondary text-center p-4">
                  <h4 className="mb-3">Full Name</h4>
                  <p className="text-uppercase">Best Friend</p>
                  <div className="d-inline-block">
                    <a className="mx-2" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
              <div className="position-relative mb-2">
                <div
                  className="img-fluid mr-md-3 w-100 pic"
                  style={{
                    backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
                  }}
                ></div>
                <div className="bg-secondary text-center p-4">
                  <h4 className="mb-3">Full Name</h4>
                  <p className="text-uppercase">Best Friend</p>
                  <div className="d-inline-block">
                    <a className="mx-2" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
              <div className="position-relative mb-2">
                <div
                  className="img-fluid mr-md-3 w-100 pic"
                  style={{
                    backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
                  }}
                ></div>
                <div className="bg-secondary text-center p-4">
                  <h4 className="mb-3">Full Name</h4>
                  <p className="text-uppercase">Best Friend</p>
                  <div className="d-inline-block">
                    <a className="mx-2" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
              <div className="position-relative mb-2">
                <div
                  className="img-fluid mr-md-3 w-100 pic"
                  style={{
                    backgroundImage: `url(data:image/jpeg;base64,${webSiteSetting.heroimg})`,
                  }}
                ></div>
                <div className="bg-secondary text-center p-4">
                  <h4 className="mb-3">Full Name</h4>
                  <p className="text-uppercase">Best Friend</p>
                  <div className="d-inline-block">
                    <a className="mx-2" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="mx-2" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FamilyComp>
  );
};

export default Family;
