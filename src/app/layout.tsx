import type { Metadata } from 'next';
import RootLayoutProvider from '@/shared/components/provider/RootLayoutProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next-App',
  description: 'Next15 보일러플레이트',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RootLayoutProvider>{children}</RootLayoutProvider>
      </body>
    </html>
  );
}
