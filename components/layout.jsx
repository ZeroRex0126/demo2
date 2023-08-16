import { Fragment } from "react";
import Contact from "./contact/contact";
import TopNav from "./topNav/topNav";

function Layout(props) {
  return (
    <Fragment>
      {/* navigateion */}
      <div className="navContainer">
        {/* <TopNav /> */}
      </div>
      {/* main app */}
      <main>{props.children}</main>
      {/* footer */}
      <footer className="footer">
        {/* <Contact webSiteSetting={props.webSiteSetting} /> */}
      </footer>
    </Fragment>
  );
}

export default Layout;
