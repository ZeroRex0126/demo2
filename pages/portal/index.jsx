import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Component, useEffect, useState } from "react";
import Home from "../index";
import PortalHome from "./home";
import SideNav from "./portalComp/sideNav/sideNav";
import { getReservationDatas } from "../../libs/web-util";
import Comment from "./comment";
import { Loading, Modal } from "../../components";
import Login from "./login";

function useLocalStorageForPageKey(key, fallbackValue) {
  const [value, setValue] = useState(fallbackValue);
  useEffect(() => {
    const stored = localStorage.getItem(key);
    setValue(stored ? stored : fallbackValue);
  }, [fallbackValue, key]);

  return [value, setValue];
}

const theUser = "YWRtaW4=";
const pw = "YWRtaW4=";

const portal = () => {
  const [login, setLogin] = useState(localStorage.getItem("login"));
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useLocalStorageForPageKey("page", "home");
  const [reservation, setReservation] = useState();

  // login Functions
  function checkForInactivity() {
    if (login) {
      const expireTime = localStorage.getItem("expireTime");
      if (expireTime < Date.now()) {
        console.log("Token Expire, loggin out");
        setLogin(false);
        localStorage.setItem("login", false);
      }
    }
  }

  function updateExpireTime() {
    const expireTime = Date.now() + 300000;
    localStorage.setItem("expireTime", expireTime);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      checkForInactivity();
    }, 5000);

    return () => clearInterval(interval);
  }, [login]);

  useEffect(() => {
    checkForInactivity();
    // updateExpireTime();
    window.addEventListener("click", updateExpireTime);
    window.addEventListener("keypress", updateExpireTime);
    window.addEventListener("scroll", updateExpireTime);
    window.addEventListener("mousemove", updateExpireTime);

    return () => {
      window.removeEventListener("click", updateExpireTime);
      window.removeEventListener("keypress", updateExpireTime);
      window.removeEventListener("scroll", updateExpireTime);
      window.removeEventListener("mousemove", updateExpireTime);
    };
  }, []);
  //end login Function

  async function GetData() {
    let reservation = await getReservationDatas();
    setReservation(reservation);
    if (loading) {
      setLoading(false);
    }
  }

  useEffect(() => {
    GetData();
  }, []);

  function LogData() {
    console.log(reservation);
  }

  function loginFunc(username, password) {
    if (btoa(username.toLowerCase()) === theUser && btoa(password) === pw) {
      console.log("is valid");
      setLoginError(false);
      setLogin(true);
      localStorage.setItem("login", true);
    } else {
      setLoginError(true);
      console.log("invalid password");
    }
  }

  function logout() {
    setLogin(false);
    localStorage.setItem("login", false);
  }

  function setPageStore(key, value) {
    localStorage.setItem(key, value);
    setPage(value);
  }

  function show() {
    switch (page.toLowerCase()) {
      case "home":
        return <PortalHome GetData={GetData} reservation={reservation} />;
      case "comment":
        return <Comment reservation={reservation} />;
      default:
        return <PortalHome reservation={reservation} />;
    }
  }

  function logoutModalBody() {
    return (
      <>
        <p>Are you sure you want to logout?</p>
      </>
    );
  }

  return !loading ? (
    login && login != "false" ? (
      <div>
        <Head>
          <title>Portal Management Screen</title>
          <meta name="description" content="Setting Page for the Site" />
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        <SideNav page={page} setPageStore={setPageStore} />
        <div className="settingContainer">{show()}</div>
        <Modal
          modalID={"logoutModal"}
          labelID={"logout"}
          label={"Logout Confirmation"}
          hasFooter={true}
          modalBody={logoutModalBody}
          center={true}
          hasSubmitBtn={true}
          submitBtnFunc={() => {
            logout();
          }}
          submitBtnLabel={"Logout"}
          submitBtnID={"logoutBtn"}
        />
      </div>
    ) : (
      <Login loginFunc={loginFunc} loginError={loginError}></Login>
    )
  ) : (
    <Loading />
  );
};

export default portal;
