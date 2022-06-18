import React, { Fragment } from "react";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import AllRoutes from "./routes";

const App: React.FC = () => {
  return (
    <Fragment>
      {/* Navbar Section */}
      <Navbar />

      {/* Routes Section | Pages Section */}
      <AllRoutes />

      {/* Footer Section */}
      <Footer />
    </Fragment>
  );
};

export default App;
