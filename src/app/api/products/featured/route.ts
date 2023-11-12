import data from '../data.json'

export async function GET() {
  const featureProducts = data.products.filter((product) => {
    return product.featured
  })

  return Response.json(featureProducts)
}
