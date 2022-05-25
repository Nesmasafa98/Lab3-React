import { Link } from "react-router-dom";
let Products = (props) => {
  let products = props.ProductData.map((product, i) => {
    return (
      <tr key={i}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
        <td>{product.productDesc}</td>
        <td>
          <img
            src={`images/${product.productImg}`}
            style={{
              width: 50
            }}
          />
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => props.RemoveHandlerRef(i)}>Remove</button>
        </td>
        <td>
          <button className="btn btn-success" onClick={() => {props.DetailsHandlerRef(i); props.history.push("/Details")}}>Details</button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className='product-title'>
        <h3 className='h-3 my-3 title'>Products</h3>
        <Link to="/Add" className="btn btn-primary">Add Product</Link>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Qty</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          {products}
        </tbody>
      </table>
    </>

  )
}

export default Products