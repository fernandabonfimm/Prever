import React from "react";
import { Layout } from "antd";
import LogoUnivPrev from "../../assets/img/grupouniv.png";
import LogoCrematorio from "../../assets/img/logocrematorio.png";
import LogoCrematorioPet from "../../assets/img/logocrematoriopet.png";
import LogoFuneraria from "../../assets/img/logofuneraria.png";
import LogoPreverCE from "../../assets/img/logopreverce.png";
import LogoPrevFlores from "../../assets/img/logoprevflores.png";
import Divider from "../divider";
import "./styles.css";

export default function Footer() {
  const { Footer } = Layout;
  return (
    <>
      <Footer className="footer">
        <div className="divLogosFooter">
          <img src={LogoCrematorio} alt="Logo" className="logoFooter" />
          <img src={LogoCrematorioPet} alt="Logo" className="logoFooter" />
          <img src={LogoFuneraria} alt="Logo" className="logoFooter" />
          <img src={LogoPreverCE} alt="Logo" className="logoFooter" />
          <img src={LogoPrevFlores} alt="Logo" className="logoFooter" />
        </div>
        <div className="divLogosFooter">
          <img src={LogoUnivPrev} alt="Logo" className="logoFooterUP" />
          <img src={LogoUnivPrev} alt="Logo" className="logoFooterUP" />
          <img src={LogoUnivPrev} alt="Logo" className="logoFooterUP" />
          <img src={LogoUnivPrev} alt="Logo" className="logoFooterUP" />
          <img src={LogoUnivPrev} alt="Logo" className="logoFooterUP" />
        </div>
      </Footer>
      <Footer className="divCopyright">
        <Divider />
        <span className="spanCopyright">
          © COPYRIGHT 2013 - 2023 PREVER CAMPOS ELÍSEOS ASSISTÊNCIA FAMILIAR |
          POLÍTICA DE PRIVACIDADE
        </span>
      </Footer>
    </>
  );
}
