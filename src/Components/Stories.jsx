import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";
import { Storiesstyle } from "../Cover/cover.elements";

function Stories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setStories(
      [...Array(30)].map((profile) => ({
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        avatar: faker.image.avatar(),
      }))
    );
  }, []);
  return (
    <Storiesstyle>
      {stories &&
        stories.map((profile) => (
          <Story
            key={profile.userId}
            username={profile.username}
            avatar={profile.avatar}
          />
        ))}
    </Storiesstyle>
  );
}

export default Stories;
