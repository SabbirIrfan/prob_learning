import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // if(request.nextUrl.pathname === '/comments'){
    //   // return NextResponse.redirect(new URL('/routes/comments', request.url))
    //   return NextResponse.rewrite(new URL('/routes/comments', request.url))
      
    // }
  // return NextResponse.redirect(new URL('/', request.url))
}
 
// export const config = {
//   matcher: "/about",
// }