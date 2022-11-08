import React from "react";
import { Storystyle } from "../Cover/cover.elements";

function Story({ avatar, username }) {
  return (
    <>
      <Storystyle>
        <img src={avatar} alt="avatar" />
        <p className="">{username}</p>
      </Storystyle>
    </>
  );
}

export default Story;
