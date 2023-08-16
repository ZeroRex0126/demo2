import Head from "next/head";
import Layout from "../components/layout.jsx";
import { useState, useEffect } from "react";
import { getRemainingDate, getWebSettingData } from "../libs/web-util";
import "../styles/globals.css";
import "../styles/index.scss";
import "../styles/settings.scss";
import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [doorOpen, setDoorOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [webSiteSetting, setWebSiteSetting] = useState({});
  const [remainingTime, setRemainingTime] = useState({});

  async function getWebData() {
    let webSettings = await getWebSettingData();
    setWebSiteSetting(webSettings[0]);
    let date = getRemainingDate(webSettings[0]);
    setRemainingTime(date);
    setLoading(false);
  }

  const router = useRouter();

  function calRemaining() {
    if (webSiteSetting && webSiteSetting != {}) {
      let date = getRemainingDate(webSiteSetting);
      setRemainingTime(date);
    }
  }

  useEffect(() => {
    if (router.pathname != "/portal") {
      getWebData();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div
    // className={`${
    //   !doorOpen && router.pathname != "/portal" ? "diableScroll" : ""
    // }`}
    >
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {/* {router.pathname != "/portal" ? (
          <>
            <a
              className={`${loading ? "loading" : "completed"} play-btn ${
                doorOpen ? "hide" : ""
              }`}
              onClick={() => {
                if (!loading && !doorOpen) {
                  setDoorOpen(!doorOpen);
                }
              }}
            >
              {!loading ? (
                <span className="play"></span>
              ) : (
                <div className="spinner-border" role="status"></div>
              )}
            </a>
            <div className="doorContainer">
              <div className={`door left ${doorOpen ? "open" : ""}`}>
                <Fade
                  className="doorLeftPic"
                  direction="left"
                  duration={2000}
                  triggerOnce={true}
                >
                  <Image
                    width={350}
                    height={350}
                    src={"/webContent/topLeft.png"}
                  />
                </Fade>
                {webSiteSetting.groom ? (
                  <span>{webSiteSetting.groom.name} &</span>
                ) : (
                  ""
                )}
              </div>
              <div className={`door right ${doorOpen ? "open" : ""}`}>
                <Fade
                  className="doorRightPic"
                  direction="right"
                  duration={2000}
                  triggerOnce={true}
                >
                  <Image
                    width={350}
                    height={350}
                    src={"/webContent/bottomRight.png"}
                  />
                </Fade>
                {webSiteSetting.bride ? (
                  <span>& {webSiteSetting.bride.name}</span>
                ) : (
                  ""
                )}
              </div>
            </div>
          </>
        ) : (
          <></>
        )} */}
        {!loading ? (
          <Component
            {...pageProps}
            webSiteSetting={webSiteSetting}
            remainingTime={remainingTime}
            calRemaining={calRemaining}
          />
        ) : (
          <div className="loadingMain">
            <div className="sec-loading">
              <div className="one"></div>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
}

export default MyApp;
