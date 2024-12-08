import { NextResponse } from 'next/server';

export async function GET() {
  const authURL = `${process.env.LLAMA_API_URL}auth/token`;
  const authBody = {
    username: `${process.env.LLAMA_USER_NAME}`,
    password: `${process.env.LLAMA_PASSWORD}`,
  };

  const param = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(authBody),
  };

  const response = await fetch(authURL, param);
  const authData = await response.json();

  return NextResponse.json(authData);
}

export const dynamic = 'force-dynamic';
