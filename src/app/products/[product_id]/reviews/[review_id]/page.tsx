type ProductReviewProps = {
  params: Promise<{
    product_id: string
    review_id: string
  }>
}

export default async function ProductReview({ params }: ProductReviewProps) {
  const { product_id, review_id } = await params

  return (
    <h1>
      Review {review_id} for Product {product_id}
    </h1>
  )
}
