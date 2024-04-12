import { Shell } from '@savantly/nexus-ui-components';
import { Poppins } from 'next/font/google';
import * as React from 'react';

import '@/styles/globals.css';

import AppFooter from '@/components/layout/app-footer';

const inter = Poppins({ subsets: ['latin'], weight: '400' });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Shell
          header={<header>Header</header>}
          footer={<AppFooter />}
          sidebar={<div>Sidebar</div>}
          rightSidebar={<div>Right Sidebar</div>}
        >
          {children}
        </Shell>
      </body>
    </html>
  );
}
