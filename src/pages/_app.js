import React from "react";
import "./global.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <Navbar />
        <Component {...pageProps} />
        {/* components call */}
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
