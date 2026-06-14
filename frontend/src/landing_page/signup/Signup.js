import React from "react";
import Sign from "./Sign";
import Lasthero from "./LastHero";
import Hero from "./Hero";
import Explore from "./Explore";
import Steps from "./Steps";
import Benifits from "./Benifits";

function Signup() {
  return (
    <>
      <Hero />
      <Sign />
      <Explore />
      <Steps />
      <Benifits />
      <Lasthero />
    </>
  );
}

export default Signup;
