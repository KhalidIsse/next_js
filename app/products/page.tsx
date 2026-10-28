interface Product {
  id: number;
  title: string;
}

export default async function ProductsPage() {
  // Fetching data directly on the server
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  
  // Slicing the first 5 products
  const products: Product[] = data.products.slice(0, 5);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Top 5 Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}
