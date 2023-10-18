import React from "react";
import Base from "../../components/base";
import "./styles.css";
import { Button } from "antd";
import { BsFillTelephoneFill } from "react-icons/bs";
import CardHome from "components/cardHome";
import Beneficios from "../../assets/img/benificios.png";
import Crematorio from "../../assets/img/crematorio.png";
import CremPet from "../../assets/img/crempet.png";
import Memorial from "../../assets/img/memorial.png";

export default function Home() {
  const arrCards = [
    {
      title: "MEMORIAIS E ESTRUTURAS",
      description:
        "A empresa conta com dois velórios próprios em Ribeirão Preto: o Memorial Campos Elíseos, ao lado do Cemitério da Saudade, e o Memorial Bom Pastor.",
      onClick: () => {},
      image: (
        <img src={Beneficios} alt="logosCardHome" className="imgLogosCard" />
      ),
    },
    {
      title: "CREMATÓRIO METROPOLITANO",
      description:
        "Construído às margens da Rodovia Cândido Portinari, Km 321, o crematório oferece serviços com atendimento diferenciado e de qualidade.",
      onClick: () => {},
      image: (
        <img src={Crematorio} alt="logosCardHome" className="imgLogosCard" />
      ),
    },
    {
      title: "CREMATÓRIO PET",
      description:
        "Em funcionamento desde o ano de 2017 para complementar o plano de assistência funerária da empresa, estendendo o serviço de cremação também para os Pets.",
      onClick: () => {},
      image: <img src={CremPet} alt="logosCardHome" className="imgLogosCard" />,
    },
    {
      title: "BENEFÍCIOS PARA ASSOCIADOS",
      description:
        "São mais de 700 empresas e profissionais disponíveis aos nossos associados.",
      onClick: () => {},
      image: (
        <img src={Memorial} alt="logosCardHome" className="imgLogosCard" />
      ),
    },
  ];
  return (
    <Base>
      <div className="bannerHome">
        <div className="divitemsBannerHome">
          <h1 className="titleBannerHome">
            SUA FAMILIA MERECE <br /> SER CUIDADA
          </h1>
          <Button className="buttonBannerHome">
            <BsFillTelephoneFill />
            Atendimento 24H
          </Button>
        </div>
      </div>
      <div className="divCardsHome">
        {arrCards.map((card) => (
          <CardHome
            title={card.title}
            description={card.description}
            image={card.image}
            onClick={card.onClick}
          />
        ))}
      </div>
    </Base>
  );
}
