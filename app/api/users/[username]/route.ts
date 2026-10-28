import { NextResponse } from 'next/server';

type Context = {
  params: Promise<{ username: string }>;
};

export async function GET(request: Request, context: Context) {
  const { username } = await context.params;
  
  // Parse the query parameters from the request URL
  const { searchParams } = new URL(request.url);
  const role = searchParams.get('role') || 'guest'; // default fallback
  const status = searchParams.get('status');

  return NextResponse.json({ 
    username,
    role,
    status
  });
}
