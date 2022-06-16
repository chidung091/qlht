import { Form, Button } from "react-bootstrap";

export default function Login() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <div className="container"> 
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Địa chỉ email</Form.Label>
    <Form.Control type="email" placeholder="Điền email" />
    <Form.Text className="text-muted">
      Thông tin của bạn sẽ được chúng tôi bảo mật.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Mật khẩu</Form.Label>
    <Form.Control type="password" placeholder="Điền mật khẩu" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Lưu thông tin đăng nhập" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Đăng nhập
  </Button>
</Form>
        </div>
      </main>
    );
  }