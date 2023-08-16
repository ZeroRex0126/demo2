import { useState } from "react";
import styled from "styled-components";
import { fontColor, primaryColor } from "../../../../libs/color";
import { CusButton } from "../../../../components";

const SideNavbar = styled.div`
  position: fixed;
  min-height: 100vh;

  border-right: solid ${fontColor} 3px;

  li {
    cursor: pointer;
  }

  a,
  a:hover,
  a:focus {
    text-decoration: none;
    transition: all 0.3s;
  }

  .navbar {
    padding: 15px 10px;
    background: #fff;
    border: none;
    border-radius: 0;
    margin-bottom: 40px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }

  .line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
  }

  .wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
  }

  .btn-logout {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #sidebar {
    min-height: 100vh;
    min-width: 250px;
    max-width: 250px;
    background-color: ${primaryColor};
    color: ${fontColor};
    transition: all 0.3s;
  }

  #sidebar.active {
    margin-left: -250px;
  }

  #sidebar .sidebar-header {
    padding: 20px;
    background-color: ${primaryColor};
    color: ${fontColor};
  }

  #sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid ${fontColor};
  }

  #sidebar ul p {
    color: ${fontColor};
    padding: 10px;
  }

  #sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
  }

  #sidebar ul li a:hover {
    background-color: ${fontColor};
    color: ${primaryColor};
  }

  #sidebar ul li.active > a {
    background-color: ${fontColor};
    color: ${primaryColor};
    // border-top-left-radius: 25px;
    // border-bottom-left-radius: 25px;
  }

  a[data-toggle="collapse"] {
    position: relative;
  }

  .dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #6d7fcc;
  }

  ul.CTAs {
    padding: 20px;
  }

  ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
  }

  .text {
    display: flex;

    font-size: 0.8rem;
    width: 250px;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  .footer {
    position: fixed;
    bottom: 10px;
  }

  @media (max-width: 768px) {
    #sidebar {
      margin-left: -250px;
    }
    #sidebar.active {
      margin-left: 0;
    }
    #sidebarCollapse {
      width: 35px;
      height: 35px;
      position: fixed;
      display: flex;
      top: 10px;
      left: 10px;
      background-color: transparent;
      border-color: transparent;
      z-index: 10;
      transition: all 0.3s;
    }
    #sidebarCollapse.active {
      left: 210px;
      color: ${fontColor};
    }
  }
`;

const SideNav = ({ page, setPageStore }) => {
  const [active, setActive] = useState(false);
  return (
    <SideNavbar>
      <nav id="sidebar" className={active ? "active" : ""}>
        <div className="sidebar-header">
          <h3>Reservation Portal</h3>
        </div>
        <ul className="list-unstyled components">
          {/* <p>Dummy Heading</p> */}
          <li className={`${page.toLowerCase() === "home" ? "active" : ""}`}>
            <a
              onClick={() => {
                setPageStore("page", "home");
                setActive(false);
              }}
            >
              Dashboard
            </a>
          </li>
          <li className={`${page.toLowerCase() === "comment" ? "active" : ""}`}>
            <a
              onClick={() => {
                setPageStore("page", "comment");
                setActive(false);
              }}
            >
              What People Say?
            </a>
          </li>
          {/* <li className={`${page.toLowerCase() === "d" ? "active" : ""}`}>
            <a
              onClick={() => {
                setPageStore("page", "home");
                setActive(false);
              }}
            >
              Portfolio
            </a>
          </li>
          <li className={`${page.toLowerCase() === "d" ? "active" : ""}`}>
            <a
              onClick={() => {
                setPageStore("page", "home");
                setActive(false);
              }}
            >
              Contact
            </a>
          </li> */}
        </ul>
        <div className="text">More Options Coming Soon!</div>

        <div className="btn-logout">
          <button
            className="btn btn-danger  "
            data-bs-toggle="modal"
            data-bs-target="#logoutModal"
          >
            Logout
          </button>
        </div>
        <div className="text footer">Design & Created by The Envelope</div>
      </nav>

      <button
        type="button"
        id="sidebarCollapse"
        className={`btn btn-info ${active ? "active" : ""}`}
        onClick={() => {
          setActive(!active);
        }}
      >
        <span>X</span>
      </button>
    </SideNavbar>
  );
};

export default SideNav;
