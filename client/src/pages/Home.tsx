import React from "react";
import MainContainer from "../components/UI/MainContainer";
import PagesParent from "./Container/PagesParent";

const Home: React.FC = () => {
  return (
    <PagesParent>
      <MainContainer>
        <h1>Hello World</h1>
      </MainContainer>
    </PagesParent>
  );
};

export default Home;
