import React from "react";
import CoinSearch from "../components/main/CoinSearch";
import Trending from "../components/main/Trending";

const Home = ({ coins }) => {
  return (
    <div>
      <CoinSearch coins={coins} />
      <Trending />
    </div>
  );
};

export default Home;
