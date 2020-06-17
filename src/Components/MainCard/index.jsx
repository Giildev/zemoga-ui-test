// Dependencies
import React, { useState } from "react";

// Components

// Styles
import {
  Box,
  BoxContainer,
  Text,
  Title,
  Content,
  LinkContainer,
  Icon,
  Link,
  CTAText,
  VoteBox,
  Upvote,
  Downvote,
} from "./styles";

const MainCard = (props) => {
  const [voted, setVoted] = useState(null);
  return (
    <Box>
      <BoxContainer>
        <Text>What’s your opinion on</Text>
        <Title>Pope Francis?</Title>
        <Content>
          He’s talking tough on clergy sexual abuse, but is he just another
          papal pervert protector? (thumbs down) or a true pedophile punishing
          pontiff? (thumbs up){" "}
        </Content>
        <LinkContainer>
          <Icon></Icon>
          <Link href="#">More information</Link>
        </LinkContainer>
        <CTAText>What’s Your Verdict?</CTAText>
      </BoxContainer>
      <VoteBox>
        <Upvote voted={voted} onClick={() => setVoted(true)}></Upvote>
        <Downvote voted={voted} onClick={() => setVoted(false)}></Downvote>
      </VoteBox>
    </Box>
  );
};

export default MainCard;
