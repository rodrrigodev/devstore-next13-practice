import { z } from 'zod'
import data from '../data.json'
import { NextResponse } from 'next/server'

export async function GET(
  _: Request,
  { params }: { params: { slug: string } },
) {
  const slug = z.string().parse(params.slug)
  const product = data.products.find((product) => {
    return product.slug === slug
  })

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 400 })
  }

  return Response.json(product)
}
