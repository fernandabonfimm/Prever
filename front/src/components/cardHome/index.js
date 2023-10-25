import React from "react";
import "./styles.css";
import { Card, Button } from "antd";
import Divider from "components/divider";

export default function CardHome({ title, description, image, onClick }) {
  return (
    <Card className="cardHome">
      <h1>{title}</h1>
      <Divider />
      <div className="divImgCardHome">{image}</div>
      <span>{description}</span>
      <div className="divBtnCardHome">
        <Button onClick={onClick}>saiba mais</Button>
      </div>
    </Card>
  );
}
