import React from "react";
import Icon1 from "../../img/icon/svg-1.svg";
import Icon2 from "../../img/icon/svg-2.svg";
import Icon3 from "../../img/icon/svg-3.svg";
import reactIcon from "../../img/tech/react.png";
import angularIcon from "../../img/tech/angular.svg";
import laravelIcon from "../../img/tech/laravel.png";
import bootstrapIcon from "../../img/tech/bootstrap.png";
import mongodbIcon from "../../img/tech/mongodb.png";

import {
  TechContainer,
  TechWrapper,
  TechRec,
  TechTextWrapper,
  TechP,
  TechH1,
  TechIconsContainer,
  TechIcon,
} from "./TechnologyElements";

const Technology = () => {
  return (
    <>
      <TechContainer id="technology">
        <TechWrapper>
          <TechRec/>
          <TechTextWrapper>
            <TechP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a dictum orci. Sed sed ultrices mauris, non rhoncus ligula. Cras tincidunt eget leo vitae fringilla. Fusce efficitur,enim sit amet sagittis maximus, velit justo semper turpis, ac mollis neque justo id leo.Suspendisse volutpat felis eu gravida ullamcorper.
            </TechP>
            <TechP>
              Morbi venenatis euismod sapien, faucibus porttitor urna tempus ac. Pellentesque rhoncus ligula vel enim ullamcorper accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut urna sed augue posuere semper.
            </TechP>
          </TechTextWrapper>
          <TechIconsContainer>
              <TechIcon src={reactIcon}/>
              <TechIcon src={angularIcon}/>
              <TechIcon src={laravelIcon}/>
              <TechIcon src={bootstrapIcon}/>
              <TechIcon src={mongodbIcon}/>
          </TechIconsContainer>
        </TechWrapper>
      </TechContainer>
    </>
  );
};

export default Technology;
