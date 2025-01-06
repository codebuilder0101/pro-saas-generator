import localFont from 'next/font/local'

import "@/styles/globals.css";

const myFont = localFont({ src: '../../public/Satoshi.ttf' })

type Props = {
  children: React.ReactNode;
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        {children}
      </body>
    </html>
  );
}
