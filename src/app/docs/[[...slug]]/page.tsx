type ProductDetailsProps = {
  params: Promise<{ slug: Array<string> }>
}

export default async function Docs({ params }: ProductDetailsProps) {
  const { slug } = await params

  if (slug?.length === 2) {
    const [feature, concept] = slug

    return (
      <h1>
        Viewing Docs for feature {feature} and concept {concept}{' '}
      </h1>
    )
  } else if (slug?.length === 1) {
    const [feature] = slug

    return <h1>Viewing Docs for feature {feature}</h1>
  }

  return <h1>Docs Home Page</h1>
}
