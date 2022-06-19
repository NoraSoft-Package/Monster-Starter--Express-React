import React from "react";
import { images } from "../constants";
import PagesParent from "./Container/PagesParent";

const Home: React.FC = () => {
  return (
    <PagesParent>
      <img alt="MERN Stack" src={images.mern} className="mern" />
    </PagesParent>
  );
};

export default Home;
