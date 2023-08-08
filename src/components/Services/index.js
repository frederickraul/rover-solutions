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
  ServiceContainer,
  ServiceWrapper,
  TechTextWrapper,
  TechP,
  ServiceH1,
  ServiceH3,
  ServiceRectContainer,
  ServiceRec,
  ServiceItemsContainer,
  ServiceItem,
} from "./ServiceElements";

const Services = () => {
  return (
    <>
      <ServiceContainer>
        <ServiceWrapper>
          <ServiceH1 id="services">
            Nuestros Servicios
            <ServiceRectContainer>
            <ServiceRec width='20px'/>
            <ServiceRec width='40px'/>
            <ServiceRec width='100px'/>
            </ServiceRectContainer>
          </ServiceH1>
          <TechTextWrapper>
            <TechP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a dictum orci. Sed sed ultrices mauris, non rhoncus ligula. Cras tincidunt eget leo vitae fringilla. Fusce efficitur,enim sit amet sagittis maximus, velit justo semper turpis, ac mollis neque justo id leo.Suspendisse volutpat felis eu gravida ullamcorper.
            </TechP>
          </TechTextWrapper>
          <ServiceItemsContainer>
              <ServiceItem>
                <ServiceH3>
                  Software Empresarial
                </ServiceH3>
                </ServiceItem>
              <ServiceItem>
                <ServiceH3>
                  Aplicaciones Móviles
                </ServiceH3>
                </ServiceItem>
              <ServiceItem>
                <ServiceH3>
                  Soluciones de Desarrollo
                </ServiceH3>
                </ServiceItem>
              <ServiceItem>
                <ServiceH3>
                  Redes y cámaras 
                </ServiceH3>
                </ServiceItem>
          </ServiceItemsContainer>
        </ServiceWrapper>
      </ServiceContainer>
    </>
  );
};

export default Services;
