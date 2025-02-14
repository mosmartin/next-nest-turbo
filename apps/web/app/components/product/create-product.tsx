import createProduct from "../../actions/product/create-product";

export default function CreateProduct() {
  return (
    <div>
      <form action={createProduct}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" />
        </div>
        <div>
          <button type="submit">Create Product</button>
        </div>
      </form>
    </div>
  );
}
