// Dependencies
import React, { Component } from "react";

// Components
import HeroeCard from "../../Components/HeroeCard";

// Styles
import { HeroeSectionStyle } from "./styles";

export default class HeroeSection extends Component {
  render() {
    return (
      <HeroeSectionStyle>
        <HeroeCard
          name="Kanye West"
          img="kw"
          description="Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero."
          date="1 Mounth Ago"
          category="Entertainment"
          like="64"
          dislike="36"
        />
        <HeroeCard
          name="Mark Zuckerberg"
          img="mz"
          description="Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero."
          date="1 Mounth Ago"
          category="Business"
          like="36"
          dislike="64"
        />
        <HeroeCard
          name="Cristina Fernández de Kirchner"
          img="cfk"
          description="Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero."
          date="1 Mounth Ago"
          category="Politics"
          like="36"
          dislike="64"
        />
        <HeroeCard
          name="Malala Yousafzai"
          img="my"
          description="Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero."
          date="1 Mounth Ago"
          category="Entertainment"
          like="64"
          dislike="36"
        />
      </HeroeSectionStyle>
    );
  }
}
