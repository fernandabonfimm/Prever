import React from "react";
import { Layout, Button, Dropdown, SubMenu, Menu } from "antd";
import Logo from "../../assets/img/logoprever.png";
import { AiFillInstagram, AiFillYoutube, AiFillFacebook } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import "./styles.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function Header() {
  const { Header } = Layout;
  const menuBenefits = (
    <Menu className="menuHeader">
      <Menu.Item key="1" className="itemsMenuHeader">
        Planos
      </Menu.Item>
      <Menu.Item key="2" className="itemsMenuHeader">
        Coroas
      </Menu.Item>
    </Menu>
  );

  const menuStructure = (
    <Menu className="menuHeader">
      <Menu.Item key="1" className="itemsMenuHeader">
        Crematório
      </Menu.Item>
      <Menu.Item key="2" className="itemsMenuHeader">
        Crematório PET
      </Menu.Item>
      <Menu.Item key="3" className="itemsMenuHeader">
        Memorial
      </Menu.Item>
    </Menu>
  );

  const menuCities = (
    <Menu className="menuHeader">
      <Menu.Item key="1" className="itemsMenuHeader">
        Ribeirão Preto
      </Menu.Item>
      <Menu.Item key="2" className="itemsMenuHeader">
        Pitangueiras
      </Menu.Item>
      <Menu.Item key="3" className="itemsMenuHeader">
        Jardinópolis
      </Menu.Item>
      <Menu.Item key="4" className="itemsMenuHeader">
        Serrana
      </Menu.Item>
      <Menu.Item key="5" className="itemsMenuHeader">
        Cajuru
      </Menu.Item>
    </Menu>
  );

  const [collapsed, setCollapsed] = React.useState(false);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <div className="headerMobile">
        <Header className="divHeader">
          <img src={Logo} alt="Logo" className="logoPreverHeader" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Products</Menu.Item>
            <Menu.SubMenu key="sub1" title="User">
              <Menu.Item key="3">Profile</Menu.Item>
              <Menu.Item key="4">Dashboard</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="5">Settings</Menu.Item>
          </Menu>
        </Header>
      </div>
      <div className="headerDesktop">
        <Header className="divHeader">
          <img src={Logo} alt="Logo" className="logoPreverHeader" />
          <div className="divButtonsHeader">
            <button className="btnSocialMediaHeader">
              <AiFillInstagram />
            </button>
            <button className="btnSocialMediaHeader">
              <AiFillYoutube />
            </button>
            <button className="btnSocialMediaHeader">
              <AiFillFacebook />
            </button>
            <button className="btnUserHeader">
              <FaUserAlt />
            </button>
          </div>
        </Header>
        <Header className="divMenuHeader">
          <Button className="btnMenuHeader">Ínicio</Button>
          <Button className="btnMenuHeader">ASSISTÊNCIA FAMILIAR</Button>
          <Dropdown overlay={menuCities} placement="bottomCenter">
            <Button className="btnMenuHeader">
              Unidades
              <MdKeyboardArrowDown />
            </Button>
          </Dropdown>
          <Dropdown overlay={menuBenefits} placement="bottomCenter">
            <Button className="btnMenuHeader">
              BENEFÍCIOS <MdKeyboardArrowDown />
            </Button>
          </Dropdown>
          <Dropdown overlay={menuStructure} placement="bottomCenter">
            <Button className="btnMenuHeader">
              ESTRUTURAS
              <MdKeyboardArrowDown />
            </Button>
          </Dropdown>
          <Button className="btnMenuHeader">FALE CONOSCO</Button>
          <button className="btnPhoneHeader">
            <BsFillTelephoneFill className="iconPhone" />
            <span className="title24h">24h</span>
          </button>
        </Header>
      </div>
    </>
  );
}
