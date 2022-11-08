import React from "react";
import { FeedStyle } from "../Cover/cover.elements";
import Stories from "./Stories";

function Feed() {
  return (
    <FeedStyle>
      <section className="left-side">
        {/* Stories  */}
        <Stories />
      </section>
    </FeedStyle>
  );
}

export default Feed;
