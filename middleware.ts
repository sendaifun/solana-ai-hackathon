// middleware.ts (in root directory)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host')
  
  // If someone visits solanaaiindex, show them the dashboard
  if (hostname?.includes('solanaaiindex')) {
    const url = request.nextUrl.clone()
    // Redirect all traffic to the dashboard route
    if (!url.pathname.startsWith('/dashboard')) {
      url.pathname = `/dashboard${url.pathname}`
    }
    return NextResponse.rewrite(url)
  }

  // For the main domain (solanaaihackaton.com), continue normally
  return NextResponse.next()
}
