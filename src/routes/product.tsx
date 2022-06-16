import { Button, Table } from "react-bootstrap";

export default function Product() {
  const products = [
    {
      name:"Liềng răng",
      count:5,
      price:20000000,
    },
    {
      name:"Liềng răng",
      count:5,
      price:20000000,
    },
    {
      name:"Liềng răng",
      count:5,
      price:20000000,
    },
    {
      name:"Liềng răng",
      count:5,
      price:20000000,
    }
  ]
    return (
      <main style={{ padding: "1rem 0" }}>  
  <div className="container">
  <p>Danh sách sản phẩm</p>
        <div >
          <Button>Thêm sản phẩm</Button>
        </div>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Số thứ tự</th>
      <th>Tên sản phẩm</th>
      <th>Số Lượng</th>
      <th>Giá tiền</th>
      <th>Tác vụ</th>
    </tr>
  </thead>
  <tbody>
    {products.map((product,index) => (
      <tr>
        <td>{index + 1}</td>
        <td>{product.name}</td>
        <td>{product.count}</td>
        <td>{product.price}</td>
        <td>
          <Button>Sửa</Button>
          <Button variant="Secondary">Xoá</Button>
        </td>
      </tr>
    ))}
  </tbody>
</Table>
</div>
      </main>
    );
  }