// src/app/api/products/route.ts
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const groupId = searchParams.get('groupId')
  
  if (!groupId) {
    return NextResponse.json(
      { error: 'Group ID is required' },
      { status: 400 }
    )
  }

  try {
    const res = await fetch(
      `https://linde-v2-api.wdtajans.com/api/Product/product-list?type=group&itemId=${groupId}`,
      { headers: { 'accept': 'text/plain' } }
    )

    if (!res.ok) {
      throw new Error(`API error! status: ${res.status}`)
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}