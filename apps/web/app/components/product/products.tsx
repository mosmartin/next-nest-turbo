import { Product } from "@repo/types";

export default async function Products() {
const response = await fetch(`${process.env.API_URL}/products`, {
    next: { tags: ["products"] },
});
const { products = [] } = await response.json() as { products: Product[] };

if (!products.length) {
    return <div>No products available</div>;
}

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {product.name} - {product.price}
        </div>
      ))}
    </div>
  );
}
