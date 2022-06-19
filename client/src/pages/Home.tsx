import axios from "axios";
import React, { useEffect } from "react";
import AppURL from "../api";
import { images } from "../constants";
import PagesParent from "./Container/PagesParent";

const Home: React.FC = () => {
  // Test the requests api
  useEffect(() => {
    axios
      .get(AppURL.CustomersURL)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <PagesParent>
      <img alt="MERN Stack" src={images.mern} className="mern" />
    </PagesParent>
  );
};

export default Home;
