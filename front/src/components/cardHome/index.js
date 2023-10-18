import React from "react";
import "./styles.css";
import { Card, Button } from "antd";
import Divider from "components/divider";

export default function CardHome({ title, description, image, onClick }) {
  return (
    <Card className="cardHome">
      <h1>{title}</h1>
      <Divider />
      {image}
      <span>{description}</span>
      <Button onClick={onClick}>saiba mais</Button>
    </Card>
  );
}
