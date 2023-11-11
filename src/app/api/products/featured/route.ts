import { products } from '../data.json'

export async function GET() {
  const featureProducts = products.filter((product) => {
    return product.featured
  })

  return Response.json(featureProducts)
}
