// Dependencies
import React from "react";

// Components

// Styles
import {
  HeroeCardStyle,
  CardSpace,
  NamePosition,
  Name,
  Description,
  InfoPosition,
  Button,
  ButtonText,
  Info,
  VoteBar,
  Like,
  Dislike,
  LikePerctenge,
  DislikePerctenge,
  Date,
  Category,
} from "./styles";

const HeroeCard = (props) => {
  return (
    <HeroeCardStyle img={props.img}>
      <CardSpace>
        <NamePosition>
          <Name>{props.name}</Name>
        </NamePosition>
        <Description>{props.description}</Description>
        <InfoPosition>
          <Button>
            <ButtonText>View Full Report</ButtonText>
          </Button>
          <Info>
            <Date>{props.date}</Date>
            <Category>in {props.category}</Category>
          </Info>
        </InfoPosition>
      </CardSpace>
      <VoteBar>
        <Like likeSize={props.like}>
          <LikePerctenge>{props.like}%</LikePerctenge>
        </Like>
        <Dislike dislikeSize={props.dislike}>
          <DislikePerctenge>{props.dislike}%</DislikePerctenge>
        </Dislike>
      </VoteBar>
    </HeroeCardStyle>
  );
};

export default HeroeCard;
