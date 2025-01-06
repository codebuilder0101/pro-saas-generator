import localFont from 'next/font/local'

import "./globals.css";

const myFont = localFont({ src: '../../public/Satoshi.ttf' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        {children}
      </body>
    </html>
  );
}
