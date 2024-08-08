export default async function Layout(props: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  const productsResponse = await fetch("http://localhost:3001/products");
  const products = await productsResponse.json();
  console.log({ products });
  return <>
  {props.modal}
  {props.children}
  </>;
}
