import React from 'react';
import '@/app/globals.css';
import Providers from './providers';

// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
