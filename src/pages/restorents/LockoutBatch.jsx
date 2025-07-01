import React from "react";
import HeroLockoutBatch from "./HeroLockoutBatch";
import AboutLockOutBeach from "./AboutLockOutBatch";
import VanueLockoutBeatch from "./VanueLockoutBeatch";

const LockoutBatch = () => {
  return (
    <div className="min-h-screen">
      <HeroLockoutBatch />
      <AboutLockOutBeach />
      {/* <VanueLockoutBeatch /> */}
    </div>
  );
};

export default LockoutBatch;
