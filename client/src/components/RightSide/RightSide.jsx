import React, { useState } from "react";
import "./RightSide.css";

import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
import NavIcons from "../NavIcons/NavIcons";
import FollowersCard from "../FollowersCard/FollowersCard";
const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightSide">
      {/* Side Navbar */}

     
      {/* TrendCard */}
      <FollowersCard/>
      
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
