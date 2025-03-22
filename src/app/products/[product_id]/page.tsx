type ProductDetailsProps = {
  params: Promise<{ product_id: string }>
}

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { product_id } = await params

  return <h1>Product {product_id}</h1>
}
