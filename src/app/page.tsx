import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="h1">Home</div>
      <Link
        href="/example"
        className="p-2 bg-secondary-400 rounded-md text-grayscale-0 w-fit"
      >
        Go to example
      </Link>
    </div>
  );
}
