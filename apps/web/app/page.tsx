import CreateProduct from "./components/product/create-product";
import Products from "./components/product/products";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <h1>Create a New Product</h1>
      <CreateProduct />

      <h1>Product List</h1>
      <Products />
    </>
  );
}
