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
  TeamContainer,
  TeamWrapper,
  TechTextWrapper,
  TeamH1,
  TeamH3,
  TeamP,
  TeamText,
  TeamRectContainer,
  TeamRec,
  TeamItemsContainer,
  TeamItem,
  TeamBg,
} from "./TeamElements";
import { NavItem, NavLinks, NavMenu } from "../Navbar/NavbarElements";

const Team = () => {
  return (
    <>
      <TeamContainer>
        <TeamBg />
        <TeamWrapper>
          <TeamH1 id="team">
            Equipo de trabajo
            <TeamRectContainer>
              <TeamRec width="20px" />
              <TeamRec width="40px" />
              <TeamRec width="100px" />
            </TeamRectContainer>
          </TeamH1>
          <TechTextWrapper>
            <TeamText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum a dictum orci. Sed sed ultrices mauris, non rhoncus
              ligula. Cras tincidunt eget leo vitae fringilla. Fusce
              efficitur,enim sit amet sagittis maximus, velit justo semper
              turpis, ac mollis neque justo id leo.Suspendisse volutpat felis eu
              gravida ullamcorper.
            </TeamText>
          </TechTextWrapper>
          <TeamItemsContainer>
            <TeamItem>
              <TeamH3>Staffing</TeamH3>
              <TeamP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum a dictum orci. Sed sed ultrices mauris, non rhoncus
                ligula. Cras tincidunt eget leo vitae fringilla.
              </TeamP>
              <NavMenu>
                <NavItem>
                <NavLinks noeffect whiteline style={{ marginTop: "30px" }}>
                    Conocer mas
                  </NavLinks>
                </NavItem>
              </NavMenu>
            </TeamItem>
            <TeamItem>
              <TeamH3>Internal</TeamH3>
              <TeamP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum a dictum orci. Sed sed ultrices mauris, non rhoncus
                ligula. Cras tincidunt eget leo vitae fringilla.
              </TeamP>
              <NavMenu>
                <NavItem>
                <NavLinks noeffect whiteline style={{ marginTop: "30px" }}>
                    Conocer mas
                  </NavLinks>
                </NavItem>
              </NavMenu>
            </TeamItem>
            <TeamItem>
              <TeamH3>EMBEDDED</TeamH3>
              <TeamP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum a dictum orci. Sed sed ultrices mauris, non rhoncus
                ligula. Cras tincidunt eget leo vitae fringilla.
              </TeamP>
              <NavMenu>
                <NavItem>
                  <NavLinks noeffect whiteline style={{ marginTop: "30px" }}>
                    Conocer mas
                  </NavLinks>
                </NavItem>
              </NavMenu>
            </TeamItem>
            <TeamItem></TeamItem>
          </TeamItemsContainer>
        </TeamWrapper>
      </TeamContainer>
    </>
  );
};

export default Team;
