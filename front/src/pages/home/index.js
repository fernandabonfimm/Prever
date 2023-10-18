import React from "react";
import Base from "../../components/base";
import "./styles.css";
import { Button } from "antd";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Home() {
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
    </Base>
  );
}
