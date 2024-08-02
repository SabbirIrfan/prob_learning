import { cookies } from "next/headers";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

export default async function ProductsPage() {
  const productsResponse = await fetch("http://localhost:3001/products", {
    next: { revalidate: 10 },
  });
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log({ theme });
  const detailsResponse = await fetch("http://localhost:3001/products/1",{ cache:"no-store"});
  const details = await detailsResponse.json();
  const products = await productsResponse.json();
  console.log({ details });
  return (
    <ul className="space-y-4 p-4">
      {products.map((product: Product) => (
        <Link key={product.id} href={`products/${product.id}`}>

        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
          <p>{details.title}</p>
        </li>
        </Link>
      ))}
    </ul>
  );
}