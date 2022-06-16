import { Badge, Button, Col, Form, Row, Stack } from "react-bootstrap";
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
            <Stack direction="vertical" gap={3}>
  <Form.Control className="me-auto" placeholder="Nhập sản phẩm cần tìm..." />
  <Button variant="secondary">Tìm kiếm</Button>
</Stack>
                <Row className="my-5">
                  <h1>Chính sách cửa hàng</h1>
                  <Col>
                  <p className="pb-2">
                  <Badge bg="secondary">New</Badge> Tích điểm trên mỗi giao dịch
                  </p>
                  <p className="pb-2">
                  <Badge bg="secondary">New</Badge> Sản phẩm được bán là sản phẩm chính hãng có nguồn gốc xuất sứ rõ ràng 
                  </p>
                  <p className="pb-2">
                  <Badge bg="secondary">New</Badge> Giá thành tốt nhất trong các hệ thống
                  </p>
                  </Col>
                </Row>
            </Col>
        </Row>
        </div>
      </main>
    );
  }