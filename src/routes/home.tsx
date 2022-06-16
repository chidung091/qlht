import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap"
export default function Home() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <div className="container"> 
        <Row className="px-4 my-5">
            <Col sm={7}>
                <Image 
                src="https://image.thanhnien.vn/w1024/Uploaded/2022/puqgfdmzs-co/2022_03_18/pharmacity-1-9330.jpg" 
                fluid
                rounded
                ></Image>
            </Col>
            <Col sm={5}>
                <h1>Bạn có muốn chửi ai chưa?</h1>
                <Row className="m-auto">
                    <Col><Button variant="secondary">Địt mẹ con Hảo</Button></Col>
                    <Col><Button variant="primary">Địt mẹ con Hạnh</Button></Col>
                </Row>
            </Col>
        </Row>
        </div>
      </main>
    );
  }